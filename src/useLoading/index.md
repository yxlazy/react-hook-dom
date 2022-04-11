---
nav:
  title: Hooks
  path: /hooks
---

## useLoading

Demo:

```typescript
const [loading, exector] = useLoading(requestFn);
```

### Params

| 参数      | 说明               | 类型       | 默认值 |
| --------- | ------------------ | ---------- | ------ |
| requestFn | 请求后端接口的函数 | `function` | -      |
