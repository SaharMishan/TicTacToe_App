import classes from "./ResetButton.module.css";
const ResetButton = ({ resetBoard }) => {
  return (
    <button className={classes.resetBtn} onClick={resetBoard}>
      Reset
    </button>
  );
};

export default ResetButton;
