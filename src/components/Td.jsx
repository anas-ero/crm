const Td = ({ children, strong = false, className = "" }) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm ${
      strong ? "font-semibold" : "font-normal"
    } ${className}`}
  >
    {children}
  </td>
);
export default Td;