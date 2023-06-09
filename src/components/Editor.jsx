const Editor = ({ input, handleChange }) => {
  return (
    <div
      className="container d-flex flex-column align-items-center mt-4"
      id="editordiv"
    >
      <div className="topbar d-flex justify-content-between align-items-center rounded-top">
        <span className="toptitle">
          <i className="fa fa-heart mx-2"></i>
          Editor
        </span>
        <button className="btn ">
          <i className="fa fa-arrows-alt"></i>
        </button>
      </div>
      <textarea
        className=" p-1 mx-auto"
        id="editor"
        onChange={(event) => handleChange(event.target.value)}
        value={input}
      ></textarea>
    </div>
  );
};

export default Editor;
