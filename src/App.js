import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import Translate from "./components/Translate";

const items = [
  {
    title: " What is React?",
    content: "React is a front-end JavaScript framework",
  },
  {
    title: "Why we use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components ",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === " /list") {
    return <Search />;
  }
};

const showDropDown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};
const App = () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropDown()}
      {showTranslate()}
    </div>
  );
};

export default App;
