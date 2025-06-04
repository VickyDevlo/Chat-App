import assets, { imagesDummyData } from "../assets/assets";

const RightSideBar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white relative
          overflow-y-scroll ${selectedUser ? "max-md:hidden " : ""}`}
      >
        <div
          className="flex flex-col items-center gap-2 text-xs font-light 
        pt-5 mx-auto"
        >
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt=""
            className="w-20 aspect-[1/1] rounded-full"
          />

          <h1 className="px-1 md:text-xl sm:text-sm font-medium text-center flex items-center gap-1">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            {selectedUser?.fullName}
          </h1>
          <p className="px-10 mx-auto md:text-sm sm:text-[10px] text-center">{selectedUser?.bio}</p>
        </div>
        <hr className="border-[#ffffff50] my-2" />
        <div className="px-5 text-xs">
          <p>Media</p>

          <div className="mt-2 overflow-y-scroll grid grid-cols-2 gap-2 opacity-80">
            {imagesDummyData.map((url, i) => (
              <div
                key={i}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img
                  src={url}
                  alt="image_url"
                  className="h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-gradient-to-r from-purple-400 to-violet-600 text-white 
        border-none text-sm font-semibold py-2 px-12 md:px-18 rounded-full cursor-pointer uppercase"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default RightSideBar;
