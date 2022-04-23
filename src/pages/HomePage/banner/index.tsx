import React  from 'react';
import { Button } from 'antd';
const Banner = () => {
  return (
    <div className='bg-yellow pt-92 pb-92 pl-24 md:pl-48 border-b border-black'>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-qushi"></use>
      </svg>
      <div className='max-w-500'>
        <p className='text-70'>Stay curious.</p>
        <p className='text-24'>Discover stories, thinking, and expertise from writers on any topic.</p>
        <Button type="primary" shape="round" size='large'>Start reading</Button>
      </div>
    </div>
  );
};
export default Banner;