import React from "react";
import { Row, Col } from "reactstrap";
import { salad_64px } from "../../../Assets/Image"
import { Avatar, Tag } from "antd";
import ReturnIconFromStatus from "../../../Components/ReturnIconFromStatus";
import ReturnColorFromStatus from "../../../Components/ReturnColorFromStatus";
import CheckStatusType from "../../../Components/CheckStatusType";
import DisplayHeaderAndValueText from "../../../Components/DisplayHeaderAndValueText";

export default function OverviewRequest() {
    const styleValue = { color: "#404040" , marginRight:'5px' }
    const styleHeader = { marginLeft:'5px' }
  return (
    <div>
      <p className="txt-name-form-new-expense"> Form Name 01 </p>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <div style={{ textAlign: "center" }}>
            <img src={salad_64px} alt={salad_64px} />
            <p className="txt-detail-sub-title-category"> Food </p>
            <div style={{ display: "inline-flex" }}>
              <div>
                <Avatar
                  size={50}
                  src={ReturnIconFromStatus("sign_off_together")}
                  className="img-status-icon-notification-sm-display"
                />
              </div>
              <div>
                <p
                  className={`txt-status-in-card-notification txt-no-wrap  ${ReturnColorFromStatus(
                    "sign_off_together"
                  )}`}
                  style={{ fontSize: "20px" }}
                >
                  {CheckStatusType("sign_off_together")}
                </p>
                <p className="txt-date-sub-title-category">01/01/2565</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <DisplayHeaderAndValueText
            header="Price"
            value="0.00"
            styleValue={styleValue}
            styleHeader={styleHeader}
          />
          <DisplayHeaderAndValueText
            header="Withholding Tax"
            value="0.00"
            styleValue={styleValue}
            styleHeader={styleHeader}
          />
          <DisplayHeaderAndValueText
            header="Amount"
            value="0.00"
            styleValue={styleValue}
            styleHeader={styleHeader}
          />
          <DisplayHeaderAndValueText
            header="VAT"
            value="0.00"
            styleValue={styleValue}
            styleHeader={styleHeader}
          />
          <DisplayHeaderAndValueText
            header="Total"
            value="0.00"
            styleHeader={styleHeader}
            styleValue={{ marginRight:'5px' , color:'#682a8f' }}
            classNameDiv="display-value-background-color-overview-request"
          />
        </Col>
      </Row>
    </div>
  );
}
