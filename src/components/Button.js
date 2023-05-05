const Button = ({ handleClick, buttonId, content }) => {
  //const { handleClick, buttonId, content} = props
  return (
    <button onClick={handleClick} id={buttonId}>
      {content}
    </button>
  );
};

export default Button;
