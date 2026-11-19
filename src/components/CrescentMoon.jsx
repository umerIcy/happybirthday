import { useId } from 'react'
import './Moon.css'

/**
 * The same crescent used on every screen. A soft cream moon, not a dark sky.
 */
const CrescentMoon = ({ className = '' }) => {
  const uid = useId().replace(/:/g, '')
  const glowId = `moon-glow-${uid}`
  const maskId = `moon-mask-${uid}`

  return (
    <svg
      className={`crescent-moon ${className}`.trim()}
      viewBox="0 0 88 88"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={glowId} cx="42%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#fff8dc" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f8e7b0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f8e7b0" stopOpacity="0" />
        </radialGradient>
        <mask id={maskId}>
          <rect width="88" height="88" fill="black" />
          <circle cx="38" cy="46" r="22" fill="white" />
          <circle cx="50" cy="42" r="18" fill="black" />
        </mask>
      </defs>

      <circle className="moon-glow" cx="40" cy="46" r="32" fill={`url(#${glowId})`} />
      <circle className="moon-body" cx="38" cy="46" r="22" mask={`url(#${maskId})`} />
      <path
        className="moon-shade"
        d="M30 34c2 7 2 14-1 22"
        fill="none"
        strokeLinecap="round"
      />

      <path className="moon-star" d="M70 18l1.1 2.8 2.9.3-2.2 1.9.7 2.8L70 24.4l-2.5 1.4.7-2.8-2.2-1.9 2.9-.3z" />
      <path className="moon-star moon-star-small" d="M16 28l.7 1.8 1.9.2-1.5 1.3.5 1.8L16 32.2l-1.6.9.5-1.8-1.5-1.3 1.9-.2z" />
      <path className="moon-star moon-star-tiny" d="M64 62l.6 1.4 1.5.2-1.1 1 .4 1.5L64 65.4l-1.4.7.4-1.5-1.1-1 1.5-.2z" />
    </svg>
  )
}

export default CrescentMoon
