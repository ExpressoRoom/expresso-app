import Link from 'next/link';

const Nav = ({ expand, setExpand }: any) => (
  <nav className="bg-neutral-300 text-black border-2 border-red-600 absolute left-0 h-screen w-1/6">
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/login'>Login</Link>
      </li>
    </ul>
  </nav>
)

export default Nav;