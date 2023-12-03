import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/Helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
    //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i); //garbage collector
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="overflow-y-scroll w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse">
        <div>
          {ChatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
        e.preventDefault();
        console.log("submit");
        dispatch(addMessage({
            name:"surbhi kumari",
            message:liveMessage
        }));
        setLiveMessage("")
      }}>
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-7 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
