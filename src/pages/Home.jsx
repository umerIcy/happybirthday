import { useState } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import TulipGarden from '../components/TulipGarden'
import CheesecakeSurprise from '../components/CheesecakeSurprise'
import LetterMoment from '../components/LetterMoment'
import { experience } from '../data/siteData'
import '../Journey.css'

const STEPS = ['welcome', 'garden', 'cheesecake', 'letter']

const Home = () => {
  const [step, setStep] = useState('welcome')
  const index = STEPS.indexOf(step)

  return (
    <main className="journey">
      <p className="sr-only">
        {`Step ${index + 1} of ${STEPS.length}`}
      </p>

      {index > 0 && (
        <button
          type="button"
          className="journey-back"
          onClick={() => setStep(STEPS[index - 1])}
        >
          {experience.backLabel}
        </button>
      )}

      <div key={step} className={`journey-screen ${step === 'welcome' ? 'is-welcome' : ''}`}>
        {step === 'welcome' && <WelcomeScreen onOpen={() => setStep('garden')} />}
        {step === 'garden' && <TulipGarden onContinue={() => setStep('cheesecake')} />}
        {step === 'cheesecake' && <CheesecakeSurprise onContinue={() => setStep('letter')} />}
        {step === 'letter' && <LetterMoment />}
      </div>
    </main>
  )
}

export default Home
