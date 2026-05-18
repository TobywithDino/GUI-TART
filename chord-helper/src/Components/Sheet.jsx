import { useState } from "react";

import LyricForm from "./LyricForm";
import Lyric from "./Lyric";
import ChordSlide from "./ChordSlide";

const estimateWidth = (v) => v.length * 12 + 16;

function buildInitialChords(values) {
  let x = 0;
  return values.map((v) => {
    const chord = { id: Math.random(), value: v, x };
    x += estimateWidth(v) + 4;
    return chord;
  });
}

function Sheet() {
  const [lyrics, setLyric] = useState([
    {
      content: "記得那天太陽壓著平原 風慢慢吹 沒有人掉眼淚",
      isEditing: false,
      id: Math.random(),
      chords: buildInitialChords(["Am", "C"]),
    },
    {
      content: "一切好美 好到我可以不用說話",
      isEditing: false,
      id: Math.random(),
      chords: buildInitialChords(["D", "G"]),
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

  const addChord = (lyricId, chordValue, initialX = 0) => {
    setLyric(
      lyrics.map((lyric) =>
        lyric.id === lyricId
          ? {
              ...lyric,
              chords: [
                ...lyric.chords,
                { id: Math.random(), value: chordValue, x: initialX },
              ],
            }
          : lyric,
      ),
    );
  };

  const deleteChord = (lyricId, chordId) => {
    setLyric(
      lyrics.map((lyric) =>
        lyric.id === lyricId
          ? { ...lyric, chords: lyric.chords.filter((c) => c.id !== chordId) }
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
            <div key={lyric.id}>
              <ChordSlide
                lyric={lyric}
                chords={lyric.chords}
                addChord={addChord}
                deleteChord={deleteChord}
              />
              <Lyric
                lyric={lyric}
                toggleIsEditing={toggleIsEditing}
                editLyric={editLyric}
                deleteLyric={deleteLyric}
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
