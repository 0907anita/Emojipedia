import React, { useState, useRef } from "react";

export default function Sidebar({ emoji, meaning }) {
  const textInputRef = useRef(null);
  const [copyState, setCopyState] = useState("Copy");
  function copyHandler() {
    textInputRef.current.select();
    document.execCommand("copy");
    // e.target.focus();
    setCopyState(() => "Copied");
    setTimeout(() => {
      setCopyState(() => "Copy");
    }, 1000);
  }
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span
          className="sidebar-header__emoji"
          role="img"
          aria-label="search-emoji"
        >
          {emoji}
        </span>
        <span className="sidebar-header__title">{meaning[0]}</span>
      </div>
      <div className="sidebar-emoji-description">{meaning[1]}</div>
      <div className="sidebar-emoji-copy">
        <input
          ref={textInputRef}
          type="text"
          name="emoji"
          value={emoji}
          readOnly
        />
        <button onClick={() => copyHandler()}>{copyState}</button>
      </div>
    </div>
  );
}
