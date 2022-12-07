import { useState } from "react";
import { Container } from "reactstrap";
import { EditAccountantRequestContext } from "../../Components/Context";
import TitleHasIconRemove from "../../Components/TitleHasIconRemove";
import StepDisplayContent from "../../Components/StepDisplayContent";
import Budget from "./Budget";
import Details from "./Details";
import Document from "./Document";
import Expenses from "./Expenses";
import History from "./History";
import BtnStyleCustom from "../../Components/BtnStyleCustom";
import { AiOutlineClose } from "react-icons/ai";
import {
  icon_step_expenses,
  icon_step_details,
  icon_step_budget_step,
  icon_step_documents,
  icon_step_history,
} from "../../Assets/Image";

export default function ManagerRequestEdit() {
  const [indexActiveStep, setIndexActiveStep] = useState(0);
  const [tabActive, setTabActive] = useState("project_budget");

  const dateStep = [
    {
      title: "Expenses",
      content: <Expenses />,
      icon: <img src={icon_step_expenses} alt="icon_step_expenses" style={{ height:'32px' }} />,
    },
    {
      title: "Details",
      content: <Details />,
      icon: <img src={icon_step_details} alt="icon_step_details" style={{ height:'32px' }} />,
    },
    {
      title: "Budget",
      content: <Budget />,
      icon: <img src={icon_step_budget_step} alt="icon_step_budget_step" style={{ height:'32px' }} />,
    },
    {
      title: "Document",
      content: <Document />,
      icon: <img src={icon_step_documents} alt="icon_step_documents" style={{ height:'32px' }} />,
    },
    {
      title: "History",
      content: <History />,
      icon: <img src={icon_step_history} alt="icon_step_history" style={{ height:'32px' }} />,
    },
  ];

  function onChange(index, value) {
    setIndexActiveStep(index);
  }

  return (
    <EditAccountantRequestContext.Provider
      value={{
        tabActive,
        setTabActive,
      }}
    >
      <Container>
        <TitleHasIconRemove
          title="Project name01"
          RoutePath="/manager-request"
          useIconRemove={false}
        />
        <StepDisplayContent
          active={indexActiveStep}
          content={dateStep}
          onChange={onChange}
          classNameContent="mt-20px"
        />
        <br />
        <div style={{ float: "right" }}>
          <BtnStyleCustom
            tooltipTextStyle={{ color: "#FF8D8D" }}
            iconBtn={
              <AiOutlineClose
                size="20px"
                style={{ color: "#FF8D8D", marginRight: "10px" }}
              />
            }
            tooltipColor="#FFF1F1"
            textHover="Close project"
            classBtn="btn-deny font-bold"
            styleBtn={{
              width: "auto",
              height: "auto",
              padding: "10px",
              color: "#FF8D8D",
            }}
            titleBtn="Close project"
            // onClickBtn={() => console.log("close project")}
          />
        </div>
        <div className="clear-both" />

        <br />
      </Container>
    </EditAccountantRequestContext.Provider>
  );
}
