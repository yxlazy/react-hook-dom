import { useCallback, useEffect, useRef, useState } from 'react';

type Compute<S extends Element, T extends Element> = [boolean, (parent: S, child: T) => void];

function useComputeOverflow<S extends Element, T extends Element>() {
  const [parent, setParent] = useState<S>(),
    [child, setChild] = useState<T>(),
    [overflow, setOverflow] = useState(false);

  const setElement = useCallback((parent: S, child: T) => {
    setParent(parent);
    setChild(child);
  }, []);

  useEffect(() => {
    if (parent && child) {
      const { height: ph } = parent.getBoundingClientRect(),
        { height: ch } = child.getBoundingClientRect();

      setOverflow(ch >= ph);
    }
  });

  return [overflow, setElement] as Compute<S, T>;
}

export default useComputeOverflow;
