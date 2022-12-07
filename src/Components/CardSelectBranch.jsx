import { Row, Col } from "reactstrap";
import { Avatar, Button } from "antd";
import { office_building } from "../Assets/Image";
import { BsCheck } from "react-icons/Bs";

export default function CardSelectBranch({
  name,
  address,
  logo,
  project,
  totalBudget,
  code,
  codeActive,
  onClick
}) {
  return (
    <div className="div-border-card-select-branch">
      <Row>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <Avatar
            className="logo-avatar-select-branch-components"
            size={50}
            src={logo ? logo : office_building}
          />
        </Col>
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <p className="txt-name-in-select-branch">{name}</p>
          <p className="txt-address-in-select-branch">{address}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={0} md={2} lg={2} xl={2} />
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <div>
            <p className="txt-sub-detail-in-select-branch float-left font-size-19px">
              {" "}
              Project{" "}
            </p>
            <p className="float-right font-bold color-green font-size-19px mb-5px">
              {project}
            </p>
            <div className="clear-both" />
          </div>
          <div>
            <p className="txt-sub-detail-in-select-branch float-left font-size-19px">
              {" "}
              Total budget{" "}
            </p>
            <p className="float-right font-bold primary-color font-size-19px mb-5px">
              {totalBudget.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {codeActive === code && (
            <Button
              className="btn-primary-bg-color-primary txt-in-btn-primary float-right"
              icon={<BsCheck size="25px" />}
            >
              Selected
            </Button>
          )}
          {codeActive !== code && (
            <Button className="btn-primary-bg-white txt-in-btn-primary float-right" onClick={onClick}>
              Select
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
