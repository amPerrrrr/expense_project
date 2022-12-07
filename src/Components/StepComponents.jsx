import { Steps } from "antd";
import getWindowDimensions from "./UseWindowDimensions";

const { Step } = Steps;

export default function StepComponents({ current, headerStep }) {
  const { width, height } = getWindowDimensions();

  function checkResponsiveStep(width) {
    if (width <= 780) {
      return "ant-steps-vertical";
    } else {
      return "ant-steps-horizontal";
    }
  }

  function checkStatusStep(current, index) {
    if (current < index) {
      return "wait";
    } else if (current === index) {
      return "process";
    } else {
      return "finish";
    }
  }

  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        current={current}
        className={`site-navigation-steps-custom ${checkResponsiveStep(width)}`}
        responsive={false}
      >
        {headerStep.map((data, index) => {
          return (
            <Step
              key={index}
              status={checkStatusStep(current, index)}
              title={data.title}
            />
          );
        })}
      </Steps>
    </div>
  );
}
