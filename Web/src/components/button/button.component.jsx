import "./button.styles.scss";

const CLASS_TYPES = {
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${CLASS_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
