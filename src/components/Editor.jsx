const Editor = ({ input, handleChange }) => {
  return (
    <div>
      <textarea
        className="rounded"
        id="editor"
        onChange={(event) => handleChange(event.target.value)}
        value={input}
      ></textarea>
    </div>
  );
};

export default Editor;
