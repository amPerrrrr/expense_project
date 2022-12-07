import React from "react";
import { logo_expenses } from "../Assets/Image";
import { useLocation, useParams, useHistory, Link } from "react-router-dom";
import { listMenuAll } from "./ListMenu";
import { Dropdown, Menu } from "antd";
import { FiChevronDown } from "react-icons/fi";
import Notification from './Notification'
import ProfileUser from './ProfileUser'
import SelectBranch from './SelectBranch'

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

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
    history.push(params);
  }

  function checkPathActive(paramsPath) {
    var classPathStyle = "nav-button";
    paramsPath.map((path) => {
      if (basePath === path) {
        classPathStyle = "active-navbar";
      }
    });
    return classPathStyle;
  }

  function checkSubPathActive(paramsPath) {
    var classPathStyle = "txt-sub-menu-header";
    if (basePath === paramsPath) {
      classPathStyle = "txt-sub-menu-header sub-menu-active-navbar";
    }
    return classPathStyle;
  }

  function mappingSubMenu(subMenu) {
    let item = [];
    subMenu.map((data, index) => {
      item.push({
        key: index,
        label: (
          <Link className="cursor-pointer" to={data.subMenuPathname}>
            <p className={(checkSubPathActive(data.subMenuPathname))}>{data.subMenuName}</p> 
          </Link>
        ),
      });
    });
    return <Menu items={item} />;
  }

  return (
    <div className="header-bar-lg">
      <div className="header-bar">

        <div className="div-logo-text-header-lg">
          <img
            className="cursor-pointer"
            src={logo_expenses}
            alt="logo"
            onClick={() => history.push("/")}
          />
          <p className="text-header-layout txt-no-wrap">EXPENSE MANAGE SYSTEM</p>
        </div>

        <div className="div-menu-all-header-bar-lg">
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
              let loopOverlay = mappingSubMenu(data.subMenu);
              return (
                <Dropdown overlay={loopOverlay} key={index} >
                  <button
                    className={classActive}
                  >
                    {data.nameMenu}  <FiChevronDown size="25px" />
                  </button>
                </Dropdown>
              );
            }
          })}
        </div>

        <div className="div-notification-branch-select-and-avatar">
          <Notification />
          <SelectBranch />
          <ProfileUser />
        </div>

      </div>
    </div>
  );
}
