import './App.css';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseTwoCounter from "./components/IncreaseTwoCounter"


function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseTwoCounter></IncreaseTwoCounter>
    </div>
  );
}

export default App;
