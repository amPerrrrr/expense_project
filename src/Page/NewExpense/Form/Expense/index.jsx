import { useState } from "react";
import StepExpense from "./StepExpense";
import BtnNextBackStepForm from "../../../../Components/BtnNextBackStepForm";

export default function CreateNewExpenseComp({
  nextStepState,
  nameStateNext,
  nameStateBack,
  current,
  setCurrent,
}) {
  function nextBtn(currentStep) {
    if (currentStep < 6) {
      setCurrent(current + 1);
    } else {
      if (nameStateNext) {
        nextStepState(nameStateNext);
      }
    }
  }

  function cancelBtn(currentStep) {
    if (currentStep !== 0) {
      setCurrent(current - 1);
    } else {
      if(nameStateBack){
        nextStepState(nameStateBack);
      }
    }
  }

  return (
    <div className="div-form-border-components">
      <StepExpense current={current} setCurrent={setCurrent} />
      <br />
      <BtnNextBackStepForm
        txtCancelBtn="Back"
        onClickCancelBtn={() => cancelBtn(current)}
        onClickNextBtn={() => nextBtn(current)}
      />
    </div>
  );
}
