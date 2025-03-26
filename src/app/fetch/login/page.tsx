"use client";
import Button from "@/components/ui/button";
import { API_PATH } from "@/data/apipath";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here, such as an API call

    loginUser(email, password);
  };

  const loginUser = async (email: string, password: string) => {
    try {
      // Send a POST request to the login API
      const response = await fetch(`${API_PATH}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
        // credentials: "include",-me cookie
      });

      // Parse response into JSON format
      const data = await response.json();

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login Success:", data);

      // Redirect to the home page
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex justify-center items-center bg-indigo-100 bg-opacity-80 w-full h-full">
          <div className="bg-white p-8 rounded-lg shadow-md ">
            <h1 className="font-semibold text-lg text-center mb-6">Login</h1>
            <p className="text-center mb-6 text-gray-600">
              Welcome back! Please login to your account.
            </p>
            <div className="flex justify-center mb-6">
              <svg width="75.104" height="56.584">
                <path
                  d="M73.909.103a112.874 112.874 0 00-15.584 10.174c-4.5 3.5-8.849 7.657-10.559 13.268-1.157 3.8-1.365 11.442 4.2 11.692 5.27.236 7.42-6.094 7.484-10.374a18.8 18.8 0 00-5.02-12.7 20.134 20.134 0 00-13.144-6.262c-10.926-1.018-20.617 5.48-26.533 14.233-6.523 9.651-10.945 24.803-1.369 34.073.734.711 1.858-.41 1.123-1.123-7.8-7.548-5.334-19.484-.822-28.064 4.32-8.215 11.438-15.307 20.8-17.176 9.084-1.814 18.9 2.058 22.307 11.1 1.474 3.916 1.672 8.919-.813 12.5-1.445 2.08-4.875 3.372-6.449.665-1.254-2.158-1.015-5.19-.412-7.5 1.469-5.64 5.886-9.755 10.326-13.21a110.987 110.987 0 0115.266-9.93c.9-.487.1-1.858-.8-1.371z"
                  fill="#37dbe2"
                ></path>
                <path
                  d="M18.567 41.929a40.9 40.9 0 00-5.392 13.65l1.327-.35A32.43 32.43 0 00.961 45.76c-.959-.355-1.373 1.178-.422 1.531a30.854 30.854 0 0112.84 9.06.8.8 0 001.327-.35 39.635 39.635 0 015.232-13.271c.541-.87-.832-1.668-1.371-.8z"
                  fill="#37dbe2"
                ></path>
              </svg>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Enter your email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                required
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Link href="/forgetpassword">
                <div className="flex justify-end cursor-pointer">
                  <p className="text-xs hover:underline">Forget password</p>
                </div>
              </Link>
              <Button
                variant="outlined"
                type="submit"
                className="py-2 rounded-lg w-full  hover:bg-green-500 text-center flex items-center justify-center "
              >
                Login
              </Button>
              <Link href="/fetch/signup">
                <div className="flex items-center justify-center cursor-pointer ">
                  <p className="w-full h-full flex items-center text-xs  ">
                    Don’t have an account?{" "}
                    <span className="text-green-500 ml-1">Sign Up</span>
                  </p>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
