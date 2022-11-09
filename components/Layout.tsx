import Nav from './Nav';
import { useState, Dispatch, SetStateAction } from 'react';

const Layout = ({ children }: any) => {

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