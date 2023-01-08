const MyHeader = ({ leftChildren, headerText, rightChildren }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChildren}</div>
      <div className="head_text">{headerText}</div>
      <div className="head_btn_right">{rightChildren}</div>
    </header>
  );
};
export default MyHeader;
