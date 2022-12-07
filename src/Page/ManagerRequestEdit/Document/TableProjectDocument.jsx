import React from "react";
import { Table } from "antd";

export default function TableProjectDocument() {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
      width: 80 ,
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        rowKey="id"
        scroll={{
          y: 500,
          x: 500,
        }}
      />
    </div>
  );
}
