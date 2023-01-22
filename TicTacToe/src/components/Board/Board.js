import classes from "./Board.module.css";
import Box from "../Box/Box";
const Board = ({ board, onClick }) => {
  return (
    <div className={classes.board}>
      {board.map((value, index) => {
        return (
          <Box
            value={value}
            key={index}
            onClick={() => value === null && onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
