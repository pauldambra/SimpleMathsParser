module.exports.split = function(input) {
	var results = [];
	var insertIndex = 0;
	results[0] = input[0];

	var addorAppendToResults = function(item) {
		if (results[insertIndex] === undefined) {
			results[insertIndex] = item;
		} else {
			results[insertIndex] += item;
		}
	};

	var advanceInsertIndex = function(currentCharacterIsNumeric, previousCharacterIsNumeric) {
		//always advance the pointer unless both the current and previous characters are numeric
		if (currentCharacterIsNumeric && previousCharacterIsNumeric) {
			return;
		}
		insertIndex += 1;
	};

	for(var i = 1, len = input.length; i <len; i++) {
		var currentCharacterIsNumeric = input[i].match(/\d/);
		var previousCharacterIsNumeric = input[i-1].match(/\d/);

		advanceInsertIndex(currentCharacterIsNumeric, previousCharacterIsNumeric);

		addorAppendToResults(input[i]);
	}

	return results;
};