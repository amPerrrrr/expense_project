import General from "./General";
import Requisition from "./Requisition";
import OneTimeVender from "./OneTimeVender";
import Description from "./Description";
import MessageInterface from "./MessageInterface";
import Document from "./Document";
import Summary from "./Summary";
import StepComponents from '../../../../../Components/StepComponents'

export default function StepExpenseComp({ current, setCurrent }) {
  const headerStep = [
    {
      title : "General"
    },
    {
      title : "Requisition"
    },
    {
      title : "One time vender"
    },
    {
      title : "Description"
    },
    {
      title : "Message Interface"
    },
    {
      title : "Document"
    },
    {
      title : "Summary"
    }
  ]

  function renderStepComponent(current) {
    switch (current) {
      case 0:
        return <General />;
        break;
      case 1:
        return <Requisition />;
        break;
      case 2:
        return <OneTimeVender />;
        break;
      case 3:
        return <Description />;
        break;
      case 4:
        return <MessageInterface />;
        break;
      case 5:
        return <Document />;
        break;
      case 6:
        return <Summary />;
        break;
      default:
        break;
    }
  }
  
  return (
    <div>
      <StepComponents current={current} headerStep={headerStep} />
      <div>{renderStepComponent(current)}</div>
    </div>
  );
}
