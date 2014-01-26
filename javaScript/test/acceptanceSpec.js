var should = require('chai').should();
var simpleMathsParser = require('../simpleMathsParser');

describe('to prove it works', function() {
	it('should parse and calculate 3a2c4 correctly', function() {
		simpleMathsParser.parse('3a2c4').should.equal(20);
	});
	it('should parse and calculate 32a2d2 correctly', function() {
		simpleMathsParser.parse('32a2d2').should.equal(17);
	});
	it('should parse and calculate 500a10b66c32 correctly', function() {
		simpleMathsParser.parse('500a10b66c32').should.equal(14208);
	});
	it('should parse and calculate 3ae4c66fb32 correctly', function() {
		simpleMathsParser.parse('3ae4c66fb32').should.equal(235);
	});
	it('should parse and calculate 3c4d2aee2a4c41fc4f correctly', function() {
		simpleMathsParser.parse('3c4d2aee2a4c41fc4f').should.equal(990);
	});
});