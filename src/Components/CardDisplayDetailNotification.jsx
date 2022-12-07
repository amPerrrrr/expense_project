import React from "react";
import { Avatar, Tag } from "antd";
import { defaultUser } from "../Assets/Image";
import ReturnIconFromStatus from "../Components/ReturnIconFromStatus";
import CheckStatusType from "../Components/CheckStatusType";
import useWindowDimensions from "../Components/UseWindowDimensions";
import { Row, Col } from "reactstrap";
import ReturnColorFromStatus from "./ReturnColorFromStatus";

export default function CardDisplayDetailNotification({
  name,
  status,
  img,
  date,
  projectName,
  expenseName,
  code,
}) {
  const { height, width } = useWindowDimensions();

  return (
    <div className="card-display-notification">
      {width <= 570 && (
        <div>
          <Avatar
            size={60}
            src={img ? img : defaultUser}
            className="logo-avatar-select-branch-components"
          />
          <Row>
            <Col>
              <div style={{ display: "block" }}>
                <p className="txt-name-in-card-notification txt-no-wrap">
                  {name}
                </p>
                <p
                  className={`txt-status-in-card-notification txt-no-wrap  ${ReturnColorFromStatus(
                    status
                  )}`}
                >
                  {CheckStatusType(status)}

                  <Avatar
                    size={30}
                    src={ReturnIconFromStatus(status)}
                    className="img-status-icon-notification-sm-display"
                  />
                </p>
                <p className="txt-datetime-in-card-notification txt-no-wrap">
                  {date}
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p className="txt-detail-in-card-notification txt-no-wrap">
                Project name
              </p>
              <p className="txt-status-in-card-notification txt-no-wrap ">
                - {projectName}
              </p>
              <p className="txt-detail-in-card-notification txt-no-wrap">
                Expense name
              </p>
              <p className="txt-status-primary-color-in-card-notification txt-no-wrap">
                - {expenseName}
              </p>
              <p className="txt-datetime-in-card-notification txt-no-wrap float-right">
                {code}
              </p>
            </Col>
          </Row>
        </div>
      )}

      {width > 570 && (
        <div>
          <Avatar
            size={50}
            src={ReturnIconFromStatus(status)}
            className="img-status-icon-notification"
          />
          <div style={{ display: "flex" }}>
            <Avatar size={60} src={img ? img : defaultUser} />

            <div style={{ display: "block" }}>
              <p className="txt-name-in-card-notification txt-no-wrap">
                {name}
              </p>
              <p
                className={`txt-status-in-card-notification txt-no-wrap ${ReturnColorFromStatus(
                  status
                )}`}
              >
                {CheckStatusType(status)}
              </p>
              <p className="txt-datetime-in-card-notification txt-no-wrap">
                {date}
              </p>
            </div>
          </div>

          <div>
            <Row>
              <Col>
              <p className="txt-detail-in-card-notification txt-no-wrap float-left">
                Project name
              </p>
              <p className="txt-status-in-card-notification txt-no-wrap float-right">
                {projectName}
              </p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p className="txt-detail-in-card-notification txt-no-wrap float-left">
                Expense name
              </p>
              <p className="txt-status-primary-color-in-card-notification txt-no-wrap float-right">
                {expenseName}
              </p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p className="txt-datetime-in-card-notification txt-no-wrap float-right">
                {code}
              </p>
              </Col>
            </Row>
            <div className="clear-both" />
          </div>
        </div>
      )}
    </div>
  );
}
