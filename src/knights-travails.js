export default function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValid(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }

  let queue = [[start]];
  let visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    let path = queue.shift();
    let [x, y] = path[path.length - 1];

    if ([x, y].toString() === end.toString()) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      return path;
    }

    for (let [dx, dy] of moves) {
      let newX = x + dx;
      let newY = y + dy;

      if (isValid(newX, newY) && !visited.has([newX, newY].toString())) {
        visited.add([newX, newY].toString());
        queue.push([...path, [newX, newY]]);
      }
    }
  }

  return [];
}
