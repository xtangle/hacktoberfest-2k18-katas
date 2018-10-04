import { HashSHA } from './HashSHA';

describe('HashSHA', () => {
  it('should return the SHA512 ', () => {
    expect(HashSHA('Hello world!')).toEqual('f6cde2a0f819314cdde55fc227d8d7dae3d28cc556222a0a8ad66d91ccad4aad6094f517a2182360c9aacf6a3dc323162cb6fd8cdffedb0fe038f55e85ffb5b6');
  });

  it('should return the SHA512', () => {
    expect(HashSHA('f6cde2a0f819314cdde55fc227d8d7dae3d28cc556222a0a8ad66d91ccad4aad6094f517a2182360c9aacf6a3dc323162cb6fd8cdffedb0fe038f55e85ffb5b6')).toEqual('16e44ce75e6bb1bfca77af84ee93061342cd883e36b32a4aaf2cc046249c2b540ec1cee676e3a0d545e90ef3ad2edb41955e32942aa1cb47a7f9f68b41243a9f');
  });
})