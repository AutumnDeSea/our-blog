import type BaseResponse from './index';
interface TrengingItem {
  'author': string,
  'title': string,
  'data': string,
  'readingTime': string 
}
export type TrendingListRes = TrengingItem[];