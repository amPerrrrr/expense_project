import { useContext, useRef } from "react";
import BtnCreateSmall from "../../../../Components/BtnCreateSmall";
import { CreateNewProjectContext } from "../../../../Components/Context";
import TableDocument from "./TableDocument";
import { Tooltip } from "antd";
import InsertLinkModal from "./InsertLinkModal";

export default function DocumentComp() {
  const fileUpload = useRef(null);
  const { dataNewProject, setDataNewProject } = useContext(
    CreateNewProjectContext
  );

  const handleFileUpload = (e) => {
    const fileUploadFC = [...dataNewProject.demoDateUploadFile];
    for (let i = 0; i < e.target.files.length; i++) {
      var milliseconds = new Date().getTime();
      fileUploadFC.push({
        index: milliseconds + i,
        name: e.target.files[i].name,
        type: e.target.files[i].type,
        file: e.target.files[i],
      });
    }
    setDataNewProject({
      ...dataNewProject,
      demoDateUploadFile: fileUploadFC,
    });
    e.target.value = null;
  };

  return (
    <div className="border-form-color">
      <div className="display-flex">
        <p className="txt-header-input">Project document</p>
        <Tooltip title="Upload file" placement="topRight">
          <span>
            <BtnCreateSmall
              styleBtn={{ margin: "-10px 0px auto 20px" }}
              onClick={() => fileUpload.current.click()}
            />
          </span>
        </Tooltip>
        <InsertLinkModal />
      </div>
      <input
        type="file"
        multiple
        // accept='application/pdf, image/png , image/jpg , image/jpeg , image/*'
        // accept="image/*"
        onChange={handleFileUpload}
        ref={fileUpload}
        style={{
          display: "none",
        }}
        value=""
      />
      <TableDocument />
      {dataNewProject.demoDateUploadFile.length !== 0 && (
        <p className="txt-header-input" style={{ color: "#B6B6B6" }}>
          Total
          <span style={{ marginLeft: "10px" }}>
            {dataNewProject.demoDateUploadFile.length}
          </span>
        </p>
      )}
    </div>
  );
}
