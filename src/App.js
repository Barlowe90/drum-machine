import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container my-5" id="drum-machine">
      <div id="display">
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="senhora">
              Q
              <audio className="clip" id="Q">
                <source src="" type=""></source>
              </audio>
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="no">
              W
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="chetos">
              E
            </div>
          </button>
        </div>
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="maquina">
              A
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="lince">
              S
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="teRies">
              D
            </div>
          </button>
        </div>
        <div
          className="d-flex align-items-center justify-content-center btn-group"
          role="group"
        >
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="fiera">
              Z
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="si">
              X
            </div>
          </button>
          <button className="btn btn-dark">
            <div className="p-2 bd-highlight drum-pad" id="rey">
              C
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
