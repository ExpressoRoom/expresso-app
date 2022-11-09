import Nav from './Nav';
import { useState, Dispatch, SetStateAction } from 'react';

type LayoutChildren = { children: React.ReactNode };

const Layout = ({ children }: LayoutChildren) => {

  const [expand, setExpand] : [boolean, Dispatch<SetStateAction<boolean>>]= useState(true);

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