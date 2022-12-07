import React from "react";
import { Pagination } from "antd";
// import { useDispatch } from "react-redux";
import useWindowDimensions from "./UseWindowDimensions";

export default function PaginationComp({
  statePagesize,
  setStatePagesize,
  current,
  total,
  page_Size,
  parameter,
  redux_actions,
  nameStateCurrent,
  nameStateTotal,
  nameStatePage_Size,
}) {
  // const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  function checkWidthScreen(width) {
    if (width <= 500) {
      return "small";
    } else {
      return "default";
    }
  }

  function changePagination(page, pageSize) {
    const payload = {
      page: page,
      limit: pageSize,
      ...parameter,
    };

    // dispatch(redux_actions(payload));
    setStatePagesize({
      ...statePagesize,
      [nameStateCurrent]: page,
      [nameStatePage_Size]: pageSize,
    });
  }

  return (
    <div>
      <div style={{ float: "right", marginTop: "20px" }}>
        <Pagination
          current={current}
          total={total}
          onChange={changePagination}
          size={checkWidthScreen(width)}
        />
      </div>
      <div style={{ clear: "both" }} />
      <br />
    </div>
  );
}
