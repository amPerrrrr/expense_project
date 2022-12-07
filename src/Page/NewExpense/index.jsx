import { useState } from "react";
import TextHeaderHasBackPage from "../../Components/TextHeaderHasBackPage";
import { Container } from "reactstrap";
import { i } from "../../Assets/Image";
import Step from "./Step";
import Form from "./Form";
import { CreateNewExpenseContext } from "../../Components/Context";
import ButtonStep from "./ButtonStep";
import getWindowDimensions from "../../Components/UseWindowDimensions";

export default function NewExpense() {
  const { width, height } = getWindowDimensions();
  const [stepForm, setStepForm] = useState("Project");
  const [currentExpenseStep, setCurrentExpenseStep] = useState(0);

  function checkFluid(width) {
    if (width <= 993) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <CreateNewExpenseContext.Provider
      value={{
        stepForm,
        setStepForm,
        currentExpenseStep, 
        setCurrentExpenseStep
      }}
    >
      <Container fluid={checkFluid(width)}>
        <button onClick={() => setStepForm("Project")}>Project</button>
        <button onClick={() => setStepForm("Expense")}>Expense</button>
        <button onClick={() => setStepForm("Request")}>Request</button>
        <TextHeaderHasBackPage
          RoutePath="/expense"
          title="New expense"
          imgIcon={i}
        />
        <Step />
        <br />
        <Form />
        <br />
        <ButtonStep />
        <br />

      </Container>
    </CreateNewExpenseContext.Provider>
  );
}
