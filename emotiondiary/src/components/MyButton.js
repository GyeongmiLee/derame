const MyButton = ({ text, type, onClick }) => {
  // type 걸러서 받아줄 변수 만들기
  const btnType = ["positive", "negative", "white"].includes(type)
    ? type
    : "default";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
