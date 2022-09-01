import { Block } from '@blockchain/api-interfaces';
import getLatestBlocks from './controller';
test('shoud load latest blocks', async () => {
  await expect(getLatestBlocks()).resolves.toBeDefined();
});

test('shoud load latest blocks', async () => {
  const result = (await getLatestBlocks()) as Array<Block>;
  expect(result.length).toBe(10);
});
