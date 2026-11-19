import { useState } from 'react'
import confetti from 'canvas-confetti'
import CrescentMoon from './CrescentMoon'
import { cheesecake, experience } from '../data/siteData'

const CONFETTI_COLORS = ['#cbb4ee', '#f6d5e2', '#f8e7b0', '#ffffff', '#b7d7ae']

const CheesecakeSurprise = ({ onContinue }) => {
  const [blown, setBlown] = useState(false)

  const blowOut = () => {
    if (blown) return
    setBlown(true)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    confetti({
      particleCount: 70,
      spread: 68,
      startVelocity: 28,
      scalar: 0.85,
      origin: { y: 0.62 },
      colors: CONFETTI_COLORS,
      disableForReducedMotion: true,
    })
  }

  return (
    <section className="cheesecake-screen" aria-labelledby="cheesecake-heading">
      <div className="screen-moon" aria-hidden="true">
        <CrescentMoon />
      </div>
      <header className="screen-copy">
        <h1 id="cheesecake-heading">{experience.cheesecakeTitle}</h1>
        <p>{blown ? 'Wish made.' : experience.cheesecakeInstruction}</p>
      </header>

      <div className={`cheesecake ${blown ? 'is-out' : ''}`}>
        <div className="cheesecake-sparkles" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} className={`burst burst-${index + 1}`} />
          ))}
        </div>

        <svg className="cheesecake-svg" viewBox="0 0 280 250" role="img" aria-label="Cheesecake with one candle">
          <ellipse cx="140" cy="214" rx="112" ry="16" fill="#eadcc4" />
          <ellipse cx="140" cy="206" rx="100" ry="14" fill="#fffaf3" />
          <ellipse cx="140" cy="176" rx="92" ry="28" fill="#e7c58a" />
          <ellipse cx="140" cy="162" rx="92" ry="28" fill="#fff6ea" />
          <ellipse cx="140" cy="154" rx="92" ry="26" fill="#fffaf4" />
          <ellipse cx="140" cy="150" rx="74" ry="16" fill="#d9c2f2" />
          <ellipse cx="118" cy="148" rx="7" ry="5" fill="#b489dc" />
          <ellipse cx="146" cy="144" rx="8" ry="5.5" fill="#9a6dce" />
          <ellipse cx="170" cy="149" rx="6" ry="4.5" fill="#c9a6e8" />
          <ellipse cx="132" cy="156" rx="5" ry="3.5" fill="#e7d4f8" />
          <rect x="133" y="92" width="14" height="62" rx="4" fill="#f6d6e4" />
          <rect x="135" y="112" width="10" height="4" rx="1" fill="#f8e7b0" />
          <g className="flame">
            <ellipse cx="140" cy="78" rx="9" ry="16" fill="#f8e7b0" />
            <ellipse cx="140" cy="82" rx="4.5" ry="9" fill="#fff8dc" />
          </g>
        </svg>

        <div className="smoke" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <button
          type="button"
          className="candle-hit"
          onClick={blowOut}
          disabled={blown}
          aria-label={blown ? 'The candle is out' : 'Blow out the candle'}
        />
      </div>

      <div className="note-slot" aria-live="polite">
        {blown ? (
          <article className="note-card">
            <p>{cheesecake.message}</p>
          </article>
        ) : (
          <p className="note-placeholder">Tap the candle when you are ready.</p>
        )}
      </div>

      <div className="journey-actions">
        <button
          type="button"
          className="journey-button"
          onClick={onContinue}
          disabled={!blown}
        >
          {experience.cheesecakeContinue}
        </button>
      </div>
    </section>
  )
}

export default CheesecakeSurprise
