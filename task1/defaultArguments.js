/**
 * Add Defaults to Function
 * @param {Function} func
 * @param {Object} defaults
 * @returns {Function}
 */
export const defaultArguments = function (func, defaults) {
  const returnFunc = (...args) => {
    const originalFunc = returnFunc.originalFunc;
    const originalFuncParams = getParams(originalFunc);
    const hasDefaults = Object.entries(defaults).length > 0;

    const argsWithDefaults = originalFuncParams.map((param, index) => {
      if (typeof args[index] !== "undefined") return args[index];
      else if (hasDefaults && typeof defaults[param] !== "undefined") return defaults[param];
      return undefined;
    });
    return originalFunc.apply(null, argsWithDefaults);
  };

  if (typeof func.originalFunc === "function") returnFunc.originalFunc = func.originalFunc;
  else returnFunc.originalFunc = func;
  return returnFunc;
};

const getParams = (func) => {
  if (typeof func !== "function") return [];

  let params = func.toString();
  params = params
    .match(/\((.*)\)/g)[0]
    .replace(/([\(\)\s])/g, "")
    .split(",");

  return params;
};
