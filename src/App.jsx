import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import placeholder from "./assets/placeholder.txt";

marked.use(mangle(), gfmHeadingId(""), { breaks: true });

const App = () => {
  const firstRunKey = Math.random().toString();
  const [input, setInput] = useState(firstRunKey);

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

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(input);
  }, [input]);

  return (
    <div id="app">
      <Editor input={input} handleChange={handleChange} />
      <Preview />
    </div>
  );
};

export default App;
