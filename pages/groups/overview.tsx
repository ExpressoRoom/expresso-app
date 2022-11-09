import { useState } from 'react';
import Link from 'next/link';

export default function overview() {
  const [chats, setChats] = useState(['Group A', 'Allan', 'Tony', 'Group B'])

  // fetch lists of group chats and DMs
    // set chats to result

  return (
    <div className="border-2 border-yellow-600 flex items-center justify-left text-3xl ml-1/6 h-screen">
      <div className="border-2 border-blue-600 flex-col items center justify-left w-2/5 m-10">
        <form className="border-2 flex-col items-center justify-left text-base">
          <label>Search</label>
          <input type="text" placeholder="type in a group or friend..."/>
        </form>
        <div className="border-2 border-green-600 flex-col items-center justify-center text-3xl m-10 min-w-1/3 max-h-4/5 overflow-y-scroll" >
          {chats.map((chat, index) => {
            return (
              <Link href={{
                pathname: `chats/[chat]`,
                query: { chat: chat },
              }}>
                <div key={index} className="border-2 border-red-600 m-5 flex items-center justify-center h-20">{`${chat}`}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
