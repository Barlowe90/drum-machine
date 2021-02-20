import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container my-5" id="drum-machine">
      <div id="display">
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2 bd-highlight drum-pad" id="senhora">
            Q
          </div>
          <div className="p-2 bd-highlight drum-pad" id="tetas">
            W
          </div>
          <div className="p-2 bd-highlight drum-pad" id="chetos">
            E
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2 bd-highlight drum-pad" id="maquina">
            A
          </div>
          <div className="p-2 bd-highlight drum-pad" id="lince">
            S
          </div>
          <div className="p-2 bd-highlight drum-pad" id="ouch">
            D
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2 bd-highlight drum-pad" id="fiera">
            Z
          </div>
          <div className="p-2 bd-highlight drum-pad" id="yuhu">
            X
          </div>
          <div className="p-2 bd-highlight drum-pad" id="rey">
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
