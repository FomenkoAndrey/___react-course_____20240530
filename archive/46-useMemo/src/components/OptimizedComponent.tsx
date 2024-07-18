import { useMemo, useState } from 'react'

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpensiveValue = (num: number) => {
    console.log('Початок дуже складного обчислення...')
    let value = num
    for (let i = 0; i < 1000000000; i++) {
      value += num
    }
    console.log('... закінчили')
    return value
  }

  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

  return (
    <div>
      <p>Дуже складне обчислення: {expensiveValue}</p>
      <p>Просте значення (item): {item}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити count</button>
      <button onClick={() => setItem(item + 1)}>Збільшити item</button>
    </div>
  )
}

export default OptimizedComponent
