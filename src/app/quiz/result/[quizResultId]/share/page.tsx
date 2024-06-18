import { redirect } from 'next/navigation';
import { QUIZ_PATH } from '@/routes/path.ts';

export default function SharePage() {
  // NOTE: 새로고침 시에는(Server Side Route) redirect
  redirect(QUIZ_PATH);
}
