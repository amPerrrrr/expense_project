import { useState, useEffect } from "react";
import CheckRequire from "./CheckRequire";
import moment from "moment";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export default function DurationComponent({
  header,
  require,
  showCalculateDate,
  error,
  messageRequire,
  disabled,
  onChange,
  valueDateStart,
  valueDateEnd,
}) {
  const [calculateDate, setCalculateDate] = useState(null);

  useEffect(() => {
    if (disabled) {
      setCalculateDate(null);
    }

    return () => {};
  }, [disabled]);

  useEffect(() => {
    if (valueDateStart !== null && valueDateEnd !== null) {
      calculateTwoDate(valueDateStart, valueDateEnd);
    }

    return () => {};
  }, [valueDateStart, valueDateEnd]);

  function onChangeRangePicker(dates, dateStrings) {
    if (dates !== null) {
      calculateTwoDate(dateStrings[0], dateStrings[1]);
      onChange(dates, dateStrings);
    } else {
      onChange(null, dateStrings);
    }
  }

  function calculateTwoDate(dateStart, dateEnd) {
    const date1 = new Date(dateStart);
    const date2 = new Date(dateEnd);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setCalculateDate(diffDays);
  }

  function checkError(error) {
    if (error) {
      return "error-range-picker-custom";
    }
  }

  return (
    <div>
      {header && (
        <p className="txt-header-input">
          {" "}
          {CheckRequire(require)}
          {header}
        </p>
      )}
      <RangePicker
        className={checkError(error)}
        onChange={onChangeRangePicker}
        disabled={disabled}
        style={{ width: "100%" }}
        value={[
          valueDateStart ? moment(valueDateStart) : null,
          valueDateEnd ? moment(valueDateEnd) : null,
        ]}
      />
      {error && (
        <p className="text-error-default-under-input">{messageRequire}</p>
      )}
      {showCalculateDate && (
        <p className="txt-header-input float-right mt-10px">
          {calculateDate} Day
        </p>
      )}
      <div className="clear-both" />
    </div>
  );
}
