import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { request, i, hour_glass, tick } from "../../Assets/Image";
import TitlePageHasBtnRoutePage from "../../Components/TitlePageHasBtnRoutePage";
import Expand from "react-expand-animated";
import TableRequest from "./TableRequest";

import { Menu } from "antd";
import { TbClipboardCheck } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RiListCheck } from "react-icons/ri";

export default function ManagerRequest() {
  const [open, setOpen] = useState(false);

  const [keySelect, setKeySelect] = useState("pending");
  const [textSelect, setTextSelect] = useState({
    textHeader: "Done",
    icon: <TbClipboardCheck size="25px" />,
  });

  const items = [
    {
      label: "Pending",
      key: "pending",
      icon: <FaRegClock size="25px" />,
    },
    {
      label: textSelect.textHeader,
      key: "submenu",
      icon: textSelect.icon,
      children: [
        { label: "Done", key: "done", icon: <TbClipboardCheck /> },
        { label: "All", key: "all", icon: <RiListCheck /> },
      ],
    },
  ];

  useEffect(() => {
    switch (keySelect) {
      case "pending":
        setTextSelect({
          ...textSelect,
        });
        break;
      case "done":
        setTextSelect({
          ...textSelect,
          textHeader: "Done",
          icon: <TbClipboardCheck size="25px" />,
        });
        break;
      case "all":
        setTextSelect({
          ...textSelect,
          textHeader: "All",
          icon: <RiListCheck size="25px" />,
        });
        break;
      default:
        break;
    }

    return () => {};
  }, [keySelect]);

  const onClick = (e) => {
    setKeySelect(e.key);
  };

  return (
    <Container>
      <TitlePageHasBtnRoutePage
        title="Request"
        description="To do something with other expense-projects sent to you"
        img={request}
        useFilterIcons={true}
        stateStatusIcon={open}
        setStateStatusIcon={setOpen}
      />
      <div>
        <Menu
          style={{
            fontSize: "25px",
            justifyContent: "center",
            borderBottom: "none",
          }}
          onClick={onClick}
          items={items}
          mode="horizontal"
          defaultSelectedKeys="pending"
        />
      </div>
      <Expand open={open} duration={500}>
        <div>filter all</div>
      </Expand>
      <br />
      <TableRequest />
    </Container>
  );
}
