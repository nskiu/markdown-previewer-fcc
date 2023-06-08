const Editor = ({ input }) => {
  return (
    <div>
      <textarea id="editor" value={input}></textarea>
    </div>
  );
};

export default Editor;
