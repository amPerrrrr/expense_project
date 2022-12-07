import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function BtnCreateSmall({
  disabled,
  onClick,
  styleBtn,
  classNameBtn,
  classNameDiv,
  icon,
  textBtn,
}) {
  return (
    <div className={classNameDiv}>
      {!textBtn && (
        <Button
          size="large"
          style={styleBtn}
          icon={icon ? icon : <PlusCircleOutlined />}
          className={"btn-default-app br-7px " + classNameBtn}
          disabled={disabled}
          onClick={onClick}
        />
      )}
      {textBtn && (
        <Button
          size="large"
          style={styleBtn}
          icon={icon ? icon : <PlusCircleOutlined />}
          className={"btn-default-app br-7px " + classNameBtn}
          disabled={disabled}
          onClick={onClick}
        >
          {textBtn}
        </Button>
      )}
    </div>
  );
}
