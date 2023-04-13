import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
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
  const [showSuggestions, setShowSuggestions] = useState(true);

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
    <header className="grid grid-flow-col justify-between px-5 py-2 w-full h-[4rem] bg-sky-200 sticky top-0 z-50">
      {/* ------------ HUmburger Menu Youtube logo ------------ */}

      <div className=" col-span-1 flex items-center h-[3.2rem] relative">
        <span
          onClick={() => togglerMenuHandler()}
          className=" mr-4 hover:bg-gray-200 active:bg-gray-300 p-3 rounded-full cursor-pointer"
          alt="Hamburger-menu"
        >
          {<AiOutlineMenu size={20} />}
        </span>

        <img className="h-full" alt="Youtube-logo" src={Logo} />
      </div>

      {/* ------------- Input Part ------------------ */}

      <div className=" col-span-10 flex items-center justify-center relative">
        <div
          className={`-mr-10 z-10 ${showSuggestions ? "visible" : "invisible"}`}
        >
          <CiSearch size={22} />
        </div>
        <div className="flex relative">
          <input
            className={`w-[37rem] border border-gray-300 px-5 focus:w-[39rem] focus:px-12 text-[17px] py-[11px] focus:outline-none rounded-l-full shadow-inner focus:border-blue-600 `}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="relative border border-gray-300 border-l-0 bg-gray-50 hover:bg-gray-100 px-6 rounded-r-full ">
            <AiOutlineSearch size={26} />
          </button>
        </div>

        <span className="mx-2 hover:bg-gray-200 active:bg-gray-300 p-3 rounded-full cursor-pointer">
          {<BsFillMicFill size={20} />}
        </span>

        {/* ----------------- Suggestions Part ------------------------ */}

        {showSuggestions && (
          <div className="fixed mr-[48rem] ">
            <ul className="bg-white w-[39rem] absolute mt-[26px] rounded-lg py-[15px]">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="hover:bg-gray-100 text-[17px]  hover:w-full px-4 py-[5px] flex items-center"
                >
                  <span className="mr-2 ">
                    <CiSearch size={22} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex items-center ">
        <span className=" hover:bg-gray-200 active:bg-gray-300 p-3 rounded-full cursor-pointer">
          <BsCameraVideo size={22} />
        </span>
        <span className="mr-[6px] hover:bg-gray-200 active:bg-gray-300 p-3 rounded-full cursor-pointer">
          <IoMdNotificationsOutline size={22} />
        </span>
        <img
          className="h-10 w-[38px] rounded-full cursor-pointer"
          alt="user-icon"
          src={ProfileImg}
        />
      </div>
    </header>
  );
};

export default Head;
