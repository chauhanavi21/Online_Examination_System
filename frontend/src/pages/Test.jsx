import { useEffect, useRef } from "react";

export default function Test() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = "http://127.0.0.1:5000/test"; // Flask video feed
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Exam Monitoring</h1>

      <div className="relative w-[640px] h-[480px] border-4 border-blue-400 rounded-lg overflow-hidden shadow-lg">
        <img
          ref={videoRef}
          alt="Live Stream"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-4 text-gray-500">
        Stay focused. The system is monitoring your activity 🔍
      </p>
    </div>
  );
}
