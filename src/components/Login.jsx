import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginUser =()=>{
        if(!username || !password){
            alert("Please fill all the fields")
            return
        }
        const user= JSON.parse(localStorage.getItem("user"));
        if(user && user.username === username && user.password === password){
            document.cookie = `user=${encodeURIComponent(JSON.stringify(user))}; path=/`;
            alert('Login successful!');
            navigate('/profile');
              
    }
        else{
            alert("Invalid credentials")
        }
        }
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Login to access the app</p>
        <form onSubmit={loginUser} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <input
                type="text"
                placeholder="Username"
                onChange={(e)=>{setUsername(e.target.value)}}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
        <p className="text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
                Register
            </a>
        </p>
    </div>
);
}

export default Login
