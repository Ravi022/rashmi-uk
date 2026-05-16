import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

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

const highlightedCountries = new Set([
  'United Kingdom',
  'India',
  'United Arab Emirates',
  'Germany',
  'Nigeria',
  'Singapore',
  'Canada',
  'Brazil',
])

export function WorldMap() {
  const [tooltip, setTooltip] = useState(null)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.9)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(245,158,11,0.12),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.86),rgba(15,23,42,0.96))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
      {/* tooltip */}
      {tooltip && (
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-xl border border-slate-500/70 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.14em] text-red-400">{tooltip.name}</p>
          <p className="mt-0.5 text-xs text-slate-200">{tooltip.role}</p>
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [20, 25] }}
        style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
        viewBox="0 0 800 440"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={highlightedCountries.has(geo.properties?.name) ? '#60a5fa' : '#1f4b6f'}
                stroke={highlightedCountries.has(geo.properties?.name) ? '#bfdbfe' : '#8fb9d8'}
                strokeWidth={0.45}
                style={{
                  default: { outline: 'none' },
                  hover: {
                    fill: highlightedCountries.has(geo.properties?.name) ? '#93c5fd' : '#2d658e',
                    outline: 'none',
                  },
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
              <circle r={14} fill="none" stroke="#f59e0b" strokeWidth={1.5} opacity={0.45} />
            )}
            <circle
              r={marker.highlight ? 6 : 4}
              fill={marker.highlight ? '#f59e0b' : '#e2e8f0'}
              stroke={marker.highlight ? '#fcd34d' : '#38bdf8'}
              strokeWidth={1.5}
              className="cursor-pointer transition-all hover:r-6"
            />
            <text
              textAnchor="middle"
              y={marker.highlight ? -20 : -14}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: marker.highlight ? 9 : 8,
                fontWeight: 700,
                letterSpacing: '0.08em',
                fill: '#f8fafc',
                textTransform: 'uppercase',
                paintOrder: 'stroke',
                stroke: '#0f172a',
                strokeWidth: 2.5,
              }}
            >
              {marker.label}
            </text>
            {marker.highlight && (
              <text
                textAnchor="middle"
                y={-33}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', fill: '#fcd34d', textTransform: 'uppercase' }}
              >
                UK OFFICE
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>

      {/* legend */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 border-t border-slate-700/60 bg-slate-900/75 px-3 pb-4 pt-3 backdrop-blur-sm sm:gap-5 sm:px-6 sm:pb-5 sm:pt-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500 ring-2 ring-red-200/30" />
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-200">UK / Primary Office</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-100 ring-2 ring-sky-300/25" />
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-200">Regional / Export Market</span>
        </div>
      </div>
    </div>
  )
}
