export function Table({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-900 text-white">
          <tr><th className="px-5 py-3">Parameter</th><th className="px-5 py-3">Specification</th></tr>
        </thead>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-t border-slate-100">
              <td className="px-5 py-3 font-medium text-slate-900">{k}</td>
              <td className="px-5 py-3 text-slate-600">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
