import React from 'react'

const Hero = () => {
    return (
        <div className="bg-[rgb(227,237,246)] mt-4">
            <div className="px-4 md:px-28 grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting at <span className='font-bold'>$999.00</span>
                        </p>

                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            The best collections 2024
                        </h1>

                        <h3 className="text-2xl font-['Oregano', cursive]">
                            Exclusive offer <span className="text-red-600">-10%</span> off this week
                        </h3>

                        <a href="#" className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white">
                            Shop Now
                        </a>
                    </div>
                </div>

                <div>
                    <img src="https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png" alt="hero" className="ml-auto" />
                </div>
            </div>
        </div>
    )
}

export default Hero