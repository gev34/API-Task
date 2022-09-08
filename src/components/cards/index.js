import React from "react";
import "./style.css";
import { deleteData} from "../../context/getData";
import { UserDataContext } from "../../context/getData";
import { useContext } from "react";


const CreateCard = () => {
  const context = useContext(UserDataContext);

  return (
    <div className="cardWrapper">
      {context.state.userData &&
        context.state.userData.map((value, index) => (
          <div className="card" key={index + "card"}>
            <div className="imageWrapper">
              <img src={value.avatar} alt="pic" className="brandPic"/>
            </div>
            <div className="info">
              <h3>{value.title}</h3>
            </div>
            <div className="buttons">
              <button className="deleteButton" onClick={() => {

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
