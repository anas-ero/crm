import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Calendar } from "lucide-react";
import { STAGE_STYLES } from "../components/PipelineConfig.jsx";

const OpportunityCard = ({ opp }) => {
  const navigate = useNavigate();
  const style = STAGE_STYLES[opp.stage];
  const weightedAmount = (opp.amount * opp.probability) / 100;

  const isRisk =
    new Date(opp.closeDate) < new Date() &&
    opp.stage !== "Gagné";

  return (
    <div
      onClick={() => navigate(`/opportunities/${opp.id}`)}
      className={`
        cursor-pointer rounded-xl p-4
        border ${style.border}
        bg-${style.bg} 
        shadow-lg hover:shadow-xl transition
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">
          {opp.entreprise}
        </h3>

        {isRisk && (
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-600 font-semibold">
            <AlertTriangle size={12} />
          </span>
        )}
      </div>

      {/* Amounts */}
      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span>Montant :</span>
          <span>{opp.amount.toLocaleString()} DH</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Pondéré :</span>
          <span>{weightedAmount.toLocaleString()} DH</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs">
          <Calendar size={14} />
          {opp.closeDate}
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full border ${style.badge}`}
        >
          {opp.probability}%
        </span>
      </div>
    </div>
  );
};

export default OpportunityCard;
