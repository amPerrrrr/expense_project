import React from "react";
import BtnCreateSmall from "../../../Components/BtnCreateSmall";
import TableProjectDocument from './TableProjectDocument';

export default function Document() {
  return (
    <div>
      <div className="div-form-border-components div-form">
        <div className="border-detail-budget">

          <div className="display-flex mt-10px">
            <p className="txt-header-input">Project document</p>
            <BtnCreateSmall
              styleBtn={{ marginLeft: "20px", marginTop: "-10px" }}
              onClick={() => console.log("Project document")}
            />
          </div>
          <TableProjectDocument />
        </div>
      </div>
    </div>
  );
}
