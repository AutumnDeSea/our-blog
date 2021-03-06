import React  from 'react';
import { Button } from 'antd';
const Banner = () => {
  return (
    <div className='bg-yellow pt-92 pb-92  md:pl-48 pl-24'>
      <div className='max-w-500'>
        <p className='text-70'>Stay curious.</p>
        <p className='text-24'>Discover stories, thinking, and expertise from writers on any topic.</p>
        <Button type="primary" shape="round" size='large'>Start reading</Button>
      </div>
    </div>
  );
};
export default Banner;