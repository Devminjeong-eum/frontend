import Quiz from '@/components/pages/quiz';
import { ResolvingMetadata } from 'next';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  _: { [x: string]: never },
  parent: ResolvingMetadata,
) {
  const parentMetadata = (await parent) || [];

  const openGraph = parentMetadata?.openGraph ?? {};
  const twitter = parentMetadata?.twitter ?? {};

  return {
    ...parentMetadata,
    title: '개발 용어 발음 테스트',
    description: '개발 용어 발음을 올바르게 알고 있는지 테스트해보세요.',
    openGraph: {
      ...openGraph,
      title: '개발 용어 발음 테스트',
      description: '개발 용어 발음을 올바르게 알고 있는지 테스트해보세요.',
      url: 'https://dev-malssami.site/quiz',
    },
    twitter: {
      ...twitter,
      title: '개발 용어 발음 테스트',
      description: '개발 용어 발음을 올바르게 알고 있는지 테스트해보세요.',
    },
  };
}

export default function QuizPage() {
  return <Quiz />;
}
