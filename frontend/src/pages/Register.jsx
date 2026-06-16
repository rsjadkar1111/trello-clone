import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully!");
      navigate("/"); // go to login
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-96 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <input
          className="w-full p-3 mb-3 rounded bg-white/20"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 mb-3 rounded bg-white/20"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-white/20"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-lg"
        >
          Register
        </button>

        {/* 🔗 Back to Login */}
        <p className="text-center mt-4">
          Already have an account?
          <span
            className="text-blue-400 cursor-pointer ml-2"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}