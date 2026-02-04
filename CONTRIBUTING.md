To maintain a consistent codebase, we ask that all contributors follow these stylistic guidelines.

## 1. TypeScript First

**No any:**
Avoid using any at all costs, Use proper interfaces or types.

Inference: Let TypeScript infer types where obvious (e.g., const `[value, setValue] = useState(false)`), but explicitly type function arguments and return values.
Interfaces vs Types: Use interface for component props and type for unions or complex compositions.

---

## 2. Component Structure
We follow a functional component pattern using Arrow Functions:

```ts
// ✅ Do this
export const LinkCard = ({ url, status }: LinkCardProps) => {
  return <Paper>{/* content */}</Paper>;
};

// ❌ Avoid this
function LinkCard(props) { ... }
```
