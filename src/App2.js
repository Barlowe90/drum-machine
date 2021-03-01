import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let audio = new Audio("./audio/si-mac.m4a");

  return (
    <div className="container" id="drum-machine">
      <h1 className="text-center">A drum machine</h1>
      <div id="display">
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark drum-pad" id="Q">
            Q<audio className="clip" id="Q"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="no">
            W<audio className="clip" id="W" src="./audio/si-mac.m4a"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="chetos">
            E<audio className="clip" id="E" src="./audio/si-mac.m4a"></audio>
          </button>
        </div>
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark drum-pad" id="maquina">
            A<audio className="clip" id="A" src="./audio/si-mac.m4a"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="lince">
            S<audio className="clip" id="S" src="./audio/si-mac.m4a"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="teRies">
            D<audio className="clip" id="D" src="./audio/si-mac.m4a"></audio>
          </button>
        </div>
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark drum-pad" id="fiera">
            Z<audio className="clip" id="Z" src="./audio/si-mac.m4a"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="si">
            X<audio className="clip" id="X" src="./audio/si-mac.m4a"></audio>
          </button>
          <button className="btn btn-dark drum-pad" id="rey">
            C<audio className="clip" id="C" src="./audio/si-mac.m4a"></audio>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
