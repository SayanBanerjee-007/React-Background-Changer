import React from 'react'

const Navigation = ({ setColor, color }) => {
  const handleClick = color => {
    return () => {
      setColor(color)
    }
  }
  return (
    <nav className="absolute bottom-0 w-full flex mb-2 md:mb-10 justify-center items-center">
      <ul
        className={`shadow-md shadow-white list-none flex flex-wrap justify-center items-center gap-3 p-2 md:gap-8 md:p-4 border ${
          color === 'bg-white' ? 'border-black' : 'border-white'
        } rounded-2xl text-white`}
      >
        <li
          onClick={handleClick('bg-red-600')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-red-600"
        >
          Red
        </li>
        <li
          onClick={handleClick('bg-green-600')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-green-600"
        >
          Green
        </li>
        <li
          onClick={handleClick('bg-blue-600')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-blue-600"
        >
          Blue
        </li>
        <li
          onClick={handleClick('bg-gray-500')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-gray-500"
        >
          Gray
        </li>
        <li
          onClick={handleClick('bg-yellow-500')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-yellow-500"
        >
          Yellow
        </li>
        <li
          onClick={handleClick('bg-pink-500')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-pink-500"
        >
          Pink
        </li>
        <li
          onClick={handleClick('bg-purple-600')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-purple-600"
        >
          Purple
        </li>
        <li
          onClick={handleClick('bg-white')}
          className="shadow-sm shadow-white border border-black rounded-lg py-2 px-4 cursor-pointer bg-white text-black"
        >
          White
        </li>
        <li
          onClick={handleClick('bg-black')}
          className="shadow-sm shadow-white border border-white rounded-lg py-2 px-4 cursor-pointer bg-black"
        >
          Black
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
