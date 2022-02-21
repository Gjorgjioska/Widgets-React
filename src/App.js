import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

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

const App = () => {
  const [selected, setSelected] = useState("options[0]");

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
