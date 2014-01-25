var should = require('chai').should();
var tokeniser = require('../tokeniser');

describe('the tokeniser', function() {
	describe('when alternating number then letter', function() {
		it('should split 1a2', function() {
			tokeniser.split('1a2').should.eql(['1', 'a', '2']);
		});
		it('should split 2a3b4', function() {
			tokeniser.split('2a3b4').should.eql(['2', 'a', '3', 'b', '4']);
		});
		it('should split 3a4b5c6', function() {
			tokeniser.split('3a4b5c6').should.eql(['3', 'a', '4', 'b', '5', 'c', '6']);
		});
		it('should split 4a5b6c7d8', function() {
			tokeniser.split('4a5b6c7d8').should.eql(['4', 'a', '5', 'b', '6', 'c', '7', 'd', '8']);
		});
		it('should split 9a10b11c12d13e14', function() {
			tokeniser.split('9a10b11c12d13e14').should.eql(['9', 'a', '10', 'b', '11', 'c', '12', 'd', '13', 'e', '14']);
		});
		it('should split 10a11b12c13d14e15f16', function() {
			tokeniser.split('10a11b12c13d14e15f16').should.eql(['10', 'a', '11', 'b', '12', 'c', '13', 'd', '14', 'e', '15', 'f', '16']);
		});
	});

	describe('when letters are side by side', function() {
		it('should split 1ae2c3fa1', function() {
			tokeniser.split('1ae2c3fa1').should.eql(['1', 'a', 'e', '2', 'c', '3', 'f', 'a', '1']);
		});
	});

	describe('when starting with large number', function() {
		it('should split 123456a1', function() {
			var result = tokeniser.split('123456a1').should.eql(['123456','a','1']);
		});
		it('should split 1234a456b13', function() {
			tokeniser.split('1234a456b13').should.eql(['1234', 'a', '456', 'b', '13']);
		});
	});
});