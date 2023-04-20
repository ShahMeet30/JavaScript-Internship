import React, { useState } from "react";
import "./form.css";
import Eform from "./eform";

const Newform = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const chngeEform = (dataEform) => {
    const eventlist2 = { ...dataEform, id: Math.random().toString() };

    props.onsaveform(eventlist2);
    setisEditing(false);
  };
  const isEditingHandler = () => {
    setisEditing(true);
  };
  const cancelHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-form">
      {!isEditing && <button onClick={isEditingHandler}>Add More</button>}
      {isEditing && <Eform oncancel={cancelHandler} onsaveEform={chngeEform} />}
    </div>
  );
};
export default Newform;
