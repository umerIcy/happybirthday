import { useState } from 'react'
import TulipArt from './TulipArt'
import CrescentMoon from './CrescentMoon'
import { experience, moon, person } from '../data/siteData'

const WelcomeScreen = ({ onOpen }) => {
  const [moonOpen, setMoonOpen] = useState(false)

  return (
    <section className="welcome" aria-labelledby="welcome-heading">
      <div className="welcome-sky" aria-hidden="true">
        <span className="cloud cloud-a" />
        <span className="cloud cloud-b" />
        <span className="sparkle sparkle-a" />
        <span className="sparkle sparkle-b" />
        <span className="sparkle sparkle-c" />
        <span className="sparkle sparkle-d" />
      </div>

      <div className="welcome-moon">
        <button
          type="button"
          className={`moon-button ${moonOpen ? 'is-open' : ''}`}
          onClick={() => setMoonOpen((open) => !open)}
          aria-expanded={moonOpen}
          aria-label={moonOpen ? `Close ${moon.label}'s note` : `${moon.label}. ${moon.hint}`}
        >
          <CrescentMoon />
        </button>
        <p className="moon-label">{moon.label}</p>
        {!moonOpen && <p className="moon-hint">{moon.hint}</p>}
      </div>

      <div className="note-slot moon-note-slot" aria-live="polite">
        {moonOpen && (
          <article className="note-card">
            <p>{moon.message}</p>
          </article>
        )}
      </div>

      <div className="welcome-tulips" aria-hidden="true">
        <TulipArt palette="purple" bloomed />
        <TulipArt palette="pink" bloomed className="welcome-tulip-small" />
      </div>

      <div className="welcome-copy">
        <p className="eyebrow"> </p>
        <h1 id="welcome-heading">{experience.heading}</h1>
        {person.birthday ? <p className="welcome-date">{person.birthday}</p> : null}
        <p className="welcome-message">{experience.welcomeMessage}</p>

        <div className="mini-cake" aria-hidden="true">
          <span className="mini-cake-flame" />
          <span className="mini-cake-candle" />
          <span className="mini-cake-top" />
          <span className="mini-cake-body" />
        </div>
      </div>

      <div className="journey-actions">
        <button type="button" className="journey-button" onClick={onOpen}>
          {experience.openButton}
        </button>
      </div>
    </section>
  )
}

export default WelcomeScreen
