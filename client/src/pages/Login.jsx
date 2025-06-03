import React, { useState } from "react";
import assets from "../assets/assets";

const Login = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    password: "",
    bio: "",
  };

  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState(initialFormData);
  const [showBio, setShowBio] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currState === "Sign Up" && !showBio) {
      setShowBio(true);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col px-4 backdrop-blur-xl">
      {/* Left Section - Logo */}
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw,250px)]" />

      {/* Right Section - Form */}
      <form
        onSubmit={submitHandler}
        className="bg-white/10 text-white border border-gray-400 p-8 flex flex-col gap-5 rounded-lg shadow-xl max-w-md w-full"
      >
        {/* Header */}
        <h2 className="flex items-center justify-between text-2xl font-semibold">
          {currState}
          {showBio && (
            <img
              src={assets.arrow_icon}
              alt=""
              onClick={() => setShowBio(false)}
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {/* Full Name Field (Only in Sign Up) */}
        {currState === "Sign Up" && !showBio && (
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="border border-gray-500 p-2 rounded-md focus:outline-none
             focus:ring-2 focus:ring-indigo-500 transition-all"
            required
          />
        )}

        {/* Email and Password Fields */}
        {!showBio && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-gray-500 p-2 rounded-md focus:outline-none
             focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="border border-gray-500 p-2 rounded-md focus:outline-none
             focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </>
        )}

        {/* Bio Field (After form submission on Sign Up) */}
        {currState === "Sign Up" && showBio && (
          <textarea
            rows={4}
            placeholder="Tell us something about yourself..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="border border-gray-500 p-2 rounded-md focus:outline-none
             focus:ring-2 focus:ring-indigo-500 transition-all"
            required
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 transition-all py-2 rounded-md font-medium cursor-pointer"
        >
          {currState === "Sign Up"
            ? showBio
              ? "Finish Sign Up"
              : "Next"
            : "Login Now"}
        </button>

        {/* Toggle between Sign Up / Login */}
        <div className="text-sm text-gray-300 text-center">
          {currState === "Sign Up" ? (
            <>
              <p>Already have an account?</p>
              <span
                onClick={() => {
                  setCurrState("Login");
                  setShowBio(false);
                }}
                className="text-violet-400 hover:text-violet-500 font-medium cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
             <p> Don't have an account?</p>
              <span
                onClick={() => {
                  setCurrState("Sign Up");
                  setShowBio(false);
                }}
                className="text-violet-400 hover:text-violet-500 font-medium cursor-pointer"
              >
                Sign up here
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
