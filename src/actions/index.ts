'use server';

export const toggleWordLike = async (isLike: boolean, likeCount: number) => {
  // const response = await putWordLike(isLike);
  return new Promise<{ isLike: boolean; likeCount: number }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          isLike: !isLike,
          likeCount: isLike ? likeCount - 1 : likeCount + 1,
        }),
      1000,
    ),
  );
};
