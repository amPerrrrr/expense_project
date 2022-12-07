import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Layout from "../Layout";

const Auth = ({ children }) => {
  const history = useHistory();
  const userData = localStorage.getItem("token");

  if (!userData) {
    history.push("/login");
  }

  if (userData === undefined) {
    return <p>Loading . . .</p>
  } else {
    return <Layout>{children}</Layout>
  }
// return <Layout>{children}</Layout>
};

export default withRouter(Auth);
