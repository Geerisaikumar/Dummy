import React from "react";
import {
  AiOutlineFire,
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTrophy, BsMusicNote } from "react-icons/bs";
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
  MdOutlineDryCleaning,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <aside className="text-[15px] w-[19rem] h-[calc(100vh-4rem)] font-PoppinsFont bg-white pt-2 px-3 sticky top-[3.5rem] overflow-y-hidden hover:overflow-y-scroll hover:scrollbar scroll-smooth">
      <div>
        <ul className="flex flex-col">
          <Link className="" to="/">
            <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 ">
              <span className="mr-6 ">
                <AiOutlineHome size={23} className="" />
              </span>
              Home
            </li>
          </Link>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black h-full">
            <span className="mr-6 ">
              <AiOutlineYoutube size={23} />
            </span>
            Shorts
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineSubscriptions size={23} />
            </span>
            Subscription
          </li>
        </ul>

        <hr className="my-4 mx-1" />
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineVideoLibrary size={23} />
            </span>
            Library
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <MdHistory size={23} />
            </span>
            History
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineWatchLater size={23} />
            </span>
            Watch later
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <AiOutlineLike size={23} />
            </span>
            Liked videos
          </li>
        </ul>
        <hr className="my-4" />
      </div>

      <div>
        <h1 className="text-[17px] px-2 font-medium py-1">Explore</h1>
        <ul className="flex flex-col">
          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <AiOutlineFire size={23} />
            </span>
            Trending
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <MdOutlineShoppingBag size={23} />
            </span>
            Shopping
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BsMusicNote size={23} />
            </span>
            Music
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BiMoviePlay size={23} />
            </span>
            Movies
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <CiStreamOn size={23} />
            </span>
            Live
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <RiGamepadLine size={23} />
            </span>
            Gaming
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoNewspaperOutline size={23} />
            </span>
            News
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <BsTrophy size={23} />
            </span>
            Sports
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <GiBlackBook size={23} />
            </span>
            Learning
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineDryCleaning size={23} />
            </span>
            Fashion & Beauty
          </li>
        </ul>
        <hr className="my-4" />
      </div>

      <div>
        <ul className="flex flex-col">
          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoSettingsOutline size={23} />
            </span>
            Settings
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ">
            <span className="mr-6">
              <TbReport size={23} />
            </span>
            Report history
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <IoMdHelpCircleOutline size={23} />
            </span>
            Help
          </li>

          <li className="flex px-3 py-[10px] rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black">
            <span className="mr-6">
              <MdOutlineFeedback size={23} />
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
