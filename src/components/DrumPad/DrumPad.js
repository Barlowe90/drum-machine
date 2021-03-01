export default function DrumPad({ id, letter, src }) {
  let audio = new Audio({ src });

  function handleClick() {
    audio.play();
    audio.currentTime = 0;
  }

  return (
    <div className="drum-pad" id={id} onClick={() => handleClick()}>
      <p>{letter}</p>
      <audio
        ref={(ref) => (audio = ref)}
        className="clip"
        src={src}
        id={letter}
      ></audio>
    </div>
  );
}
