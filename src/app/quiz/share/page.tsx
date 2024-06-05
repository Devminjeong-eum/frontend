import { redirect } from 'next/navigation';
import { QUIZ_PATH } from '@/routes/path.ts';

export default function SharePage() {
  redirect(QUIZ_PATH);
}
