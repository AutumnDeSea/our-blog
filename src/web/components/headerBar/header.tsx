import React from 'react';
import { Link } from 'react-router-dom';
const headArr = [
  {
    title: '我的博客',
    link: '/',
    icon: '',
  },
  {
    title: '算法之路',
    link: '/leetcode',
  }, 
  {
    title: '个人简历',
    link: '/resume',
  },
  {
    title: '关于博客',
    link: '/about',
  },
];
const HeaderBar = () => {
  const HeaderNodes = headArr.map(( item ) => {
    return (
      <li key={item.link}>
        <Link to={item.link}>{item.title}</Link>
      </li>
    );
  });
  return (
    <>
      <div className='flex'>
        <div>kk的世界</div>
        <ul className='flex justify-around'>
         {HeaderNodes} 
        </ul>
      </div>
    </>
  );
};
export default HeaderBar;