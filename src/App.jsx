import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

const App = () => {
  const [input, setInput] = useState("test \ntest");
  const handleChange = (event) => {
    setInput(event);
  };

  marked.use(mangle(), gfmHeadingId(""), { breaks: true });

  useEffect(() => {
    const markedInput = marked.parse(input);
    document.getElementById("preview").innerHTML = markedInput;
  });

  return (
    <div id="app">
      <Editor input={input} handleChange={handleChange} />
      <Preview />
    </div>
  );
};

export default App;
