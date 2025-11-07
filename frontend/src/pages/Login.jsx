import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ Username: "", psw: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input name="Username" placeholder="Username" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="psw" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 mb-4" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
