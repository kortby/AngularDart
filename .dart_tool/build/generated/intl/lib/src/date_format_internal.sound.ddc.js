define(['dart_sdk', 'packages/intl/date_symbols'], (function load__packages__intl__src__date_format_internal(dart_sdk, packages__intl__date_symbols) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_symbols = packages__intl__date_symbols.date_symbols;
  var date_format_internal = Object.create(dart.library);
  var intl_helpers = Object.create(dart.library);
  var global_state = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $toSet = dartx.toSet;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $join = dartx.join;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $toUpperCase = dartx.toUpperCase;
  var $toLowerCase = dartx.toLowerCase;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    UninitializedLocaleDataOfDateSymbols: () => (T.UninitializedLocaleDataOfDateSymbols = dart.constFn(intl_helpers.UninitializedLocaleData$(date_symbols.DateSymbols)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    UninitializedLocaleDataOfMapOfString$String: () => (T.UninitializedLocaleDataOfMapOfString$String = dart.constFn(intl_helpers.UninitializedLocaleData$(T.MapOfString$String())))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    UninitializedLocaleDataOfNull: () => (T.UninitializedLocaleDataOfNull = dart.constFn(intl_helpers.UninitializedLocaleData$(core.Null)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(intl_helpers._throwLocaleError, T.StringToString());
    },
    get C1() {
      return C[1] = dart.const(new _internal.Symbol.new('Intl.locale'));
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["package:intl/src/intl_helpers.dart"];
  date_format_internal.initializeDateSymbols = function initializeDateSymbols(symbols) {
    if (intl_helpers.UninitializedLocaleData.is(date_format_internal.dateTimeSymbols)) {
      date_format_internal.dateTimeSymbols = dart.dcall(symbols, []);
    }
  };
  date_format_internal.initializeDatePatterns = function initializeDatePatterns(patterns) {
    if (intl_helpers.UninitializedLocaleData.is(date_format_internal.dateTimePatterns)) {
      date_format_internal.dateTimePatterns = dart.dcall(patterns, []);
    }
  };
  date_format_internal.initializeIndividualLocaleDateFormatting = function initializeIndividualLocaleDateFormatting(init) {
    return async.Future.as(dart.dcall(init, [date_format_internal.dateTimeSymbols, date_format_internal.dateTimePatterns]));
  };
  dart.copyProperties(date_format_internal, {
    get dateTimeSymbols() {
      return date_format_internal._dateTimeSymbols;
    },
    set dateTimeSymbols(symbols) {
      date_format_internal._dateTimeSymbols = symbols;
      date_format_internal.cachedDateSymbols = null;
      date_format_internal.lastDateSymbolLocale = null;
    }
  });
  dart.defineLazy(date_format_internal, {
    /*date_format_internal._dateTimeSymbols*/get _dateTimeSymbols() {
      return new (T.UninitializedLocaleDataOfDateSymbols()).new("initializeDateFormatting(<locale>)", date_symbols.en_USSymbols);
    },
    set _dateTimeSymbols(_) {},
    /*date_format_internal.cachedDateSymbols*/get cachedDateSymbols() {
      return null;
    },
    set cachedDateSymbols(_) {},
    /*date_format_internal.lastDateSymbolLocale*/get lastDateSymbolLocale() {
      return null;
    },
    set lastDateSymbolLocale(_) {},
    /*date_format_internal.dateTimePatterns*/get dateTimePatterns() {
      return new (T.UninitializedLocaleDataOfMapOfString$String()).new("initializeDateFormatting(<locale>)", date_symbols.en_USPatterns);
    },
    set dateTimePatterns(_) {}
  }, false);
  var message$ = dart.privateName(intl_helpers, "UninitializedLocaleData.message");
  var fallbackData$ = dart.privateName(intl_helpers, "UninitializedLocaleData.fallbackData");
  var _badMessages = dart.privateName(intl_helpers, "_badMessages");
  var _isFallback = dart.privateName(intl_helpers, "_isFallback");
  var _throwException = dart.privateName(intl_helpers, "_throwException");
  var _uninitializedMessages = dart.privateName(intl_helpers, "_uninitializedMessages");
  var _reportErrors = dart.privateName(intl_helpers, "_reportErrors");
  const _is_UninitializedLocaleData_default = Symbol('_is_UninitializedLocaleData_default');
  intl_helpers.UninitializedLocaleData$ = dart.generic(F => {
    class UninitializedLocaleData extends core.Object {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      get fallbackData() {
        return this[fallbackData$];
      }
      set fallbackData(value) {
        super.fallbackData = value;
      }
      [_isFallback](key) {
        return intl_helpers.canonicalizedLocale(key) === "en_US";
      }
      _get(key) {
        return this[_isFallback](key) ? this.fallbackData : this[_throwException]();
      }
      [_reportErrors]() {
        if (intl_helpers.UninitializedLocaleData.throwOnFallback && this[_badMessages][$isNotEmpty]) {
          dart.throw(new core.StateError.new("The following messages were called before locale initialization:" + " " + this[_uninitializedMessages]));
        }
      }
      get [_uninitializedMessages]() {
        let t0;
        return (t0 = this[_badMessages][$toSet]()[$toList](), (() => {
          t0[$sort]();
          return t0;
        })())[$join]("\n    ");
      }
      lookupMessage(messageText, locale, name, args, meaning, opts) {
        let t0;
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        if (intl_helpers.UninitializedLocaleData.throwOnFallback) {
          this[_badMessages][$add](dart.nullCheck((t0 = name, t0 == null ? messageText : t0)));
        }
        return messageText;
      }
      findLocale(locale) {
        let t0;
        t0 = locale;
        return t0 == null ? global_state.getCurrentLocale() : t0;
      }
      get keys() {
        return T.ListOfString().as(this[_throwException]());
      }
      containsKey(key) {
        if (!this[_isFallback](key)) {
          this[_throwException]();
        }
        return true;
      }
      [_throwException]() {
        dart.throw(new intl_helpers.LocaleDataException.new("Locale data has not been initialized" + ", call " + this.message + "."));
      }
      addLocale(localeName, findLocale) {
        return this[_throwException]();
      }
    }
    (UninitializedLocaleData.new = function(message, fallbackData) {
      this[_badMessages] = T.JSArrayOfString().of([]);
      this[message$] = message;
      this[fallbackData$] = fallbackData;
      ;
    }).prototype = UninitializedLocaleData.prototype;
    dart.addTypeTests(UninitializedLocaleData);
    UninitializedLocaleData.prototype[_is_UninitializedLocaleData_default] = true;
    dart.addTypeCaches(UninitializedLocaleData);
    UninitializedLocaleData[dart.implements] = () => [intl_helpers.MessageLookup];
    dart.setMethodSignature(UninitializedLocaleData, () => ({
      __proto__: dart.getMethods(UninitializedLocaleData.__proto__),
      [_isFallback]: dart.fnType(core.bool, [core.String]),
      _get: dart.fnType(F, [core.String]),
      [_reportErrors]: dart.fnType(dart.void, []),
      lookupMessage: dart.fnType(dart.nullable(core.String), [dart.nullable(core.String), dart.nullable(core.String), dart.nullable(core.String), dart.nullable(core.List$(core.Object)), dart.nullable(core.String)], {ifAbsent: dart.nullable(dart.fnType(core.String, [dart.nullable(core.String), dart.nullable(core.List$(core.Object))]))}, {}),
      findLocale: dart.fnType(core.String, [dart.nullable(core.String)]),
      containsKey: dart.fnType(core.bool, [core.String]),
      [_throwException]: dart.fnType(F, []),
      addLocale: dart.fnType(dart.void, [core.String, core.Function])
    }));
    dart.setGetterSignature(UninitializedLocaleData, () => ({
      __proto__: dart.getGetters(UninitializedLocaleData.__proto__),
      [_uninitializedMessages]: core.String,
      keys: core.List$(core.String)
    }));
    dart.setLibraryUri(UninitializedLocaleData, I[0]);
    dart.setFieldSignature(UninitializedLocaleData, () => ({
      __proto__: dart.getFields(UninitializedLocaleData.__proto__),
      message: dart.finalFieldType(core.String),
      fallbackData: dart.finalFieldType(F),
      [_badMessages]: dart.finalFieldType(core.List$(core.String))
    }));
    return UninitializedLocaleData;
  });
  intl_helpers.UninitializedLocaleData = intl_helpers.UninitializedLocaleData$();
  dart.defineLazy(intl_helpers.UninitializedLocaleData, {
    /*intl_helpers.UninitializedLocaleData.throwOnFallback*/get throwOnFallback() {
      return false;
    }
  }, false);
  dart.addTypeTests(intl_helpers.UninitializedLocaleData, _is_UninitializedLocaleData_default);
  intl_helpers.MessageLookup = class MessageLookup extends core.Object {};
  (intl_helpers.MessageLookup.new = function() {
    ;
  }).prototype = intl_helpers.MessageLookup.prototype;
  dart.addTypeTests(intl_helpers.MessageLookup);
  dart.addTypeCaches(intl_helpers.MessageLookup);
  dart.setLibraryUri(intl_helpers.MessageLookup, I[0]);
  var message$0 = dart.privateName(intl_helpers, "LocaleDataException.message");
  intl_helpers.LocaleDataException = class LocaleDataException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "LocaleDataException: " + this.message;
    }
  };
  (intl_helpers.LocaleDataException.new = function(message) {
    this[message$0] = message;
    ;
  }).prototype = intl_helpers.LocaleDataException.prototype;
  dart.addTypeTests(intl_helpers.LocaleDataException);
  dart.addTypeCaches(intl_helpers.LocaleDataException);
  intl_helpers.LocaleDataException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(intl_helpers.LocaleDataException, I[0]);
  dart.setFieldSignature(intl_helpers.LocaleDataException, () => ({
    __proto__: dart.getFields(intl_helpers.LocaleDataException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(intl_helpers.LocaleDataException, ['toString']);
  intl_helpers.LocaleDataReader = class LocaleDataReader extends core.Object {};
  (intl_helpers.LocaleDataReader.new = function() {
    ;
  }).prototype = intl_helpers.LocaleDataReader.prototype;
  dart.addTypeTests(intl_helpers.LocaleDataReader);
  dart.addTypeCaches(intl_helpers.LocaleDataReader);
  dart.setLibraryUri(intl_helpers.LocaleDataReader, I[0]);
  intl_helpers.initializeInternalMessageLookup = function initializeInternalMessageLookup(lookupFunction) {
    if (intl_helpers.UninitializedLocaleData.is(intl_helpers.messageLookup)) {
      intl_helpers.UninitializedLocaleData.as(intl_helpers.messageLookup)[_reportErrors]();
      intl_helpers.messageLookup = intl_helpers.MessageLookup.as(dart.dcall(lookupFunction, []));
    }
  };
  intl_helpers.computeMessageName = function computeMessageName(name, text, meaning) {
    if (name != null && name !== "") return name;
    return meaning == null ? text : dart.str(text) + "_" + dart.str(meaning);
  };
  intl_helpers.canonicalizedLocale = function canonicalizedLocale(aLocale) {
    if (aLocale == null) return global_state.getCurrentLocale();
    if (aLocale === "C") return "en_ISO";
    if (aLocale.length < 5) return aLocale;
    if (aLocale[$_get](2) !== "-" && aLocale[$_get](2) !== "_") return aLocale;
    let region = aLocale[$substring](3);
    if (region.length <= 3) region = region[$toUpperCase]();
    return aLocale[$_get](0) + aLocale[$_get](1) + "_" + region;
  };
  intl_helpers.verifiedLocale = function verifiedLocale(newLocale, localeExists, onFailure) {
    let t0;
    if (newLocale == null) {
      return intl_helpers.verifiedLocale(global_state.getCurrentLocale(), localeExists, onFailure);
    }
    if (localeExists(newLocale)) {
      return newLocale;
    }
    for (let each of T.JSArrayOfString().of([intl_helpers.canonicalizedLocale(newLocale), intl_helpers.shortLocale(newLocale), "fallback"])) {
      if (localeExists(each)) {
        return each;
      }
    }
    return (t0 = onFailure, t0 == null ? C[0] || CT.C0 : t0)(newLocale);
  };
  intl_helpers._throwLocaleError = function _throwLocaleError(localeName) {
    dart.throw(new core.ArgumentError.new("Invalid locale \"" + localeName + "\""));
  };
  intl_helpers.shortLocale = function shortLocale(aLocale) {
    if (aLocale.length < 2) return aLocale;
    return aLocale[$substring](0, 2)[$toLowerCase]();
  };
  dart.defineLazy(intl_helpers, {
    /*intl_helpers.messageLookup*/get messageLookup() {
      return new (T.UninitializedLocaleDataOfNull()).new("initializeMessages(<locale>)", null);
    },
    set messageLookup(_) {}
  }, false);
  global_state.getCurrentLocale = function getCurrentLocale() {
    global_state.defaultLocale == null ? global_state.defaultLocale = global_state.systemLocale : null;
    return dart.nullCheck(global_state.defaultLocale);
  };
  dart.copyProperties(global_state, {
    set defaultLocale(newLocale) {
      global_state._defaultLocale = newLocale;
    },
    get defaultLocale() {
      let zoneLocale = T.StringN().as(async.Zone.current._get(C[1] || CT.C1));
      return zoneLocale == null ? global_state._defaultLocale : zoneLocale;
    }
  });
  dart.defineLazy(global_state, {
    /*global_state.systemLocale*/get systemLocale() {
      return "en_US";
    },
    set systemLocale(_) {},
    /*global_state._defaultLocale*/get _defaultLocale() {
      return null;
    },
    set _defaultLocale(_) {}
  }, false);
  dart.trackLibraries("packages/intl/src/date_format_internal", {
    "package:intl/src/date_format_internal.dart": date_format_internal,
    "package:intl/src/intl_helpers.dart": intl_helpers,
    "package:intl/src/global_state.dart": global_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_format_internal.dart","intl_helpers.dart","global_state.dart"],"names":[],"mappings":"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","file":"date_format_internal.sound.ddc.js"}');
  // Exports:
  return {
    src__date_format_internal: date_format_internal,
    src__intl_helpers: intl_helpers,
    src__global_state: global_state
  };
}));

//# sourceMappingURL=date_format_internal.sound.ddc.js.map
