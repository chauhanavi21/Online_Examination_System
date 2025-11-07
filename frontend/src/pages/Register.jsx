import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ Username: "", psw: "", gender: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert("Registered successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input name="Username" placeholder="Username" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="psw" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="gender" placeholder="Gender" onChange={handleChange} className="w-full border p-2 mb-4" />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
