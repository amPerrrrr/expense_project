import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { Drawer, Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { defaultUser, avatar_ball } from "../Assets/Image";
import CardDisplayDetailNotification from "../Components/CardDisplayDetailNotification";
import useWindowDimensions from "../Components/UseWindowDimensions";

export default function Notification() {
  const [visible, setVisible] = useState(false);
  const { height, width } = useWindowDimensions();

  function checkDisplayResponsiveDrawer(width) {
    if (width <= 570) {
      return "100%";
    } else {
      return "378px";
    }
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const demoData = [
    {
      name: "FirstName LastName",
      status: "approved",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project01",
      expenseName: "Form name1",
      code: "EX0000001",
    },
    {
      name: "FirstName LastName",
      status: "pending",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project02",
      expenseName: "Form name2",
      code: "EX0000002",
    },
    {
      name: "FirstName LastName",
      status: "revise",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project03",
      expenseName: "Form name3",
      code: "EX0000003",
    },
    {
      name: "FirstName LastName",
      status: "sign_off_together",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project04",
      expenseName: "Form name4",
      code: "EX0000004",
    },
    {
      name: "FirstName LastName",
      status: "send_to_other",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project05",
      expenseName: "Form name5",
      code: "EX0000005",
    },
    {
      name: "FirstName LastName",
      status: "deny",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project06",
      expenseName: "Form name6",
      code: "EX0000005",
    },
    {
      name: "FirstName LastName",
      status: "refund",
      img: defaultUser,
      date: "01/01/2000 23.59",
      projectName: "Project07",
      expenseName: "Form name7",
      code: "EX0000005",
    },
  ];

  return (
    <div>
      <IoIosNotifications
        className="cursor-pointer icon-notification-header"
        size="40px"
        onClick={() => showDrawer()}
      />

      <Drawer
        title={
          <div className="mt-10px">
            <p className="txt-name-in-card-notification txt-no-wrap float-left">
              Notification
            </p>
            {width <= 570 && (
              <div className="position-relative mb-10px">
                <Button
                  className="btn-primary-bg-white txt-in-btn-primary float-right"
                  onClick={() => onClose()}
                >
                  <AiOutlineClose size="20px" />
                </Button>
                <div className="clear-both" />
              </div>
            )}
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="right"
        width={checkDisplayResponsiveDrawer(width)}
      >
        {demoData.map((data, index) => {
          return (
            <CardDisplayDetailNotification
              key={index}
              name={data.name}
              status={data.status}
              img={data.img}
              date={data.date}
              projectName={data.projectName}
              expenseName={data.expenseName}
              code={data.code}
            />
          );
        })}
      </Drawer>
    </div>
  );
}
