import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { Drawer } from "antd";
import Notification from "./Notification";
import SelectBranch from "./SelectBranch";
import ProfileUser from "./ProfileUser";
import useWindowDimensions from "../Components/UseWindowDimensions";
import { listMenuAll } from "./ListMenu";
import SubMenuMobile from "./SubMenuMobile";

export default function LeftMenu() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const [visible, setVisible] = useState(false);
  const [clearSubMenu, setClearSubMenu] = useState(false);
  const { height, width } = useWindowDimensions();

  function checkDisplayResponsiveDrawer(width) {
    if (width <= 500) {
      return "80%";
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

  function getBasePath() {
    let pathOne = Object.values(params).reduce(
      (path, param) => path.replace("/" + param, ""),
      location.pathname
    );
    let pathTwo = location.pathname.slice(
      0,
      location.pathname.lastIndexOf("/")
    );
    if (pathTwo) return pathTwo;
    else return pathOne;
  }

  const basePath = getBasePath();

  function routePath(params) {
    setClearSubMenu(!clearSubMenu);
    history.push(params);
    onClose();
  }

  function checkPathActive(paramsPath) {
    var classPathStyle = "nav-button-mb";
    paramsPath.map((path) => {
      if (basePath === path) {
        classPathStyle = "active-navbar-mb";
      }
    });
    return classPathStyle;
  }

  return (
    <div className="left-bar-menu-sm">
      <div className="header-bar-sm">
        <div style={{ display: "flex", marginRight: "5px" }}>
          <HiOutlineMenu
            className="color-white icon-menu-sm-display cursor-pointer"
            size="30px"
            onClick={() => showDrawer()}
          />

          <Notification />
          <SelectBranch />
          <ProfileUser />
        </div>
      </div>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
        width={checkDisplayResponsiveDrawer(width)}
      >
        <div style={{ overflow: "auto", paddingBottom: "50px" }}>
          {listMenuAll.map((data, index) => {
            let classActive = checkPathActive(data.activePathMenubar);
            if (data.subMenu.length === 0) {
              return (
                <button
                  key={index}
                  className={classActive}
                  onClick={() => routePath(data.pathnameMenu)}
                >
                  {data.nameMenu}
                </button>
              );
            } else {
              return (
                <SubMenuMobile
                  key={index}
                  data={data}
                  routePath={routePath}
                  classActive={classActive}
                  clearSubMenu={clearSubMenu}
                />
              );
            }
          })}
        </div>
      </Drawer>
    </div>
  );
}
