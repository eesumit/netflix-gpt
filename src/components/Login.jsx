import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [ isSignInForm, setIsSignInForm]=useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            <div className="absolute inset-0">
                <img 
                    className="w-full h-full object-cover bg-gray-900" 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" 
                    alt="background-image" 
                />
            </div>
            <div className="relative flex items-center justify-center min-h-screen px-4">
                <div className="caret-red-500 w-full max-w-md bg-black/50 p-8 rounded-lg shadow-lg border border-gray-700">
                    <h1 className="font-bold text-3xl text-white text-left mb-6">{
                            isSignInForm? "Sign In" : "Sign Up"
                        }</h1>
                    <form className="flex flex-col">
                        {
                            !isSignInForm && <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                        />
                        }
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                        />
                        {
                            !isSignInForm && <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                        />
                        }
                        <button 
                            className="p-3 w-full bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300"
                        >
                        {
                            isSignInForm? "Sign In" : "Sign Up"
                        }
                        </button>
                    {
                        isSignInForm? <p className="py-4 px-1 text-white">
                        New to Netflix? <button type="button" className="cursor-pointer" onClick={toggleSignInForm}><u>SignUp</u></button> now.
                    </p> : <p className="py-4 px-1 text-white">
                        Already Registerd? <button type="button" className="cursor-pointer " onClick={toggleSignInForm}><u>SignIn</u></button> now.
                    </p>
                    }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
