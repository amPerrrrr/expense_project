import { useContext, useState } from "react";
import BtnCreateSmall from "../../../../Components/BtnCreateSmall";
import { CreateNewProjectContext } from "../../../../Components/Context";
import { LinkOutlined } from "@ant-design/icons";
import { Tooltip, Modal } from "antd";
import ButtonCancelSaveRow from "../../../../Components/ButtonCancelSaveRow";
import InputNormal from "../../../../Components/InputNormal";
import onChangeInputNormalRequire from "../../../../Components/onChangeInputNormalRequire";
import checkDataNullReturnTrue from "../../../../Components/checkDataNullReturnTrue";

export default function InsertLinkModal() {
  const { dataNewProject, setDataNewProject } = useContext(
    CreateNewProjectContext
  );
  const [visibleInsertLink, setVisibleInsertLink] = useState(false);
  const [dataLinkOne, setDataLinkOne] = useState({
    name: null,
  });
  const [errorDataLinkOne, setErrorDataLinkOne] = useState({
    name: false,
  });
  const [urlNotValid, setUrlNotValid] = useState(false);

  function onCancelModal() {
    setDataLinkOne({
      ...dataLinkOne,
      name: null,
    });
    setErrorDataLinkOne({
      ...errorDataLinkOne,
      name: false,
    });
    setUrlNotValid(false);
    setVisibleInsertLink(false);
  }

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  function onSaveBtn() {
    if (dataLinkOne.name === null) {
      setErrorDataLinkOne({
        ...errorDataLinkOne,
        name: checkDataNullReturnTrue(dataLinkOne.name),
      });
    } else {
      if (isValidHttpUrl(dataLinkOne.name)) {
        const addNewLinkUrl = [...dataNewProject.demoDateUploadFile];
        var milliseconds = new Date().getTime();
        addNewLinkUrl.push({
          index: milliseconds,
          name: dataLinkOne.name,
          type: "LinkURL",
          file: dataLinkOne.name,
        });
        setDataNewProject({
          ...dataNewProject,
          demoDateUploadFile: addNewLinkUrl,
        });
        setErrorDataLinkOne({
          ...errorDataLinkOne,
          name: checkDataNullReturnTrue(dataLinkOne.name),
        });
        onCancelModal();
      } else {
        setUrlNotValid(true);
      }
    }
  }

  return (
    <div>
      <Tooltip title="Insert link" placement="topRight">
        <span>
          <BtnCreateSmall
            styleBtn={{ margin: "-10px 0px auto 10px" }}
            icon={<LinkOutlined />}
            onClick={() => setVisibleInsertLink(true)}
          />
        </span>
      </Tooltip>

      <Modal
        title={null}
        centered
        visible={visibleInsertLink}
        onOk={() => onCancelModal()}
        onCancel={() => onCancelModal()}
        footer={null}
        // width={1000}
      >
        <div>
          <InputNormal
            header="Link url"
            placeholder="https://www.example.com"
            onChange={(e) =>
              onChangeInputNormalRequire(
                e.target.value,
                dataLinkOne,
                "name",
                setDataLinkOne,
                errorDataLinkOne,
                setErrorDataLinkOne
              )
            }
            require={true}
            error={errorDataLinkOne.name}
            messageRequire="link url is require"
            value={dataLinkOne.name}
          />
          {urlNotValid && (
            <p className="text-error-default-under-input">
              {" "}
              Url not valid {"( https://www.example.com )"}{" "}
            </p>
          )}
          <br />
          <ButtonCancelSaveRow
            functionCancel={onCancelModal}
            functionSave={onSaveBtn}
          />
        </div>
      </Modal>
    </div>
  );
}
