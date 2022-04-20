import React from 'react';
import { Button } from 'antd';
const Header = () => {
  return (
    <>
      <div className='flex'>
        <img src='../assets/images/logo.png'/>
        <Button type="primary"  size="middle">Get Starting</Button>
      </div>
    </>
  );
};
export default Header;