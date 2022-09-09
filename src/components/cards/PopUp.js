import { useState } from "react";
import { useContext } from "react";
import { UserDataContext } from "../../context/getData";
import { editData } from "../../context/getData";
import './PopUp.css'

function PopUp({value , setpopup}) {
  const context = useContext(UserDataContext);
//  console.log(value.id);
   const [newName, setNewName] = useState();
   const [newSurName , setNewSurName] = useState();
  return (
    <div className="popup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
           editData(newName, newSurName ,  context.dispatch , value.id);
           console.log(context.state.userData);
           setpopup(false)
        }}
      >
        <input
          type="text"
          placeholder="New Name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="New SurName"
          onChange={(e) => {
            setNewSurName(e.target.value);
          }}
        />
        <button className="okButton">OK</button>
      </form>
      <button className="xForClose" onClick={() =>setpopup(false)}> X </button>
    </div>
  );
}

export default PopUp;
