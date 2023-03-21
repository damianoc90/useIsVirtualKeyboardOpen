# useIsVirtualKeyboardOpen

This hook allows you to check if the mobile virtual keyboard on mobile device is opened.

## Basic usage

```tsx
import { useIsVirtualKeyboardOpen } from './useIsVirtualKeyboardOpen';

function App() {
  const { isVirtualKeyboardOpen } = useIsVirtualKeyboardOpen();

  return (
    <ErrorBoundary>
      <p>isVirtualKeyboardOpen: {isVirtualKeyboardOpen}</p>
    </ErrorBoundary>
  );
}
```
