import React from "react";
import Footer from "./Footer";
import logo from "../images/book.svg";


export default function Menu({ type, setType, setEmoji, database }) {
  function getClass(emojiType) {
    if (type === emojiType) {
      return "category category-active";
    } else {
      return "category";
    }
  }
  function menuClickHandler(emojiType) {
    setType(emojiType);
    setEmoji(Object.keys(database[emojiType])[0]);
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <span className="logo-img">
          <img src={logo} alt="logo" />
        </span>
        <span className="logo-text">Emoji Dictionary</span>
      </div>
      <div className="menu-content">
        {Object.keys(database).map((emojiType) => {
          return (
            <div
              onClick={() => menuClickHandler(emojiType)}
              className={getClass(emojiType)}
              key={emojiType}
              role={emojiType}
            >
              <span
                className="category-icon"
                role="img"
                aria-label="smiley category emoji"
              >
                {Object.keys(database[emojiType])[0]}
              </span>
              <span className="category-name">{emojiType}</span>
            </div>
          );
        })}
</div>
      <Footer flag={"desk"} />
    </div>
  );
}
