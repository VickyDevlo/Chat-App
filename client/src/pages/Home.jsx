import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";
import RightSideBar from "../components/RightSideBar";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="w-full h-screen  ">
      <div
        className={`backdrop-blur-md border-gray-600 h-full grid 
          grid-cols-1 relative ${
            selectedUser
              ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr] "
              : "md:grid-cols-2"
          }`}
      >
        <SideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ChatContainer
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <RightSideBar selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Home;
