import axios from "axios";
import { baseUrl } from "../api";
import React, {useReducer} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        loading: true,
        userData: [],
      };
    case "GET_USER_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case "DELETE_USER":

      return {
        ...state,
        loading: false,
        userData: [
          ...state.userData.filter((user) => user.id !== action.id),
        ],
      };
      case "EDIT_USER":
        return {
          ...state,
          loading:false,
          userData:[
            ...state.userData.filter((user) => {
              if(user.id === action.id) {
                user.first_name = action.name
              }
              return state
            })
          ]
        }

    default:
      return { ...state };
  }


}
const UserDataContext = React.createContext();

export const getData = (dispatch) => {
  dispatch({ type: "GET_USER_DATA" });
  axios.get(baseUrl).then((res) => {
    dispatch({
      type: "GET_USER_DATA_SUCCESS",
      payload: res.data.data,
    });
  });
};

export const deleteData = (id, dispatch) => {
  dispatch({
    type: "DELETE_USER",
    id: id,
  });
};
export const editData = (name , dispatch , id) =>{
  dispatch({
    type:"EDIT_USER",
    name:name,
    id:id
  })
 // console.log(id)
}
const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    userData: [],
  });
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, UserDataContext };
