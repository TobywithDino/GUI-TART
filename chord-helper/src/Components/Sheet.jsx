import { useState } from "react";

import LyricForm from "./LyricForm";
import Lyric from "./Lyric";
import ChordSlide from "./ChordSlide";

function Sheet() {
  const [lyrics, setLyric] = useState([
    {
      content: "記得那天太陽壓著平原 風慢慢吹 沒有人掉眼淚",
      isEditing: false,
      id: Math.random(),
      chords: ["Am", "C"],
    },
    {
      content: "一切好美 好到我可以不用說話",
      isEditing: false,
      id: Math.random(),
      chords: ["D", "G"],
    },
  ]);

  const toggleIsEditing = (lyricId) => {
    setLyric(
      lyrics.map((lyric) =>
        lyric.id === lyricId
          ? { ...lyric, isEditing: !lyric.isEditing }
          : lyric,
      ),
    );
  };

  const addLyric = (content) => {
    setLyric([
      ...lyrics,
      { content, isEditing: false, id: Math.random(), chords: [] },
    ]);
  };

  const addChord = (lyricId, chord) => {
    setLyric(
      lyrics.map((lyric) =>
        lyric.id === lyricId
          ? { ...lyric, chords: [...lyric.chords, chord] }
          : lyric,
      ),
    );
  };

  const editLyric = (lyricId, newContent) => {
    setLyric(
      lyrics.map((lyric) =>
        lyric.id === lyricId
          ? { ...lyric, content: newContent, isEditing: false }
          : lyric,
      ),
    );
  };

  const deleteLyric = (lyricId) => {
    setLyric(lyrics.filter((lyric) => lyric.id !== lyricId));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Chord Helper</h1>
      <div className="sheet">
        {lyrics.map((lyric) => {
          return (
            <div>
              <ChordSlide chords={lyric.chords} />
              <Lyric
                key={lyric.id}
                lyric={lyric}
                toggleIsEditing={toggleIsEditing}
                editLyric={editLyric}
              />
            </div>
          );
        })}
        <LyricForm addLyric={addLyric} />
      </div>
    </div>
  );
}

export default Sheet;
