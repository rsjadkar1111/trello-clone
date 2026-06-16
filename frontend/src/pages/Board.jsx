import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

export default function Board() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${id}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const columns = ["todo", "doing", "done"];

  return (
    <div className="flex gap-6 p-6">
      {columns.map((col) => (
        <div key={col} className="bg-white/10 p-4 rounded-xl w-1/3">
          <h2 className="text-xl font-bold mb-4">{col.toUpperCase()}</h2>

          {tasks
            .filter((t) => t.status === col)
            .map((task) => (
              <div
                key={task._id}
                className="bg-white/20 p-3 rounded mb-3"
              >
                {task.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}