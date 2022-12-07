import React from "react";
import BtnBackPage from "./BtnBackPage";
import { AiFillDelete } from "react-icons/ai";

export default function TitleHasIconRemove({
  classNameDiv,
  styleDiv,
  RoutePath,
  title,
  onClickIcon,
}) {
  return (
    <div
      className={classNameDiv}
      style={styleDiv ? styleDiv : { marginTop: "20px" }}
    >
      <BtnBackPage RoutePath={RoutePath} />
      <p className="txt-title-text-header-has-back-page">
        {title && (
          <span>
            {title}
            <AiFillDelete
              onClick={onClickIcon}
              size="25px"
              style={{ margin: "-5px auto auto 10px", color: "#ff9d9d" }}
              className="cursor-pointer"
            />
          </span>
        )}
      </p>
    </div>
  );
}
