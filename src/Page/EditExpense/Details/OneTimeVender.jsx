import React from "react";
import DisplayHeaderAndValueText from "../../../Components/DisplayHeaderAndValueText";

export default function OneTimeVender() {
  const styleValue = { color: "#404040", marginRight: "5px" };
  const styleHeader = { marginLeft: "5px", color: "#b4b4b4" };

  return (
    <div>
      <DisplayHeaderAndValueText
        header="Name"
        value="Name01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Address"
        value="Address01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="City"
        value="City01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Postal code"
        value="10110"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Country"
        value="Country01"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
      <DisplayHeaderAndValueText
        header="Tax ID"
        value="1234567890"
        styleValue={styleValue}
        styleHeader={styleHeader}
      />
    </div>
  );
}
