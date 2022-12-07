import React from "react";
import BtnCreateSmall from "../../../../Components/BtnCreateSmall";

export default function CreateNewProject({ disabled }) {
  return (
    <div>
      <BtnCreateSmall 
      disabled={disabled} 
      onClick={() => console.log('onClick')}
      classNameBtn="btn-create-new-project-in-new-expense"
      />
    </div>
  );
}
