import React from "react";
import { Input } from "antd";
import CheckRequire from './CheckRequire'

export default function InputNormal({   
  header,
  prefix,
  placeholder,
  suffix,
  classNameDiv,
  styleDiv,
  onChange,
  require,
  error,
  messageRequire,
  value
}) {

  function checkErrorReturnClassname(error) {
    if (error) {
      return "error-txt-field-input";
    } else {
      return ""
    }
  }
  return (
    <div className={classNameDiv} style={styleDiv ? styleDiv : { marginBottom:'10px' }}>
      {header && (
        <p className="txt-header-input">
          {" "}
          {CheckRequire(require)}
          {header}
        </p>
      )}
      <Input
       className={`div-border-input ${checkErrorReturnClassname(error)}`}
        prefix={prefix}
        suffix={suffix}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
       {error && (
        <p className="text-error-default-under-input">{messageRequire}</p>
      )}
    </div>
  );
}
