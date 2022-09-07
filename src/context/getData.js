import axios from "axios";
import { baseUrl } from "../api";
import React, { useReducer, useContext } from "react";

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
      console.log([
        ...state.userData.filter((user) => user.id !== action.id),
      ]);
      // userDatastate.userData.data.filter((user) => user.id !== action.id)
      console.log(state.userData.filter((user) => user.id !== action.id));
      return {
        ...state,
        loading: false,
        userData: [
          ...state.userData.filter((user) => user.id !== action.id),
        ],
      };
    default:
      return { ...state };
  }

  // if (action.type === "delete") {
  //   return [...state.filter((obj) => obj.id !== action.payload.id)];
  // }
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
  console.log(dispatch);
  dispatch({
    type: "DELETE_USER",
    id: id,
  });
};

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
