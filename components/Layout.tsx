import Nav from './Nav';
import { useState } from 'react';

const Layout = ({ children }: any) => {

  const [expand, setExpand]:[boolean, any] = useState(true);

  return (
    <div>
      <Nav expand = {expand} setExpand = {setExpand} />
      <div>
        <main>{children}</main>
      </div>
    </ div>
  )
}

export default Layout;