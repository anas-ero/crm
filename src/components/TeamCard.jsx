const TeamCard = ({ name, role }) => (
  <div className="bg-slate-100 rounded-xl p-6 w-64 shadow-sm">
    <div className="w-20 h-20 mx-auto rounded-full bg-indigo-200 flex items-center justify-center text-2xl font-bold text-indigo-700 mb-4">
      {name.charAt(0)}
    </div>

    <h3 className="font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>


  </div>
);

export default TeamCard;