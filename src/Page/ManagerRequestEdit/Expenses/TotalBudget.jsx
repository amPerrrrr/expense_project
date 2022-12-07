import React from "react";
import TextHasDotTitleValue from "../../../Components/TextHasDotTitleValue";

export default function TotalBudget() {
  return (
    <div>
      <div className="float-right div-total-budget-overall-edit-project">
        <TextHasDotTitleValue
          styleDiv={{ marginTop: "10px" }}
          color="#682A8F"
          header="Total expense"
          value="20,000"
        />
        <TextHasDotTitleValue
          color="#FCB924"
          header="Available project budget"
          value="8,000"
        />
        <TextHasDotTitleValue 
          color="#FF8D8D" 
          header="Over budget" 
          value="0" 
        />
      </div>
      <div className="clear-both" />
    </div>
  );
}
