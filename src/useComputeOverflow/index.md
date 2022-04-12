---
nav:
  path: /hooks
---

## useComputeOverflow

useComputeOverflow is used to calculate whether there is overflow in the vertical direction of two parent and child elements.

### Usage:

```typescript
const [overflow, setElement] = useComputeOverflow();

useEffect(() => {
  if (parentRef.current && childRef.current) {
    setElement(parentRef.current, childRef.current);
  }
}, []);
```

### API

```typescript
const [overflow, setElement] = useComputeOverflow<S extends Element, T extends Element>(): [boolean, (parent: S, child: T) => void];
```
