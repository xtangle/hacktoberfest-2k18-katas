import { countCodeLines } from './countCodeLines';

/*
  Write a utility that counts the number of lines of actual code in a javascript source string, excluding comments and whitespace
  The function accepts a multiline string, and returns an integer
*/

describe('countCodeLines', () => {
  it('counts the lines containing code in a simple snippet', () => {
    const simpleSnippet = `
    // this snippet contains 3 lines of code
    const darthVader = () => {

      return 'The Force is strong with this one.'
    }
    `
    expect(countCodeLines(simpleSnippet)).toEqual(3)
  });

  const messedUpSnippet = `
    const subject = 'Luke'

    /*****
    * This is a snippet with 4 lines of code
    *  /* no nesting allowed!
    //*****//***/// Slightly pathological comment ending...

    let familyRelation = subject => (
      subject + ' i am you father'
    )

    console.log(familyRelation(subject))
  `
  it('counts the lines containing code in a messed up snippet', () => {
    expect(countCodeLines(messedUpSnippet)).toEqual(5)
  });
});