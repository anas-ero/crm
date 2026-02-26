const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border hover:shadow-md transition">
    <div>
        <Icon className="w-8 h-8 text-indigo-600 mb-4" />
    </div>
    <h3 className="font-semibold text-lg text-gray-900 mb-2">
      {title}
    </h3>

  </div>
);
export default FeatureCard;