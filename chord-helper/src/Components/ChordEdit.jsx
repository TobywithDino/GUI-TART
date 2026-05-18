import { IoIosAddCircle } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import ChordForm from "./ChordForm";

function ChordEdit({ lyric, addChord }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(chord) {
    addChord && addChord(lyric.id, chord);
    setIsOpen(false);
  }

  return (
    <div className="chord-edit" ref={ref}>
      <IoIosAddCircle
        className="chord-slide-button"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <ChordForm onSelect={handleSelect} />}
    </div>
  );
}

export default ChordEdit;
