import { atbash } from './atbash';

describe('atbash', () => {
  it('returns szxpglyviuvhg for hacktoberfest', () => {
    expect(atbash("hacktoberfest")).toEqual("szxpglyviuvhg");
  });

  it('returns zgyzhsrhzdvhlnv for atbashisawesome', () => {
    expect(atbash("zgyzhsrhzdvhlnv")).toEqual("atbashisawesome");
  });

  it('returns gsv ozab wlt qfnkvw levi gsv yrt yildm ulc for the lazy dog jumped over the big brown fox', () => {
    expect(atbash("the lazy dog jumped over the big brown fox")).toEqual("gsv ozab wlt qfnkvw levi gsv yrt yildm ulc");
  });
})