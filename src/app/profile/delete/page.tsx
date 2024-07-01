import DeleteAccount from '@/components/pages/profile/DeleteAccount';
import { serverFetch } from '@/fetcher/serverFetch';
import { FetchRes, DefaultRes, UserData } from '@/fetcher/types';
import { notFound } from 'next/navigation';

const getUserInfo = async () => {
  try {
    return await serverFetch<FetchRes<DefaultRes<UserData>>>(`/user`);
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export default async function DeleteAccountPage() {
  const {
    data: {
      data: { userId },
    },
  } = await getUserInfo();

  return <DeleteAccount userId={userId} />;
}
