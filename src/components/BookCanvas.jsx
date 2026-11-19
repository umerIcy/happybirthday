import { useCallback, useEffect, useRef, useState } from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { bigLetter, person } from '../data/siteData'
import CrescentMoon from './CrescentMoon'

const BookCanvas = ({ active, setActive }) => {
  const dropdownRef = useRef(null)
  const [bookOpen, setBookOpen] = useState(false)

  const close = useCallback(() => {
    setBookOpen(false)
    setActive(true)
  }, [setActive])

  useEffect(() => {
    if (active) return undefined

    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }

    // pointerdown covers mouse, touch and pen with one listener.
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [active, close])

  return (
    <div
      className={`boxMail boxMail--lavender ${active ? 'hidden opacity-0 pointer-events-none' : 'opacity-100 visible'}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Birthday letter for ${person.name}`}
      aria-hidden={active}
      inert={active}
    >
      <button
        type="button"
        onClick={close}
        className="crossAll"
        aria-label="Close letter"
      >
        <GiCrossMark className="text-white" aria-hidden="true" />
      </button>

      <div ref={dropdownRef} className={`boxMail-container duration-500 -translate-y-1/2 ${bookOpen ? 'book-open' : ''} ${active ? 'top-0' : ' top-1/2'}`}>
        <div
          className="card1"
          role="button"
          tabIndex={0}
          aria-label={bookOpen ? 'Close the notebook cover' : 'Open the notebook cover'}
          onClick={() => setBookOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setBookOpen((open) => !open)
            }
          }}
        >
          {/* Notebook spine */}
          <div className="notebook-spine" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Inner notebook border */}
          <div className="notebook-inner-border" aria-hidden="true" />

          {/* Cover content */}
          <div className="cover-text-wrapper">
            <span className="cover-eyebrow">{bigLetter.coverEyebrow}</span>

            <h4 className="username">
              {bigLetter.coverTo}
              <span className="underline" />
            </h4>

            <h3 className="cover-title">{bigLetter.coverTitle}</h3>

            <p className="cover-subtitle">{bigLetter.coverSubtitle}</p>
          </div>

          {/* Photo frame */}
          <div className="userImg">
            <img src={bigLetter.coverImage} alt={bigLetter.coverImageAlt} />
          </div>

          {/* Decorations */}
          <div className="cover-moon" aria-hidden="true">
            <CrescentMoon />
          </div>
          <div className="card1-decoration-sparkle" />

          <span className="notebook-tape" aria-hidden="true" />
          <span className="notebook-label" aria-hidden="true">
            {bigLetter.label}
          </span>

          <svg className="deco-shape top-right-star" viewBox="0 0 100 100" aria-hidden="true">
            <polygon
              points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
              fill="currentColor"
            />
          </svg>

          <svg className="deco-shape bottom-left-ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" />
            <circle cx="50" cy="50" r="20" fill="currentColor" opacity=".3" />
          </svg>

          <span className="cover-page-number" aria-hidden="true">01</span>
        </div>

        <div className="card2">
          <div className="card2-content">
            <h3 className="card2-recipient">
              {bigLetter.heading}
            </h3>

            <div className="card2-message-text">
              {bigLetter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {bigLetter.closing ? <p className="letter-closing">{bigLetter.closing}</p> : null}
            </div>

            <div className="card2-decoration"></div>

            <div className="corner-ribbon top-left" />
            <div className="corner-ribbon bottom-right"></div>
            <div className="confetti-dots"></div>

            <p className="signature">
              {bigLetter.signature}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCanvas
