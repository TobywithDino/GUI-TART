import ChordSlide from "./ChordSlide";
import { FaEdit } from "react-icons/fa";
import LyricEdit from "./LyricEdit";

function Lyric({ lyric, toggleIsEditing, editLyric }) {
  return lyric.isEditing ? (
    <LyricEdit lyric={lyric} editLyric={editLyric} />
  ) : (
    <div className="lyric">
      {lyric.content}
      <FaEdit
        className="edit-button"
        onClick={() => {
          toggleIsEditing(lyric.id);
        }}
      />
    </div>
  );
}

export default Lyric;
