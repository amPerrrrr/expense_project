import { useContext, useState } from "react";
import InputNormal from "../../../../Components/InputNormal";
import DurationComponent from "../../../../Components/DurationComponent";
import Checkbox from "../../../../Components/Checkbox";
import { CreateNewProjectContext } from "../../../../Components/Context";

export default function GeneralComp() {
  const { dataNewProject, setDataNewProject } = useContext(
    CreateNewProjectContext
  );
  const [withoutProject, setWithoutProject] = useState(false);

  function onChangeCheckbox(event) {
    setWithoutProject(event);
    if (event) {
      setDataNewProject({
        ...dataNewProject,
        dateStart: null,
        dateEnd: null,
      });
    }
  }

  function onChangeDuration(dates, dateStrings) {
    setDataNewProject({
      ...dataNewProject,
      dateStart: dates ? dateStrings[0] : null,
      dateEnd: dates ? dateStrings[1] : null,
    });
  }

  return (
    <div className="border-form-color div-form">
      <InputNormal header="Name" placeholder="Project name" require={true} />
      <InputNormal
        header="Business purpose"
        placeholder="Business purpose"
        require={false}
      />
      <DurationComponent
        header="Duration"
        showCalculateDate={true}
        error={false}
        messageRequire="Duration is require"
        disabled={withoutProject}
        onChange={onChangeDuration}
        valueDateStart={dataNewProject.dateStart}
        valueDateEnd={dataNewProject.dateEnd}
      />
      <Checkbox
        label="Unlimited"
        disabled={false}
        checked={withoutProject}
        onChange={onChangeCheckbox}
        defaultValue={false}
      />
    </div>
  );
}
