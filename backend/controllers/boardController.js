const Board = require("../models/Board");

// Create Board
exports.createBoard = async (req, res) => {
    const board = new Board({
        title: req.body.title,
        userId: req.user.id
    });

    await board.save();
    res.json(board);
};

// Get Boards
exports.getBoards = async (req, res) => {
    const boards = await Board.find({ userId: req.user.id });
    res.json(boards);
};