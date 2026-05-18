import { useState } from "react";

function LyricEdit({ lyric, editLyric }) {
  const [content, setContent] = useState(lyric.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      editLyric(lyric.id, content);
    }
  };

  return (
    <form className="lyrics-edit" onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      ></input>
      <button>保存</button>
    </form>
  );
}

export default LyricEdit;
