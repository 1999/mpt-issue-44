import {rawr} from '../../src/test';
import {expect} from 'code';

describe('suite', () => {
    it('case', (done) => {
        setTimeout(() => {
            done();
        }, 4000);
    });

    it('case2', () => {

        expect(rawr()).equal(2);

    })
});
