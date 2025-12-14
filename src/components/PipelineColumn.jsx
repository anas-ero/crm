// PipelineColumn.jsx
import React from "react";
import OpportunityCard from "../components/OpportunityCard.jsx";

const PipelineColumn = ({ stage, opportunities }) => {
  const totalAmount = opportunities.reduce(
    (sum, opp) => sum + Number(opp.amount || 0),
    0
  );

  return (
    <div className="w-70 mx-auto">
      {/* Header */}
      <div
        className={`rounded-xl p-4 mb-4 border shadow-md ${stage.color} bg-gray-100`}
      >
        <h2 className="font-bold text-black">{stage.key}</h2>
        <p className="text-sm text-gray-600">
          Total : {totalAmount.toLocaleString()} DH
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opp={opp} />
        ))}
      </div>
    </div>
  );
};

export default PipelineColumn;
