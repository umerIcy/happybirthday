import { useState } from 'react'
import TulipArt from './TulipArt'
import CrescentMoon from './CrescentMoon'
import { experience, tulips } from '../data/siteData'

const TulipGarden = ({ onContinue }) => {
  const [openIds, setOpenIds] = useState([])
  const [activeId, setActiveId] = useState(null)
  const active = tulips.find((tulip) => tulip.id === activeId)

  const openTulip = (id) => {
    setOpenIds((current) => (current.includes(id) ? current : [...current, id]))
    setActiveId(id)
  }

  return (
    <section className="garden" aria-labelledby="garden-heading">
      <div className="screen-moon" aria-hidden="true">
        <CrescentMoon />
      </div>
      <header className="screen-copy">
        <h1 id="garden-heading">{experience.gardenTitle}</h1>
        <p>{experience.gardenHint}</p>
      </header>

      <div className="tulip-row">
        {tulips.map((tulip, index) => {
          const isOpen = openIds.includes(tulip.id)
          return (
            <button
              key={tulip.id}
              type="button"
              className={`tulip-button ${isOpen ? 'is-open' : ''} ${activeId === tulip.id ? 'is-active' : ''}`}
              style={{ '--sway-delay': `${index * 0.35}s` }}
              onClick={() => openTulip(tulip.id)}
              aria-pressed={isOpen}
              aria-label={isOpen ? `${tulip.label}, opened` : `Open ${tulip.label}`}
            >
              <TulipArt palette={tulip.palette} bloomed={isOpen} />
            </button>
          )
        })}
      </div>

      <div className="note-slot" aria-live="polite">
        {active ? (
          <article className="note-card" key={active.id}>
            <p>{active.message}</p>
          </article>
        ) : (
          <p className="note-placeholder">Each tulip is holding a small note.</p>
        )}
      </div>

      <div className="journey-actions">
        <button type="button" className="journey-button" onClick={onContinue}>
          {experience.gardenContinue}
        </button>
      </div>
    </section>
  )
}

export default TulipGarden
