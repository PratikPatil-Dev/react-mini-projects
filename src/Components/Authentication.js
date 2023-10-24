import React, { useState } from "react";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReg, setIsReg] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuth = () => {
    if (isReg) {
      // Login part
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLogin(true);
      } else {
        alert("Invalid credentials");
      }
    } else {
      // Register part
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">Authentication</h1>
      {isLogin ? (
        <div>
          <h1 className="text-xl">Welcome {email}!</h1>
          <button
            onClick={() => handleLogout()}
            className="bg-red-500 text-white px-4 py-2 mt-4 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg">{isReg ? "Login" : "Register"}</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <button
              onClick={() => handleAuth()}
              className="bg-blue-500 text-white px-4 py-2 mt-4 hover:bg-blue-600"
            >
              {isReg ? `Login` : `Register`}
            </button>
          </form>
          <p className="mt-4">
            {!isReg ? "Please create an account to login" : "Welcome back User"}
          </p>
          <button
            onClick={() => {
              setIsReg(!isReg);
            }}
            className="bg-gray-300 text-black px-4 py-2 mt-2 hover:bg-gray-400"
          >
            {isReg ? "Login" : "Create Account"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
