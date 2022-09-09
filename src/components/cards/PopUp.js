import { useState } from "react";
import { useContext } from "react";
import { UserDataContext } from "../../context/getData";
import { editData } from "../../context/getData";

function PopUp({value}) {
  const context = useContext(UserDataContext);
//  console.log(value.id);
   const [newData, setNewData] = useState();
  return (
    <div className="popup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
           editData(newData, context.dispatch , value.id);
           console.log(context.state.userData)
        }}
      >
        <input
          type="text"
          placeholder="New Name"
          onChange={(e) => {
            setNewData(e.target.value);
          }}
        />
        <button>OK</button>
      </form>
    </div>
  );
}

export default PopUp;
