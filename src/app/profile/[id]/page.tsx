import Profile from '@/components/pages/profile';
import { serverFetch } from '@/fetcher/serverFetch';
import { DefaultRes, FetchRes, UserData } from '@/fetcher/types';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

const getUserInfo = async () => {
  try {
    return await serverFetch<FetchRes<DefaultRes<UserData>>>(`/user`);
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export default async function ProfilePage() {
  const isToken = cookies().has('accessToken');

  const {
    data: {
      data: { userId, likeCount, name, profileImage },
    },
  } = await getUserInfo();

  return (
    <Profile
      userId={userId}
      likeCount={likeCount}
      name={name}
      profileImage={profileImage}
      isToken={isToken}
    />
  );
}
