const jstype = (type, param) => {
  if (['Undefined', 'Null', 'Number', 'String', 'Object', 'Array', 'Boolean', 'Function', 'Symbol', 'Date', 'RegExp', 'Error'].includes(type)) {
    return Object.prototype.toString.apply(param) === `[object ${type}]`;
  } if (['NaN', 'Integer', 'Finite', 'SafeInteger'].includes(type)) {
    return Number[`is${type}`](param);
  }
}

module.exports = (type, param, istThrow = false)=> {
  const result = jstype(type, param);
  if (istThrow && !result) {
    throw new Error(`GBOX: ${param} Not ${type}!`)
  }else {
    return result;
  }
};