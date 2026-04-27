import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const markers = [
  { name: 'UK', coordinates: [-1.5, 54], label: 'United Kingdom', role: 'UK Sales & Technical Office', highlight: true },
  { name: 'India HQ', coordinates: [80.9, 22.5], label: 'India (HQ)', role: 'Integrated Manufacturing Campus' },
  { name: 'UAE', coordinates: [55.3, 25.2], label: 'Middle East', role: 'Regional Distribution & Sales' },
  { name: 'Germany', coordinates: [10.4, 51.2], label: 'Europe', role: 'Technical Sales & Project Support' },
  { name: 'Nigeria', coordinates: [8.6, 9.1], label: 'Africa', role: 'Export Distribution' },
  { name: 'Singapore', coordinates: [103.8, 1.35], label: 'Asia-Pacific', role: 'Asia Export Hub' },
  { name: 'Canada', coordinates: [-95, 56], label: 'North America', role: 'Export Market' },
  { name: 'Brazil', coordinates: [-51.9, -14.2], label: 'South America', role: 'Export Market' },
]

export function WorldMap() {
  const [tooltip, setTooltip] = useState(null)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900">
      {/* tooltip */}
      {tooltip && (
        <div className="absolute left-4 top-4 z-10 rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 shadow-xl pointer-events-none">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.14em] text-amber-400">{tooltip.name}</p>
          <p className="mt-0.5 text-xs text-slate-300">{tooltip.role}</p>
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [20, 25] }}
        style={{ width: '100%', height: 'auto' }}
        viewBox="0 0 800 440"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e293b"
                stroke="#334155"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#334155', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker) => (
          <Marker
            key={marker.name}
            coordinates={marker.coordinates}
            onMouseEnter={() => setTooltip(marker)}
            onMouseLeave={() => setTooltip(null)}
          >
            {/* pulse ring for highlighted marker */}
            {marker.highlight && (
              <circle r={12} fill="none" stroke="#f59e0b" strokeWidth={1.5} opacity={0.4} />
            )}
            <circle
              r={marker.highlight ? 6 : 4}
              fill={marker.highlight ? '#f59e0b' : '#64748b'}
              stroke={marker.highlight ? '#fcd34d' : '#94a3b8'}
              strokeWidth={1.5}
              className="cursor-pointer transition-all hover:r-6"
            />
            {marker.highlight && (
              <text
                textAnchor="middle"
                y={-16}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', fill: '#fcd34d', textTransform: 'uppercase' }}
              >
                UK OFFICE
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>

      {/* legend */}
      <div className="flex items-center gap-5 px-6 pb-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-amber-400 ring-2 ring-amber-200/30" />
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">UK / Primary Office</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-500 ring-2 ring-slate-400/20" />
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Regional / Export Market</span>
        </div>
      </div>
    </div>
  )
}
