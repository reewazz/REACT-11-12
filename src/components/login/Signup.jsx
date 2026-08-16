import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostRequest } from "../http";
import AuthContext from "../contexts/AuthContext";


const Auth = () => {
  const [mode, setMode] = useState("signup");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {setToken} = useContext(AuthContext)


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        const payload = {
          fullName,
          email,
          password,
        };

        await axios.post(
          "http://localhost:5000/user/create",
          payload
        );

        alert("Signup successful!");
      } else {
        const payload = {
          email,
          password,
        };

    //   const response =  await axios.post( "http://localhost:5000/user/login", payload);
      const response =  await PostRequest("user/login",payload)
      console.log(response.data)

      localStorage.setItem("token",response.data.token)
      setToken(response.data.token)
      

        navigate("/blogs")
     
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      alert(err.message)
    } finally {
      setLoading(false);
    }
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

          {/* Logo / Heading */}
          <div className="text-center mb-8">
          

            <h1 className="text-2xl font-bold text-gray-900">
              {mode === "signup"
                ? "Create your account"
                : "Welcome back"}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {mode === "signup"
                ? "Create an account to get started"
                : "Sign in to continue to your account"}
            </p>
          </div>

          {/* Toggle */}
          <div className="relative flex rounded-xl bg-gray-100 p-1 mb-7">
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-lg bg-white shadow-sm transition-all duration-300 ${
                mode === "login"
                  ? "left-1"
                  : "left-1/2"
              }`}
            />

            <button
              type="button"
              onClick={() => changeMode("login")}
              className={`relative z-10 w-1/2 py-2.5 text-sm font-semibold transition-colors ${
                mode === "login"
                  ? "text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => changeMode("signup")}
              className={`relative z-10 w-1/2 py-2.5 text-sm font-semibold transition-colors ${
                mode === "signup"
                  ? "text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            {mode === "signup" && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <div className="relative">
                 

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email address
              </label>

              <div className="relative">
               

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                {mode === "login" && (
                  <button
                    type="button"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <div className="relative">
              

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {mode === "signup"
                    ? "Creating account..."
                    : "Signing in..."}
                </span>
              ) : (
                mode === "signup"
                  ? "Create Account"
                  : "Sign In"
              )}
            </button>
          </form>

          {/* Bottom */}
          <div className="mt-7 text-center text-sm text-gray-500">
            {mode === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() =>
                changeMode(
                  mode === "signup"
                    ? "login"
                    : "signup"
                )
              }
              className="ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {mode === "signup" ? "Login" : "Sign up"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Auth;