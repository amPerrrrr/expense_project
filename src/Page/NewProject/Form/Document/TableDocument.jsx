import { useContext } from "react";
import { CreateNewProjectContext } from "../../../../Components/Context";
import { Table } from "antd";
import BtnCreateSmall from "../../../../Components/BtnCreateSmall";
import { DeleteOutlined } from "@ant-design/icons";

export default function TableDocument() {
  const { dataNewProject, setDataNewProject } = useContext(
    CreateNewProjectContext
  );

  function removeFileUpload(item, record, index) {
    let dataAfterRemove = [...dataNewProject.demoDateUploadFile];
    dataAfterRemove.splice(index, 1);
    setDataNewProject({
      ...dataNewProject,
      demoDateUploadFile: dataAfterRemove,
    });
  }

  function checkTypeURL(data) {
    if (data.type === "LinkURL") {
      return (
        <a
          className="txt-in-table txt-url cursor-pointer"
          href={data.name} target="_blank" rel="noopener noreferrer"
        >
        {data.name}
        </a>
      );
    } else {
      return <p className="txt-in-table">{data.name}</p>;
    }
  }

  const columns = [
    {
      title: "Name",
      render: (data) => <div>{checkTypeURL(data)}</div>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <p className="txt-in-table">{text}</p>,
    },
    {
      title: "",
      // fixed: "right",
      render: (item, record, index) => (
        <BtnCreateSmall
          icon={<DeleteOutlined />}
          onClick={() => removeFileUpload(item, record, index)}
        />
      ),
    },
  ];

  return (
    <div className="div-table">
      <Table
        columns={columns}
        dataSource={dataNewProject.demoDateUploadFile}
        rowKey="index"
      />
    </div>
  );
}
