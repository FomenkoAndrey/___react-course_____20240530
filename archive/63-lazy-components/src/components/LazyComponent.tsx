import { FC } from 'react'

const LazyComponent: FC = () => {
  return (
    <div>
      <h2>Це лейзі компонент!</h2>
      <p>Цей компонент був завантажений динамічно.</p>
    </div>
  )
}

export default LazyComponent
