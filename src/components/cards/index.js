import React, { useState } from "react";
import "./style.css";
import { deleteData} from "../../context/getData";
import { UserDataContext } from "../../context/getData";
import { useContext } from "react";
import PopUp from "./PopUp";


const CreateCard = () => {
  const context = useContext(UserDataContext);

  const [popUp , SetPopUp] = useState(false)
  const [clickValue , setClickValue] = useState();
 // console.log(context.state)
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
               deleteData(value.id, context.dispatch)
              }}>
                Delete
              </button>
              <button onClick={() =>{
              //  console.log(value)
                  SetPopUp(true);
                  setClickValue(value);
                //  console.log(clickValue);
              }}>EDIT</button>
              {popUp && clickValue && (<PopUp value = {clickValue} />)}         
            </div>
          </div>
        ))}
    </div>
  );
};


export default CreateCard;
