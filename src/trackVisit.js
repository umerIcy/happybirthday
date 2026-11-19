/**
 * Tell GoatCounter about one tap. The birthday stays on a single address,
 * so the normal page counter cannot see Back, Continue, or the other buttons.
 * no_session makes a repeat tap count again.
 */
export function track(name) {
  if (typeof window === 'undefined' || !name) return

  const send = () => {
    const counter = window.goatcounter
    if (!counter || typeof counter.count !== 'function') return false
    try {
      counter.count({
        path: name,
        title: name,
        event: true,
        no_session: true,
      })
    } catch {
      return true
    }
    return true
  }

  if (send()) return

  const started = Date.now()
  const timer = window.setInterval(() => {
    if (send() || Date.now() - started > 10000) window.clearInterval(timer)
  }, 200)
}
