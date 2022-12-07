import { CreateNewExpenseContext } from "../../Components/Context";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useContext } from "react";
const { Step } = Steps;

export default function StepComp() {
  const { stepForm } = useContext(CreateNewExpenseContext);

  function checkStatusStep(activeStep, titleStep) {
    switch (activeStep) {
      case "Project":
        if (titleStep === "Project") {
          return "process";
        } else {
          return "wait";
        }
        break;
      case "Expense":
        if (titleStep === "Project") {
          return "finish";
        } else if (titleStep === "Expense") {
          return "process";
        } else {
          return "wait";
        }
        break;
      case "Request":
        if (titleStep === "Request") {
          return "process";
        } else {
          return "finish";
        }
        break;
      default:
        break;
    }
  }

  function renderIconFromStatus(activeStep, titleStep) {
    switch (activeStep) {
      case "Project":
        if (titleStep === "Project") {
          return <LoadingOutlined />;
        } else {
          return <MessageOutlined />;
        }
        break;
      case "Expense":
        if (titleStep === "Project") {
          return <CheckCircleOutlined />;
        } else if (titleStep === "Expense") {
          return <LoadingOutlined />;
        } else {
          return <MessageOutlined />;
        }
        break;
      case "Request":
        if (titleStep === "Request") {
          return <LoadingOutlined />;
        } else {
          return <CheckCircleOutlined />;
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Steps>
        <Step
          status={checkStatusStep(stepForm, "Project")}
          title="Project"
          icon={renderIconFromStatus(stepForm, "Project")}
        />
        <Step
          status={checkStatusStep(stepForm, "Expense")}
          title="Expense"
          icon={renderIconFromStatus(stepForm, "Expense")}
        />
        <Step
          status={checkStatusStep(stepForm, "Request")}
          title="Request"
          icon={renderIconFromStatus(stepForm, "Request")}
        />
      </Steps>
    </div>
  );
}
