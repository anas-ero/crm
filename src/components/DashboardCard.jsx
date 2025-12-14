const DashboardCard = ({ title, value, subtitle, icon: Icon, bgColor, borderColor }) => {
  return (
    <div className={`rounded-xl border shadow-md p-5 hover:shadow-lg transition ${bgColor} ${borderColor}`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-black">{title}</h2>
        {Icon && <Icon className="w-5 h-5 text-gray-600" />}
      </div>

      <p className="text-2xl font-bold text-black">{value}</p>

      <p className="text-sm text-gray-600 mt-1">
        {subtitle}
      </p>
    </div>
  );
};
export default DashboardCard;