import { useState } from "react";
import { Row, Col } from "reactstrap";
import ModalSelectApiPagination from "../../../../Components/ModalSelectApiPagination";
import CreateNewProject from "./CreateNewProject";
import Checkbox from "../../../../Components/Checkbox";

export default function CreateNewProjectComp() {
  const [withoutProject, setWithoutProject] = useState(false);

  function onChange(event) {
    setWithoutProject(event);
  }
  
  return (
    <div className="div-form">
      <div className="div-form-border-components">
        <Row>
          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
            <ModalSelectApiPagination
              header="Select project"
              require={true}
              disabled={withoutProject}
            />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <CreateNewProject 
            disabled={withoutProject} 
            />
          </Col>
        </Row>

        <Checkbox
          label="Without project"
          disabled={false}
          checked={withoutProject}
          onChange={onChange}
          defaultValue={false}
        />

      </div>
    </div>
  );
}
