import Reviewlist from "./components/ReviewList";
import items from "./mock.json";

function App() {
  return (
    <div className="App">
      <Reviewlist items={items}></Reviewlist>
    </div>
  );
}

export default App;
