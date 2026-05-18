import { useRef } from "react";
import Chord from "./Chord";
import ChordEdit from "./ChordEdit";

function ChordSlide({ lyric, chords, addChord, deleteChord }) {
  const chordsRef = useRef(null);

  const handleAddChord = (lyricId, value) => {
    const container = chordsRef.current;
    let initialX = 0;
    if (container && container.children.length > 0) {
      const containerLeft = container.getBoundingClientRect().left;
      for (const child of container.children) {
        const right = child.getBoundingClientRect().right - containerLeft;
        if (right > initialX) initialX = right;
      }
      initialX += 4;
    }
    addChord(lyricId, value, initialX);
  };

  return (
    <div className="chord-slide">
      <div className="chords" ref={chordsRef}>
        {chords.map((chord) => (
          <Chord
            key={chord.id}
            chordId={chord.id}
            chord={chord.value}
            defaultX={chord.x}
            lyricId={lyric.id}
            deleteChord={deleteChord}
          />
        ))}
      </div>

      <ChordEdit lyric={lyric} addChord={handleAddChord} deleteChord={deleteChord} />
    </div>
  );
}

export default ChordSlide;
