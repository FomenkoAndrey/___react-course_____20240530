interface CounterPropsInterface {
  count: number
}

const Counter = ({ count }: CounterPropsInterface) => {
  return <h1>Counter: {count}</h1>
}

export default Counter
