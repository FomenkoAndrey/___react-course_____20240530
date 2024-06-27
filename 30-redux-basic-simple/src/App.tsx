const arr = [1, 2, 3]

// 1, 2 -> 3
// 1, 2 -> 3
// 1, 2 -> 3
// ! pure function
const reducer = (acc, cur) => {
  return acc + cur
}

const sum = arr.reduce(reducer, 0)

console.log(sum) // 6

const App = () => {
  return <div>App</div>
}

export default App

// const acc = 0
// // 1 (0) -> 1
// // 1 (1) -> 2
// // 1 (2) -> 3
// ~ impure function
// const reducer = (cur) => {
//   acc += cur
//   return acc
// }
