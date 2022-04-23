import { renderHook } from '@testing-library/react-hooks';
import useElementVisible from '../index';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

const setUp = () => renderHook(() => useElementVisible());

describe('useElementVisible', () => {
  it('should be defined', () => {
    expect(useElementVisible).toBeDefined();
  });

  it('test on mounts', () => {
    const { result } = setUp();

    expect(result.current[0]).toBe(true);
    expect(result.current[1]).toBeDefined();
  });
});
