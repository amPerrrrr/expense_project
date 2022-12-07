import { useState } from "react";
import { Container } from "reactstrap";
import TextHeaderHasBackPage from "../../Components/TextHeaderHasBackPage";
import Form from "./Form";
import { CreateNewProjectContext } from "../../Components/Context";

export default function NewProject() {
  const [currentProjectStep, setCurrentProjectStep] = useState(0);
  const [dataNewProject, setDataNewProject] = useState({
    dateStart: null,
    dateEnd: null,
    demoDateUploadFile : []
  });

  return (
    <CreateNewProjectContext.Provider
      value={{
        currentProjectStep,
        setCurrentProjectStep,
        dataNewProject, 
        setDataNewProject
      }}
    >
      <Container>
        <TextHeaderHasBackPage RoutePath="/project" title="New project" />
        <Form />
      </Container>
    </CreateNewProjectContext.Provider>
  );
}
