import { useState } from "react";
import { useContext } from "react";
import { UserDataContext } from "../../context/getData";
import { editData } from "../../context/getData";
import './PopUp.css'

function PopUp({value , setpopup}) {
  const context = useContext(UserDataContext);
//  console.log(value.id);
   const [newData, setNewData] = useState();
  return (
    <div className="popup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
           editData(newData, context.dispatch , value.id);
           console.log(context.state.userData);
           setpopup(false)
        }}
      >
        <input
          type="text"
          placeholder="New Name"
          onChange={(e) => {
            setNewData(e.target.value);
          }}
        />
        <button className="okButton">OK</button>
      </form>
      <button className="xForClose" onClick={() => setpopup(false)}> X </button>
    </div>
  );
}

export default PopUp;
