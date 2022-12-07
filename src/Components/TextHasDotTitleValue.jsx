import React from "react";
import { Row, Col } from "reactstrap";

export default function TextHasDotTitleValue({ color, header, value , styleDiv , classNameDiv , styleValue , styleDot , styleHeader }) {
  return (
    <div className={classNameDiv} style={styleDiv}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="display-flex">
            <div
              className="dot-card-color-comp"
              style={styleDot ? styleDot : { backgroundColor: color ? color : "#F2F2F2" }}
            />
            <p className="txt-header-title-text-has-dot float-left" style={styleHeader}>{header}</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <p
            className="txt-value-title-text-has-dot float-right"
            style={styleValue ? styleValue : { color : color ? color : "#F2F2F2" }}
          >
            {value}
          </p>
        </Col>
      </Row>
    </div>
  );
}
