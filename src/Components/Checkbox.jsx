import { useState, useEffect } from "react";

const Checkbox = ({ label, onChange, defaultValue, ...props }) => {
  const defaultChecked = defaultValue ? defaultValue : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    onChange(isChecked);

    return () => {};
  }, [isChecked]);

  return (
    <div className="checkbox-wrapper">
         <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? "checked" : ""}
          {...props}
        />
        <span>{label}</span>
    </div>
  );
};

export default Checkbox;