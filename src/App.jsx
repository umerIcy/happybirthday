import { useEffect, useRef, useState } from 'react'
import './App.css'
import './BookCanvas.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import OpeningAnimation from './components/OpeningAnimation'
import { track } from './trackVisit'

// The cake drawing needs a few seconds. These timings let it finish, then move on.
const OPENING_TIMINGS = {
  animateOutAtMs: 4700,
  showContentAtMs: 4950,
  hideLoaderAtMs: 5400,
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='*' element={<Home />} />
  </Route>
))

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [animateOut, setAnimateOut] = useState(false)
  const timers = useRef([])

  const skipOpening = () => {
    track('opening-skip')
    timers.current.forEach((timer) => window.clearTimeout(timer))
    setAnimateOut(true)
    timers.current = [
      window.setTimeout(() => setShowContent(true), 160),
      window.setTimeout(() => setLoading(false), 620),
    ]
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timings = reduced
      ? { animateOutAtMs: 280, showContentAtMs: 420, hideLoaderAtMs: 700 }
      : OPENING_TIMINGS

    const startLoader = () => {
      timers.current = [
        window.setTimeout(() => setAnimateOut(true), timings.animateOutAtMs),
        window.setTimeout(() => setShowContent(true), timings.showContentAtMs),
        window.setTimeout(() => setLoading(false), timings.hideLoaderAtMs),
      ]
    }

    if (document.readyState === 'complete') {
      startLoader()
    } else {
      window.addEventListener('load', startLoader, { once: true })
    }

    return () => {
      window.removeEventListener('load', startLoader)
      timers.current.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  return (
    <>
      {loading && <OpeningAnimation animateOut={animateOut} onSkip={skipOpening} />}
      {showContent && <RouterProvider router={router} />}
    </>
  )
}

export default App
