import React from "react";
import { Row, Col } from "reactstrap";
import { flag, flag_back } from "../Assets/Image";

export default function StepIconFlagDate({ dateStart, dateEnd }) {
  return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="display-flex">
            <img
              className="img-flag-step-icon-flag-date"
              src={flag_back}
              alt="flag_back"
            />
            <div className="display-block">
              <p className="txt-header-step-icon-flag-date">Start</p>
              <p className="txt-date-step-icon-flag-date  color-green">
                {dateStart}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className="display-flex float-right">
            <div className="display-block">
              <p className="txt-header-step-icon-flag-date float-right">End</p>
              <div className="clear-both" />
              <p className="txt-date-step-icon-flag-date  color-red">
                {dateEnd}
              </p>
            </div>
            <img
              className="img-flag-step-icon-flag-date"
              src={flag}
              alt="flag"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
