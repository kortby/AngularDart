define(['dart_sdk'], (function load__packages__clock__clock(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var $default = Object.create(dart.library);
  var clock = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var stopwatch = Object.create(dart.library);
  var clock$ = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $_get = dartx._get;
  var $clamp = dartx.clamp;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    ClockN: () => (T$.ClockN = dart.constFn(dart.nullable(clock.Clock)))(),
    VoidToDateTime: () => (T$.VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.fn(clock$.systemTime, T$.VoidToDateTime());
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C[1] || CT.C1
      });
    },
    get C2() {
      return C[2] = dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    },
    get C3() {
      return C[3] = dart.const(new _js_helper.PrivateSymbol.new('_stop', _stop));
    },
    get C4() {
      return C[4] = dart.const(new _js_helper.PrivateSymbol.new('_start', _start$));
    },
    get C5() {
      return C[5] = dart.const(new _js_helper.PrivateSymbol.new('_stop=', _stop_));
    },
    get C6() {
      return C[6] = dart.const(new _js_helper.PrivateSymbol.new('_start=', _start_));
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "package:clock/src/clock.dart",
    "package:clock/src/stopwatch.dart"
  ];
  $default.withClock = function withClock(T, clock, callback, opts) {
    let t0;
    let isFinal = opts && 'isFinal' in opts ? opts.isFinal : false;
    if (dart.equals((t0 = async.Zone.current._get($default._isFinalKey), t0 == null ? false : t0), true)) {
      dart.throw(new core.StateError.new("Cannot call withClock() within a call to withClock(isFinal = true)."));
    }
    return async.runZoned(T, callback, {zoneValues: new (T$.LinkedMapOfObjectN$ObjectN()).from([$default._clockKey, clock, $default._isFinalKey, isFinal])});
  };
  var Clock__time = dart.privateName(clock, "Clock._time");
  dart.copyProperties($default, {
    get clock() {
      let t0;
      t0 = T$.ClockN().as(async.Zone.current._get($default._clockKey));
      return t0 == null ? C[0] || CT.C0 : t0;
    }
  });
  dart.defineLazy($default, {
    /*$default._clockKey*/get _clockKey() {
      return new core.Object.new();
    },
    /*$default._isFinalKey*/get _isFinalKey() {
      return new core.Object.new();
    }
  }, false);
  var _time = dart.privateName(clock, "_time");
  const _time$ = Clock__time;
  clock.Clock = class Clock extends core.Object {
    get [_time]() {
      return this[_time$];
    }
    set [_time](value) {
      super[_time] = value;
    }
    now() {
      return this[_time]();
    }
    agoBy(duration) {
      return this.now().subtract(duration);
    }
    fromNowBy(duration) {
      return this.now().add(duration);
    }
    ago(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.agoBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    fromNow(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.fromNowBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    microsAgo(microseconds) {
      return this.ago({microseconds: microseconds});
    }
    microsFromNow(microseconds) {
      return this.fromNow({microseconds: microseconds});
    }
    millisAgo(milliseconds) {
      return this.ago({milliseconds: milliseconds});
    }
    millisFromNow(milliseconds) {
      return this.fromNow({milliseconds: milliseconds});
    }
    secondsAgo(seconds) {
      return this.ago({seconds: seconds});
    }
    secondsFromNow(seconds) {
      return this.fromNow({seconds: seconds});
    }
    minutesAgo(minutes) {
      return this.ago({minutes: minutes});
    }
    minutesFromNow(minutes) {
      return this.fromNow({minutes: minutes});
    }
    hoursAgo(hours) {
      return this.ago({hours: hours});
    }
    hoursFromNow(hours) {
      return this.fromNow({hours: hours});
    }
    daysAgo(days) {
      return this.ago({days: days});
    }
    daysFromNow(days) {
      return this.fromNow({days: days});
    }
    weeksAgo(weeks) {
      return this.ago({days: 7 * weeks});
    }
    weeksFromNow(weeks) {
      return this.fromNow({days: 7 * weeks});
    }
    monthsAgo(months) {
      let time = this.now();
      let month = (time.month - months - 1)[$modulo](12) + 1;
      let year = time.year - ((months + 12 - time.month) / 12)[$truncate]();
      let day = utils.clampDayOfMonth({year: year, month: month, day: time.day});
      return new core.DateTime.new(year, month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    monthsFromNow(months) {
      let time = this.now();
      let month = (time.month + months - 1)[$modulo](12) + 1;
      let year = time.year + ((months + time.month - 1) / 12)[$truncate]();
      let day = utils.clampDayOfMonth({year: year, month: month, day: time.day});
      return new core.DateTime.new(year, month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsAgo(years) {
      let time = this.now();
      let year = time.year - years;
      let day = utils.clampDayOfMonth({year: year, month: time.month, day: time.day});
      return new core.DateTime.new(year, time.month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsFromNow(years) {
      return this.yearsAgo(-years);
    }
    stopwatch() {
      return new stopwatch.ClockStopwatch.new(this);
    }
    getStopwatch() {
      return this.stopwatch();
    }
  };
  (clock.Clock.new = function(currentTime = C[1] || CT.C1) {
    this[_time$] = currentTime;
    ;
  }).prototype = clock.Clock.prototype;
  (clock.Clock.fixed = function(time) {
    this[_time$] = dart.fn(() => time, T$.VoidToDateTime());
    ;
  }).prototype = clock.Clock.prototype;
  dart.addTypeTests(clock.Clock);
  dart.addTypeCaches(clock.Clock);
  dart.setMethodSignature(clock.Clock, () => ({
    __proto__: dart.getMethods(clock.Clock.__proto__),
    now: dart.fnType(core.DateTime, []),
    agoBy: dart.fnType(core.DateTime, [core.Duration]),
    fromNowBy: dart.fnType(core.DateTime, [core.Duration]),
    ago: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}, {}),
    fromNow: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}, {}),
    microsAgo: dart.fnType(core.DateTime, [core.int]),
    microsFromNow: dart.fnType(core.DateTime, [core.int]),
    millisAgo: dart.fnType(core.DateTime, [core.int]),
    millisFromNow: dart.fnType(core.DateTime, [core.int]),
    secondsAgo: dart.fnType(core.DateTime, [core.int]),
    secondsFromNow: dart.fnType(core.DateTime, [core.int]),
    minutesAgo: dart.fnType(core.DateTime, [core.int]),
    minutesFromNow: dart.fnType(core.DateTime, [core.int]),
    hoursAgo: dart.fnType(core.DateTime, [core.int]),
    hoursFromNow: dart.fnType(core.DateTime, [core.int]),
    daysAgo: dart.fnType(core.DateTime, [core.int]),
    daysFromNow: dart.fnType(core.DateTime, [core.int]),
    weeksAgo: dart.fnType(core.DateTime, [core.int]),
    weeksFromNow: dart.fnType(core.DateTime, [core.int]),
    monthsAgo: dart.fnType(core.DateTime, [core.int]),
    monthsFromNow: dart.fnType(core.DateTime, [core.int]),
    yearsAgo: dart.fnType(core.DateTime, [core.int]),
    yearsFromNow: dart.fnType(core.DateTime, [core.int]),
    stopwatch: dart.fnType(core.Stopwatch, []),
    getStopwatch: dart.fnType(core.Stopwatch, [])
  }));
  dart.setLibraryUri(clock.Clock, I[0]);
  dart.setFieldSignature(clock.Clock, () => ({
    __proto__: dart.getFields(clock.Clock.__proto__),
    [_time]: dart.finalFieldType(dart.fnType(core.DateTime, []))
  }));
  utils.daysInMonth = function daysInMonth(year, month) {
    return month === 2 && utils.isLeapYear(year) ? 29 : utils._daysInMonth[$_get](month);
  };
  utils.isLeapYear = function isLeapYear(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  utils.clampDayOfMonth = function clampDayOfMonth(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return day[$clamp](1, utils.daysInMonth(year, month));
  };
  dart.defineLazy(utils, {
    /*utils._daysInMonth*/get _daysInMonth() {
      return C[2] || CT.C2;
    }
  }, false);
  var _start = dart.privateName(stopwatch, "ClockStopwatch._start");
  var _elapsed = dart.privateName(stopwatch, "_elapsed");
  var _clock$ = dart.privateName(stopwatch, "_clock");
  var _start$ = dart.privateName(stopwatch, "_start");
  var _stop = dart.privateName(stopwatch, "_stop");
  var _stop$ = dart.privateName(core, "_stop");
  var _start$0 = dart.privateName(core, "_start");
  var _stop_ = dart.privateName(stopwatch, "_stop=");
  var _start_ = dart.privateName(stopwatch, "_start=");
  stopwatch.ClockStopwatch = class ClockStopwatch extends core.Object {
    get [_start$]() {
      return this[_start];
    }
    set [_start$](value) {
      this[_start] = value;
    }
    get frequency() {
      return stopwatch._frequency;
    }
    get elapsedTicks() {
      return (this.elapsedMicroseconds * this.frequency / 1000000)[$truncate]();
    }
    get elapsed() {
      return new core.Duration.new({microseconds: this.elapsedMicroseconds});
    }
    get elapsedMilliseconds() {
      return (this.elapsedMicroseconds / 1000)[$truncate]();
    }
    get isRunning() {
      return this[_start$] != null;
    }
    get elapsedMicroseconds() {
      return this[_elapsed] + (this[_start$] == null ? 0 : this[_clock$].now().difference(dart.nullCheck(this[_start$])).inMicroseconds);
    }
    start() {
      this[_start$] == null ? this[_start$] = this[_clock$].now() : null;
    }
    stop() {
      this[_elapsed] = this.elapsedMicroseconds;
      this[_start$] = null;
    }
    reset() {
      this[_elapsed] = 0;
      if (this[_start$] != null) this[_start$] = this[_clock$].now();
    }
    get [_stop$]() {
      return T$.intN().as(this[$noSuchMethod](new core._Invocation.getter(C[3] || CT.C3)));
    }
    get [_start$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    set [_stop$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[5] || CT.C5, value));
    }
    set [_start$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[6] || CT.C6, value));
    }
  };
  (stopwatch.ClockStopwatch.new = function(_clock) {
    this[_elapsed] = 0;
    this[_start] = null;
    this[_clock$] = _clock;
    ;
  }).prototype = stopwatch.ClockStopwatch.prototype;
  dart.addTypeTests(stopwatch.ClockStopwatch);
  dart.addTypeCaches(stopwatch.ClockStopwatch);
  stopwatch.ClockStopwatch[dart.implements] = () => [core.Stopwatch];
  dart.setMethodSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getMethods(stopwatch.ClockStopwatch.__proto__),
    start: dart.fnType(dart.void, []),
    stop: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getGetters(stopwatch.ClockStopwatch.__proto__),
    frequency: core.int,
    elapsedTicks: core.int,
    elapsed: core.Duration,
    elapsedMilliseconds: core.int,
    isRunning: core.bool,
    elapsedMicroseconds: core.int,
    [_stop$]: dart.nullable(core.int),
    [_start$0]: core.int
  }));
  dart.setSetterSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getSetters(stopwatch.ClockStopwatch.__proto__),
    [_stop$]: dart.nullable(core.int),
    [_start$0]: core.int
  }));
  dart.setLibraryUri(stopwatch.ClockStopwatch, I[1]);
  dart.setFieldSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getFields(stopwatch.ClockStopwatch.__proto__),
    [_clock$]: dart.finalFieldType(clock.Clock),
    [_elapsed]: dart.fieldType(core.int),
    [_start$]: dart.fieldType(dart.nullable(core.DateTime))
  }));
  dart.defineLazy(stopwatch, {
    /*stopwatch._frequency*/get _frequency() {
      return new core.Stopwatch.new().frequency;
    }
  }, false);
  clock$.systemTime = function systemTime() {
    return new core.DateTime.now();
  };
  clock$.getStopwatch = function getStopwatch() {
    return $default.clock.stopwatch();
  };
  dart.copyProperties(clock$, {
    get now() {
      return $default.clock.now();
    }
  });
  dart.trackLibraries("packages/clock/clock", {
    "package:clock/src/default.dart": $default,
    "package:clock/src/clock.dart": clock,
    "package:clock/src/utils.dart": utils,
    "package:clock/src/stopwatch.dart": stopwatch,
    "package:clock/clock.dart": clock$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/default.dart","src/clock.dart","src/utils.dart","src/stopwatch.dart","clock.dart"],"names":[],"mappings":"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","file":"clock.sound.ddc.js"}');
  // Exports:
  return {
    src__default: $default,
    src__clock: clock,
    src__utils: utils,
    src__stopwatch: stopwatch,
    clock: clock$
  };
}));

//# sourceMappingURL=clock.sound.ddc.js.map
