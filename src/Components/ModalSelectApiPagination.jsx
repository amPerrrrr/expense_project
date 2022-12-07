import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import CheckRequire from "./CheckRequire";
import { Modal } from "antd";

export default function ModalSelectApiPagination({
  header,
  require,
  disabled,
  error,
  messageRequire,
}) {
  const [visible, setVisible] = useState(false);

  function checkDisabled(disabled) {
    if (disabled === true) {
      return "disabled-div-no-data-select-comp";
    } else {
      return "cursor-pointer";
    }
  }

  function visibleModal() {
    if (disabled === false) {
      setVisible(true);
    }
  }

  function checkErrorClassname(error) {
    if (error) {
      return "error-div-no-data-select-comp";
    }
  }

  function onCancelModal() {
    setVisible(false);
  }

  return (
    <div>
      {header && (
        <p className="txt-header-input">
          {" "}
          {CheckRequire(require)}
          {header}
        </p>
      )}

      <div
        className={`div-no-data-select-comp ${checkErrorClassname(
          error
        )} ${checkDisabled(disabled)}`}
        onClick={() => visibleModal()}
      >
        <p className="txt-placeholder-in-modal-select-api-pagination float-left">
          Project
        </p>
        <BiChevronDown
          size="35px"
          className="icon-modal-select-api-pagination float-right "
        />
      </div>
      <div className="clear-both" />
      {error && (
        <p className="text-error-default-under-input">{messageRequire}</p>
      )}


      <Modal
        title={null}
        centered
        visible={visible}
        onOk={() => onCancelModal()}
        onCancel={() => onCancelModal()}
        footer={null}
        width={1000}
      >
        <div className="div-table">
          Select project
        </div>
      </Modal>
    </div>
  );
}
