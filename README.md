# Conway's Game of Life

Conway's Game of Life is a React-based implementation of the famous cellular automaton devised by mathematician John Conway. This project visualizes the evolution of cells on a grid based on simple rules, providing an interactive and dynamic simulation experience.


## Demo
![10 Sec Demo](/src/assets/conway_demo.gif)

## Features

- **Dynamic Grid:** Displays a grid of cells, where each cell can be alive (black) or dead (white).
- **Interactive Simulation:** Start, pause, and resume the simulation to observe generations evolve.
- **Customizable Rules:** Implements Conway's rules for cell survival, death, and reproduction.
- **Responsive UI:** Built with React and TypeScript for a seamless user experience.

## Technologies Used

- **React**: UI library for creating dynamic components.
- **TypeScript**: Adds type safety and improves development productivity.
- **Vite**: Blazing fast development build tool.
- **CSS**: For styling the grid and UI components.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/conways-game-of-life.git
   cd conways-game-of-life 
   ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open Browser

    ```bash
    http://localhost:5173
    ```

### Usage

- **Start Game**: Click the "Start Game" button to begin the simulation. The grid updates every set interval, displaying the next generation.
- **Pause Game**: Click "Pause Game" to halt the simulation and observe the current state.

### Acknowledgments

Inspired by [Conway's Game of Life.](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
