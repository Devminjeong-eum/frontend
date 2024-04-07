import { MainDataType } from '@/types/main';
import baseInstance from './axios';

export const fetchPosts = async (pageNumber: number): Promise<MainDataType> => {
  const { data } = await baseInstance.get<MainDataType>(
    `words?page=${pageNumber}&size=10`,
  );
  return data;
};
