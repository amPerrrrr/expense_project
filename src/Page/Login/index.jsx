import React from "react";
import { useHistory } from "react-router-dom";
import { title_login_page , logo_expenses } from "../../Assets/Image";
import InputForm from "../../Components/InputForm";
import InputPasswordForm from "../../Components/InputPasswordForm";
import { Button, Form } from 'antd'
import { Row, Col , Container } from "reactstrap";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import axios from 'axios';
import * as api from '../../Service/Api_Service';

export default function Login() {
  const history = useHistory();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    setLoading(true);
    setError(null);
    let dataLogin = {
      ...values,
      application_id: "2",
    };
    const login = api.LOGIN(dataLogin);
    axios(login)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        if (error && error.response) {
          setError(error.response.data.detail.message);
        }
      });
  };
  
  function bypass() {
    localStorage.setItem("token", "1234");
    history.push("/");
  }


  return (
  //   <Container fluid>
  //     {/* <button onClick={() => login()}>by pass login</button>    */}
  //     <Row>
  //         <Col className="login-title-side">
  //           <div className="pic-setting">
  //           <img className ="login-title-pic" src={title_login_page} alt="logo_expenses" />
  //           </div>
  //           <div className="word-setting">
  //           <p className="login-title-font">Welcome to Expense<br/> Manage System</p>
  //           <p className="login-subtitle-font">Powered by TTA</p>
  //           </div>
  //         </Col>
  //         <Col>
  //           {/* <div className="login-side" style={{ width: "300px", margin: "100px" }}> */}
  //           <div className="login-side">
  //           <div className="login-expense-set"><img className ="login-expense-icon" src={logo_expenses} alt="logo_expenses" />
  //           <p className="login-expense-font">EXPENSE MANAGE SYSTEM</p></div>          
  //             <InputNormal />
  //             <br />
  //             <InputPasswordNormal />
  //             <br /><p className="login-forget-pw">Forget Password</p>
  //             <br/><br/>
  //             <Button className="btn-default-app">
  //             Login
  //             </Button>
  //           </div>
  //         </Col>
  //       </Row>
  //   </Container>
  // );

  <Container fluid>
     <button onClick={() => bypass()}>bypass login</button>   
  <Row>
    <Col xs={0} sm={0} md={6} lg={6} xl={6}>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} />
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <div className="div-img-title-login">
              <img
                className="img-title-login"
                src={title_login_page}
                alt="title_login_page"
              />
              <div>
                <p className="txt-title-login txt-no-wrap">
                  Welcome to Expense Manage System
                </p>
                <p className="txt-sub-title-login">Powered by Noksoft</p>
              </div>
            </div>
          </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} />
      </Row>
    </Col>
    <Col xs={0} sm={0} md={6} lg={6} xl={6}>
      <Row>
        <Col xs={1} sm={1} md={2} lg={2} xl={2} />
        <Col xs={10} sm={10} md={8} lg={8} xl={8}>
          <Form form={form} name="control-hooks" onFinish={onFinish}>
            <div>
              <img
                className="icon-login-expense"
                src={logo_expenses}
                alt="logo_expenses"
              />
              <p className="txt-under-icon-logo">EXPENSE MANAGE SYSTEM</p>
              <InputForm
                require={true}
                header="Email"
                placeholder="Email"
                nameForm="email"
                messageRequire="Email is required"
                type="email"
                prefix={
                  <FiUser
                    size="25px"
                    className="site-form-item-icon primary-color"
                  />
                }
              />

              <InputPasswordForm
                require={true}
                visibilityToggle={false}
                header="Password"
                nameForm="password"
                placeholder="password"
                messageRequire="Password is required"
                prefix={
                  <MdLockOutline
                    size="25px"
                    className="site-form-item-icon primary-color"
                  />
                }
              />

              <p className="primary-color float-right txt-forget-password cursor-pointer mb-5px " style={{ marginTop:'-30px' }}>
                <br/>Forget Password
              </p>
              <div className="clear-both" />
              {error && (
                <p className="text-error-default-under-input txt-no-wrap txt-center mb-5px">
                  {error}
                </p>
              )}
              <Button
                className="btn-default-app"
                htmlType="submit"
                loading={loading}
              >
                Login
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={1} sm={1} md={2} lg={2} xl={2} />
      </Row>
    </Col>
  </Row>
</Container>
);
}

