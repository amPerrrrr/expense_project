import Expense from '../../../../Assets/data/demoDataRequest/Expense'
import { Table, Avatar, Tooltip } from "antd";
import ReturnIconFromStatus from "../../../../Components/ReturnIconFromStatus";
import CheckStatusType from "../../../../Components/CheckStatusType";

export default function ExpenseComp() {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
      width: 80,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Form NO.",
      dataIndex: "form_no",
      key: "form_no",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <img className="img-center-default" src={text} alt="icon" /> ,
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
      title: "Price ( Bath )",
      dataIndex: "price",
      key: "price",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
  ];

  return (
    <div className="pd-20px">
      <Table
      dataSource={Expense}
        columns={columns}
        rowKey="id"
        scroll={{
          y: 500,
          x: 1000,
        }}
      />
      <p className="float-right txt-total-edit-project">
        Total
        <span className="txt-value-total-edit-project">0</span>
      </p>
      <div className="clear-both" />
    </div>
  );
}
