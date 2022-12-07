import { useContext } from "react";
import { Tabs } from "antd";
// import Expense from "./Expense";
// import ProjectBudget from "./ProjectBudget";
import { EditAccountantRequestContext } from "../../../Components/Context";
import TotalBudget from "./TotalBudget";
import BtnDetailUserDrawerSlides from "../../../Components/BtnDetailUserDrawerSlides";
import Expense from './Expense'
import ProjectBudget from './ProjectBudget'

const { TabPane } = Tabs;

export default function Expenses() {
  const { tabActive, setTabActive } = useContext(EditAccountantRequestContext);

  const onChange = (key) => {
    setTabActive(key);
  };
  return (
    <div>
      <BtnDetailUserDrawerSlides />
      <br />
      <Tabs activeKey={tabActive} type="card" onChange={onChange}>
        <TabPane tab="Project budget" key="project_budget">
          <ProjectBudget />
        </TabPane>
        <TabPane tab="Expense" key="expense">
          <Expense />
        </TabPane>
      </Tabs>
      <hr />
      <TotalBudget />
    </div>
  );
}
