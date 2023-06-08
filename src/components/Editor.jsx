const Editor = ({ input, handleChange }) => {
  return (
    <div>
      <textarea
        id="editor"
        onChange={(event) => handleChange(event.target.value)}
        value={input}
      ></textarea>
    </div>
  );
};

export default Editor;
