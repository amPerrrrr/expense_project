import React from "react";
import { i } from "../../Assets/Image";
import { Table, Avatar, Tooltip } from "antd";
import ReturnIconFromStatus from "../../Components/ReturnIconFromStatus";
import CheckStatusType from "../../Components/CheckStatusType";
import ReturnColorFromStatus from "../../Components/ReturnColorFromStatus";
import { useHistory } from "react-router-dom";

export default function TableRequest() {
  const history = useHistory()
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
      width: 80 ,
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Quantity of expense",
      dataIndex: "quantity_of_expense",
      key: "quantity_of_expense",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <div>
            <Tooltip title={CheckStatusType(status)}>
              <Avatar
                size={50}
                src={ReturnIconFromStatus(status)}
                style={{ display: "block", margin: "auto" }}
              />
            </Tooltip>
          </div>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Price ( Baht )",
      dataIndex: "price",
      key: "price",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "",
      render: (data) => {
        return (
          <div>
            <img
              src={i}
              alt="Info"
              className="cursor-pointer "
              style={{ display: "block", margin: "auto" }}
              onClick={() => history.push("/manager-request/"+data.id)}
            />
          </div>
        );
      },
      width: 80 ,
    },
  ];

  const data = [
    {
      id: 1,
      project: "project01",
      quantity_of_expense: "12",
      status: "approved",
      date: "01/01/2565",
      price: "15,000",
    },
    {
      id: 2,
      project: "project02",
      quantity_of_expense: "6",
      status: "pending",
      date: "01/01/2565",
      price: "7,000",
    },
    {
      id: 3,
      project: "project03",
      quantity_of_expense: "-",
      status: "deny",
      date: "01/01/2565",
      price: "525,000",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        scroll={{
          y: 500,
          x: 1000,
        }}
      />
    </div>
  );
}
