import { useState } from "react";
import { Button, Drawer, Table , Tooltip  } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useWindowDimensions from "./UseWindowDimensions";
import { AiOutlineLeft } from "react-icons/ai";
import { defaultUser } from "../Assets/Image";
import TextHasDotTitleValue from "./TextHasDotTitleValue";
import RenderAvatarOnly from "./RenderAvatarOnly";
import { accommodation, fuel } from "../Assets/Image";

export default function BtnDetailUserDrawerSlides({ style, classNameBtn }) {
  const { height, width } = useWindowDimensions();
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClose = () => {
    setOpenDrawer(false);
  };

  function checkDisplayResponsiveDrawer(width) {
    if (width <= 500) {
      return "100%";
    } else {
      return "378px";
    }
  }

  const columns = [
    {
      title: "Category",
      render: (data) => <div>
         <Tooltip title={data.type} >
         <img src={data.category} alt={data.category} style={{ height:'30px' , display:'block' , margin:'auto' }} />
         </Tooltip>
        
      </div>,
    },
    {
      title: "Authorise/Time",
      dataIndex: "authorise_time",
      key: "authorise_time",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
  ];

  const dataDemo = [
    {
      category: accommodation ,
      type : "accommodation",
      authorise_time: "2,000",
      id: 0,
    },
    {
      category: fuel ,
      authorise_time: "1,000",
      type : "fuel",
      id: 1,
    },
  ];

  return (
    <div>
      <Button
        size="large"
        icon={<UserOutlined />}
        className={"btn-primary-bg-white border-radius-7px " + classNameBtn}
        style={style}
        onClick={() => setOpenDrawer(true)}
      />
      <Drawer
        title={null}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={openDrawer}
        key="left"
        width={checkDisplayResponsiveDrawer(width)}
      >
        <div className="float-right">
          <AiOutlineLeft
            size="30px"
            className="primary-color cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
        <div className="clear-both" />
        <br />
        <div>
          <img
            className="img-user-btn-detail-user-drawer-slides"
            src={defaultUser}
            alt="image user"
          />
          <br />
          <p className="txt-header-input txt-center mb-0px">Panudet Panumas</p>
          <p className="txt-department-btn-detail-user-drawer-slides txt-center mb-0px">
            Manager
          </p>
          <p className="txt-position-btn-detail-user-drawer-slides txt-center mb-0px">
            Marketing department
          </p>
          <TextHasDotTitleValue
            color="#8CB6E6"
            header="Base authorised budget"
            value="100,000"
          />
          <Table
            columns={columns}
            dataSource={dataDemo}
            rowKey="id"
            scroll={{
              y: 200,
              // x: 200,
            }}
          />
          <hr />

          <div>
            <div className="div-avatar-department-btn-detail-user-drawer-slides">
              <RenderAvatarOnly
                icon="AiOutlineSmile"
                color="#B2A4FF"
                size={60}
                sizeIcon={30}
              />
            </div>

            <div className="div-txt-department-btn-detail-user-drawer-slides">
              <p className="txt-card-value-btn-detail-user-drawer-slides font-size-15px clear-both">
                General manager
              </p>
              <p className="txt-card-value-btn-detail-user-drawer-slides font-size-20px clear-both">
                900,000
              </p>
            </div>
          </div>

          <div className="clear-both" />
          <br />
          <TextHasDotTitleValue color="#E38CE6" header="Usage" value="1,000" />
        </div>
      </Drawer>
    </div>
  );
}
