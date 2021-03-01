import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DrumPad from "./components/DrumPad/DrumPad";
import { data } from "./data";

function App() {
  const [texto, setTexto] = useState("hola");

  return (
    <div className="container" id="drum-machine">
      <h1 className="text-center" id="display">
        {texto}
      </h1>
      <div id="drum-pads">
        {data.map((d) => (
          <DrumPad id={d.id} letter={d.letter} src={d.src} />
        ))}
      </div>
    </div>
  );
}

export default App;
