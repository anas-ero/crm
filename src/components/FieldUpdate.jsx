const Field = ({ label, value, icon: Icon, select = false, options = [], onChange }) => (
  <div>
    <label className="flex items-center text-black gap-2 text-xs mb-1">
      {Icon && <Icon size={14} />}
      {label}
    </label>

    {select ? (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-400 shadow-md rounded-lg px-3 py-2 text-black"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="w-full border border-gray-400 shadow-md rounded-lg px-3 py-2 text-black"
      />
    )}
  </div>
);

export default Field;
