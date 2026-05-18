import { useState } from "react";

function LyricEdit({ lyric, editLyric, deleteLyric }) {
  const [content, setContent] = useState(lyric.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      editLyric(lyric.id, content);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteLyric(lyric.id);
  };

  return (
    <form className="lyrics-edit">
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      ></input>
      <button onClick={handleSubmit}>保存</button>
      <button onClick={handleDelete}>刪除</button>
    </form>
  );
}

export default LyricEdit;
