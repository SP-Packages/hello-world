import { vi, test, expect } from 'vitest';

/**
 * Mock the helloWorld function from the index.js file
 */
vi.mock('../../src/index', async () => {
  const actual = await vi.importActual('../../src/index');
  return {
    ...actual,
    helloWorld: vi.fn()
  };
});

/**
 * Test the CLI
 */
test('CLI should call helloWorld', async () => {
  await import('../../src/bin/index');
  const { helloWorld } = await import('../../src/index');

  expect(helloWorld).toHaveBeenCalled();
});
