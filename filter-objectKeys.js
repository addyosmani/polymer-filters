/**
 * Transform an object into an array of its enumerable property names. Treats
 * null or undefined as the empty object (and so returns an empty array).
 * @param  {object} obj
 * @return {array}
 */
PolymerExpressions.prototype.objectKeys = function(obj) {
  return obj ? Object.keys(obj) : [];
};
