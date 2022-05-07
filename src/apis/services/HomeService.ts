import type { TrendingListRes } from '../model/HomeModel';
import axios from 'axios';
import type BaseResponse from '../model';
export default class HomeService {
  static getTrendingList(): Promise<BaseResponse<TrendingListRes>> {
    return axios.get('/tending/list');
  }
}