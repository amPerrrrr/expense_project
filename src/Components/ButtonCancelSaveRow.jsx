import { Row, Col } from "reactstrap";
import { Button } from "antd";

export default function ButtonCancelSaveRow({
  txtCancel,
  functionCancel,
  txtSave,
  functionSave,
  loadingSaveBtn,
}) {
  return (
    <Row>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <Button
          className="btn-primary-bg-white border-radius-7px width-100-percent"
          onClick={functionCancel}
        >
          {txtCancel ? txtCancel : "Cancel"}
        </Button>
      </Col>

      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <Button
          className="border-radius-7px width-100-percent btn-default-app"
          onClick={functionSave}
          loading={loadingSaveBtn}
        >
          {txtSave ? txtSave : "Save"}
        </Button>
      </Col>
    </Row>
  );
}
