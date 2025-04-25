import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const registerUser = ()=>{
        if(!username   || !password){
            alert("Please fill all the fields")
            return
        }
        localStorage.setItem("user", JSON.stringify({ username, password }));
        alert("User registered successfully")  ;    
        navigate("/login");

    }
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Register</h1>
        <p className="text-lg text-gray-600 mb-6">Register to access the app</p>
        <form onSubmit={registerUser} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <input
                type="text"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Register
            </button>
        </form>
        <p className="text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
                Login
            </a>
        </p>
    </div>
)
}

export default Register
