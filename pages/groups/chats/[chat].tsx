import React, { useState, useEffect, ReactNode } from "react";
import { FaPaperPlane, FaPaperclip, FaSmile } from "react-icons/fa";
import { Messages, Reactions, User } from "../../../utilities/interfaces";
import { messages, rooms } from "../../../utilities/strings/socket";
import socket from "../../../utilities/socket";

export default function chat(): ReactNode {
const [isConnected, setIsConnected] = useState(socket.connected);
const [messageList, setMessageList] = useState<Messages[]>([]);
const [input, setInput] = useState('');

const username: string = 'Matt'; // hardcoded
const userId: string = '12345'; // hardcoded
const chatId: string = '54321' // hardcoded
const reactions: Reactions = {
  like: 0,
  dislike: 0,
  laugh: 0,
  mad: 0,
  surprise: 0,
  confused: 0
};
const messageData: Messages = {
  chatId: chatId,
  messageId: 'random :)', // hardcoded
  username: username,
  text: '',
  time: new Date,
  reactions: reactions
}
const userData: User = {
  userId: userId,
  username: username,
  rooms: [chatId]
}

// on render,
useEffect(() => {
  // fetch associated messages

  // set MessageList to result

  // connect to socket
  socket.on('connect', (): void => {
    setIsConnected(true);
    socket.emit(rooms.join, userData);
  })

  // handle disconnect
  socket.on('disconnect', (): void => {
    setIsConnected(false)
  })
}, [])

  socket.on(messages.recieve, (data: Messages): void => {
    console.log(data);
    setMessageList([...messageList, data]);
  })


  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    let event = e.target as HTMLInputElement;
    e.preventDefault();
    setInput(event.value);
  }

  const onMessage = async (input: string): Promise<void> => {
    if (input.length > 0) {
      messageData.text = input;
    }
    await socket.emit(messages.send, messageData)
    setMessageList([...messageList, messageData])
  }

  return (
    <div className="bg-zinc-700 flex-col items-around justify-center text-3xl ml-1/6 h-screen">
      <div className="flex flex-col text-l items-center justify-center h-20">
        <img src="/Default_pfp.svg.png" alt="could not display image" className="h-12 w-12"/>
        <div className="text-sm">Other users</div>
      </div>
      <div className="border-t border-t-zinc-800 flex flex-col items-start justify-end text-base h-3/4 overflow-auto">
        {
          messageList.map((message: Messages, index: number): ReactNode =>
            message.username === username
            ? <div key={index} className="flex flex-row items-start justify-left w-full mt-10 pl-10 hover:bg-zinc-600">
                <img src="/Default_pfp.svg.png" alt="could not display image" className="h-12 w-12"/>
                <div className="w-5/6 ml-5 flex flex-col">
                  <div>{message.username}</div>
                  <p className="break-words">{message.text}</p>
                </div>
              </div>
            : <div key={index} className="flex flex-row items-start justify-left w-5/6 mt-10 ml-10 hover:bg-zinc-800">
                <img src="/Default_pfp.svg.png" alt="could not display image" className="h-12 w-12"/>
                <div className="ml-5">{message.text}</div>
              </div>
          )
        }
      </div>
      <div className="my-7 mx-10 h-10 bg-zinc-600 rounded-xl text-base flex flex-row items-center justify-around h-1/6">
        <input type="text" onChange={(e) => {handleInput(e)}} className="bg-zinc-600 w-3/4" placeholder="Type a message..."></input>
        <div className="flex flex-row items-center justify-around w-1/6 h-10 overflow-y-nowrap">
            <FaPaperPlane className="ease-in-out duration-200 hover:text-xl cursor-pointer" onClick={() => {onMessage(input)}}/>
            <FaPaperclip className="ease-in-out duration-200 hover:text-xl cursor-pointer"/>
            <FaSmile className="ease-in-out duration-200 hover:text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  )
}