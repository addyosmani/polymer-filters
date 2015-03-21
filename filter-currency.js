/**
 * Format a Number in Currency Format
 * @param  {number} input
 * @param  {string} currency - defaults to '$'
 * @param  {integer} precision - defaults to 2
 * @return {string}
 */
PolymerExpressions.prototype.currency = function (input, currency, precision) {

	if (isNaN(input)) {
		return "Value is not a Number";
	} else {
		currency = currency || "$";
		precision = precision || 2;

		input = Number(input);
		input = input.toFixed(precision);
	}

	var
		parts = input.split('.'),
		fnum = parts[0],
		decimal = parts[1] ? '.' + parts[1] : '';

	return currency + fnum.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + decimal;
};