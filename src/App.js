import "bootstrap/dist/css/bootstrap.min.css";
import DrumPad from "./components/DrumPad/DrumPad";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("hola");

  return (
    <div className="container" id="drum-machine">
      <h1 className="text-center" id="display">
        {texto}
      </h1>

      <div id="drum-pads">
        {data.map((d, i) => (
          <DrumPad
            key={i}
            id={d.id}
            letter={d.letter}
            src={d.src}
            value={texto}
            onChange={(value) => setTexto(value)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
