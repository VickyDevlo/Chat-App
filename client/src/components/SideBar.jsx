import { useState } from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = ({ selectedUser, setSelectedUser }) => {
    const [showDropdown, setShowDropdown] = useState(false); // New state
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex items-center justify-between">
          <img
            onClick={() => setSelectedUser(false)}
            src={assets.logo}
            alt="logo"
            className="max-w-40 cursor-pointer"
          />
          <div className="relative py-2">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-w-5 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle on click
            />
            {showDropdown && (
              <div className="absolute top-full right-0 z-50 w-32 p-5 rounded-md bg-[#302654] border border-gray-600 text-gray-100">
                <p
                  onClick={() => {
                    navigate("/profile");
                    setShowDropdown(false);
                  }}
                  className="cursor-pointer text-sm"
                >
                  Edit Profile
                </p>
                <hr className="my-2 border-t border-gray-500" />
                <p
                  onClick={() => {
                    // Handle logout here
                    setShowDropdown(false);
                  }}
                  className="cursor-pointer text-sm"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="flex items-center gap-2 bg-[#382e5d] rounded-full
        py-3 px-4 mt-5"
        >
          <img src={assets.search_icon} alt="search" className="w-3" />
          <input
            type="text"
            placeholder="Search User..."
            className="bg-transparent border-none outline-none w-full
             text-white font-medium text-xs placeholder:[#c8c8c8] flex-1"
          />
        </div>
      </div>
      <div className="flex flex-col">
        {userDummyData.map((user, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedUser(user);
            }}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id && "bg-[#282442]/50"
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user?.fullName}</p>
              {i < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>
            {i > 2 && (
              <p
                className={`absolute top-4 ${
                  selectedUser ? "right-1" : "right-8"
                } text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50`}
              >
                {i}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
