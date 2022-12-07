import { useState } from "react";
import {
  category,
  logo_taco_bell_color_bg_white,
  office_building,
} from "../Assets/Image";
import { useHistory } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Avatar, Drawer, Button } from "antd";
import CardSelectBranch from "../Components/CardSelectBranch";
import useWindowDimensions from "../Components/UseWindowDimensions";

export default function SelectBranch() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const { height, width } = useWindowDimensions();
  const [select, setSelect] = useState({
    name: "Branch",
    img: category,
  });

  function checkDisplayResponsiveDrawer(width) {
    if (width <= 570) {
      return "100%";
    } else {
      return "378px";
    }
  }

  function selectBranchDropdown(name, img) {
    setSelect({
      ...select,
      name: name,
      img: img,
    });
    onClose();
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const demoData = [
    {
      name: "NAME",
      address: "ADDRESS",
      logo: category,
      project: 200,
      totalBudget: 200000,
      code: "Branch",
    },
    {
      name: "NAME",
      address:
        "ADDRESS",
      logo: category,
      project: 200,
      totalBudget: 900000,
      code: "Branch",
    },
  ];

  return (
    <div className="div-select-branch-header ml-5px mr-5px">
      <Avatar
        className="logo-avatar-branch"
        size="large"
        src={select.img ? select.img : office_building}
      />
      <p
        className="txt-branch-display txt-no-wrap display-flex cursor-pointer"
        onClick={() => showDrawer()}
      >
        {select.name} <FiChevronDown size="25px" style={{ marginTop: "3px" }} />
      </p>

      <Drawer
        title={
          <div>
            {width <= 570 && (
              <div className="position-relative mb-5px">
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
            <CardSelectBranch
              key={index}
              name={data.name}
              address={data.address}
              logo={data.logo}
              project={data.project}
              totalBudget={data.totalBudget}
              code={data.code}
              codeActive={select.name}
              onClick={() => selectBranchDropdown(data.code, data.logo)}
            />
          );
        })}
      </Drawer>
    </div>
  );
}
