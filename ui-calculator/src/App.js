import "./App.css";
import { Item } from "./components/item/Item";

function App() {
  const objects = [
    {
      bigValues: ["AC", "Del", "%"],
      smallValues: "/",
    },
    {
      bigValues: ["7", "8", "9"],
      smallValues: "x",
    },
    {
      bigValues: ["4", "5", "6"],
      smallValues: "+",
    },
    {
      bigValues: ["1", "2", "3"],
      smallValues: "AC",
    },
    {
      bigValues: ["0", "."],
      smallValues: "=",
    },
  ];

  return (
    <header>
      <div className="calculator-container">
        <input
          className="display-header"
          type="text"
          placeholder="468 % 2 = 234"
        ></input>
        {objects.map((object, index) => (
          <Item
            key={index}
            bigValues={object.bigValues}
            smallValues={object.smallValues}
            index={index}
          />
        ))}
      </div>
    </header>
  );
}

export default App;
