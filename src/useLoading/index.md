---
nav:
  path: /hooks
---

## useLoading

useLoading is used to display loading before the request has returned.

### Usage:

```typescript
const [loading, exector] = useLoading(requestFn);
```

### API

```typescript
const [loading, exector] = useLoading<T extends (...args: any[]) => any>(fn: T): [boolean, (...args: any[]) => Promise<void>];
```

### Params

| Property  | Description        | Type       | Default |
| --------- | ------------------ | ---------- | ------- |
| requestFn | A promise function | `function` | -       |
