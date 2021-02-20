import { Database } from './Interface';

class FakeDB implements Database {
  query(): Promise<{}> {
    return new Promise(res => {
      setTimeout(() => {
        res('foo');
      }, 300);
    });
  }
}

describe('db test', () => {
  it('should return the resolved promise result', async () => {
    const phony = new FakeDB();
    expect(await phony.query().then(res => res)).toEqual('foo');
  })
})