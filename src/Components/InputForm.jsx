import React from "react";
import { Form, Input } from "antd";

export default function InputForm({
  header,
  prefix,
  placeholder,
  suffix,
  classNameDiv,
  styleDiv,
  onChange,
  require,
  nameForm,
  messageRequire,
  value,
  type
}) {
  function checkRequire(require) {
    if (require === true) {
      return <span className="color-red-error">*</span>;
    }
  }



  return (
    <div className={classNameDiv} style={styleDiv}>
      {header && (
        <p className="txt-header-input">
          {" "}
          {checkRequire(require)}
          {header}
        </p>
      )}
      <Form.Item
        name={nameForm}
        rules={[
          {
            required: require,
            message: messageRequire,
          },
        ]}
      >
      <Input
        className="div-border-input"
        prefix={prefix}
        suffix={suffix}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type ? type : "string"}
      />
      </Form.Item>

    </div>
  );
}
