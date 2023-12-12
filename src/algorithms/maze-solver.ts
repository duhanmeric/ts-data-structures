import { logDeep } from "../helpers/logDeep";

// 2 end
// 1 = walls
// 0 = path
// -1 = me
const maze = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

type Point = { x: number; y: number };

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export const mazeSolver = (start: Point, end: Point, curr: Point) => {
  if (curr.x === end.x && curr.y === end.y) {
    return true;
  }

  if (!isValid(curr) || maze[curr.y][curr.x] !== 0) {
    return false;
  }

  maze[curr.y][curr.x] = -1;

  for (let i = 0; i < dir.length; i++) {
    const [dy, dx] = dir[i];
    const next = { x: curr.x + dx, y: curr.y + dy };

    if (mazeSolver(start, end, next)) {
      return true;
    }
  }

  maze[curr.y][curr.x] = 0;
  return false;
};

const isValid = (point: Point): boolean => {
  return (
    point.y >= 0 &&
    point.y < maze.length &&
    point.x >= 0 &&
    point.x < maze[0].length
  );
};

const start: Point = { x: 0, y: 4 };
const end: Point = { x: 4, y: 4 };
maze[end.y][end.x] = 2;
const curr = start;

mazeSolver(start, end, curr);
logDeep(maze);
