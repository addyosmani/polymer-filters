/**
 * Trim a string, removing leading and trailing whitespace
 * @param  {string} input
 * @return {string} trimmed string
 */
PolymerExpressions.prototype.trim = function(input){
  return input && input.replace(/^\s*|\s*$/g, '');
}
