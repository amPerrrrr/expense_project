import React from "react";
import CollapseComp from "../../../../Components/CollapseComp";
import OverviewRequest from "./OverviewRequest";
import Requisition from "./Requisition";
import OneTimeVender from "./OneTimeVender";
import MessageInterface from "./MessageInterface";

export default function CreateNewRequestComp() {
  return (
    <div className="div-form-border-components">
      <div>
        <OverviewRequest />
        <br />
        <CollapseComp title="Description">
          <div>Description</div>
        </CollapseComp>
        <hr />
        <CollapseComp title="Requisition">
          <Requisition />
        </CollapseComp>
        <hr />
        <CollapseComp title="One time vender">
          <OneTimeVender />
        </CollapseComp>
        <hr />
        <CollapseComp title="Message interface">
          <MessageInterface />
        </CollapseComp>
        <hr />
        <CollapseComp title="Document">
          <div>Document</div>
        </CollapseComp>
        <hr />
      </div>
    </div>
  );
}
