const Preview = ({ handleClick, toggle }) => {
  return (
    <div style={toggle.editor ? { display: "none" } : {}}>
      <div className="topbar d-flex justify-content-between align-items-center rounded-top">
        <span className="toptitle">
          <i className="fa fa-heart mx-2"></i>
          Preview
        </span>
        <button className="btn" onClick={() => handleClick("preview")}>
          {toggle.preview ? (
            <i className="fas fa-compress-alt"></i>
          ) : (
            <i className="fas fa-expand-arrows-alt"></i>
          )}
        </button>
      </div>
      <div id="preview"></div>
    </div>
  );
};

export default Preview;
