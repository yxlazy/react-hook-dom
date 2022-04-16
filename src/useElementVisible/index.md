---
nav:
  path: /hooks
---

## useElementVisible

useElementVisible is used to determine whether the specified element is visible in a viewport.

> Note: The positioning of useElementVisible and useComputeOverflow are different.

> Secne: For example, when customizing a drop-down box, we can use this hook to monitor when we have to display the drop-down box in the viewport.

### Usage:

```typescript
const [visible, setElement] = useElementVisible();

useEffect(() => {
  if (elementRef.current) {
    setElement(elementRef.current);
  }
}, []);
```

### API

```typescript
const [visible, setElement] = useElementVisible<C extends Element, P extends Element>(): [boolean, (element: C, container?: P) => void];
```

> The default value of `container` is `document documentElement`.
