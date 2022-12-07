import { Switch, Route, Redirect } from "react-router-dom"
import Auth from './Service/Auth'

import Login from "./Page/Login";

import Dashboard from "./Page/Dashboard";

import Manager from "./Page/Manager";
import ManagerRequest from './Page/ManagerRequest'

import Admin from "./Page/Admin";
import AdminBudget from './Page/AdminBudget'
import AdminRequest from './Page/AdminRequest'
import AdminAnalysis from './Page/AdminAnalysis'
import AdminCategory from './Page/AdminCategory'
import AdminCreateNewCategory from './Page/AdminCreateNewCategory'
import AdminTableCategory from "./Page/AdminTableCategory";
import Expense from "./Page/Expense";
import NewExpense from './Page/NewExpense'
import EditExpense from './Page/EditExpense'

import Project from "./Page/Project";
import NewProject from "./Page/NewProject"

import Request from "./Page/Request";
import AdmingCategory from "./Page/AdminCategory";
import ManagerRequestEdit from "./Page/ManagerRequestEdit"; 

export default function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Auth>
      <Route exact path="/" component={() => <Redirect to="/expense" />} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}

      <Route exact path="/manager" component={Manager} />
      <Route exact path="/manager-request/" component={ManagerRequest} />
      <Route exact path="/manager-request/:requestManagerID" component={ManagerRequestEdit} />

      <Route exact path="/admin" component={Admin} />
      {/* <Route exact path="/admin-budget" component={AdminBudget} /> */}
      {/* <Route exact path="/admin-request" component={AdminRequest} /> */}
      {/* <Route exact path="/admin-analysis" component={AdminAnalysis} /> */}

      <Route exact path="/admin-category" component={AdminTableCategory} />
      <Route exact path="/admin-create-category" component={AdminCreateNewCategory} />
      <Route exact path="/admin-detail-category/:categoryID" component={AdmingCategory} />


      <Route exact path="/expense" component={Expense} />
      <Route exact path="/new-expense" component={NewExpense} />
      <Route exact path="/expense/:expenseID" component={EditExpense} />

      <Route exact path="/project" component={Project} />
      <Route exact path="/new-project" component={NewProject} />


      {/* <Route exact path="/request" component={Request} /> */}
      </Auth>
    </Switch>
  );
}
