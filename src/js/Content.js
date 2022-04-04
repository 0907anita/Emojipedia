import React, { useState } from "react";
import Footer from "./Footer";

export default function Content({
  type,
  setType,
  emoji,
  setEmoji,
  meaning,
  setMeaning,
  database,
}) {
  const [query, setQuery] = useState("");
  const emojiCategories = Object.keys(database);
  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    setMeaning(database[type][emoji]);
  }
  function emojiInputHandler(e) {
    // if (e.target.value in database[type]) {
    //   setEmoji(e.target.value);
    //   setMeaning(database[type][e.target.value]);
    // }
    let temp = e.target.value.trim();
    setQuery(e.target.value);
    setQuery(temp);
    // console.log(e.target.value);
    // console.log(e.target.value.trim());
    emojiCategories.forEach((category) => {
      // if (e.target.value in database[category]) {
      if (temp in database[category]) {
        // setEmoji(e.target.value);
        setEmoji(temp);
        // setMeaning(database[category][e.target.value]);
        setMeaning(database[category][temp]);
        setType(category);
      }
    });
  }

  //! improve search function---------------------------------------------------------------
  function emojiSearch() {
    if (query !== "") {
      emojiCategories.forEach((category) => {
        const emojis = Object.keys(database[category]);
        emojis.forEach((emoji) => {
          // const splitStr = database[category][emoji][0].toLowerCase().split(" ");
          if (database[category][emoji][0].toLowerCase().includes(query)) {
            setEmoji(emoji);
            setType(category);
            setMeaning(database[category][emoji]);
          }
        });
      });
    }
  }

  return (
    <div className="content">
      <div className="content-header">{type}</div>
      <div className="search">
        <input
          onChange={emojiInputHandler}
          type="text"
          name="emoji"
          placeholder="Enter emoji..."
        />
        <button onClick={() => emojiSearch()} type="submit">
          Search
        </button>
      </div>
      <div className="meaning">
        <span className="row">
          Meaning(
          <span
            className="query"
            role="img"
            aria-label="searched emoji or query"
          >
            {emoji}
          </span>
          ):&nbsp;
        </span>
        <span className="row">
          <span className="result">{meaning[0]}</span>
        </span>
      </div>
      <div className="category-emojis">
        {/* <div className="emoji"><span role="img" aria-label="emoji">😀</span></div> */}
        {Object.keys(database[type]).map((emoji) => (
          <div
            onClick={() => emojiClickHandler(emoji)}
            className="emoji"
            key={emoji}
            role={emoji}
          >
            <span role="img" aria-label="emoji">
              {emoji}
            </span>
          </div>
        ))}
        {/* {emojis.map((emoji) => (
          <div className="emoji" key={emoji}>
            <span role="img" aria-label="emoji">
              {emoji}
            </span>
          </div>
        ))} */}
      </div>
      <Footer flag={"mobile"} />
    </div>
  );
}
