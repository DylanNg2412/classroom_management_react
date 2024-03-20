//* Component always have a capital letter like "Button"
export default function Button(props) {
  const {
    color = "primary", // make default value for color if you forgot
    label,
    onClick,
  } = props;
  return (
    <button
      className={"btn btn-" + color + " btn-sm rounded ms-2"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
