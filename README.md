![♞Knights Travails](assets/banner.png)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Make & Leave Project](https://img.shields.io/badge/Make%20%26%20Leave-Project-blue?style=for-the-badge)

# Knight's Travails - Chessboard Path Finder

This project implements a function `knightMoves` to find the shortest path a knight takes on a chessboard to move from a starting position to a target position. The chessboard is represented as an 8x8 grid, and the knight can move in an "L" shape: two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular.

## Problem Description

Given a starting position and a target position on a chessboard, the function finds the shortest path the knight takes to move from the start to the target, outputting all squares the knight visits along the way.

### Example Usage:

```javascript
knightMoves([0, 0], [1, 2]);
// Output: [[0, 0], [2, 1], [1, 2]]

knightMoves([0, 0], [3, 3]);
// Output: [[0, 0], [2, 1], [3, 3]] or another valid shortest path
```


## Features
- **Shortest Path**: The function returns the shortest path the knight takes to reach the target square.
- **Graph Representation**: The chessboard is modeled as a graph, where each square is a node, and the knight's moves are the edges between them.
- **Breadth-First Search (BFS)**: BFS is used to guarantee the shortest path is found.

## Installation

To use the `knightMoves` function, simply clone the repository or add the `knightMoves.js` file to your project.

1. Clone the repository:
    ```bash
    git clone git@github.com:TEKKSUNN/odin-knights-travails.git
    ```

2. Navigate to the project directory:
    ```bash
    cd odin-knights-travails
    ```

3. Install dependencies (if you want to run tests):
    ```bash
    npm install
    ```

4. Add `knights-travails.js` to your project and import it where needed:
    ```javascript
    import knightMoves from './knights-travails';
    ```

## Running Tests

This project includes Jest tests to verify the correctness of the `knightMoves` function. To run the tests, ensure you have Jest installed and then execute:

```bash
npm test
```

, then press A.

## Function Signature:

```javascript
knightMoves(start: [number, number], end: [number, number]) => [number, number][]
```

### Arguments:

- `start`: The starting position on the chessboard, represented as an array `[x, y]` where `x` and `y` are between 0 and 7.

- `end`: The target position on the chessboard, represented as an array `[x, y]` where `x` and `y` are between 0 and 7.

### Returns:

- An array of coordinates representing the shortest path the knight takes from the start to the end.

## Example:

```javascript
console.log(knightMoves([0, 0], [1, 2])); // Output: [[0, 0], [2, 1], [1, 2]]

console.log(knightMoves([3, 3], [0, 0])); // Output: [[3, 3], [2, 1], [0, 0]]
```

# Contributing

Feel free to fork the project and submit issues or pull requests if you have suggestions or improvements.

# License

This project is open-source and licensed under the [MIT License](LICENSE).
