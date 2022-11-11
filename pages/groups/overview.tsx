import { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function overview() {
  const [chats, setChats] = useState(['Group A', 'Allan', 'Tony', 'Group B'])

  // fetch lists of group chats and DMs
    // set chats to result

  return (
    <div className="bg-zinc-700 flex flex-row items-center justify-start text-3xl ml-1/6 h-screen">
      <div className="flex flex-col items-center justify-center h-screen w-1/2">
        <div className="bg-zinc-600 rounded-xl flex flex-row items-center justify-around w-3/4 h-12 my-10">
          <input className="bg-zinc-600 flex flex-row justify-start text-base w-3/4" type="text" placeholder="type in a group or friend..."/>
          <FaSearch className="text-base ease-in-out duration-200 hover:text-xl cursor pointer"/>
        </div>
        <div className="flex flex-col items-center justify-center text-3xl w-full h-3/4 overflow-y-scroll" >
          {chats.map((chat, index) => {
            return (
              <Link className="my-5 h-20 w-3/4" href={{
                pathname: `chats/[chat]`,
                query: { chat: chat },
              }}>
                <div key={index} className="bg-zinc-600 flex flex-row items-center justify-center rounded-xl h-20 shadow-xl ease-in-out duration-200 hover:bg-zinc-500 active:bg-zinc-400">{chat}</div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="border-2 border-red-600 h-screen w-1/2">
          <div>First Profile Preview</div>
      </div>
    </div>
  )
}
