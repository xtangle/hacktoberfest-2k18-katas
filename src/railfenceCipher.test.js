import { railfenceCipher } from './railfenceCipher';

describe('railfenceCipher', () => {
    it('railfenceCipher encrypt works for simple input', () => {
        expect(railfenceCipher('helloworld', 3, 'encrypt')).toEqual('holelwrdlo');
    });

    it('railfenceCipher encrypt ignores whitespaces and punctuation', () => {
        expect(railfenceCipher('alice, how are you?', 3, 'encrypt')).toEqual('aeaolchwryuioe');
    });

    it('railfenceCipher encrypt supports various fence heights', () => {
        expect(railfenceCipher('railfence', 2, 'encrypt')).toEqual('rifnealec');
        expect(railfenceCipher('railfence', 3, 'encrypt')).toEqual('rfealecin');
        expect(railfenceCipher('railfence', 4, 'encrypt')).toEqual('rnaecifel');
    });

    it('railfenceCipher decrypt works', () => {
        expect(railfenceCipher('rifnealec', 2, 'decrypt')).toEqual('railfence');
        expect(railfenceCipher('cecrihrnoeped', 3, 'decrypt')).toEqual('cipherencoder');
        expect(railfenceCipher('hbaoectrk', 4, 'decrypt')).toEqual('hacktober');
    });
});
