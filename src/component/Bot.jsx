import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

const Bot = () => {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <BsFillChatDotsFill />
    </div>
  );
};

export default Bot;
