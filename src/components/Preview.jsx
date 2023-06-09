const Preview = () => {
  return (
    <div>
      <div className="topbar d-flex justify-content-between align-items-center rounded-top">
        <span className="toptitle">
          <i className="fa fa-heart mx-2"></i>
          Preview
        </span>
        <button className="btn">
          <i className="fa fa-arrows-alt"></i>
        </button>
      </div>
      <div id="preview"></div>
    </div>
  );
};

export default Preview;
