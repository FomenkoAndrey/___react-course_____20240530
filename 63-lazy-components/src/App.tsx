import { FC, lazy, Suspense } from 'react'

const LazyComponent = lazy(() => {
  return new Promise<{ default: FC }>((resolve) => {
    setTimeout(() => {
      import('./components/LazyComponent.tsx').then((module) => {
        resolve({ default: module.default })
      })
    }, 2000)
  })
})

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Завантаження</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App
