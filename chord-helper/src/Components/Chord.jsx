import { useRef } from "react";
import Draggable from "react-draggable";

function Chord({ chord, index }) {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef} axis="x" bounds="parent">
      <div ref={nodeRef} className="chord">
        {chord}
      </div>
    </Draggable>
  );
}

export default Chord;
