import React from 'react';
import { Row, Col } from "reactstrap";
import { salad_64px } from "../../../Assets/Image";
import DisplayHeaderAndValueText from '../../../Components/DisplayHeaderAndValueText';


export default function Project() {
  return (
    <div className="div-form-border-components-for-edit-expense">
        <div>
            <p className="txt-name-form-new-expense">Project01</p>
            <p className='txt-sub-form-new-expense'>Yearly Activity</p>
            {/* vvvvv return color by status vvvvv */}
            <p className='txt-status-form-new-expense'>AVAILABLE</p>
        </div>
    </div>
  )
}
