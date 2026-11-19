/**
 * Illustrated tulip. Closed flowers show a bud; bloomed flowers open three petals.
 * Colour comes from data-palette on the svg.
 */
const TulipArt = ({ palette = 'purple', bloomed = false, className = '' }) => (
  <svg
    className={`tulip-art ${bloomed ? 'is-bloomed' : ''} ${className}`.trim()}
    data-palette={palette}
    viewBox="0 0 120 200"
    aria-hidden="true"
    focusable="false"
  >
    <g className="tulip-sway">
      <path
        className="tulip-stem"
        d="M60 188c-1-26 3-48 0-72"
        fill="none"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path className="tulip-leaf tulip-leaf-left" d="M58 160c-26-4-38-24-34-38 14 8 26 22 34 38z" />
      <path className="tulip-leaf tulip-leaf-right" d="M62 148c28-6 40-28 34-40-16 10-26 26-34 40z" />

      <path
        className="tulip-bud"
        d="M60 116c0 0-20-22-18-50 2-22 18-36 18-36s16 14 18 36c2 28-18 50-18 50z"
      />

      <g className="tulip-petals">
        <path className="tulip-petal-side" d="M58 112C34 104 22 74 32 46c6-16 20-12 26 10 4 16 2 40 0 56z" />
        <path className="tulip-petal-side tulip-petal-side-right" d="M62 112c24-8 36-38 26-66-6-16-20-12-26 10-4 16-2 40 0 56z" />
        <path className="tulip-petal-middle" d="M60 118c-16-14-20-48 0-78 20 30 16 64 0 78z" />
        <path className="tulip-petal-shine" d="M60 96c-6-8-6-24 0-40 6 16 6 32 0 40z" />
      </g>
    </g>
  </svg>
)

export default TulipArt
