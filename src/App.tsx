import { useEffect, useState } from 'react'
import './App.css'
import DisplayGame from './Components/DisplayGame';
import { LifeState } from './AppTypes';
// Directions for 8 neighbors (including diagonals)
const directions = [
  [-1, 0],  // Up
  [1, 0],   // Down
  [0, -1],  // Left
  [0, 1],   // Right
  [-1, -1], // Top-left
  [-1, 1],  // Top-right
  [1, -1],  // Bottom-left
  [1, 1]    // Bottom-right
];

function App() {
  const m = 50, n = 70;
  const genChnageInterval = 400;
  // const [count, setCount] = useState(0)
  const generationState = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Math.random() < 0.95 ? 0 : 1)
  );

  // const generationState = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ]
  // console.log(generationState);
  const [gameData, setGameData] = useState(generationState);
  const [started, setStarted] = useState(false)
  const findNeighbours = (inputGen: LifeState [][], i: number, j: number) => {
    const neighbors = [];

    const rowLimit = inputGen.length;
    const columnLimit = inputGen[0].length;

    for (const [dx, dy] of directions) {
      const newRow = i + dx;
      const newCol = j + dy;
      // Check if the neighbor is within bounds
      if (newRow >= 0 && newRow < rowLimit && newCol >= 0 && newCol < columnLimit) {
        neighbors.push(inputGen[newRow][newCol]);
      }
    }
    return neighbors;

  }
  const calculcateNextGen = (inputGen : LifeState [] []) : LifeState [][] => {
    const nextGeneration: LifeState[][] = inputGen.map((row, i) =>
      row.map((cell, j) => {
        const neighbours = findNeighbours(inputGen, i, j);
        return applyRules(cell, neighbours);
      })
    );
    return nextGeneration;
  }
  const applyRules = (life: LifeState, neigbours: number[]) : LifeState => {
    const aliveCount = neigbours.reduce((acc: number, value: number) => acc + value, 0);

    if (life && aliveCount < 2) {
      return 0
    } else if (life && aliveCount >= 2 && aliveCount <= 3) {
      return 1
    } else if (life && aliveCount > 3) {
      return 0
    } else if (!life && aliveCount >= 3) {
      return 1
    }
    return life;
  };
  useEffect(() => {
    if (started) {
      const intervalId = setInterval(() => {
        setGameData((prevState) => {
          return calculcateNextGen(prevState);
        });
      }, genChnageInterval);
      return () => {        
        clearInterval(intervalId);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, genChnageInterval ]);  

  return (
    <>
      <h1>Conway's Game of Life</h1>
      <p> This displays a matrix of {m} rows & {n} cols, as black cell represeting life's and white as dead's. </p>
       <p> At every {genChnageInterval / 1000} sec , the matrix is updated to represent the next generation based on
        <a target='_blank' href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>
        Conway's rule </a>.</p>
      <div className='card' style={{ border: '3px solid teal' }}>
        <DisplayGame key={gameData.toString()} gameData={gameData} />
      </div>
      <div className="card">
        <button onClick={() => setStarted((prevState) => !prevState)}>
          {started ? 'Pause Game' : 'Start Game'}
        </button>
      </div>
    </>
  )
}

export default App
