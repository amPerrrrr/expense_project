import { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

export default function CardEstimateBudget({
  icon,
  type,
  estimateValue,
  usageValue,
  useTotal,
  useTitleLeft
}) {
  const [isTotal, setIsTotal] = useState(false);
  const [useTitle, setUseTitle] = useState(true);

  useEffect(() => {
    if(useTitleLeft === true || useTitleLeft === false){
      setUseTitle(useTitleLeft);
    } else {
      setUseTitle(true);
    }
    return () => {
      
    }
  }, [useTitleLeft])

  useEffect(() => {
    setIsTotal(useTotal ? false : true);

    return () => {};
  }, [useTotal]);
  


  return (
    <div
      className="div-border-card-estimate-budget"
      style={isTotal ? null : { border: "none", paddingRight: "30px" }}
    >
      <Row>
        {
          useTitle === true && (
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
            {isTotal === false && (
              <div>
                <p className="txt-total-card-estimate-budget">Total</p>
              </div>
            )}
            {isTotal === true && (
              <div className="div-icon-card-estimate-budget">
                <img
                  className="img-icon-card-estimate-budget"
                  src={icon}
                  alt="icon"
                />
                <p className="txt-type-icon-card-estimate-budget">{type}</p>
              </div>
            )}
          </Col>
          )
        }
        <Col xs={12} sm={12} md={useTitle === true ? 7: 12} lg={useTitle === true ? 8: 12} xl={useTitle === true ? 8: 12}>
          <div className="div-margin-top-responsive-card-estimate-budget" >
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="div-header-status-card-estimate-budget display-flex">
                  <div className="dot-estimate-card-estimate-budget" />
                  <p className="txt-header-estimate-card-estimate-budget float-left">
                    Estimate
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <p className="txt-value-estimate-card-estimate-budget">
                  {estimateValue}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="div-header-status-card-estimate-budget display-flex">
                  <div className="dot-usage-card-estimate-budget" />
                  <p className="txt-header-estimate-card-estimate-budget float-left">
                    Usage
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <p className="txt-value-estimate-card-estimate-budget color-usage">
                  {usageValue}
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
