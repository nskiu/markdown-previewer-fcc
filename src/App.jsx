import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { marked } from "marked";

const App = () => {
  const [input, setInput] = useState("test");
  const handleChange = (event) => {
    setInput(event);
  };
  return (
    <div id="app">
      <Editor input={input} handleChange={handleChange} />
      <Preview input={input} />
    </div>
  );
};

export default App;
