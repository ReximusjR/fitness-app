import axios from 'axios';
import { ApiStandardResponse } from '../types';

export class ApiWrapper {
  static async get<T>(url: string): Promise<ApiStandardResponse> {
    const response = await axios.get(url);
    const body: T = response.data;
    return { body, status: response.status };
  }

  static async post<T>(url: string, postBody: T): Promise<ApiStandardResponse> {
    const response = await axios.post(url, postBody);
    return { body: response.data, status: response.status };
  }
}
