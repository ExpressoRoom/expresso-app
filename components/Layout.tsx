import Nav from './Nav';
import React, { useState } from 'react';

type LayoutChildren = { children: React.ReactNode };

const Layout = ({ children }: LayoutChildren) => {

  const [expand, setExpand]:[boolean, any] = useState(true);

  return (
    <div>
      <Nav className="border-2 border-red-600" expand = {expand} setExpand = {setExpand} />
      <div>
        <main>{children}</main>
      </div>
    </ div>
  )
}

export default Layout;