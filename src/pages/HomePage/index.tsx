import React  from 'react';
import Banner from './banner';
import TrendingTop from './trending';
import TrendItem from './trending/trendItem';
import { useQuery } from 'react-query';
import { HomeCacheKeys } from '@apis/queryKeys';
import HomeService from '@apis/services/HomeService';
import HandleBoundray from '@/stories/HandleBoundary';
import cn from 'classnames';
const HomePage = () => {
  const trendingList = useQuery(HomeCacheKeys.TrendingList, () => 
    HomeService.getTrendingList(),
  );
  return (
    <div className='pt-75'>
      <Banner/>
      <HandleBoundray query= { trendingList }>
        {data => (
          <div  className='md:pl-48 md:pr-48 pl-24 pr-24'>
            <TrendingTop/>
            <div className={cn('flex flex-wrap')}>
              {
                data.data.data.map((item, index) => (
                  <TrendItem key={index}/>
                ))
              } 
            </div>
          </div>
        )}
      </HandleBoundray>
      
    </div>
  );
};
export default HomePage;