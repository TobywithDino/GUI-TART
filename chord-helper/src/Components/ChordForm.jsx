import { useState } from "react";

const ROOTS = ["C", "D", "E", "F", "G", "A", "B"];

const SLASH_SECTIONS = [
  { title: "C",  chords: ["C/E", "C/G", "C/B"] },
  { title: "D",  chords: ["D/F#", "D/A", "D/C"] },
  { title: "E",  chords: ["E/G#", "E/B", "E/D"] },
  { title: "F",  chords: ["F/A", "F/C", "F/E"] },
  { title: "G",  chords: ["G/B", "G/D", "G/F", "G/F#"] },
  { title: "A",  chords: ["A/C#", "A/E", "A/G"] },
  { title: "B",  chords: ["B/D#", "B/F#", "B/A"] },
  { title: "小調", chords: ["Am/C", "Am/E", "Am/G", "Em/G", "Em/B", "Em/D", "Dm/F", "Dm/A", "Dm/C"] },
];

const TABS = [
  {
    id: "major",
    label: "大調",
    sections: [
      { title: null, chords: ROOTS },
    ],
  },
  {
    id: "minor",
    label: "小調",
    sections: [
      { title: null, chords: ROOTS.map((r) => `${r}m`) },
    ],
  },
  {
    id: "seventh",
    label: "七和弦",
    sections: [
      { title: "屬七", chords: ROOTS.map((r) => `${r}7`) },
      { title: "大七", chords: ROOTS.map((r) => `${r}maj7`) },
      { title: "小七", chords: ROOTS.map((r) => `${r}m7`) },
    ],
  },
  {
    id: "slash",
    label: "分數",
    sections: SLASH_SECTIONS,
  },
  {
    id: "others",
    label: "其他",
    sections: [
      {
        title: "掛留",
        chords: [
          ...ROOTS.map((r) => `${r}sus2`),
          ...ROOTS.map((r) => `${r}sus4`),
        ],
      },
      {
        title: "增減",
        chords: [
          ...ROOTS.map((r) => `${r}aug`),
          ...ROOTS.map((r) => `${r}dim`),
        ],
      },
    ],
  },
];

function ChordForm({ onSelect }) {
  const [activeTab, setActiveTab] = useState("major");

  const activeTabData = TABS.find((t) => t.id === activeTab);

  return (
    <div className="chord-form">
      <div className="chord-form-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`chord-form-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="chord-form-body">
        {activeTabData.sections.map((section, i) => (
          <div key={i} className="chord-form-section">
            {section.title && (
              <div className="chord-form-section-title">{section.title}</div>
            )}
            <div className="chord-form-grid">
              {section.chords.map((chord) => (
                <button
                  key={chord}
                  className="chord-chip"
                  onClick={() => onSelect && onSelect(chord)}
                >
                  {chord}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChordForm;
