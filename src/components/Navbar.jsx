import React from 'react'
import { Book, History, Bookmark, Moon } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[250px] h-auto sm:h-[100px] py-4 border-b border-[#374151]">
        <div className="logo flex items-center gap-[5px]">
          <Book size={'35px'} color="#9333ea" />
          <h3 className="text-[22px] sm:text-[25px] font-[600]">
            Lexi<span className="text-purple-600">AI</span>
          </h3>
        </div>

        <div className="icons flex items-center gap-[15px] sm:gap-[20px]">
          <History
            size={'30px'}
            className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]"
          />
          <Bookmark
            size={'30px'}
            className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]"
          />
          <Moon
            size={'30px'}
            className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
