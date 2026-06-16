import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const fetchBoards = async () => {
    const res = await API.get("/boards");
    setBoards(res.data);
  };

  const createBoard = async () => {
    await API.post("/boards", { title });
    fetchBoards();
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Boards</h1>

      <div className="flex gap-3 mb-6">
        <input
          className="p-2 rounded text-black"
          placeholder="Board Name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createBoard}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Create
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {boards.map((b) => (
          <div
            key={b._id}
            onClick={() => navigate(`/board/${b._id}`)}
            className="bg-white/10 p-6 rounded-xl cursor-pointer hover:scale-105 transition"
          >
            {b.title}
          </div>
        ))}
      </div>
    </div>
  );
}