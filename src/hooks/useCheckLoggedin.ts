import { useEffect, useState } from 'react';

export default function useCheckLoggedin(ms = 600) {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null;
    if (isUser) {
      id = setTimeout(() => setIsUser(false), ms ?? 600);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [isUser, ms]);

  return { isUser, setIsUser };
}
