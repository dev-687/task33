import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
function Profile() {
    const navigate=useNavigate();
    const [username, setUsername]=useState("");
    const getUserDetail=(cookieKey)=>{
        const users=document.cookie.split("; ").map((c)=>c.trim());
        
        for(let value of users){
            if(value.startsWith(`${cookieKey}=`))
            {
                 return JSON.parse(decodeURIComponent(value.split("=")[1]));
            }
        }
        return null;
   }
   useEffect(()=>{
   const user= getUserDetail('user');
   if(user){
    setUsername(user.username);
    
   }
    else{
    toast.error('Status: 403 - Unauthorized. Please log in.');
     navigate('/login')
    }

   },[])
   
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-10 bg-white text-center rounded-lg shadow-lg w-96 h-auto">
            <h1 className="text-3xl  font-extrabold text-gray-900">Profile</h1>
            <p className="text-gray-700 mt-4 text-lg">Welcome to your profile</p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">User's Detail</h2>
                <p className="text-gray-800 mt-3 text-lg">Username: <span className="font-medium">{username}</span></p>
            </div>
        </div>
    </div>
)
}

export default Profile
