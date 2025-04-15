import React from 'react'

const HeroText = () => {
  return (
    <div className="relative text-center py-16 md:py-24">

        <div className="absolute inset-0 bg-gradient-to-r 
                        from-transparent to-transparent" />
    
        <h1 className="relative inline-block">
          <span className="block text-2xl md:text-6xl font-bold 
                          text-black tracking-tight leading-tight mb-4">
              Need Some Sneakers Online?
          </span>
        
            <div className="h-[2px] w-full mt-4 
                           bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
          </h1>
        </div>
  )
}

export default HeroText