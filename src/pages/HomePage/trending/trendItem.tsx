import React  from 'react';
import cn from 'classnames';
const TrendItem = () => {
  return (
    <>
      <div className={cn('flex max-w-full sm:max-w-1/2 lg:max-w-1/3 2xl:max-w-trendItemWidth pl-14px pr-14px' )}>
        <div>01</div>
        <div className='flex flex-col'>
          <div className="flex">
            <img src='https://miro.medium.com/fit/c/40/40/2*Vjiwqoib1HcKLdkM1xwp_g.jpeg'></img>
            <p>Andre Cronje</p>
          </div>
          <p>The rise and fall of crypto culture heloworld heloow ulture helowor ulture helowor ulture helowor ulture helowor ulture helowor ulture helowor ulture helowor </p>
          <p>Apr 18·2 min read</p>
        </div>
      </div>
    </>
  );
};
export default TrendItem;