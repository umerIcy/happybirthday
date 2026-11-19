import { useEffect, useState } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import TulipGarden from '../components/TulipGarden'
import CheesecakeSurprise from '../components/CheesecakeSurprise'
import LetterMoment from '../components/LetterMoment'
import { experience } from '../data/siteData'
import { track } from '../trackVisit'
import '../Journey.css'

const STEPS = ['welcome', 'garden', 'cheesecake', 'letter']

let welcomeTracked = false

const Home = () => {
  const [step, setStep] = useState('welcome')
  const index = STEPS.indexOf(step)

  useEffect(() => {
    if (welcomeTracked) return
    welcomeTracked = true
    track('screen-welcome')
  }, [])

  const go = (next, action) => {
    track(`${action}-${next}`)
    setStep(next)
  }

  return (
    <main className="journey">
      <p className="sr-only">
        {`Step ${index + 1} of ${STEPS.length}`}
      </p>

      {index > 0 && (
        <button
          type="button"
          className="journey-back"
          onClick={() => go(STEPS[index - 1], 'back')}
        >
          {experience.backLabel}
        </button>
      )}

      <div key={step} className={`journey-screen ${step === 'welcome' ? 'is-welcome' : ''}`}>
        {step === 'welcome' && <WelcomeScreen onOpen={() => go('garden', 'open')} />}
        {step === 'garden' && <TulipGarden onContinue={() => go('cheesecake', 'continue')} />}
        {step === 'cheesecake' && <CheesecakeSurprise onContinue={() => go('letter', 'continue')} />}
        {step === 'letter' && <LetterMoment />}
      </div>
    </main>
  )
}

export default Home
