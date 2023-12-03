import { useState,useMemo } from "react";
import { findNthPrime } from "../utils/Helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  console.log("Render");
//   const prime = findNthPrime(text);
  const prime=useMemo(() => findNthPrime(text),[text]);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-50 text-black"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div>
        <h1>nthPrime:{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
