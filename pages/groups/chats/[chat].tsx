import React, { useState, useEffect, ReactNode } from "react";
import io from "socket.io-client";
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
      <div className="shadow-black flex flex-row text-l items-center justify-center h-20">
        <div>Mutual activites</div>
        <div>Users list</div>
      </div>
      <div className="border-t border-t-zinc-800 flex flex-col text-base h-3/4 overflow-y-scroll">
        {
          messageList.map((message: Messages, index: number): ReactNode =>
            message.username === username
            ? <div key={index} className="border-2 border-purple-600 rounded-xl w-1/4 m-5 p-3 whitespace-normal text-ellipsis">{message.text}</div>
            : <div key={index} className="border-2 border-red-600 rounded-xl w-1/4 m-5 p-3 whitespace-normal text-ellipsis">{message.text}</div>
          )
        }
      </div>
      <div className="my-7 mx-10 h-10 bg-zinc-600 rounded-xl text-base flex flex-row items-center justify-around h-1/6">
        <input type="text" onChange={(e) => {handleInput(e)}} className="bg-zinc-600 w-2/3" placeholder="Type a message..."></input>
        <button className="bg-green-700 rounded-xl w-1/6" onClick={() => {onMessage(input)}}>Send</button>
      </div>
    </div>
  )
}