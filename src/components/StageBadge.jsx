const stageColors = {
  Prospection: "bg-cyan-500/10 text-cyan-600",
  Qualification: "bg-yellow-500/10 text-yellow-600",
  Proposition: "bg-purple-500/10 text-purple-500",
  Négociation: "bg-orange-500/10 text-orange-500",
  Gagné: "bg-green-500/10 text-green-600",
  Perdu: "bg-red-500/10 text-red-400",
};

const StageBadge = ({ stage }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      stageColors[stage] || "bg-gray-500/10 text-gray-400"
    }`}
  >
    {stage}
  </span>
);
export default StageBadge;