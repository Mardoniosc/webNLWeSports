interface ButtonProperties {
  title: string;
}

function Button(props: ButtonProperties) {
  return (
    <button>
      {props.title}
    </button>);
}
function App() {
  return (
    <div>
      <Button title="Click Me 1" />
      <Button title="Click Me 2" />
      <Button title="Click Me 3" />
    </div>
  )
}

export default App;
