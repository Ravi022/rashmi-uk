import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.title} className="rounded-lg border border-slate-200 bg-white">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
            <span className="font-medium text-slate-900">{item.title}</span>
            <ChevronDown className={open === i ? 'rotate-180 transition' : 'transition'} size={18} />
          </button>
          {open === i ? <p className="px-5 pb-5 text-sm text-slate-600">{item.content}</p> : null}
        </div>
      ))}
    </div>
  )
}
