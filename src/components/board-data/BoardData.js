const BoardData = {
  content: [
    {
      id: 1,
      difficulty: "hard",
      size: "8x8", // const [w, h] = size.split('x').map((value) => parseInt(value))
      labels: {
        row: [6, 3, undefined, 4, 3, 4, 3, 4],
        column: [
          undefined,
          4,
          4,
          undefined,
          5,
          undefined,
          4,
          undefined,
          undefined
        ]
      },
      // TODO: reframe each shape into seperate field. Field should contain (x, y) data
      board: [
        ["a", "b", "b", "b", "b", "c", "c", "d"],
        ["a", "e", "e", "e", "b", "d", "d", "d"],
        ["f", "f", "f", "e", "g", "g", "g", "h"],
        ["f", "e", "e", "e", "g", "i", "g", "h"],
        ["j", "e", "k", "k", "g", "i", "g", "h"],
        ["j", "e", "e", "e", "g", "i", "g", "l"],
        ["m", "n", "n", "o", "g", "g", "g", "l"],
        ["m", "m", "o", "o", "o", "p", "p", "p"]
      ],
      shapes: [
        [
          [0, 0],
          [1, 0],
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4]
        ],
        [
          [2, 0],
          [3, 0],
          [4, 0]
        ],
        [
          [5, 0],
          [4, 1],
          [5, 1],
          [6, 1],
          [5, 2]
        ],
        [
          [6, 0],
          [7, 0],
          [7, 1],
          [6, 2],
          [7, 2]
        ],
        [
          [1, 1],
          [2, 1],
          [3, 1],
          [1, 2],
          [3, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [1, 4],
          [2, 4],
          [1, 5],
          [1, 6]
        ],
        [[2, 2]],
        [[4, 2]],
        [
          [4, 3],
          [5, 3],
          [6, 3],
          [4, 4],
          [4, 5],
          [4, 6],
          [4, 7],
          [5, 7],
          [6, 7]
        ],
        [
          [7, 3],
          [7, 4],
          [6, 5],
          [7, 5]
        ],
        [[3, 4]],
        [
          [5, 4],
          [6, 4],
          [5, 5],
          [5, 6],
          [6, 6],
          [7, 6],
          [7, 7]
        ],
        [
          [0, 5],
          [0, 6]
        ],
        [
          [2, 5],
          [2, 6],
          [2, 7],
          [3, 7]
        ],
        [
          [3, 5],
          [3, 6]
        ],
        [
          [0, 7],
          [1, 7]
        ]
      ]
      // TODO: BoardData should contain the completed board state for validation/completion checks
    },
    {
      id: 2,
      difficulty: "easy",
      size: "8x8",
      labels: {}
    }
  ],
  meta: ""
};

export default BoardData;
