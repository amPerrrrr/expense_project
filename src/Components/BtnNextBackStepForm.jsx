import React from "react";
import { Row, Col } from "reactstrap";
import { Button } from "antd";

export default function BtnNextBackStepForm({
  txtCancelBtn,
  txtNextBtn,
  classNameCancelBtn,
  classNameNextBtn,
  styleCancelBtn,
  styleNextBtn,
  onClickCancelBtn,
  onClickNextBtn,
  hideBtnBack,
  hideBtnNext,
}) {
  return (
    <div>
      <Row>
        <Col>
          {hideBtnBack !== true && (
            <Button
              className={
                "btn-primary-bg-white border-radius-7px float-left width-btn-responsive " +
                classNameCancelBtn
              }
              style={styleCancelBtn}
              onClick={onClickCancelBtn}
            >
              {txtCancelBtn ? txtCancelBtn : "Cancel"}
            </Button>
          )}
        </Col>
        <Col>
          {hideBtnNext !== true && (
            <Button
              style={styleNextBtn}
              className={
                "btn-bg-primary-app border-radius-7px float-right width-btn-responsive " +
                classNameNextBtn
              }
              onClick={onClickNextBtn}
            >
              {txtNextBtn ? txtNextBtn : "Next"}
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
