import React from "react";

export default function StepDisplayContent({
  active,
  content,
  onChange,
}) {
  function checkActiveTab(active, index) {
    if (active === index) {
      return "active-tab-step";
    } else {
      return "";
    }
  }

  return (
    <div>
      <div className="div-step-display-content-overflow-y-auto-when-sm-display txt-center">
        <div className="display-inline-flex justify-content-center">
          <div
            className="display-inline-flex div-border-step-display-content"
            style={{ position: "relative" }}
          >
            {
              content.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`cursor-pointer tab-step ${checkActiveTab(
                      active,
                      index
                    )} `}
                    onClick={() => onChange(index, data)}
                  >
                    <div className="txt-center">{data.icon}</div>
                    <p className="txt-title-div-border-step-display-content">
                      {data.title}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>{content[active].content}</div>
    </div>
  );
}
