const App = ({ initialButtonText, initialClassesList }) => {
  // const { initialButtonText, initialClassesList } = props;

  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classList, setClassList] = React.useState(initialButtonText);

  const onClickHandler = () => {
    setButtonText(`React clicked! ${Math.floor(Math.random() * 100)}`);
    setClassList("btn-info");
  };

  return (
    <div>
      <h1>Hello First React App!</h1>
      <button id="button" onClick={onClickHandler} className={classList}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click new Text" initialClassesList="" />);
