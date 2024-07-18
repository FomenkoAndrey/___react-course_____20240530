const NonMemoComponent = ({ count }: { count: number }) => {
  console.log('Child component rendered')
  return <h2>Count: {count}</h2>
}

export default NonMemoComponent
