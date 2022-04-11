import { useCallback, useState } from 'react';

type noop = (...args: any[]) => any;

function useLoading<T extends noop>(fn: T) {
  const [loading, setLoading] = useState(false);

  const exector = useCallback(
    (...args) => {
      setLoading(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        fn.apply(this, args);
      } finally {
        setLoading(false);
      }
    },
    [fn],
  );
  return [loading, exector];
}

export default useLoading;
