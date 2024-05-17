import React from 'react';


function Navbar(props) {


    return (
        <div >

            <h1 className='text-2xl sm:text-3xl md:text-4xl font-serif text-center
             text-white pt-5 sm:pt-8 md:pt-10
             rounded-3xl
              ring-2
               bg-indigo-600
               pb-4 sm:pb-6 md:pb-7
               my-2
               mx-4 md:mx-12 lg:mx-96
               w-auto'>
                First Tailwind Project
            </h1>

            <nav className='flex items-center text-white  sm:flex-row
            justify-center  text-lg sm:text-xl md:text-2xl
            space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 uppercase
            bg-green-700 mt-8 sm:mt-16 md:mt-32 my-2 mx-4 md:mx-12 lg:mx-96 rounded-3xl h-20 sm:h-auto py-4'>
                <a href="/" className="px-3 py-2 rounded-lg hover:underline underline-offset-8 transform transition-transform duration-300 hover:scale-110">Home</a>
                <a href="/about" className="px-3 py-2 rounded-lg hover:underline underline-offset-8 transform transition-transform duration-300 hover:scale-110">About</a>
                <a href="/contact" className="px-3 py-2 rounded-lg hover:underline underline-offset-8 transform transition-transform duration-300 hover:scale-110">Contact</a>
            </nav>
        </div>
    );
}

export default Navbar;
