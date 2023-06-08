import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { marked } from "marked";

const App = () => {
  const [input, setInput] = useState("test");
  return (
    <div id="app">
      <Editor input={input} />
      <Preview />
    </div>
  );
};

export default App;
