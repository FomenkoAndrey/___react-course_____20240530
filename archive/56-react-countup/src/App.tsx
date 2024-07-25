import { useCountUp } from 'react-countup'
import { useEffect, useRef } from 'react'

const App = () => {
  const countUpRef = useRef<HTMLHeadingElement | null>(null)

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 100,
    duration: 5,
    prefix: 'EUR ',
    decimals: 2,
    decimal: '.',
    suffix: ' total',
    startOnMount: false
  })

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.textContent = 'EUR 0.00 total '
    }
  }, [])

  return (
    <div className={'countUp'}>
      <h1 ref={countUpRef} />

      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(2000)}>Update to 2000</button>

      {/*<h1>*/}
      {/*  <CountUp start={50} end={100} duration={5} prefix="EUR " decimals={2} decimal="." suffix=" total" />*/}
      {/*</h1>*/}

      {/*<CountUp start={50} end={100} />*/}

      {/*<CountUp end={100} />*/}
    </div>
  )
}

export default App
