import { useRef, useState } from "react";
import Draggable from "react-draggable";

function Chord({ chord, chordId, lyricId, defaultX, deleteChord }) {
  const nodeRef = useRef(null);
  const [isDeleteZone, setIsDeleteZone] = useState(false);

  const isAtRightEdge = () => {
    const el = nodeRef.current;
    if (!el || !el.parentElement) return false;
    const chordRight = el.getBoundingClientRect().right;
    const parentRight = el.parentElement.getBoundingClientRect().right;
    return parentRight - chordRight <= 10;
  };

  const handleDrag = () => {
    setIsDeleteZone(isAtRightEdge());
  };

  const handleStop = () => {
    if (isAtRightEdge()) {
      deleteChord && deleteChord(lyricId, chordId);
      return;
    }
    setIsDeleteZone(false);
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="x"
      bounds="parent"
      defaultPosition={{ x: defaultX ?? 0, y: 0 }}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div ref={nodeRef} className={`chord${isDeleteZone ? " chord-delete" : ""}`}>
        {chord}
      </div>
    </Draggable>
  );
}

export default Chord;
