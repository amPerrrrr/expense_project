import React from "react";
import { Row, Col } from "reactstrap";

export default function DisplayHeaderAndValueText({
  header,
  value,
  classNameHeader,
  classNameValue,
  styleHeader,
  styleValue,
  disablePTag,
  classNameDiv,
  styleDiv
}) {
  return (
    <div className={classNameDiv} style={styleDiv} >
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <p
            className={
              classNameHeader
                ? classNameHeader
                : "txt-header-display-header-and-value-text"
            }
            style={styleHeader ? styleHeader : null}
          >
            {header}
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          {disablePTag && <div>{value}</div>}
          {!disablePTag && (
            <p
              className={
                classNameValue
                  ? classNameValue
                  : "txt-value-display-header-and-value-text"
              }
              style={styleValue ? styleValue : null}
            >
              <span className="span-part-sm">-</span> {value}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
}
