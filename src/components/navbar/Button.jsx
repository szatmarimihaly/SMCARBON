import React from 'react'

const Button = ({ text, onClick }) => {


  return (
    <button 
    onClick={onClick}
    className="text-white text-lg md:text-2xl p-2 
    hover:text-gray-200/80 transition-all duration-400 
    text-shadow-lg">
        {text}
    </button>
  )
}

export default Button