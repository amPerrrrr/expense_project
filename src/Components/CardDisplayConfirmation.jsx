import { Card } from "antd";
import React from "react";
import { Row, Col} from "reactstrap";

export default function CardDisplayConfirmation({ data }) {
  return (
    <div className="grid-container">
      <Row>
        {data.map((data, index) => {
          return (     
            <Col key={index}>
              <Card className="form-card-border" xs={0} sm={0} md={6} lg={6} xl={6}>
                    <p className="title-font">{data.title}</p>
                    <p className="category-font"><img className ="category-icon" src={data.icon} alt={data.icon} />{data.subTitle}</p>
                    <p className="price-font">{data.price}</p>
                    <p className="date-font">{data.date}</p>
              </Card>          
            </Col>
          );
        })}
      </Row>
    </div>        
  );
}
