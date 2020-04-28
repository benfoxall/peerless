import { Server, Client } from '../src';

describe(Server, () => {
  it('is unimplemented', () => {
    expect(() => new Server()).toThrowError('Unimplemented');
  });
});

describe(Client, () => {
  it('is unimplemented', () => {
    expect(() => new Client()).toThrowError('Unimplemented');
  });
});
