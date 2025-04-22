import React from 'react'
import { useState } from 'react'
import { auth, googleProvider } from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const AuthForm = ({ text, alreadyOrNot, RouteToButton, onClick }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();


    const toogleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const handleGoogleSignIn = async () => {
        try{
            await signInWithRedirect(auth, googleProvider);
            navigate("/shop");
        }catch (error){
            console.log(error);
            setError("Could not sign in with Google.")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            if(text === "Create an Account"){
                await createUserWithEmailAndPassword(auth, email, password);
            } else{
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate("/shop");
        }catch (error){
            console.log(error);
            if(text === "Create an Account" && error.code === "auth/email-already-in-use"){
                setError("Email is already in use.");
            }else if(text === "Login" && error.code === "auth/invalid-credential"){
                setError("Invalid email or password.")
            }else{
                setError("An error has occurred. Please try again.")
            }
        }

    }

  return (
    
    <div className="relative min-h-screen overflow-hidden">
        <div className='background-pattern'></div>
        <div className='min-h-screen flex items-center justify-center rounded-xl'>
            <div className='bg-[#f8f8f8]/20 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:bg-[#f8f8f8]/30'>
                <h1 className='text-2xl text-center font-medium'>
                    {text}
                </h1>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input 
                    type="email"
                    placeholder='example@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-3 bg-whitesmoke backdrop-blur-sm focus:outline-none border-2 border-black rounded-xl mt-2'
                    />

                    <label>Password:</label>
                    <div className='flex items-center w-full px-4 py-2.5 bg-whitesmoke backdrop-blur-sm focus:outline-none border-2 border-black rounded-xl mt-2'>
                        <input 
                        type={isVisible ? "text" : "password"} 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full focus:outline-none'
                        />
                        <button
                        type='button' 
                        onClick={toogleVisibility}
                        className='text-xl'
                        >
                            {isVisible ? <i className="ri-eye-fill"></i> : <i className="ri-eye-off-fill"></i>}
                        </button>
                    </div>

                    {error && 
                    <p className='text-red-500 text-center mt-2 mb-2 text-sm'>{error}</p>}

                    <button
                    type="submit"
                    className='flex items-center justify-center gap-2 w-full px-5 py-2.5  bg-black backdrop-blur-sm rounded-xl shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium mb-6'
                    >
                        {text}
                    </button>
                </form>

                <div className='flex items-center justify-center my-4'>
                    <div className='flex-grow border-t border-gray-700'></div>
                    <span className='mx-4 text-black'>OR CONTINUE WITH</span>
                    <div className='flex-grow border-t border-gray-700'></div>
                </div>

                <button
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5  bg-black backdrop-blur-sm rounded-xl shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium mb-6"
                onClick={handleGoogleSignIn}
                >
                    <img src="./google.svg" alt="Google" className="w-5 h-5"/>
                    Sign In With Google
                </button>

                <button
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5  bg-black backdrop-blur-sm rounded-xl shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium mb-6"
                >
                    <i className="ri-github-fill text-xl"></i>
                    Continue With GitHub
                </button>

                
                <div className='w-full text-center flex items-center justify-center gap-2'>
                    
                    <p>{alreadyOrNot}</p>
                    
                    <button
                    className=''
                    onClick={onClick}
                    >
                        {RouteToButton}
                    </button>
                </div>
                
            </div>
        </div>    
    </div>
    
    
    

  )
}

export default AuthForm