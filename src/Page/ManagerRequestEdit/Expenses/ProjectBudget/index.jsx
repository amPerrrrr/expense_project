import ProjectBudget from '../../../../Assets/data/demoDataRequest/ProjectBudget'
import { Table, Avatar, Tooltip } from "antd";
import ReturnIconFromStatus from "../../../../Components/ReturnIconFromStatus";
import CheckStatusType from "../../../../Components/CheckStatusType";

export default function ProjectBudgetComp() {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Reservation budget",
      dataIndex: "reservation_budget",
      key: "reservation_budget",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
    {
      title: "Advance cash",
      dataIndex: "advance_cash",
      key: "advance_cash",
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
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text) => <p className="txt-in-table txt-center">{text}</p>,
    },
  ];

  return (
    <div className="pd-20px">
      <Table
      dataSource={ProjectBudget}
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
