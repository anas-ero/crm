export const Th = ({ children, className = "" }) => (
  <th
    className={`px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);