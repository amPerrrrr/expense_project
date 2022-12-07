import { useState, useEffect } from "react";
import { RiFilterOffLine, RiFilterLine } from "react-icons/ri";


export default function FilterIcon({ stateOpen , setStateOpen }) {
    const styleIcons = { marginTop: "-5px" , marginLeft:'10px' };
    const [iconButtonFilter, setIconButtonFilter] = useState(
      <RiFilterLine className="cursor-pointer" style={styleIcons} size="25px" color="#682a8f" />
    );
  
    useEffect(() => {
      if (stateOpen === false) {
        setIconButtonFilter(<RiFilterLine  className="cursor-pointer" style={styleIcons} size="25px" color="#682a8f"  />);
      } else {
        setIconButtonFilter(<RiFilterOffLine className="cursor-pointer"  style={styleIcons} size="25px" color="#682a8f"  />);
      }
      return () => {};
    }, [stateOpen]);
    
  return (
    <span onClick={() => setStateOpen(!stateOpen)}>
        {iconButtonFilter}
    </span>
  )
}
