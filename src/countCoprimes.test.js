import { countCoprimes } from './countCoprimes';

describe('countCoprimes', () => {
  it('4 has 2 coprimes less than itself', () => {
    expect(countCoprimes(4)).toBe(2);
  });

  it('2147483647 has 2147483646 coprimes less than itself', () => {
    expect(countCoprimes(2147483647)).toBe(2147483646);
  });

  it('123456789 has 82260072 coprimes less than itself', () => {
    expect(countCoprimes(123456789)).toBe(82260072);
  });

  it('987654321 has 619703040 coprimes less than itself', () => {
    expect(countCoprimes(987654321)).toBe(619703040);
  });

  it('177264238 has 86470320 coprimes less than itself', () => {
    expect(countCoprimes(177264238)).toBe(86470320);
  });

  it('788238457 has 746580000 coprimes less than itself', () => {
    expect(countCoprimes(788238457)).toBe(746580000);
  });

  it('15 has 8 coprimes less than itself', () => {
    expect(countCoprimes(15)).toBe(8);
  });

  it('577347 has 382728 coprimes less than itself', () => {
    expect(countCoprimes(577347)).toBe(382728);
  });

  it('33 has 20 coprimes less than itself', () => {
    expect(countCoprimes(33)).toBe(20);
  });

  it('11 has 10 coprimes less than itself', () => {
    expect(countCoprimes(11)).toBe(10);
  });

  it('7777777 has 6637344 coprimes less than itself', () => {
    expect(countCoprimes(7777777)).toBe(6637344);
  });

  it('1024 has 512 coprimes less than itself', () => {
    expect(countCoprimes(1024)).toBe(512);
  });

  it('24137569 has 22717712 coprimes less than itself', () => {
    expect(countCoprimes(24137569)).toBe(22717712);
  });

  it('531441 has 354294 coprimes less than itself', () => {
    expect(countCoprimes(531441)).toBe(354294);
  });

  it('2773645 has 1901760 coprimes less than itself', () => {
    expect(countCoprimes(2773645)).toBe(1901760);
  });

  it('10 has 4 coprimes less than itself', () => {
    expect(countCoprimes(10)).toBe(4);
  });

  it('2147483646 has 534600000 coprimes less than itself', () => {
    expect(countCoprimes(2147483646)).toBe(534600000);
  });

  it('1000000 has 400000 coprimes less than itself', () => {
    expect(countCoprimes(1000000)).toBe(400000);
  });
});
