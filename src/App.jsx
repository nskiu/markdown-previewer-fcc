import { useEffect, useState } from "react";
import { marked } from "marked";
import { markedUse } from "./assets/markeduse";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import placeholder from "./assets/placeholder.txt";

markedUse();
let loading = true;

const App = () => {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState({ editor: false, preview: false });

  if (loading) {
    const fetchData = async () => {
      let response = await fetch(placeholder);
      response = await response.text();
      setInput(response);
      loading = false;
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
