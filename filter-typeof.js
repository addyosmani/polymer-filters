/**
 * Returns the Type of an expression
 * @param  {[any data type]} input
 * @return {string}
 *
 *Thanks to: https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
 */
 PolymerExpressions.prototype.typeof = function (input) {
	return ({}).toString.call(input).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};