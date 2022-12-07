import React from "react";
import CardEstimateBudget from "../../../Components/CardEstimateBudget";
import { salad_32px } from "../../../Assets/Image";

export default function Budget() {
  return (
    <div className="div-form-border-components1 div-form">
      <div className="border-detail-budget">
        <CardEstimateBudget
          icon={salad_32px}
          type="Accommodation"
          estimateValue="1,000,000"
          usageValue="15,000,000"
        />
        <CardEstimateBudget
          icon={salad_32px}
          type="Accommodation"
          estimateValue="1,000,000"
          usageValue="15,000,000"
        />
        <CardEstimateBudget
          icon={salad_32px}
          type="Accommodation"
          estimateValue="1,000,000"
          usageValue="15,000,000"
        />
        <CardEstimateBudget
          icon={salad_32px}
          type="Accommodation"
          estimateValue="1,000,000"
          usageValue="15,000,000"
        />
        <CardEstimateBudget
          icon={salad_32px}
          type="Accommodation"
          estimateValue="1,000,000"
          usageValue="15,000,000"
        />
      </div>
      <hr />
      <CardEstimateBudget
        useTotal={true}
        type="Accommodation"
        estimateValue="1,000,000"
        usageValue="15,000,000"
      />
    </div>
  );
}
