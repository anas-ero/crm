export function exportToCsv(filename, rows) {
  if (!rows || rows.lenght === 0);

  const headers = Object.keys(rows[0]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((field) => {
          const value = row[field] ?? "";
          // escape quotes
          return `"${String(value).replace(/"/g, '""')}"`;
        })
        .join(",")
    ),
  ].join("\n");

  // create trigger download
  const csvWithBom = "\uFEFF" + csvContent;
  const blob = new Blob([csvWithBom], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
