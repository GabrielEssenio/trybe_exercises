const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};

describe('Transform all letters to UpperCase', (() => {

    it('Change all letters to UpperCase', (done) => {
        uppercase('maiúsculo', (str) => {
            expect(str).toBe('MAIÚSCULO');
            done();
        })
    });
}))