import React from "react";
import DisplayHeaderAndValueText from "../../../../Components/DisplayHeaderAndValueText";

export default function MessageInterface() {
  const styleValue = { color: "#404040", marginRight: "5px" };
  const styleHeader = { marginLeft: "5px", color: "#b4b4b4" };

  return (
    <div>
      <DisplayHeaderAndValueText
        header="PR document SAP"
        value="PR document SAP01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Document year SAP"
        value="Document year SAP01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="FI Document SAP"
        value="FI Document SAP01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Message text SAP"
        value="Message text SAP01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Message type SAP"
        value="Message type SAP01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
    </div>
  );
}
