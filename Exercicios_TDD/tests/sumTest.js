var should = require('should');
var sum = require('../sum');

describe('sum.js', function() {
    it('sum of 2 + 3 should return 5', function() {
        sum(2, 3).should.be.equal(5);
    });
    it('sum of 10 + 10 should return 20', function() {
        sum(10, 10).should.be.equal(20);
    });
    it('sum of 10 + string should return TypeError', function() {
        sum(10, 'abc').should.be.equal('ERROR: Type of parameter is String');
    });
});
