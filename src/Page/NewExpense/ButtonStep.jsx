import React, { useContext } from "react";
import BtnNextBackStepForm from "../../Components/BtnNextBackStepForm";
import { CreateNewExpenseContext } from "../../Components/Context";

export default function ButtonStepComp() {
  const { stepForm, setStepForm } = useContext(CreateNewExpenseContext);
  function onClickBack(step) {
    switch (step) {
      case "Expense":
        setStepForm("Project");
        break;
      case "Request":
        setStepForm("Expense");
        break;
      default:
        break;
    }
  }
  function onClickNext(step) {
    switch (step) {
      case "Project":
        setStepForm("Expense");
        break;
      case "Expense":
        setStepForm("Request");
        break;
      default:
        break;
    }
  }
  function checkHideBtnBack(step) {
    if (step === "Project" || step === "Expense") {
      return true;
    } else {
      return false;
    }
  }
  function checkHideBtnNext(step) {
    if (step === "Expense") {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div>
      <BtnNextBackStepForm
        txtCancelBtn="Back"
        onClickCancelBtn={() => onClickBack(stepForm)}
        onClickNextBtn={() => onClickNext(stepForm)}
        hideBtnBack={checkHideBtnBack(stepForm)}
        hideBtnNext={checkHideBtnNext(stepForm)}
      />
    </div>
  );
}
