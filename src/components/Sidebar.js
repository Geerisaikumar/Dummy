import React from "react";
import { AiOutlineHome, AiOutlineLike, AiOutlineYoutube } from "react-icons/ai";
import { BsFire, BsTrophy, BsMusicNote } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";
import { GiBlackBook } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import {
  MdOutlineSubscriptions,
  MdOutlineShoppingBag,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineFeedback,
  MdDryCleaning,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <aside className="text-[17px] w-[19rem] h-[calc(100vh-4rem)] font-normal bg-white pt-2 px-3 sticky top-[4rem] overflow-y-hidden hover:overflow-y-scroll hover:scrollbar scroll-smooth">
      <div>
        <ul className="flex flex-col">
          <Link className="" to="/">
            <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 ">
              <span className="mr-6 ">
                <AiOutlineHome size={24} className="" />
              </span>
              Home
            </li>
          </Link>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black h-full">
            <span className="mr-6 ">
              <AiOutlineYoutube size={24} />
            </span>
            Shorts
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineSubscriptions size={24} />
            </span>
            Subscription
          </li>
        </ul>

        <hr className="my-4 mx-1" />
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineVideoLibrary size={24} />
            </span>
            Library
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <MdHistory size={24} />
            </span>
            History
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineWatchLater size={24} />
            </span>
            Watch later
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <AiOutlineLike size={24} />
            </span>
            Liked videos
          </li>
        </ul>
        <hr className="my-4" />
      </div>

      <div>
        <h1 className="text-[17px] px-2 font-medium py-1">Explore</h1>
        <ul className="flex flex-col">
          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BsFire size={24} />
            </span>
            Trending
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <MdOutlineShoppingBag size={24} />
            </span>
            Shopping
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BsMusicNote size={24} />
            </span>
            Music
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BiMoviePlay size={24} />
            </span>
            Movies
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <CiStreamOn size={24} />
            </span>
            Live
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <RiGamepadLine size={24} />
            </span>
            Gaming
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoNewspaperOutline size={24} />
            </span>
            News
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BsTrophy size={24} />
            </span>
            Sports
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <GiBlackBook size={24} />
            </span>
            Learning
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdDryCleaning size={24} />
            </span>
            Fashion & Beauty
          </li>
        </ul>
        <hr className="my-4" />
      </div>

      <div>
        <ul className="flex flex-col">
          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoSettingsOutline size={24} />
            </span>
            Settings
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <TbReport size={24} />
            </span>
            Report history
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoMdHelpCircleOutline size={24} />
            </span>
            Help
          </li>

          <li className="flex px-4 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineFeedback size={24} />
            </span>
            Send feedback
          </li>
        </ul>
        <hr className="my-4" />
      </div>
    </aside>
  );
};

export default Sidebar;
