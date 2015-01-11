/**
 * Return  Underscored `str`.
 * @param  {string} str 
 * @return {string}
 */
PolymerExpressions.prototype.underscore = function(str){
  return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
};