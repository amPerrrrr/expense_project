import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Expand from "react-expand-animated";
import { useLocation, useParams } from "react-router-dom";

export default function SubMenuMobile({
  data,
  classActive,
  routePath,
  clearSubMenu,
}) {
  const [open, setOpen] = useState(false);
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

  function checkPathActive(paramsPath) {
    var classPathStyle = "sub-menu-nav-button-mb";
    if (basePath === paramsPath) {
      classPathStyle = "sub-menu-active-navbar-mb";
    }
    return classPathStyle;
  }

  useEffect(() => {
    setOpen(false);

    return () => {};
  }, [clearSubMenu]);

  return (
    <div>
      <button className={classActive} onClick={() => setOpen(!open)}>
        {data.nameMenu}{" "}
        <FiChevronDown
          className={
            open ? "animation-rotate-icon-start" : "animation-rotate-icon-end"
          }
          size="25px"
        />
      </button>
      <Expand open={open} duration={500}>
        <div>
          {data.subMenu.map((data, index) => {
            let classActive = checkPathActive(data.subMenuPathname);
            return (
              <button
                key={index}
                className={classActive}
                onClick={() => {
                  setOpen(!open);
                  routePath(data.subMenuPathname);
                }}
              >
                {data.subMenuName}
              </button>
            );
          })}
        </div>
      </Expand>
    </div>
  );
}

// "sub-menu-active-navbar-mb"
