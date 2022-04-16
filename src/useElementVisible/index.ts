import { useCallback, useEffect, useRef, useState } from 'react';

function useElementVisible<C extends Element, P extends Element>() {
  const [visible, setVisible] = useState(true),
    nodeRef = useRef<C>(),
    containerRef = useRef<P>();

  const setElement = useCallback((element: C, container: P = document.documentElement as any) => {
    nodeRef.current = element;
    containerRef.current = container;
  }, []);

  useEffect(() => {
    if (nodeRef.current && containerRef.current) {
      const node = nodeRef.current,
        container = containerRef.current;
      const { bottom, top, left, right } = node.getBoundingClientRect();
      const { clientHeight: ch, clientWidth: cw } = container;

      setVisible(bottom > ch || top < 0 || right > cw || left < 0);
    }
  });

  return [visible, setElement] as [boolean, (element: C, container?: P) => void];
}

export default useElementVisible;
