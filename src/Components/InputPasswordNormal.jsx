import React from "react";
import { Input } from "antd";
import { MdLockOutline } from "react-icons/md";

export default function InputPasswordNormal() {
  return (
    <div>
      <p className="txt-header-input">Password</p>
      <Input.Password
        className="div-border-input"
        prefix={
          <MdLockOutline size="25px" className="site-form-item-icon primary-color" />
        }
        // suffix={
        //     <FiUser size="25px" className="site-form-item-icon primary-color" />
        //   }
        visibilityToggle={false}
        placeholder="Password"
      />
    </div>
  );
}
