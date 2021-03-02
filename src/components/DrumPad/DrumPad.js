import { useEffect } from "react";

export default function DrumPad(props) {
  let audio = new Audio(props.src);

  useEffect(() => {
    window.addEventListener("keydown", keyClickHandle);
    return () => {
      window.removeEventListener("keydown", keyClickHandle);
    };
  }, [keyClickHandle]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function keyClickHandle(e) {
    if (e.key.toUpperCase() === props.letter) {
      audio.play();
      audio.currentTime = 0;
      props.onChange(props.id);
    }
  }

  function handleClick() {
    audio.play();
    audio.currentTime = 0;
    props.onChange(props.id);
  }

  return (
    <div
      className="drum-pad d-flex justify-content-center btn-primary"
      id={props.id}
      onClick={handleClick}
    >
      <p>{props.letter}</p>
      <audio
        ref={(ref) => (audio = ref)}
        className="clip"
        src={props.src}
        id={props.letter}
        value={props.texto}
      ></audio>
    </div>
  );
}
