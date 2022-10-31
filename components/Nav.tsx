import Link from 'next/link';

const Nav = ({ expand, setExpand }: any) => (
  <nav>
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