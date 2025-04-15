import React from 'react'
import Button from "../navbar/Button"

const Navbar = () => {
  return (
    <div className='bg-black text-white flex flex-row items-center justify-between m-6 rounded-full py-2 px-2 shadow-xl backdrop-blur-sm border-2 border-gray-700/50'>
        <ul className='flex gap-4'>
          <li>
            <Button text="Shop" />
          </li>
          <li>
            <Button text="About" />
          </li>
        </ul>

        <button className=''>
            <i className="ri-shopping-cart-2-line text-xl md:text-3xl p-2 md:hover:text-gray-200/80 transition-all duration-300"></i>  
        </button>  
      </div>
  )
}

export default Navbar