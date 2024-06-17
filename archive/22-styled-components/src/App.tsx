import styled from 'styled-components'

const Button = styled.button`
  background-color: tomato;
  color: white;
  padding: 10px 20px;
`

const Header = styled.header`
  background-color: darkblue;
  color: white;
  padding: 30px;
  text-align: center;
`

const App = () => {
  return (
    <div>
      <Header>Це заголовок</Header>
      <Button>Це кнопка</Button>
    </div>
  )
}

export default App
