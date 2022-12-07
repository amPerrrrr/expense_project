import { useState, useContext } from "react";
import { UploadImageAndSelectAvatarContext } from "./Context";
import { listAvatar } from "./ListAvatarSelect";
import { listColor } from "./ListColorSelect";
import { Avatar } from "antd";
import { Row, Col } from "reactstrap";
import onChangeInputNormalNoRequire from "./onChangeInputNormalNoRequire";
import Expand from "react-expand-animated";
import { ChromePicker } from "react-color";
import RenderIconFromString from "./RenderIconFromString";
import RenderAvatarOnly from "./RenderAvatarOnly";

export default function SelectAvatar() {
  const [open, setOpen] = useState(false);
  const { EditAvatar, setEditAvatar } = useContext(
    UploadImageAndSelectAvatarContext
  );

  return (
    <div>
      <Row>
        <Col>
          <div className="div-select-avatar">
            <p className="txt-title-select-avatar">Avatar select</p>
            <RenderAvatarOnly
              icon={EditAvatar.icon}
              color={EditAvatar.color}
              size={64}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="div-border-all-select" style={{ marginTop: "45px" }}>
            <div className="display-flex flex-flow-wrap">
              {listAvatar.map((data, index) => {
                return (
                  <div
                    className="div-select-icon-one cursor-pointer"
                    key={index}
                    onClick={() =>
                      onChangeInputNormalNoRequire(
                        data.name,
                        EditAvatar,
                        "icon",
                        setEditAvatar
                      )
                    }
                  >
                    {data.icon}
                  </div>
                );
              })}
            </div>
          </div>
          <br />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div>
            <p
              className="cursor-pointer txt-select-another-color-title float-right mr-20px"
              onClick={() => setOpen(!open)}
            >
              {open === false && "Choose another color"}
              {open === true && "Close"}
            </p>
            <div className="clear-both" />
            <Expand open={open} duration={500}>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <ChromePicker
                  color={EditAvatar.color}
                  onChange={(color) =>
                    onChangeInputNormalNoRequire(
                      color.hex,
                      EditAvatar,
                      "color",
                      setEditAvatar
                    )
                  }
                  disableAlpha={true}
                />
              </div>
              <br />
            </Expand>
          </div>

          <div className="div-border-all-select">
            <div className="display-flex flex-flow-wrap">
              {listColor.map((data, index) => {
                return (
                  <div
                    className="cursor-pointer div-select-color-one"
                    key={index}
                    style={{
                      backgroundColor: data.color,
                    }}
                    onClick={() =>
                      onChangeInputNormalNoRequire(
                        data.color,
                        EditAvatar,
                        "color",
                        setEditAvatar
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
