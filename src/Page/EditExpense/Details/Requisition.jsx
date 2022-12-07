import React from "react";
import DisplayHeaderAndValueText from "../../../Components/DisplayHeaderAndValueText";

export default function Requisition() {
  const styleValue = { color: "#404040", marginRight: "5px" };
  const styleHeader = { marginLeft: "5px" , color:'#b4b4b4' };
  return (
    <div>
      <DisplayHeaderAndValueText
        header="Contact number"
        value="00000000"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="PO number"
        value="A0000"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Vender name"
        value="Vender name01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Trading partner"
        value="Trading partner01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Pay to third party"
        value="AAAAAA"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Payment required date"
        value="01/01/2565"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
    </div>
  );
}
