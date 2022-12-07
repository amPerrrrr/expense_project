import React from "react";
import { Table } from "antd";

export default function History() {
  
  const columns = [
    {
      title: "Contributor",
      dataIndex: "contributor",
      key: "contributor",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Date update",
      dataIndex: "date_update",
      key: "date_update",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
  ];

  return (
    <div className="div-form">
      <div className="div-form-border-components">
      <Table
        columns={columns}
        rowKey="date_update"
        scroll={{
          y: 500,
          x: 500,
        }}
      />
      </div>
    </div>
  );
}
