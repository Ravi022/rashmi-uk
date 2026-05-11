export function Table({ rows }) {
  return (
    <div className="min-w-0 max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white [-webkit-overflow-scrolling:touch]">
      <table className="w-full min-w-[280px] text-left text-xs sm:min-w-0 sm:text-sm">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="px-3 py-2.5 sm:px-5 sm:py-3">Parameter</th>
            <th className="px-3 py-2.5 sm:px-5 sm:py-3">Specification</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-t border-slate-100">
              <td className="break-words px-3 py-2.5 font-medium text-slate-900 sm:px-5 sm:py-3">{k}</td>
              <td className="break-words px-3 py-2.5 text-slate-600 sm:px-5 sm:py-3">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
