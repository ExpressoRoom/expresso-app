import Link from 'next/link';

import {
  FaHome,
  FaRegCalendarAlt,
  FaUserFriends,
  FaThList,
  FaCode,
  FaBookReader
} from "react-icons/fa";

const Nav = ({ expand, setExpand }: any) => (
  <nav className="bg-neutral-300 text-black border-4 border-red-600 py-20 absolute left-0 h-screen w-1/6">
    <ul className="flex flex-col gap-y-10 text-center">
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaHome className="inline" /><Link href='/'>Home</Link>
      </li>
      {/* <li className="border-2 border-red-600 my-10">
        <Link href='/login'>Login</Link>
      </li> */}
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaCode className="inline" /><Link href='/projects'>Projects</Link>
      </li>
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaUserFriends className="inline" /><Link href='/groups/overview'>Groups</Link>
      </li>
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaRegCalendarAlt className="inline" /><Link href='/calendar'>Calendar</Link>
      </li>
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaThList className="inline" /><Link href='/notes'>Notes</Link>
      </li>
      <li className="flex justify-start items-center gap-2 pl-8">
        <FaBookReader className="inline" /><Link href='/resources'>Resources</Link>
      </li>
    </ul>
  </nav>
)

export default Nav;