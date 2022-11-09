import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { User, Chat, Messages, Reactions } from "../../../utilities/interfaces";
import socket from "../../../utilities/socket";

export default function chat() {
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
  messageId: 'random :)',
  username: username,
  text: '',
  time: new Date,
  reactions: reactions
}

// on render,
useEffect(() => {
  // fetch associated messages

  // set MessageList to result

  // connect to socket
  socket.on('connect', (): void => {
    setIsConnected(true)
  })

  // handle disconnect
  socket.on('disconnect', (): void => {
    setIsConnected(false)
  })
}, [])

  socket.on('receive_message', (data: Messages): void => {
    console.log(data);
    setMessageList([...messageList, data]);
  })


  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    let event = e.target as HTMLInputElement;
    e.preventDefault();
    setInput(event.value);
  }

  const onMessage = async (input: string) => {
    if (input.length > 0) {
      messageData.text = input;
    }
    await socket.emit('send_message', messageData)
    setMessageList([...messageList, messageData])
  }

  return (
    <div className="border-2 border-yellow-600 flex-col items-end justify-left text-3xl ml-1/6 h-screen">
      <div className="border-2 border-green-600 flex-col items-end text-base h-5/6 overflow-y-scroll">{
        messageList.map((message: Messages, index: number) => {
          return (
          <div key={index} className="border-2 border-red-600">{message.text}</div>
          )
        })
      }
      </div>
      <div className="border-2 border-blue-600 text-base flex-row">
        <input type="text" onChange={(e) => {handleInput(e)}} className="ml-10 mr-3 w-1/2"></input>
        <button onClick={() => {onMessage(input)}}>Send</button>
      </div>
    </div>
  )
}