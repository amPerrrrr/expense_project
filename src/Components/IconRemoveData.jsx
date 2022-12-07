import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function IconRemoveData({ onClick , className , size , style}) {
  return (
    <RiDeleteBin6Line
        className={`cursor-pointer color-red-error ${className ? className : "float-right"}`}
        size={size ? size : "30px"}
        style={style ? style : { marginRight: "20px", marginTop: "20px" }}
        onClick={onClick}
      />
  )
}
