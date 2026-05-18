import Chord from "./chord";

function ChordSlide({ chords }) {
  return (
    <div className="chord-slide">
      {chords.map((chord, index) => (
        <Chord chord={chord} key={index} index={index}></Chord>
      ))}
    </div>
  );
}

export default ChordSlide;
