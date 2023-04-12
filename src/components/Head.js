import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsMic, BsFillMicFill, BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Logo from "../assets/images/YouTube-Logo.png";
import { YOUTUBE_SEARCH_API_URL } from "../utils/Constant";
import { searchCacheResults } from "../utils/searchSlice";
import ProfileImg from "../assets/images/Myicon.jpg";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // Debounce Function
    const timer = setTimeout(() => {
      // cache the Search results
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    //Update Cache
    dispatch(
      searchCacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const togglerMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="grid grid-flow-col h-[3.6rem] bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 my-1 w-full ">
        <div className=" col-span-1 flex items-center h-[3.2rem] ">
          <span
            onClick={() => togglerMenuHandler()}
            className=" mr-4 hover:bg-gray-200 p-[10px] rounded-full"
            alt="Hamburger-menu"
          >
            {<AiOutlineMenu size={20} />}
          </span>

          <img className="h-full" alt="Youtube-logo" src={Logo} />
        </div>

        <div className=" col-span-8 flex items-center">
          <div className="flex">
            <input
              className={` w-[33rem] border border-gray-200 px-5 text-base py-[7px]  focus:outline-none rounded-l-full shadow-inner focus:border-blue-600 `}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button className="border border-gray-200 bg-gray-50 px-6 rounded-r-full ">
              <AiOutlineSearch size={18} />
            </button>
          </div>
          <span className="mx-1 hover:bg-gray-200 p-[10px] rounded-full">
            {<BsFillMicFill size={20} />}
          </span>
          {showSuggestions && (
            <div className="fixed mt-[23rem] bg-white w-[33rem] rounded-lg ">
              <ul className="">
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="hover:bg-gray-100 text-[17px]  hover:w-full px-5 p-[3px] flex items-center"
                  >
                    <span className="mr-2 ">
                      <AiOutlineSearch size={16} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-3 flex items-center pl-2">
          <span className=" hover:bg-gray-200 p-[10px] rounded-full">
            <BsCameraVideo size={22} />
          </span>
          <span className="mx-2 hover:bg-gray-200 p-[10px] rounded-full">
            <IoMdNotificationsOutline size={22} />
          </span>
          <img
            className="h-[34px] w-8 rounded-full object-center"
            alt="user-icon"
            src={ProfileImg}
          />
        </div>
      </div>
    </header>
  );
};

export default Head;
