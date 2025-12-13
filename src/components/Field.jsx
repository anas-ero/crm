const Field = ({ label, name, type = 'text', required = false , onChange}) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500">*</span>}</label>
        <input
            type={type}
            name={name}
            onChange={onChange}
            required={required}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            min={type === 'number' && name === 'amount' ? 0 : undefined}
            max={name === 'probability' ? 100 : undefined}
        />
    </div>
);
export default Field