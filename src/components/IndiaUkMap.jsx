import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const highlightedCountries = new Set(['United Kingdom', 'India'])

const UK_COORDS   = [-1.5, 54.0]   // longitude, latitude — central UK
const INDIA_COORDS = [78.9, 22.8]  // longitude, latitude — central India

const points = [
  { name: 'United Kingdom', coordinates: UK_COORDS,    label: 'UK Office & Logistics' },
  { name: 'India',          coordinates: INDIA_COORDS, label: 'India Manufacturing' },
]

export function IndiaUkMap({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.24),transparent_35%),radial-gradient(circle_at_82%_78%,rgba(245,158,11,0.18),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.86),rgba(15,23,42,0.96))]" />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 118, center: [22, 10] }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
        viewBox="0 0 800 480"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.has(geo.properties?.name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? '#f59e0b' : '#1f4b6f'}
                  stroke={isHighlighted ? '#fcd34d' : '#8fb9d8'}
                  strokeWidth={0.45}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: isHighlighted ? '#fbbf24' : '#2d658e' },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {/* Curved arc using real geographic coordinates */}
        <Line
          from={UK_COORDS}
          to={INDIA_COORDS}
          stroke="#f59e0b"
          strokeWidth={2.2}
          strokeDasharray="8 7"
          strokeLinecap="round"
          style={{ opacity: 0.95 }}
        />

        {points.map((point) => (
          <Marker key={point.name} coordinates={point.coordinates}>
            <circle r={4.8} fill="#f59e0b" stroke="#fde68a" strokeWidth={1.5} />
            <circle r={11} fill="none" stroke="#f59e0b" strokeWidth={1.2} opacity={0.35} />
            <text
              textAnchor="middle"
              y={-14}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 8.5,
                fontWeight: 700,
                letterSpacing: '0.06em',
                fill: '#f8fafc',
                textTransform: 'uppercase',
                paintOrder: 'stroke',
                stroke: '#0f172a',
                strokeWidth: 2.4,
              }}
            >
              {point.label}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}
