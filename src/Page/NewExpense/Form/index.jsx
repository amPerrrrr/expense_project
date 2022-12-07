import React, { useContext } from "react";
import { CreateNewExpenseContext } from "../../../Components/Context";
import Project from "./Project";
import Expense from "./Expense";
import Request from "./Request";

export default function FormAllComp() {
  const { stepForm, setStepForm, currentExpenseStep, setCurrentExpenseStep } =
    useContext(CreateNewExpenseContext);

  return (
    <div>
      {stepForm === "Project" && <Project />}
      {stepForm === "Expense" && (
        <Expense
          nextStepState={setStepForm}
          nameStateNext="Request"
          nameStateBack="Project"
          current={currentExpenseStep}
          setCurrent={setCurrentExpenseStep}
        />
      )}
      {stepForm === "Request" && <Request />}
    </div>
  );
}
