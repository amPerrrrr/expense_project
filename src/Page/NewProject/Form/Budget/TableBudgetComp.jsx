import { useContext } from "react";
import { CreateNewProjectContext } from "../../../../Components/Context";
import { Table } from "antd";
import DisplayHeaderAndValueText from "../../../../Components/DisplayHeaderAndValueText";

export default function TableBudgetComp() {
  const { dataNewProject, setDataNewProject } = useContext(
    CreateNewProjectContext
  );
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "All budget",
      dataIndex: "all_budget",
      key: "all_budget",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
  ];
  return (
    <div>
      <Table columns={columns} />
      <DisplayHeaderAndValueText
        header="Estimated category budget"
        styleHeader={{ color: "rgb(182, 182, 182)" }}
        value="0"
      />
    </div>
  );
}
