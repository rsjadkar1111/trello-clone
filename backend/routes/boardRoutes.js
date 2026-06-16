const router = require("express").Router();
const auth = require("../middleware/auth");
const { createBoard, getBoards } = require("../controllers/boardController");

router.post("/", auth, createBoard);
router.get("/", auth, getBoards);

module.exports = router;