import Clock from "./component/Clock";

function App() {
  console.log('app component rederd');
  return (
    <div className="App">
      <Clock ></Clock>
      {/* <Clock locale="bn-BD"></Clock> */}
    </div>
  );
}

export default App;
