import { LifeState } from "../AppTypes";

const GameCell = ({ lifeState }: GameCellProps) => {
  const styles = {
    life: {
      backgroundColor: 'black'
    },
    dead: {
      backgroundColor: 'white'
    },
    cellSize: {
      height: '10px',
      width: '10px',
      display: 'inline-block'
    }
  };

  return (
    <span style={{
      ...styles.cellSize,
      ...(lifeState ? styles.life : styles.dead)
    }} ></span>
  )
}
type GameCellProps = {
  lifeState: LifeState;
};

// 
const DisplayGame = ({ gameData }: DisplayGameProps) => {
  // console.log(...gameData);
  return (
    <>
      {gameData.map((rows: LifeState[], rowIndex: number) => (
        <div key={rowIndex} style={{ display: "flex"}}>
          {rows.map((cell: LifeState, cellIndex: number) => (
            <GameCell key={cellIndex} lifeState={cell} />
          ))}
        </div>
      ))}
    </>
  );
}
type DisplayGameProps = {
  gameData: LifeState[][];
};

export default DisplayGame;