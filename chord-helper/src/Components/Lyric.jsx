import ChordSlide from "./ChordSlide";
import { FaEdit } from "react-icons/fa";
import LyricEdit from "./LyricEdit";

function Lyric({ lyric, toggleIsEditing, editLyric, deleteLyric }) {
  return lyric.isEditing ? (
    <LyricEdit lyric={lyric} editLyric={editLyric} deleteLyric={deleteLyric} />
  ) : (
    <div className="lyric">
      {lyric.content}
      <FaEdit
        className="lyric-edit-button"
        onClick={() => {
          toggleIsEditing(lyric.id);
        }}
      />
    </div>
  );
}

export default Lyric;
