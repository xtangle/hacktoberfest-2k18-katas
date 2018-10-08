import { textFrame } from './textFrame';

describe(`Text frame is made from 4 strings which create rectangle.
Two of them are pleced horizontal and the remaning two vertical.
First letter of top-horizontal word must be the same as first letter of left-vertical word.
Last letter of top-horizontal word must be the same as first letter of right-vertical word.
First letter of bottom-horizontal word must be the same as last letter of left-vertical word.
Last letter of bottom-horizontal word must be the same as last letter of right-vertical word.
Inside the frame must be an empty space.

Example:
From: "abcd", "bcad", "daad", "aaab"
Text frame with empty space inside can be created:

abcd
a  a
a  a
bcad

Your task is to determine if it is possible to create text frame.
`, () => {

		it('should return true if letters match.', () => {
      expect(textFrame("john", "wick", "jigsaw", "hijack")).toBeTruthy()
      expect(textFrame("loop", "loop", "pool", "pool")).toBeTruthy()
    });
    
    it('should return false if rectangle cant be created from words.', () => {
			expect(textFrame("every", "word", "different", "length")).toBeFalsy()
		});

		it('should return false if letters dont match.', () => {
			expect(textFrame("aaaa", "aaaa", "bbbb", "bbbb")).toBeFalsy()
		});

		it('should return false if there is no empty space in frame.', () => {
			expect(textFrame("Aaaaa", "aA", "aaaaaA", "Aa")).toBeFalsy()
		});
	});
