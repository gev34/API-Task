import React from "react";
import "./style.css";
import { deleteData, postData } from "../../context/getData";
import { useReducer } from "react";
import { UserDataContext } from "../../context/getData";
import { useContext } from "react";

function reducer(state, action) {
  if (action.type === "delete") {
    return [...state.filter((obj) => obj.id !== action.payload.id)];
  }
}

// const [state, dispatch] = useReducer(reducer, )

const CreateCard = () => {
  const context = useContext(UserDataContext);
  console.log(context.state.userData)
  return (
    <div className="cardWrapper">
      {context.state.userData &&
        context.state.userData.map((value, index) => (
          <div className="card" key={index + "card"}>
            <div className="imageWrapper">
              <img src={value.avatar} alt="photo" className="brandPic" />
            </div>
            <div className="info">
              <h3>{value.title}</h3>
            </div>
            <div className="buttons">
              <button className="deleteButton" onClick={() => {
                console.log(value);
                value && deleteData(value.id, context.dispatch)
              }}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CreateCard;
