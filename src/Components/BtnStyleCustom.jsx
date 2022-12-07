import React from 'react'
import { Button , Tooltip} from "antd";

export default function BtnStyleCustom({
 titleBtn,
 textHover,
 classBtn,
 classDivBtn,
 type,
 onClickBtn,
 styleDivBtn,
 styleBtn,
 tooltipColor,
 iconBtn,
 tooltipTextStyle,
 tooltipStyle
}) {
  return (
    <div className={classDivBtn} style={{styleDivBtn}}>
      <Tooltip 
          title={textHover} 
          placement="top"
          color={tooltipColor}
          overlayInnerStyle={tooltipTextStyle}
          overlayStyle={tooltipStyle}>
        <Button
          icon={iconBtn}
          type={type} 
          onClick={onClickBtn}
          style={styleBtn}
          className={classBtn}
          >
          {titleBtn}
        </Button>
      </Tooltip>
    </div>
  )
}
