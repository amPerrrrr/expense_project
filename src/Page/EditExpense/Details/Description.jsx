import React from "react";
import { Col,Row } from "reactstrap";
import TableDescription from "./TableDescription";
import DisplayHeaderAndValueText from "../../../Components/DisplayHeaderAndValueText";

export default function Description(){
    const styleValue = { fontSize:'14px',color: "#404040" , marginRight:'5px' }
    const styleHeader = { fontSize:'14px',marginLeft:'5px' }
    return(
    <div>
        <TableDescription/>
        <Row>
            <Col>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <br/>
                <DisplayHeaderAndValueText
                    header="Quantity"
                    value="4"
                    styleValue={styleValue}
                    styleHeader={styleHeader}
                />
                <DisplayHeaderAndValueText
                    header="Vat"
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
                    header="Grand Total"
                    value="0.00"
                    styleValue={styleValue}
                    styleHeader={styleHeader}
                />
            </Col>
        </Row>
    </div>
    )
}