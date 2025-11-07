import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-700 text-lg mb-4">
          You are not logged in.
        </p>
        <Link
          to="/login"
          className="text-blue-600 underline font-semibold"
        >
          Go to Login
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome, {user.username || "Student"} 👋
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Gender: {user.gender || "Not provided"}
        </p>

        <div className="space-y-4 text-center">
          <Link
            to="/test"
            className="block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Start Test
          </Link>
          <button
            onClick={logout}
            className="block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
