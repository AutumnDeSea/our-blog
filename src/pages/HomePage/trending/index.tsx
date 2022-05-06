import React from 'react';
import SvgIcon from '@components/common/icon';
const Trending = () => {
  return (
    <>
      <h2 className="flex pt-40">
        <SvgIcon iconName='icon-qushi' className='text-20'/>
        <p className='pl-10'>TRENDING ON MEDIUM</p>
      </h2>
    </>
  );
};
export default Trending;