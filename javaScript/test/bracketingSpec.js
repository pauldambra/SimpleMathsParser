var should = require('chai').should();
var simpleMathsParser = require('../simpleMathsParser');

describe('bracket processing', function() {
	it('should process 1ae2c3fa1 correctly', function() {
		simpleMathsParser.parse('1ae2c3fa1').should.equal(8);
	});
});
