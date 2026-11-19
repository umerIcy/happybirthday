import { useEffect, useRef, useState } from 'react'
import BookCanvas from './BookCanvas'
import SmallLetter from './SmallLetter'
import TulipArt from './TulipArt'
import CrescentMoon from './CrescentMoon'
import { experience } from '../data/siteData'
import { track } from '../trackVisit'

const LetterMoment = () => {
  const [bookHidden, setBookHidden] = useState(true)
  const openTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(openTimer.current), [])

  const revealBook = () => {
    track('envelope-open')
    window.clearTimeout(openTimer.current)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    openTimer.current = window.setTimeout(() => setBookHidden(false), reduceMotion ? 0 : 700)
  }

  return (
    <section className="letter-stage" aria-labelledby="letter-heading">
      <header className="screen-copy">
        <h1 id="letter-heading">{experience.letterPrompt}</h1>
        <p>{experience.letterHint}</p>
      </header>

      <SmallLetter onOpen={revealBook} />

      <footer className="letter-end">
        <div className="letter-tulips" aria-hidden="true">
          <TulipArt palette="lilac" bloomed />
          <span className="letter-moon"><CrescentMoon /></span>
          <TulipArt palette="pink" bloomed />
        </div>
        <p className="closing-line">{experience.closingMessage}</p>
      </footer>

      <BookCanvas active={bookHidden} setActive={setBookHidden} />
    </section>
  )
}

export default LetterMoment
