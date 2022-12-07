import React from "react";
import { Row, Col } from "reactstrap";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import InputNormal from "../../Components/InputNormal";

export default function SearchInput() {
  return (
    <div>
      <Row>
        <Col xs={10} sm={10} md={4} lg={4} xl={4}>
          <InputNormal placeholder="Project name" />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <Button
            size="large"
            icon={<SearchOutlined />}
            className="btn-default-app br-7px mt-3px"
          />
        </Col>
      </Row>
      <br />
    </div>
  );
}
