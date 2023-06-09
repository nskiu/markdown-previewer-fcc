import { useEffect, useState } from "react";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import Prism from "prismjs";
import placeholder from "./assets/placeholder.txt";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

marked.use(
  markedHighlight({
    langPrefix: "token",
    highlight(code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  }),
  mangle(),
  gfmHeadingId(""),
  { breaks: true }
);

const App = () => {
  const firstRunKey = Math.random().toString();
  const [input, setInput] = useState(firstRunKey);
  const [toggle, setToggle] = useState({ editor: false, preview: false });

  if (input === firstRunKey) {
    const fetchData = async () => {
      let response = await fetch(placeholder);
      response = await response.text();
      setInput(response);
    };
    fetchData();
  }

  const handleChange = (event) => {
    setInput(event);
  };

  const handleClick = (key) => {
    if (key == "editor") setToggle({ ...toggle, editor: !toggle.editor });
    if (key == "preview") setToggle({ ...toggle, preview: !toggle.preview });
  };

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(input);
  }, [input]);

  return (
    <div id="app" className="px-4 pt-4">
      <Editor
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
        toggle={toggle}
      />
      <Preview handleClick={handleClick} toggle={toggle} />
    </div>
  );
};

export default App;
