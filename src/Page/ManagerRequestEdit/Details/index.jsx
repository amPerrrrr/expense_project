import React from "react";
import { defaultUser } from "../../../Assets/Image";
import RenderAvatarOnly from "../../../Components/RenderAvatarOnly";
import DisplayHeaderAndValueText from "../../../Components/DisplayHeaderAndValueText";
import StepIconFlagDate from "../../../Components/StepIconFlagDate";

export default function Details() {
  return (
    <div className="div-form">
      <div className="div-form-border-components">
        <div className="txt-center">
          <RenderAvatarOnly size={70} defaultImage={defaultUser} />
          <p className="txt-name-detail-project">Panudet Panumas</p>
          <p className="txt-description-detail-project">Submitter</p>

          <p className="txt-status-project-detail-project color-green">
            AVAILABLE
          </p>
          <p className="txt-date-project-detail-project">01/01/2565</p>
          <p className="txt-create-date-project-detail-project">
            Create date{" "}
            <span className="color-icon-primary ml-10px">01/01/2565</span>
          </p>
        </div>
        <hr />

        <DisplayHeaderAndValueText header="Category" value="Yearly activity" />
        <DisplayHeaderAndValueText header="Business purpose" value="-" />
        
        <StepIconFlagDate 
        dateStart="01/01/2565"
        dateEnd="01/01/2565"
        />

      </div>
    </div>
  );
}
