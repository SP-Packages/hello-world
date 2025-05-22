import { helloWorld } from '../src/index';
import { vi, expect, test } from 'vitest';

/**
 * Test the helloWorld function
 */
test("helloWorld logs 'Hello, World!'", () => {
  const consoleSpy = vi.spyOn(console, 'log');
  consoleSpy.mockImplementation(() => {});

  helloWorld();

  expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');

  consoleSpy.mockRestore();
});
