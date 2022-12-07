import React from "react";
import { Modal } from "antd";

const { confirm } = Modal;

const showConfirm = (data) => {
  confirm({
    className: "custom-confirm-modal-select",
    title: <p className="color-icon-primary font-size-20px">{data.title}</p>,
    icon: data.icon,
    centered: true,
    okText: data.okText ,
    cancelText: data.cancelText ,
    okType: data.okType ,
    okButtonProps: {
      className: 'custom-save-button-confirm-modal-select'
    },
    cancelButtonProps: {
      className: 'custom-cancel-button-confirm-modal-select'
    },
    onOk() {
      data.onOK();
    },
  });
};

export default showConfirm;
