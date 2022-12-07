import React from "react";
import { Table } from "antd";
import Pagination from "../../Components/Pagination";
import { i } from "../../Assets/Image";
import { useHistory } from "react-router-dom";

export default function TableProject() {
  const history = useHistory();

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Form name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Price (Bath)",
      dataIndex: "price",
      key: "price",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      render: (data) => (
        <img
          className="cursor-pointer mt--10px"
          src={i}
          alt="select expenses"
          onClick={() => history.push("/expense/" + data.id)}
        />
      ),
    },
  ];
  const dataSource = [
    {
      id: "1",
      name: "Project name 1",
      project: "project 1",
      date: "01/01/2565",
      status: "Approved",
      category: "test 1",
      price: "1000",
    },
    {
      id: "2",
      name: "Project name 2",
      project: "project 1",
      date: "01/01/2565",
      status: "Approved",
      category: "test 1",
      price: "1000",
    },
    {
      id: "3",
      name: "Project name 3",
      project: "project 2",
      date: "01/01/2565",
      status: "Approved",
      category: "test 1",
      price: "1000",
    },
    {
      id: "4",
      name: "Project name 4",
      project: "project 1",
      date: "01/01/2565",
      status: "Approved",
      category: "test 1",
      price: "1000",
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="id"
        scroll={{
          y: 500,
        }}
      />
      <Pagination current={1} total={30} />
    </div>
  );
}
