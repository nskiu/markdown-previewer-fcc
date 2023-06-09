const Editor = ({ input, handleChange, handleClick, toggle }) => {
  return (
    <div
      className="container flex-column align-items-center editor"
      style={toggle.preview ? { display: "none" } : { display: "flex" }}
    >
      <div className="topbar d-flex justify-content-between align-items-center rounded-top editor">
        <span className="toptitle">
          <i className="fa fa-heart mx-2"></i>
          Editor
        </span>
        <button className="btn" onClick={() => handleClick("editor")}>
          {toggle.editor ? (
            <i className="fas fa-compress-alt"></i>
          ) : (
            <i className="fas fa-expand-arrows-alt"></i>
          )}
        </button>
      </div>
      <textarea
        className=" p-1 mx-auto editor"
        id="editor"
        onChange={(event) => handleChange(event.target.value)}
        value={input}
        style={toggle.editor ? { height: "85vh" } : { minHeight: "200px" }}
      ></textarea>
    </div>
  );
};

export default Editor;
