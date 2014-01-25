var should = require('chai').should();
var simpleMathsParser = require('../simpleMathsParser');

describe('using operators', function() {
	describe('for addition', function() {
		it('should add one and one', function() {
			simpleMathsParser.parse('1a1').should.equal(2);
		});
	})
});