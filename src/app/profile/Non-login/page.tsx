import Profile from '@/components/pages/profile';
import { cookies } from 'next/headers';

export default function NonLoginPage() {
  const isToken = cookies().has('accessToken');

  return <Profile isToken={isToken} />;
}
