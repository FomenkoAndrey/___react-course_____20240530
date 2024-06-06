function randomizer(from = 0, to = 100) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

export default randomizer
