import { useState } from 'react'
import { Container , Row , Col } from "reactstrap";
import StepDisplayContent from "../../Components/StepDisplayContent";
import { AiOutlineFolderOpen } from "react-icons/ai";
import TitleHasIconRemove from '../../Components/TitleHasIconRemove';
import Details from './Details';
import Project from './Project'

export default function EditExpense() {
  const [indexActiveStep, setIndexActiveStep] = useState(0);
  const demoDataStep = [
    {
      title: "Details",
      content: <Details/>,
      icon: <AiOutlineFolderOpen size="30px" />,
    },
    {
      title: "Project",
      content: <Project/>,
      icon: <AiOutlineFolderOpen size="30px" />,
    },
    {
      title: "Signer",
      content: <div>Signer</div>,
      icon: <AiOutlineFolderOpen size="30px" />,
    },
    {
      title: "Document",
      content: <div>Document</div>,
      icon: <AiOutlineFolderOpen size="30px" />,
    },
    {
      title: "History",
      content: <div>History</div>,
      icon: <AiOutlineFolderOpen size="30px" />,
    },
  ];

  function onChange(index, value) {
    setIndexActiveStep(index);
  }

  return (
    <Container>
        <TitleHasIconRemove
        title="Form name01"
        RoutePath="/expense"
        />
        <StepDisplayContent
        active={indexActiveStep}
        content={demoDataStep}
        onChange={onChange}
      />
    </Container>
  )
}
