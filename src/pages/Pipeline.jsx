import React from "react";
import { useSelector } from "react-redux";
import { STAGES } from "../components/PipelineConfig";
import PipelineColumn from "../components/PipelineColumn.jsx";

const Pipeline = () => {
  const opportunities = useSelector((state) => state.opportunity.opportunities);

  return (
    <div>
      <div className="p-6 overflow-x-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Pipeline Commercial
        </h1>

        <div className="flex gap-6 flex-wrap">
          {STAGES.map((stage) => (
            <PipelineColumn
              key={stage.key}
              stage={stage}
              opportunities={opportunities.filter(
                (opp) => opp.stage === stage.key
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
