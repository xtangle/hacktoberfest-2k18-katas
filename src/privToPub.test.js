import { privToPub } from './privToPub';

/*
     ▁▁▁▁▁▁▁
    ▕ P=G⋅K ▏
     ▔▔▔▔▔▔▔
    Where:
    P - public key
    K - private key
    G - some base point

    ░░░░░░░░░░░░░░░░░░░

    Gx = 55066263022277343669578718895168534326250603453777594175500187360389116729240
    Gy = 32670510020758816978083085130507043184471273380659243275938904335757337482424
    G = (Gx, Gy)
 */

describe('privToPub', () => {

    it('calculates public key', () => {
        expect(privToPub('c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470')).toEqual('a63a07e888061ec9e8b64a3dc2937805c76089af36459305920373cd98a9f4ce15c27dbbe60928161eb62ae19f94ea48f399ce85e6db698520f3bcd4a9257157');
    });

    it('calculates public key', () => {
        expect(privToPub('10ca3eff73ebec87d2394fc58560afeab86dac7a21f5e402ea0a55e5c8a6758f')).toEqual('765ee8b856d2ec6a1ea400c0dea57095fd096a45fe6735fe199738c4ec4909c6c2bda34586353edd45419d715925875ebb9f371c3eeb38ed3a3615b93e20dc1a');
    });
});
