import { useState } from "react";
import BtnCreateSmall from "../../../../Components/BtnCreateSmall";
import TableBudgetComp from "./TableBudgetComp";
import { Modal } from "antd";

export default function BudgetComp() {
  const [visible, setVisible] = useState(false);
  function onCancelModal() {
    setVisible(false);
  }
  return (
    <div className="border-form-color div-form">
      <div className="display-flex">
        <p className="txt-header-input">Estimated category budget</p>
        <BtnCreateSmall
          styleBtn={{ margin: "-10px 0px auto 20px" }}
          onClick={() => setVisible(true)}
        />
      </div>
      <TableBudgetComp />
      <Modal
        title={null}
        centered
        visible={visible}
        onOk={() => onCancelModal()}
        onCancel={() => onCancelModal()}
        footer={null}
        // width={1000}
      >
        <div>select category</div>
      </Modal>
    </div>
  );
}
