import classes from "./Box.module.css";
const Box = ({ value, onClick }) => {
  const style =
    value === "X"
      ? `${classes.box} + ${classes.x}`
      : `${classes.box} + ${classes.o}`;
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;
