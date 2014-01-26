var should = require('chai').should();
var simpleMathsParser = require('../simpleMathsParser');

describe('using operators', function() {
	describe('for addition', function() {
		it('should add one and one', function() {
			simpleMathsParser.parse('1a1').should.equal(2);
		});
		it('should add two and one', function() {
			simpleMathsParser.parse('2a1').should.equal(3);
		});
		it('should add twice', function() {
			simpleMathsParser.parse('2a1a4').should.equal(7);
		});
	});

	describe('for subtraction', function() {
		it('should subtract one and one', function() {
			simpleMathsParser.parse('1b1').should.equal(0);
		});
		it('should subtract four and one', function() {
			simpleMathsParser.parse('4b1').should.equal(3);
		});
		it('should subtract twice', function() {
			simpleMathsParser.parse('4b1b2').should.equal(1);
		});
	});

	describe('for multiplication', function() {
		it('should multiply one and one', function() {
			simpleMathsParser.parse('1c1').should.equal(1);
		});
		it('should multiply four and two', function() {
			simpleMathsParser.parse('4c2').should.equal(8);
		});
		it('should multiply twice', function() {
			simpleMathsParser.parse('4c2c2').should.equal(16);
		});
	});

	describe('for division', function() {
		it('should divide one and one', function() {
			simpleMathsParser.parse('1d1').should.equal(1);
		});
		it('should divide eight and two', function() {
			simpleMathsParser.parse('8d2').should.equal(4);
		});
		it('should divide twice', function() {
			simpleMathsParser.parse('30d3d2').should.equal(5);
		});
	});
});