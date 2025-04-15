import React from 'react'

const HeroButton = ({ text, onClick }) => {
  return (
    
    <div className='flex items-center justify-center'>
        <button 
        className="flex items-center justify-between bg-black text-white text-lg md:text-2xl p-3 rounded-full md:hover:bg-gray-800/80 transition-all duration-500 gap-2 md:hover:gap-4"
        onClick={onClick}>
            {text}
            <i className="ri-send-plane-2-fill"></i>
        </button>
    </div>

  )
}

export default HeroButton