import classes from "./Score.module.css";
const Score = ({ playerScores, isX }) => {
  const { xScore, oScore } = playerScores;

  return (
    <div className={classes.scoreboard}>
      <span
        className={`${classes.score} + ${classes.xscore} + ${
          !isX && classes.inActive
        }`}
      >
        X : {xScore}
      </span>
      <span
        className={`${classes.score} + ${classes.oscore} + ${
          isX && classes.inActive
        }`}
      >
        O : {oScore}
      </span>
    </div>
  );
};

export default Score;
