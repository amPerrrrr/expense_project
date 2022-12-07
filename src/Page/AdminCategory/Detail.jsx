import { useContext } from "react";
import { Row, Col } from "reactstrap";
import { EditContext } from "../../Components/Context";
import RenderAvatarOnly from "../../Components/RenderAvatarOnly";
import { Tooltip } from "antd";
import { getPathImage_TTA } from "../../Service/Ip";
import IconSettingComp from '../../Components/IconSettingComp'
import BtnBackPage from "../../Components/BtnBackPage";
import {Container} from "reactstrap"


export default function Detail() {
  const { detail, setEdit } = useContext(EditContext);
  return (
    <Container>
      <Tooltip title="Edit permission">
        <IconSettingComp
          className="cursor-pointer primary-color"
          size="30px"
          style={{ display: "block", margin: "15px" }}
          onClick={() => setEdit(true)}
        />
      </Tooltip>
      <Row>
        <Col xs={4} sm={3} md={2} lg={2} xl={2}>
          <RenderAvatarOnly
            styleAvatar={{ display: "block", margin: "20px auto" }}
            useImageUrl={true}
            image={
              detail.use_avatar
                ? null
                : getPathImage_TTA() + detail.image_url
            }
            icon={detail.avatar_icon}
            color={detail.avatar_color}
          />
        </Col>
        <Col xs={8} sm={9} md={10} lg={10} xl={10}>
          <p className="txt-permission-name1">Name</p>
          <p className="txt-permission-description1">{detail.name}</p>
          <p className="txt-permission-name1">Description</p>
          <p className="txt-permission-description1">{detail.description}</p>
        </Col>
      </Row>
      <br />           
    </Container>
  );
}
