import React from 'react'
import { useState } from 'react'

const AuthForm = ({ text, alreadyOrNot, RouteToButton, onClick }) => {

    const [isVisible, setIsVisible] = useState(false);


    const toogleVisibility = () => {
        setIsVisible(!isVisible);
    }

  return (
    
    <div className="relative min-h-screen overflow-hidden">
        <div className='background-pattern'></div>
        <div className='min-h-screen flex items-center justify-center rounded-xl'>
            <div className='bg-[#f8f8f8]/20 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:bg-[#f8f8f8]/30'>
                <h1 className='text-2xl text-center font-medium'>
                    {text}
                </h1>
                <form className='space-y-6'>
                    <label>Email:</label>
                    <input 
                    type="email"
                    placeholder='example@gmail.com'
                    className='w-full px-4 py-3 bg-whitesmoke backdrop-blur-sm focus:outline-none border-2 border-black rounded-xl mt-2'
                    />

                    <label>Password:</label>
                    <div className='flex items-center w-full px-4 py-2.5 bg-whitesmoke backdrop-blur-sm focus:outline-none border-2 border-black rounded-xl mt-2'>
                        <input 
                        type={isVisible ? "text" : "password"} 
                        placeholder='Password'
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