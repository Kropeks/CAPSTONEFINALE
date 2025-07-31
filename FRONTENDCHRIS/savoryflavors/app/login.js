"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      router.push("/"); // Redirect to homepage
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A8B290]">
      <div className="flex flex-col md:flex-row w-full max-w-4xl p-4">
        <div className="flex-1 flex items-center justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-[#2F5C3B] leading-tight">
            <span className="block">SAVORY</span>
            <span className="block">FLAVORS</span>
          </h1>
        </div>

        <div className="flex-1 bg-[#3D5F4E] rounded-xl shadow-lg p-8 text-white space-y-4 mt-8 md:mt-0">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-full text-black placeholder-gray-500 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-full text-black placeholder-gray-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-[#E88F52] text-white font-semibold py-2 rounded-full hover:bg-[#d77e3d] transition"
            onClick={handleLogin}
          >
            Submit
          </button>
          <div className="text-center text-sm text-gray-300">
            No account yet?{" "}
            <span className="text-orange-200 cursor-pointer hover:underline">Sign up</span>
          </div>
          <button
            className="w-full bg-[#E88F52] text-white font-semibold py-2 rounded-full hover:bg-[#d77e3d] transition"
            onClick={() => router.push("/")}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
