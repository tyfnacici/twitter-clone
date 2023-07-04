import React from "react"
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri"
import { SlMagnifier } from "react-icons/sl"
import { PiBellLight } from "react-icons/pi"
import { FiMail } from "react-icons/fi"
import { BiBookmark } from "react-icons/bi"
import { HiOutlineUser } from "react-icons/hi"
import { CiCircleMore } from "react-icons/ci"

const Sidebar = () => {
  return (
    <div className="h-screen bg-white w-1/5">
      <div className="font-semibold flex flex-col text-xl text-black">
        <img
          src={require("../assets/Logo_of_Twitter.png")}
          alt="logo"
          className="w-7 ml-3 mt-4 mb-4"
        />
        <ul className="space-y-2 pb-2">
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <RiHome7Fill />
              </p>
              <p className="pl-1 pr-5" >Home</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <SlMagnifier />
              </p>
              <p className="pl-1 pr-5" >Explore</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <PiBellLight />
              </p>
              <p className="pl-1 pr-5" >Notifications</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <FiMail />
              </p>
              <p className="pl-1 pr-5" >Messages</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <RiFileList2Line />
              </p>
              <p className="pl-1 pr-5" >Lists</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <BiBookmark />
              </p>
              <p className="pl-1 pr-5" >Bookmarks</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <HiOutlineUser />
              </p>
              <p className="pl-1 pr-5" >Profile</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-white/25 py-3 px-3 rounded-full flex space-x-4">
              <p className="text-3xl">
                <CiCircleMore />
              </p>
              <p className="pl-1 pr-5" >More</p>
            </button>
          </li>
        </ul>
        <button className="bg-[#1d9bf0] px-3 py-3 rounded-full mr-[3.8rem] hover:bg-[#1395ec] text-white">
          Tweet
        </button>
      </div>
    </div>
  )
}

export default Sidebar
