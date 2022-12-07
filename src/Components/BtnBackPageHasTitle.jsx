import React from "react";
import BtnBackPage from "./BtnBackPage";

export default function BtnBackPageHasTitle({ title , RoutePath , styleDiv }) {
  return (
    <div style={styleDiv ? styleDiv : { marginTop:'20px' }} >
      <BtnBackPage
      RoutePath={RoutePath}
        style={{ marginTop: "10px", marginLeft: "0px", borderRadius: "7px" }}
      />
      <p className="txt-title-page txt-center" style={{ marginTop:'-40px' }} >
        {title}
      </p>
    </div>
  );
}
