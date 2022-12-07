import { useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import Expand from "react-expand-animated";

export default function CollapseComp({ children, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="cursor-pointer mb-0px" onClick={() => setOpen(!open)}>
        <p
          className="txt-header-input float-left "
          style={{ marginBottom: "0px" , marginLeft:'10px' }}
        >
          {title}
        </p>

        <AiOutlineUp
          size="25px"
          className={`float-right primary-color mt-5px mr-10px rotate ${
            open ? "up" : "down"
          }`}
        />
        <div className="clear-both" />
      </div>
      <Expand open={open} duration={300}>
        <div style={{ marginTop:'10px' , padding:'10px' }}>{children}</div>
      </Expand>
    </div>
  );
}
