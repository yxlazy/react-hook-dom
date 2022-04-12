import { useCallback, useState } from 'react';

function useLoading<T extends (...args: any[]) => any>(fn: T) {
  const [loading, setLoading] = useState(false);

  const exector = useCallback(
    async (...args) => {
      setLoading(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        await fn.apply(this, args);
      } finally {
        setLoading(false);
      }
    },
    [fn],
  );
  return [loading, exector] as [boolean, (...args: any[]) => Promise<void>];
}

export default useLoading;
