import enquirer from 'enquirer';
import recursiveCopy from 'recursive-copy';
import pathExists from 'path-exists';
import through from 'through2';
import replaceString from 'replace-string';
import colors from 'colors';
import yargs from 'yargs';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof = unwrapExports(_typeof_1);

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

var toArray = createCommonjsModule(function (module) {
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toArray = unwrapExports(toArray);

var asyncToGenerator = createCommonjsModule(function (module) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createClass = unwrapExports(createClass);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty = unwrapExports(defineProperty);

var CaseConverterEnum;

(function (CaseConverterEnum) {
  CaseConverterEnum["None"] = "(noCase)";
  CaseConverterEnum["NoneUnderscore"] = "NoCase__";
  CaseConverterEnum["CamelCase"] = "(camelCase)";
  CaseConverterEnum["CamelCaseUnderscore"] = "CamelCase__";
  CaseConverterEnum["ConstantCase"] = "(constantCase)";
  CaseConverterEnum["ConstantCaseUnderscore"] = "ConstantCase__";
  CaseConverterEnum["DotCase"] = "(dotCase)";
  CaseConverterEnum["DotCaseUnderscore"] = "DotCase__";
  CaseConverterEnum["KebabCase"] = "(kebabCase)";
  CaseConverterEnum["KebabCaseUnderscore"] = "KebabCase__";
  CaseConverterEnum["LowerCase"] = "(lowerCase)";
  CaseConverterEnum["LowerCaseUnderscore"] = "LowerCase__";
  CaseConverterEnum["PascalCase"] = "(pascalCase)";
  CaseConverterEnum["PascalCaseUnderscore"] = "PascalCase__";
  CaseConverterEnum["PathCase"] = "(pathCase)";
  CaseConverterEnum["PathCaseUnderscore"] = "PathCase__";
  CaseConverterEnum["SentenceCase"] = "(sentenceCase)";
  CaseConverterEnum["SentenceCaseUnderscore"] = "SentenceCase__";
  CaseConverterEnum["SnakeCase"] = "(snakeCase)";
  CaseConverterEnum["SnakeCaseUnderscore"] = "SnakeCase__";
  CaseConverterEnum["TitleCase"] = "(titleCase)";
  CaseConverterEnum["TitleCaseUnderscore"] = "TitleCase__";
})(CaseConverterEnum || (CaseConverterEnum = {}));

var CaseConverterEnum$1 = CaseConverterEnum;

/**
 * Utility class to convert the case type of strings.
 */

var StringUtility = /*#__PURE__*/function () {
  function StringUtility() {
    _classCallCheck(this, StringUtility);
  }

  _createClass(StringUtility, null, [{
    key: "toCase",
    value:
    /**
     * Helper method for {@link CaseConverterEnum} to convert text into the proper case.
     *
     * ```
     * StringUtility.toCase('livesDown_by-the.River', CaseConverterEnum.PascalCase);
     * // 'LivesDownByTheRiver'
     * ```
     */
    function toCase(str, caseType) {
      switch (caseType) {
        case CaseConverterEnum$1.CamelCase:
        case CaseConverterEnum$1.CamelCaseUnderscore:
          return StringUtility.toCamelCase(str);

        case CaseConverterEnum$1.ConstantCase:
        case CaseConverterEnum$1.ConstantCaseUnderscore:
          return StringUtility.toConstantCase(str);

        case CaseConverterEnum$1.DotCase:
        case CaseConverterEnum$1.DotCaseUnderscore:
          return StringUtility.toSentence(str, '.');

        case CaseConverterEnum$1.KebabCase:
        case CaseConverterEnum$1.KebabCaseUnderscore:
          return StringUtility.toSentence(str, '-');

        case CaseConverterEnum$1.LowerCase:
        case CaseConverterEnum$1.LowerCaseUnderscore:
          return StringUtility.toSentence(str, '');

        case CaseConverterEnum$1.PascalCase:
        case CaseConverterEnum$1.PascalCaseUnderscore:
          return StringUtility.toPascalCase(str);

        case CaseConverterEnum$1.PathCase:
        case CaseConverterEnum$1.PathCaseUnderscore:
          return StringUtility.toSentence(str, '/');

        case CaseConverterEnum$1.SentenceCase:
        case CaseConverterEnum$1.SentenceCaseUnderscore:
          return StringUtility.toSentenceCase(str);

        case CaseConverterEnum$1.SnakeCase:
        case CaseConverterEnum$1.SnakeCaseUnderscore:
          return StringUtility.toSentence(str, '_');

        case CaseConverterEnum$1.TitleCase:
        case CaseConverterEnum$1.TitleCaseUnderscore:
          return StringUtility.toTitleCase(str);

        case CaseConverterEnum$1.None:
        case CaseConverterEnum$1.NoneUnderscore:
        default:
          return str;
      }
    }
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentence('livesDown_by-the.River');
     * // 'lives down by the river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '-');
     * // 'lives-down-by-the-river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '_');
     * // 'lives_down_by_the_river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '/');
     * // 'lives/down/by/the/river'
     * ```
     */

  }, {
    key: "toSentence",
    value: function toSentence(str) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
      return String(str) // Add a space after any digits.
      .replace(/(\d+)/g, ' $1 ') // Add a space before any upper case characters.
      .replace(/([a-z](?=[A-Z]))/g, '$1 ') // Remove all non-word characters and replace with a single space.
      .replace(/[^a-zA-Z0-9 ]/g, ' ') // Replace multiple Spaces with a single space.
      .replace(/\s+/g, ' ') // Trim whitespace around the string.
      .replace(/^ | $/g, '') // Lower case the entire string.
      .toLowerCase() // If a separator is passed in then replace the space with it.
      .replace(/\s+/g, separator);
    }
    /**
     * Converts a string to a camel case string.
     *
     * ```
     * StringUtility.toCamelCase('livesDown_by-the.River');
     * // 'livesDownByTheRiver'
     * ```
     */

  }, {
    key: "toCamelCase",
    value: function toCamelCase(str) {
      return StringUtility.toSentence(str) // Replace spaces between words with a string upper cased character.
      .replace(/ (\w)/g, function (_, $1) {
        return $1.toUpperCase();
      });
    }
    /**
     * Converts a hyphen string to a pascal case string.
     *
     * ```
     * StringUtility.toPascalCase('livesDown_by-the.River');
     * // 'LivesDownByTheRiver'
     * ```
     */

  }, {
    key: "toPascalCase",
    value: function toPascalCase(str) {
      return StringUtility.toCamelCase(str) // Make first character uppercase.
      .replace(/^[a-zA-Z]/, function (a, b, c) {
        return a.toUpperCase();
      });
    }
    /**
     * Converts a string to a constant case string.
     *
     * ```
     * StringUtility.toConstantCase('livesDown_by-the.River');
     * // 'LIVES_DOWN_BY_THE_RIVER'
     * ```
     */

  }, {
    key: "toConstantCase",
    value: function toConstantCase(str) {
      return StringUtility.toSentence(str, '_').toUpperCase();
    }
    /**
     * Converts a string to a title case string.
     *
     * ```
     * StringUtility.toTitleCase('livesDown_by-the.River');
     * // 'Lives Down By The River'
     * ```
     */

  }, {
    key: "toTitleCase",
    value: function toTitleCase(str) {
      return StringUtility.toSentence(str).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentenceCase('livesDown_by-the.River');
     * // 'Lives down by the river'
     * ```
     */

  }, {
    key: "toSentenceCase",
    value: function toSentenceCase(str) {
      var sentence = StringUtility.toSentence(str);
      return sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase();
    }
    /**
     * Determines if the value is a string value
     *
     * ```
     * StringUtility.isString('livesDown_by-the.River');
     * // true
     * ```
     */

  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }]);

  return StringUtility;
}();

var displayError = function displayError(message) {
  console.info(colors.bold.red("[Error in generate-template-files]: ".concat(colors.red(message))));
};
var displayWarning = function displayWarning(message) {
  console.info(colors.bold.yellow(colors.yellow(message)));
};
var displaySuccess = function displaySuccess(message) {
  console.info(colors.bold.green(colors.green(message)));
};
var throwErrorIfNoConfigItems = function throwErrorIfNoConfigItems(options) {
  var hasAtLeastOneItem = Boolean(options === null || options === void 0 ? void 0 : options.length);

  if (!hasAtLeastOneItem) {
    throw new Error('There was no IConfigItem items found.');
  }
};
var throwErrorIfOptionNameIsNotFound = function throwErrorIfOptionNameIsNotFound(item, templateName) {
  if (!item) {
    throw new Error("No IConfigItem found for ".concat(templateName));
  }
};
var throwErrorIfStringReplacersDoNotMatch = function throwErrorIfStringReplacersDoNotMatch(item, commandLineStringReplacers) {
  var _item$stringReplacers;

  var configItemStringReplacers = (_item$stringReplacers = item === null || item === void 0 ? void 0 : item.stringReplacers) !== null && _item$stringReplacers !== void 0 ? _item$stringReplacers : [];

  if (commandLineStringReplacers.length !== configItemStringReplacers.length) {
    throw new Error('IConfigItem stringReplacers do not match the command line arguments.');
  }

  var configItemStringReplacersKeys = configItemStringReplacers.map(function (replacer) {
    return StringUtility.isString(replacer) ? replacer : replacer.slot;
  }).sort().join(', ');
  var commandLineStringReplacersKeys = commandLineStringReplacers.map(function (replacer) {
    return replacer.slot;
  }).sort().join(', ');

  if (configItemStringReplacersKeys !== commandLineStringReplacersKeys) {
    throw new Error("".concat(configItemStringReplacersKeys, " does not match ").concat(commandLineStringReplacersKeys, "."));
  }
};
var throwErrorIfNoStringOrDynamicReplacers = function throwErrorIfNoStringOrDynamicReplacers(options) {
  var hasStringOrDynamicReplacers = options.every(function (item) {
    var _item$stringReplacers2, _item$dynamicReplacer;

    return Boolean(item === null || item === void 0 ? void 0 : (_item$stringReplacers2 = item.stringReplacers) === null || _item$stringReplacers2 === void 0 ? void 0 : _item$stringReplacers2.length) || Boolean(item === null || item === void 0 ? void 0 : (_item$dynamicReplacer = item.dynamicReplacers) === null || _item$dynamicReplacer === void 0 ? void 0 : _item$dynamicReplacer.length);
  }) && options.length > 0;

  if (!hasStringOrDynamicReplacers) {
    throw new Error('IConfigItem needs to have a stringReplacers or dynamicReplacers.');
  }
};
var throwErrorIfStringReplacersExistOrNoDynamicReplacers = function throwErrorIfStringReplacersExistOrNoDynamicReplacers(options) {
  var allValidBatchEntries = options.every(function (item) {
    var _item$stringReplacers3, _item$dynamicReplacer2;

    return !Boolean(item === null || item === void 0 ? void 0 : (_item$stringReplacers3 = item.stringReplacers) === null || _item$stringReplacers3 === void 0 ? void 0 : _item$stringReplacers3.length) && Boolean(item === null || item === void 0 ? void 0 : (_item$dynamicReplacer2 = item.dynamicReplacers) === null || _item$dynamicReplacer2 === void 0 ? void 0 : _item$dynamicReplacer2.length);
  }) && options.length > 0;

  if (!allValidBatchEntries) {
    throw new Error('IConfigItem for batchGenerate does not support stringReplacers, and must have dynamicReplacers.');
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var GenerateTemplateFiles = /*#__PURE__*/function () {
  function GenerateTemplateFiles() {
    _classCallCheck(this, GenerateTemplateFiles);

    _defineProperty(this, "_isCommandLine", false);

    _defineProperty(this, "_isBatch", false);
  }

  _createClass(GenerateTemplateFiles, [{
    key: "generate",
    value:
    /**
     * Main method to create your template files. Accepts an array of `IConfigItem` items.
     */
    function () {
      var _generate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
        var selectedConfigItem, answeredReplacers;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                throwErrorIfNoConfigItems(options);
                throwErrorIfNoStringOrDynamicReplacers(options);
                _context.next = 5;
                return this._getSelectedItem(options);

              case 5:
                selectedConfigItem = _context.sent;
                _context.next = 8;
                return this._getReplacerSlotValues(selectedConfigItem);

              case 8:
                answeredReplacers = _context.sent;
                _context.next = 11;
                return this._outputFiles(selectedConfigItem, answeredReplacers);

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                displayError(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function generate(_x) {
        return _generate.apply(this, arguments);
      }

      return generate;
    }()
    /**
     * Main method to create your template files with the command line.
     */

  }, {
    key: "commandLine",
    value: function () {
      var _commandLine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
        var _ref, _ref2, _ref2$, templateName, replacers, selectedConfigItem, commandLineStringReplacers, dynamicReplacers;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._isCommandLine = true;
                _context2.prev = 1;
                throwErrorIfNoConfigItems(options);
                throwErrorIfNoStringOrDynamicReplacers(options);
                _ref = yargs.argv._, _ref2 = _toArray(_ref), _ref2$ = _ref2[0], templateName = _ref2$ === void 0 ? '' : _ref2$, replacers = _ref2.slice(1);
                selectedConfigItem = options.find(function (configItem) {
                  return StringUtility.toCase(configItem.option, CaseConverterEnum$1.KebabCase) === StringUtility.toCase(templateName, CaseConverterEnum$1.KebabCase);
                });
                throwErrorIfOptionNameIsNotFound(selectedConfigItem, StringUtility.toCase(templateName, CaseConverterEnum$1.KebabCase));
                commandLineStringReplacers = replacers.map(function (str) {
                  var _str$split = str.split('='),
                      _str$split2 = _slicedToArray(_str$split, 2),
                      slot = _str$split2[0],
                      slotValue = _str$split2[1];

                  return {
                    slot: slot,
                    slotValue: slotValue
                  };
                });
                throwErrorIfStringReplacersDoNotMatch(selectedConfigItem, commandLineStringReplacers);
                dynamicReplacers = (selectedConfigItem === null || selectedConfigItem === void 0 ? void 0 : selectedConfigItem.dynamicReplacers) || [];
                _context2.next = 12;
                return this._outputFiles(selectedConfigItem, [].concat(_toConsumableArray(commandLineStringReplacers), _toConsumableArray(dynamicReplacers)));

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                displayError(_context2.t0.message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14]]);
      }));

      function commandLine(_x2) {
        return _commandLine.apply(this, arguments);
      }

      return commandLine;
    }()
    /**
     * Main method to run generate on multiple templates at once, without any interactive prompts
     */

  }, {
    key: "batchGenerate",
    value: function () {
      var _batchGenerate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(options) {
        var _iterator, _step, selectedConfigItem, answeredReplacers;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._isBatch = true;
                throwErrorIfNoConfigItems(options);
                throwErrorIfStringReplacersExistOrNoDynamicReplacers(options);
                _iterator = _createForOfIteratorHelper(options);
                _context3.prev = 4;

                _iterator.s();

              case 6:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 15;
                  break;
                }

                selectedConfigItem = _step.value;
                _context3.next = 10;
                return this._getDynamicReplacerSlotValues(selectedConfigItem);

              case 10:
                answeredReplacers = _context3.sent;
                _context3.next = 13;
                return this._outputFiles(selectedConfigItem, answeredReplacers);

              case 13:
                _context3.next = 6;
                break;

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](4);

                _iterator.e(_context3.t0);

              case 20:
                _context3.prev = 20;

                _iterator.f();

                return _context3.finish(20);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 17, 20, 23]]);
      }));

      function batchGenerate(_x3) {
        return _batchGenerate.apply(this, arguments);
      }

      return batchGenerate;
    }()
  }, {
    key: "_outputFiles",
    value: function () {
      var _outputFiles2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(selectedConfigItem, replacers) {
        var _this$_getDefaultCase, contentCase, outputPathCase, contentReplacers, outputPathReplacers, outputPath, shouldWriteFiles, outputtedFilesAndFolders;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this$_getDefaultCase = this._getDefaultCaseConverters(selectedConfigItem), contentCase = _this$_getDefaultCase.contentCase, outputPathCase = _this$_getDefaultCase.outputPathCase;
                contentReplacers = this._getReplacers(replacers, contentCase);
                outputPathReplacers = this._getReplacers(replacers, outputPathCase);
                _context4.next = 5;
                return this._getOutputPath(outputPathReplacers, selectedConfigItem);

              case 5:
                outputPath = _context4.sent;
                _context4.next = 8;
                return this._shouldWriteFiles(outputPath, selectedConfigItem);

              case 8:
                shouldWriteFiles = _context4.sent;

                if (!(shouldWriteFiles === false)) {
                  _context4.next = 13;
                  break;
                }

                displayWarning('No new files created');

                if (this._isCommandLine) {
                  displayWarning('Use --overwrite option to overwrite existing files');
                }

                return _context4.abrupt("return");

              case 13:
                _context4.next = 15;
                return this._createFiles(replacers, outputPathReplacers, contentReplacers, outputPath, selectedConfigItem.entry.folderPath);

              case 15:
                outputtedFilesAndFolders = _context4.sent;

                this._onComplete(selectedConfigItem, outputPath, outputtedFilesAndFolders, replacers);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _outputFiles(_x4, _x5) {
        return _outputFiles2.apply(this, arguments);
      }

      return _outputFiles;
    }()
    /**
     * Ask what template options the user wants to use
     */

  }, {
    key: "_getSelectedItem",
    value: function () {
      var _getSelectedItem2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(options) {
        var templateQuestions, templateAnswers;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                templateQuestions = {
                  type: 'autocomplete',
                  name: 'optionChoice',
                  message: 'What do you want to generate?',
                  choices: options.map(function (configItem) {
                    return configItem.option;
                  }),
                  suggest: function suggest(input, choices) {
                    return choices.filter(function (choice) {
                      return choice.message.toLowerCase().startsWith(input.toLowerCase());
                    });
                  }
                };
                _context5.next = 3;
                return enquirer.prompt(templateQuestions);

              case 3:
                templateAnswers = _context5.sent;
                return _context5.abrupt("return", options.find(function (item) {
                  return item.option === templateAnswers.optionChoice;
                }));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _getSelectedItem(_x6) {
        return _getSelectedItem2.apply(this, arguments);
      }

      return _getSelectedItem;
    }()
    /**
     */

  }, {
    key: "_getDefaultCaseConverters",
    value: function _getDefaultCaseConverters(selectedConfigItem) {
      var _selectedConfigItem$d, _selectedConfigItem$o, _selectedConfigItem$o2;

      var defaultContentCase = (_selectedConfigItem$d = selectedConfigItem === null || selectedConfigItem === void 0 ? void 0 : selectedConfigItem.defaultCase) !== null && _selectedConfigItem$d !== void 0 ? _selectedConfigItem$d : CaseConverterEnum$1.None;
      var defaultOutputPath = (_selectedConfigItem$o = (_selectedConfigItem$o2 = selectedConfigItem.output) === null || _selectedConfigItem$o2 === void 0 ? void 0 : _selectedConfigItem$o2.pathAndFileNameDefaultCase) !== null && _selectedConfigItem$o !== void 0 ? _selectedConfigItem$o : defaultContentCase;
      return {
        contentCase: defaultContentCase,
        outputPathCase: defaultOutputPath
      };
    }
    /**
     * New question asking what should text should be used to replace the template text.
     */

  }, {
    key: "_getReplacerSlotValues",
    value: function () {
      var _getReplacerSlotValues2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(selectedConfigItem) {
        var _selectedConfigItem$s;

        var stringReplacers, replacerQuestions, answer, replacers, dynamicReplacers;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                stringReplacers = (_selectedConfigItem$s = selectedConfigItem.stringReplacers) !== null && _selectedConfigItem$s !== void 0 ? _selectedConfigItem$s : [];
                replacerQuestions = stringReplacers.map(function (item) {
                  return {
                    type: 'input',
                    name: StringUtility.isString(item) ? item : item.slot,
                    message: StringUtility.isString(item) ? "Replace ".concat(item, " with") : item.question,
                    validate: function validate(replacerSlotValue) {
                      if (!StringUtility.isString(item) && item.optional) {
                        return true;
                      }

                      var isValid = Boolean(replacerSlotValue.trim());
                      return isValid || 'You must provide an answer.';
                    }
                  };
                });
                _context6.next = 4;
                return enquirer.prompt(replacerQuestions);

              case 4:
                answer = _context6.sent;
                replacers = Object.entries(answer).map(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  return {
                    slot: key,
                    slotValue: value
                  };
                });
                _context6.next = 8;
                return this._getDynamicReplacerSlotValues(selectedConfigItem);

              case 8:
                dynamicReplacers = _context6.sent;
                return _context6.abrupt("return", [].concat(_toConsumableArray(replacers), _toConsumableArray(dynamicReplacers)));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _getReplacerSlotValues(_x7) {
        return _getReplacerSlotValues2.apply(this, arguments);
      }

      return _getReplacerSlotValues;
    }()
    /**
     * Dynamic replacer values, used for interactive and batch generation
     */

  }, {
    key: "_getDynamicReplacerSlotValues",
    value: function () {
      var _getDynamicReplacerSlotValues2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(selectedConfigItem) {
        var dynamicReplacers;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dynamicReplacers = selectedConfigItem.dynamicReplacers || [];
                return _context7.abrupt("return", dynamicReplacers);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function _getDynamicReplacerSlotValues(_x8) {
        return _getDynamicReplacerSlotValues2.apply(this, arguments);
      }

      return _getDynamicReplacerSlotValues;
    }()
    /**
     * Create every variation for the for the replacement keys
     */

  }, {
    key: "_getReplacers",
    value: function _getReplacers(replacers, defaultCase) {
      var caseTypes = Object.values(CaseConverterEnum$1);
      return replacers.reduce(function (previousReplacers, answeredReplacer) {
        var slot = answeredReplacer.slot,
            slotValue = answeredReplacer.slotValue;
        return [].concat(_toConsumableArray(previousReplacers), _toConsumableArray(caseTypes.map(function (caseType) {
          return {
            slot: "".concat(slot).concat(caseType),
            slotValue: StringUtility.toCase(slotValue, caseType)
          };
        })), [{
          slot: slot,
          slotValue: StringUtility.toCase(slotValue, defaultCase)
        }]);
      }, []);
    }
    /**
     */

  }, {
    key: "_getOutputPath",
    value: function () {
      var _getOutputPath2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(outputPathReplacers, selectedConfigItem) {
        var outputPathFormatted, outputPath, outputPathAnswer;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // Create the output path replacing any template keys.
                outputPathFormatted = outputPathReplacers.reduce(function (outputPath, replacer) {
                  return replaceString(outputPath, replacer.slot, replacer.slotValue);
                }, selectedConfigItem.output.path);

                if (!this._isCommandLine) {
                  _context8.next = 4;
                  break;
                }

                outputPath = yargs.argv.outputpath;
                return _context8.abrupt("return", outputPath !== null && outputPath !== void 0 ? outputPath : outputPathFormatted);

              case 4:
                if (!this._isBatch) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", outputPathFormatted);

              case 6:
                _context8.next = 8;
                return enquirer.prompt({
                  type: 'input',
                  name: 'outputPath',
                  message: 'Output path:',
                  initial: outputPathFormatted
                });

              case 8:
                outputPathAnswer = _context8.sent;
                return _context8.abrupt("return", outputPathAnswer.outputPath);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _getOutputPath(_x9, _x10) {
        return _getOutputPath2.apply(this, arguments);
      }

      return _getOutputPath;
    }()
    /**
     */

  }, {
    key: "_shouldWriteFiles",
    value: function () {
      var _shouldWriteFiles2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(outputPath, selectedConfigItem) {
        var doesPathExist, overwriteFilesAnswer;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return pathExists(outputPath);

              case 2:
                doesPathExist = _context9.sent;

                if (doesPathExist) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", true);

              case 5:
                if (!(!this._isCommandLine && selectedConfigItem.output.overwrite)) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", true);

              case 7:
                if (!this._isCommandLine) {
                  _context9.next = 9;
                  break;
                }

                return _context9.abrupt("return", selectedConfigItem.output.overwrite || yargs.argv.overwrite === true);

              case 9:
                if (!this._isBatch) {
                  _context9.next = 11;
                  break;
                }

                return _context9.abrupt("return", Boolean(selectedConfigItem.output.overwrite));

              case 11:
                _context9.next = 13;
                return enquirer.prompt({
                  name: 'overwrite',
                  message: 'Overwrite files, continue?',
                  type: 'confirm',
                  "default": false
                });

              case 13:
                overwriteFilesAnswer = _context9.sent;
                return _context9.abrupt("return", overwriteFilesAnswer.overwrite);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _shouldWriteFiles(_x11, _x12) {
        return _shouldWriteFiles2.apply(this, arguments);
      }

      return _shouldWriteFiles;
    }()
    /**
     * Process and copy files.
     */

  }, {
    key: "_createFiles",
    value: function () {
      var _createFiles2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(answeredReplacer, outputPathReplacers, replacers, outputPath, entryFolderPath) {
        var outputtedFilesAndFolders, recursiveCopyOptions;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                outputtedFilesAndFolders = [];
                recursiveCopyOptions = {
                  overwrite: true,
                  expand: false,
                  dot: true,
                  junk: true,
                  rename: function rename(fileFolderPath) {
                    var fileOrFolder = answeredReplacer.reduce(function (path) {
                      var formattedFilePath = path;
                      outputPathReplacers.forEach(function (replacer) {
                        formattedFilePath = replaceString(formattedFilePath, replacer.slot, replacer.slotValue);
                      });
                      return formattedFilePath;
                    }, fileFolderPath);
                    outputtedFilesAndFolders.push(fileOrFolder);
                    return fileOrFolder;
                  },
                  transform: function transform(src, dest, stats) {
                    return through(function (chunk, enc, done) {
                      var output = chunk.toString();
                      replacers.forEach(function (replacer) {
                        output = replaceString(output, replacer.slot, replacer.slotValue);
                      });
                      done(null, output);
                    });
                  }
                };
                _context10.prev = 2;
                _context10.next = 5;
                return recursiveCopy(entryFolderPath, outputPath, recursiveCopyOptions);

              case 5:
                displaySuccess("Files saved to: '".concat(outputPath, "'"));
                return _context10.abrupt("return", outputtedFilesAndFolders.filter(Boolean));

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](2);
                displayError("Copy failed: ".concat(_context10.t0));
                return _context10.abrupt("return", ["Copy failed: ".concat(_context10.t0)]);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[2, 9]]);
      }));

      function _createFiles(_x13, _x14, _x15, _x16, _x17) {
        return _createFiles2.apply(this, arguments);
      }

      return _createFiles;
    }()
    /**
     */

  }, {
    key: "_onComplete",
    value: function _onComplete(selectedConfigItem, outputPath, outputtedFilesAndFolders, stringReplacers) {
      var files = outputtedFilesAndFolders.filter(function (path) {
        return path.includes('.');
      });

      if (typeof selectedConfigItem.onComplete === 'function') {
        var results = {
          output: {
            path: outputPath,
            files: files.map(function (file) {
              return "".concat(outputPath, "/").concat(file);
            })
          },
          stringReplacers: stringReplacers
        };
        selectedConfigItem.onComplete(results);
      }
    }
  }]);

  return GenerateTemplateFiles;
}();

/**
 * Main method to create your template files. Accepts an array of `IConfigItem` items.
 */
function generateTemplateFiles(data) {
  return new GenerateTemplateFiles().generate(data);
}
/**
 * Main method to create your template files with command line.
 */

function generateTemplateFilesCommandLine(data) {
  return new GenerateTemplateFiles().commandLine(data);
}
/**
 * Main method to run generate on multiple templates at once, without any interactive prompts.
 */

function generateTemplateFilesBatch(data) {
  return new GenerateTemplateFiles().batchGenerate(data);
}

export { CaseConverterEnum$1 as CaseConverterEnum, StringUtility, generateTemplateFiles, generateTemplateFilesBatch, generateTemplateFilesCommandLine };
