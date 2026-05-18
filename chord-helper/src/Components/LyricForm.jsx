import { useState } from "react";

function LyricForm({ addLyric }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      addLyric(content);
      setContent("");
    }
  };

  return (
    <form className="lyrics-form" onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        placeholder="輸入歌詞"
      ></input>
      <button>送出</button>
    </form>
  );
}

export default LyricForm;
