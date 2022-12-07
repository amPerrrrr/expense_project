import { useContext } from "react";
import { CreateNewProjectContext } from "../../../Components/Context";
import BtnNextBackStepForm from '../../../Components/BtnNextBackStepForm'

export default function ButtonStep() {
    const { currentProjectStep , setCurrentProjectStep } = useContext(CreateNewProjectContext);
    function nextBtn(currentStep) {
        if (currentStep < 2) {
            setCurrentProjectStep(currentProjectStep + 1);
        }
      }
    
      function cancelBtn(currentStep) {
        if (currentStep !== 0) {
            setCurrentProjectStep(currentProjectStep - 1);
        } 
      }
      function checkHideBtnBack(step) {
        if (step === 0) {
          return true;
        } else {
          return false;
        }
      }
  return (
    <div>
        <br />
        <BtnNextBackStepForm
          txtCancelBtn="Back"
          onClickCancelBtn={() => cancelBtn(currentProjectStep)}
          onClickNextBtn={() => nextBtn(currentProjectStep)}
          hideBtnBack={checkHideBtnBack(currentProjectStep)}
        />
    </div>
  )
}
