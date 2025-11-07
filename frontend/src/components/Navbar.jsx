import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">A-EYE Proctor</h1>
      <div className="space-x-4">
        <Link to="/register" className="hover:text-blue-600">Register</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
}
