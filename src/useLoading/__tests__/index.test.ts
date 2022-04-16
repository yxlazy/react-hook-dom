import { act, renderHook } from '@testing-library/react-hooks';
import useLoading from '../index';

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

const setUp = <T extends (...args: any[]) => void>(fn: T) => renderHook(() => useLoading(fn));

const asyncFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

describe('useLoading', () => {
  it('should be defined', () => {
    expect(useLoading).toBeDefined();
  });

  it('test on methods', () => {
    const { result } = setUp(asyncFn);
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);

    setTimeout(() => {
      expect(result.current[0]).toBe(true);
    }, 999);

    setTimeout(() => {
      expect(result.current[0]).toBe(false);
    }, 1000);
  });
});
