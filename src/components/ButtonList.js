import React from "react";
import Button from "./Button";

const ButtonList = () => {
  // Array of button names
  const buttonNames = [
    "All",
    "Trending",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Comedy",
    "Movies",
  ];

  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
