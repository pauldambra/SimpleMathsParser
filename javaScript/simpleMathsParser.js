var tokeniser = require('./tokeniser');

var operationSelection = function(operator, left, right) {
	switch(operator) {
		case 'a': 
			left += right;
			break;
		case 'b': 
			left -= right;
			break;
		case 'c':
			left *= right;
			break;
		case 'd':
			left /= right;
			break;
	}
	return left;
};

var calculateTotalFromTokens = function(tokens) {
	var total = parseInt(tokens[0]);
	for(var i = 1, len = tokens.length; i<len; i+=2) {
		total = operationSelection(tokens[i], total, parseInt(tokens[i+1]));
	}
	return total;
};

var getTokensWithinBrackets = function(tokens, openIndex, closeIndex) {
	var bracketedAreaLength = closeIndex - openIndex - 1;
	var slice = tokens.slice(openIndex+1, closeIndex);
	return slice;
};

var replaceBracketedRange = function(tokens, startIndex, closeIndex, replacement) {
	var alteredTokens = [];
	var insertIndex = 0;

	for(i = 0, len = tokens.length; i < len; i++) {
		if (i < startIndex || i > closeIndex) {
			alteredTokens[insertIndex++] = tokens[i];
		}
		if (i === startIndex) {
			alteredTokens[insertIndex++] = replacement;
		}
	}

	return alteredTokens;
};

var processBracketsWithPrecedence = function(tokens) {
	var innermostOpenBracketIndex = tokens.lastIndexOf('e');

	while (innermostOpenBracketIndex != -1) {
		var innermostCloseBracketIndex = tokens.indexOf('f');
		var bracketedTokens = getTokensWithinBrackets(tokens, innermostOpenBracketIndex, innermostCloseBracketIndex);
		var bracketedTotal = calculateTotalFromTokens(bracketedTokens);
		tokens = replaceBracketedRange(tokens, innermostOpenBracketIndex, innermostCloseBracketIndex, bracketedTotal);

		innermostOpenBracketIndex = tokens.lastIndexOf('e');
	}

	return tokens;
};

module.exports.parse = function(input) {
	var tokens = tokeniser.split(input);
	tokens = processBracketsWithPrecedence(tokens);
	var total = calculateTotalFromTokens(tokens);
	return total;
};