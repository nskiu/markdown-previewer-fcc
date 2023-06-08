import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { marked } from "marked";

const App = () => {
  const [input, setInput] = useState("test");
  return (
    <div>
      <Editor input={input} />
      <Preview />
      {marked.parse("# Marked in Node.js\n\nRendered by **marked**.")}
    </div>
  );
};

export default App;
