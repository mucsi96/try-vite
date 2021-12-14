/* eslint-disable @typescript-eslint/no-empty-function */
import { act } from 'react-dom/test-utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function asMock<F extends (...args: any[]) => any>(
  f: F
): jest.MockedFunction<F> {
  return f as jest.MockedFunction<F>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const waitFor = (callback: Function, { interval = 50, timeout = 1000 } = {}): Promise<undefined> =>
  act(
    () =>
      new Promise((resolve, reject) => {
        const startTime = Date.now();

        const nextInterval = () => {
          setTimeout(() => {
            try {
              callback();
              resolve();
            } catch (err) {
              if (Date.now() - startTime > timeout) {
                reject(new Error('Timed out.'));
              } else {
                nextInterval();
              }
            }
          }, interval);
        };

        nextInterval();
      })
  );
