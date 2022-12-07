import { useContext , useState } from "react";
import { CreateNewProjectContext } from "../../../Components/Context";
import StepComponents from "../../../Components/StepComponents";
import General from "./General";
import Document from "./Document";
import Budget from "./Budget";
import ButtonStep from "./ButtonStep";

export default function Form() {
  const { currentProjectStep } = useContext(CreateNewProjectContext);

  const headerStep = [
    {
      title: "General",
    },
    {
      title: "Document",
    },
    {
      title: "Budget",
    },
  ];

  function renderStepComponent(current) {
    switch (current) {
      case 0:
        return <General />;
        break;
      case 1:
        return <Document />;
        break;
      case 2:
        return <Budget />;
        break;
      default:
        break;
    }
  }

  return (
    <div className="div-form-border-components">
      <StepComponents current={currentProjectStep} headerStep={headerStep} />
      <div>{renderStepComponent(currentProjectStep)}</div>
      <ButtonStep />
    </div>
  );
}