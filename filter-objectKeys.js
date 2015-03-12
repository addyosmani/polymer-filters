/**
 * Transform an object into an array of its enumerable property names. If `obj`
 * is null or undefined, it is returned unchanged.
 * @param  {object} obj
 * @return {array}
 */
PolymerExpressions.prototype.objectKeys = function(obj) {
  return obj == null ? obj : Object.keys(obj);
};
