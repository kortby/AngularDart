define(['dart_sdk'], (function load__packages__stream_transform__src__aggregate_sample(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var where = Object.create(dart.library);
  var from_handlers = Object.create(dart.library);
  var aggregate_sample = Object.create(dart.library);
  var rate_limit = Object.create(dart.library);
  var combine_latest = Object.create(dart.library);
  var take_until = Object.create(dart.library);
  var merge = Object.create(dart.library);
  var $switch = Object.create(dart.library);
  var scan = Object.create(dart.library);
  var concatenate = Object.create(dart.library);
  var async_map = Object.create(dart.library);
  var stream_transform = Object.create(dart.library);
  var tap = Object.create(dart.library);
  var $add = dartx.add;
  var $removeWhere = dartx.removeWhere;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    VoidToStreamOfS: () => (T$.VoidToStreamOfS = dart.constFn(dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), []];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    })))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    VoidToFutureOfNull: () => (T$.VoidToFutureOfNull = dart.constFn(dart.fnType(T$.FutureOfNull(), [])))(),
    FutureOrOfbool: () => (T$.FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))(),
    SAndEventSinkOfTTovoid: () => (T$.SAndEventSinkOfTTovoid = dart.constFn(dart.gFnType((S, T) => [dart.void, [S, async.EventSink$(T)]], (S, T) => [T$.ObjectN(), T$.ObjectN()])))(),
    ObjectAndStackTraceAndEventSinkOfTTovoid: () => (T$.ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]], T => [T$.ObjectN()])))(),
    EventSinkOfTTovoid: () => (T$.EventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [async.EventSink$(T)]], T => [T$.ObjectN()])))(),
    ObjectAndStackTraceToNull: () => (T$.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    FutureNOfvoid: () => (T$.FutureNOfvoid = dart.constFn(dart.nullable(T$.FutureOfvoid())))(),
    VoidToFutureNOfvoid: () => (T$.VoidToFutureNOfvoid = dart.constFn(dart.fnType(T$.FutureNOfvoid(), [])))(),
    dynamicTovoid: () => (T$.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    JSArrayOfFutureOfvoid: () => (T$.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T$.FutureOfvoid())))(),
    ObjectNTobool: () => (T$.ObjectNTobool = dart.constFn(dart.fnType(core.bool, [T$.ObjectN()])))(),
    ListOfvoid: () => (T$.ListOfvoid = dart.constFn(core.List$(dart.void)))(),
    ListOfvoidToNull: () => (T$.ListOfvoidToNull = dart.constFn(dart.fnType(core.Null, [T$.ListOfvoid()])))(),
    StreamOfvoid: () => (T$.StreamOfvoid = dart.constFn(async.Stream$(dart.void)))(),
    TAnddynamicToT: () => (T$.TAnddynamicToT = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]], T => [T$.ObjectN()])))(),
    TAndListNOfTToListOfT: () => (T$.TAndListNOfTToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [T, dart.nullable(core.List$(T))]], T => [T$.ObjectN()])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    LinkedHashSetOfint: () => (T$.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    voidToNull: () => (T$.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    JSArrayOfStreamSubscription: () => (T$.JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))(),
    VoidToFn: () => (T$.VoidToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [])))(),
    FnTodynamic: () => (T$.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.VoidTovoid()])))(),
    StreamControllerOfvoid: () => (T$.StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))(),
    TAnddynamicToT$1: () => (T$.TAnddynamicToT$1 = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]], T => [T$.ObjectN()])))(),
    voidTovoid: () => (T$.voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))(),
    VoidToNvoid: () => (T$.VoidToNvoid = dart.constFn(dart.nullable(T$.VoidTovoid())))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ObjectAndStackTraceToNvoid: () => (T$.ObjectAndStackTraceToNvoid = dart.constFn(dart.nullable(T$.ObjectAndStackTraceTovoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleData'], T$.SAndEventSinkOfTTovoid());
    },
    get C1() {
      return C[1] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleError'], T$.ObjectAndStackTraceAndEventSinkOfTTovoid());
    },
    get C2() {
      return C[2] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleDone'], T$.EventSinkOfTTovoid());
    },
    get C3() {
      return C[3] = dart.fn(rate_limit._dropPrevious, T$.TAnddynamicToT());
    },
    get C4() {
      return C[4] = dart.fn(rate_limit._collect, T$.TAndListNOfTToListOfT());
    },
    get C5() {
      return C[5] = dart.fn(async_map._dropPrevious, T$.TAnddynamicToT$1());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/stream_transform/src/from_handlers.dart",
    "org-dartlang-app:///packages/stream_transform/src/aggregate_sample.dart",
    "org-dartlang-app:///packages/stream_transform/src/combine_latest.dart",
    "org-dartlang-app:///packages/stream_transform/src/concatenate.dart"
  ];
  where['Where|whereType'] = function Where$124whereType(T, S, $this) {
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((event, sink) => {
        if (S.is(event)) sink.add(event);
      }, dart.fnType(dart.void, [T, async.EventSink$(S)]))});
  };
  where['Where|get#whereType'] = function Where$124get$35whereType(T, $this) {
    return dart.fn(S => where['Where|whereType'](T, S, $this), T$.VoidToStreamOfS());
  };
  where['Where|asyncWhere'] = function Where$124asyncWhere(T, $this, test) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            if (yield test(element)) sink.add(element);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              sink.addError(e, st);
            } else
              throw e$;
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), T$.VoidToFutureOfNull())();
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  where['Where|get#asyncWhere'] = function Where$124get$35asyncWhere(T, $this) {
    return dart.fn(test => where['Where|asyncWhere'](T, $this, test), dart.fnType(async.Stream$(T), [dart.fnType(T$.FutureOrOfbool(), [T])]));
  };
  from_handlers['TransformByHandlers|transformByHandlers'] = function TransformByHandlers$124transformByHandlers(S, T, $this, opts) {
    let t6, t6$, t6$0;
    let onData = opts && 'onData' in opts ? opts.onData : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    let handleData = (t6 = onData, t6 == null ? dart.gbind(C[0] || CT.C0, S, T) : t6);
    let handleError = (t6$ = onError, t6$ == null ? dart.gbind(C[1] || CT.C1, T) : t6$);
    let handleDone = (t6$0 = onDone, t6$0 == null ? dart.gbind(C[2] || CT.C2, T) : t6$0);
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let subscription = null;
    controller.onListen = dart.fn(() => {
      let t6;
      if (!(subscription == null)) dart.assertFailed(null, I[0], 27, 14, "subscription == null");
      let valuesDone = false;
      subscription = $this.listen(dart.fn(value => handleData(value, controller), dart.fnType(dart.void, [S])), {onError: dart.fn((error, stackTrace) => {
          handleError(error, stackTrace, controller);
        }, T$.ObjectAndStackTraceToNull()), onDone: dart.fn(() => {
          valuesDone = true;
          handleDone(controller);
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t6 = controller;
        (() => {
          t6.onPause = dart.bind(dart.nullCheck(subscription), 'pause');
          t6.onResume = dart.bind(dart.nullCheck(subscription), 'resume');
          return t6;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let toCancel = subscription;
        subscription = null;
        if (!valuesDone) return dart.nullCheck(toCancel).cancel();
        return null;
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  from_handlers['TransformByHandlers|get#transformByHandlers'] = function TransformByHandlers$124get$35transformByHandlers(S, $this) {
    return dart.fn((T, opts) => {
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return from_handlers['TransformByHandlers|transformByHandlers'](S, T, $this, {onData: onData, onError: onError, onDone: onDone});
    }, dart.gFnType(T => {
      var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
      var __t$EventSinkOfT = () => (__t$EventSinkOfT = dart.constFn(async.EventSink$(T)))();
      var __t$EventSinkOfTTovoid = () => (__t$EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$EventSinkOfT()])))();
      var __t$EventSinkOfTToNvoid = () => (__t$EventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$EventSinkOfTTovoid())))();
      var __t$ObjectAndStackTraceAndEventSinkOfTTovoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, __t$EventSinkOfT()])))();
      var __t$ObjectAndStackTraceAndEventSinkOfTToNvoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$ObjectAndStackTraceAndEventSinkOfTTovoid())))();
      return [__t$StreamOfT(), [], {onData: dart.nullable(dart.fnType(dart.void, [S, __t$EventSinkOfT()])), onDone: __t$EventSinkOfTToNvoid(), onError: __t$ObjectAndStackTraceAndEventSinkOfTToNvoid()}, {}];
    }, T => {
      var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
      var __t$EventSinkOfT = () => (__t$EventSinkOfT = dart.constFn(async.EventSink$(T)))();
      var __t$EventSinkOfTTovoid = () => (__t$EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$EventSinkOfT()])))();
      var __t$EventSinkOfTToNvoid = () => (__t$EventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$EventSinkOfTTovoid())))();
      var __t$ObjectAndStackTraceAndEventSinkOfTTovoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, __t$EventSinkOfT()])))();
      var __t$ObjectAndStackTraceAndEventSinkOfTToNvoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$ObjectAndStackTraceAndEventSinkOfTTovoid())))();
      return [T$.ObjectN()];
    }));
  };
  from_handlers['TransformByHandlers|_defaultHandleData'] = function TransformByHandlers$124_defaultHandleData(S, T, value, sink) {
    sink.add(T.as(value));
  };
  from_handlers['TransformByHandlers|_defaultHandleError'] = function TransformByHandlers$124_defaultHandleError(T, error, stackTrace, sink) {
    sink.addError(error, stackTrace);
  };
  from_handlers['TransformByHandlers|_defaultHandleDone'] = function TransformByHandlers$124_defaultHandleDone(T, sink) {
    sink.close();
  };
  aggregate_sample['AggregateSample|aggregateSample'] = function AggregateSample$124aggregateSample(T, S, $this, trigger, aggregate) {
    let controller = $this.isBroadcast ? async.StreamController$(S).broadcast({sync: true}) : async.StreamController$(S).new({sync: true});
    let currentResults = null;
    let hasCurrentResults = false;
    let waitingForTrigger = true;
    let isTriggerDone = false;
    let isValueDone = false;
    let valueSub = null;
    let triggerSub = null;
    function emit() {
      controller.add(S.as(currentResults));
      currentResults = null;
      hasCurrentResults = false;
      waitingForTrigger = true;
    }
    dart.fn(emit, T$.VoidTovoid());
    function onValue(value) {
      currentResults = aggregate(value, currentResults);
      hasCurrentResults = true;
      if (!waitingForTrigger) emit();
      if (isTriggerDone) {
        dart.nullCheck(valueSub).cancel();
        controller.close();
      }
    }
    dart.fn(onValue, dart.fnType(dart.void, [T]));
    function onValuesDone() {
      let t8;
      isValueDone = true;
      if (!hasCurrentResults) {
        t8 = triggerSub;
        t8 == null ? null : t8.cancel();
        controller.close();
      }
    }
    dart.fn(onValuesDone, T$.VoidTovoid());
    function onTrigger(_) {
      waitingForTrigger = false;
      if (hasCurrentResults) emit();
      if (isValueDone) {
        dart.nullCheck(triggerSub).cancel();
        controller.close();
      }
    }
    dart.fn(onTrigger, T$.dynamicTovoid());
    function onTriggerDone() {
      let t8;
      isTriggerDone = true;
      if (waitingForTrigger) {
        t8 = valueSub;
        t8 == null ? null : t8.cancel();
        controller.close();
      }
    }
    dart.fn(onTriggerDone, T$.VoidTovoid());
    controller.onListen = dart.fn(() => {
      let t8;
      if (!(valueSub == null)) dart.assertFailed(null, I[1], 78, 14, "valueSub == null");
      valueSub = $this.listen(onValue, {onError: dart.bind(controller, 'addError'), onDone: onValuesDone});
      let priorTriggerSub = triggerSub;
      if (priorTriggerSub != null) {
        if (priorTriggerSub.isPaused) priorTriggerSub.resume();
      } else {
        triggerSub = trigger.listen(onTrigger, {onError: dart.bind(controller, 'addError'), onDone: onTriggerDone});
      }
      if (!$this.isBroadcast) {
        t8 = controller;
        (() => {
          t8.onPause = dart.fn(() => {
            let t9, t9$;
            t9 = valueSub;
            t9 == null ? null : t9.pause();
            t9$ = triggerSub;
            t9$ == null ? null : t9$.pause();
          }, T$.VoidTovoid());
          t8.onResume = dart.fn(() => {
            let t9, t9$;
            t9 = valueSub;
            t9 == null ? null : t9.resume();
            t9$ = triggerSub;
            t9$ == null ? null : t9$.resume();
          }, T$.VoidTovoid());
          return t8;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let cancels = (() => {
          let t8 = T$.JSArrayOfFutureOfvoid().of([]);
          if (!isValueDone) t8[$add](dart.nullCheck(valueSub).cancel());
          return t8;
        })();
        valueSub = null;
        if (trigger.isBroadcast || !$this.isBroadcast) {
          if (!isTriggerDone) cancels[$add](dart.nullCheck(triggerSub).cancel());
          triggerSub = null;
        } else {
          dart.nullCheck(triggerSub).pause();
        }
        cancels[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  aggregate_sample['AggregateSample|get#aggregateSample'] = function AggregateSample$124get$35aggregateSample(T, $this) {
    return dart.fn((S, trigger, aggregate) => aggregate_sample['AggregateSample|aggregateSample'](T, S, $this, trigger, aggregate), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [__t$StreamOfS(), [T$.StreamOfvoid(), dart.fnType(S, [T, __t$SN()])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [T$.ObjectN()];
    }));
  };
  rate_limit['RateLimit|debounce'] = function RateLimit$124debounce(T, $this, duration, opts) {
    let leading = opts && 'leading' in opts ? opts.leading : false;
    let trailing = opts && 'trailing' in opts ? opts.trailing : true;
    return rate_limit['RateLimit|_debounceAggregate'](T, T, $this, duration, dart.gbind(C[3] || CT.C3, T), {leading: leading, trailing: trailing});
  };
  rate_limit['RateLimit|get#debounce'] = function RateLimit$124get$35debounce(T, $this) {
    return dart.fn((duration, opts) => {
      let leading = opts && 'leading' in opts ? opts.leading : false;
      let trailing = opts && 'trailing' in opts ? opts.trailing : true;
      return rate_limit['RateLimit|debounce'](T, $this, duration, {leading: leading, trailing: trailing});
    }, dart.fnType(async.Stream$(T), [core.Duration], {leading: core.bool, trailing: core.bool}, {}));
  };
  rate_limit['RateLimit|debounceBuffer'] = function RateLimit$124debounceBuffer(T, $this, duration) {
    return rate_limit['RateLimit|_debounceAggregate'](T, core.List$(T), $this, duration, dart.gbind(C[4] || CT.C4, T), {leading: false, trailing: true});
  };
  rate_limit['RateLimit|get#debounceBuffer'] = function RateLimit$124get$35debounceBuffer(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|debounceBuffer'](T, $this, duration), dart.fnType(async.Stream$(core.List$(T)), [core.Duration]));
  };
  rate_limit['RateLimit|throttle'] = function RateLimit$124throttle(T, $this, duration, opts) {
    let trailing = opts && 'trailing' in opts ? opts.trailing : false;
    return trailing ? rate_limit['RateLimit|_throttleTrailing'](T, $this, duration) : rate_limit['RateLimit|_throttle'](T, $this, duration);
  };
  rate_limit['RateLimit|get#throttle'] = function RateLimit$124get$35throttle(T, $this) {
    return dart.fn((duration, opts) => {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      return rate_limit['RateLimit|throttle'](T, $this, duration, {trailing: trailing});
    }, dart.fnType(async.Stream$(T), [core.Duration], {trailing: core.bool}, {}));
  };
  rate_limit['RateLimit|_throttle'] = function RateLimit$124_throttle(T, $this, duration) {
    let timer = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, dart.fn(() => {
            timer = null;
          }, T$.VoidTovoid()));
        }
      }, dart.fnType(dart.void, [T, async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#_throttle'] = function RateLimit$124get$35_throttle(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|_throttle'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|_throttleTrailing'] = function RateLimit$124_throttleTrailing(T, $this, duration) {
    let timer = null;
    let pending = null;
    let hasPending = false;
    let isDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        function onTimer() {
          if (hasPending) {
            sink.add(T.as(pending));
            if (isDone) {
              sink.close();
            } else {
              timer = async.Timer.new(duration, onTimer);
              hasPending = false;
              pending = null;
            }
          } else {
            timer = null;
          }
        }
        dart.fn(onTimer, T$.VoidTovoid());
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, onTimer);
        } else {
          hasPending = true;
          pending = data;
        }
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        let t19;
        isDone = true;
        if (hasPending) return;
        sink.close();
        t19 = timer;
        t19 == null ? null : t19.cancel();
        timer = null;
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#_throttleTrailing'] = function RateLimit$124get$35_throttleTrailing(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|_throttleTrailing'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|audit'] = function RateLimit$124audit(T, $this, duration) {
    let timer = null;
    let shouldClose = false;
    let recentData = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        recentData = data;
        timer == null ? timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(recentData);
          timer = null;
          if (shouldClose) {
            sink.close();
          }
        }, T$.VoidTovoid())) : null;
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        if (timer != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#audit'] = function RateLimit$124get$35audit(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|audit'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|buffer'] = function RateLimit$124buffer(T, $this, trigger) {
    return aggregate_sample['AggregateSample|aggregateSample'](T, core.List$(T), $this, trigger, dart.gbind(C[4] || CT.C4, T));
  };
  rate_limit['RateLimit|get#buffer'] = function RateLimit$124get$35buffer(T, $this) {
    return dart.fn(trigger => rate_limit['RateLimit|buffer'](T, $this, trigger), dart.fnType(async.Stream$(core.List$(T)), [T$.StreamOfvoid()]));
  };
  rate_limit['RateLimit|_debounceAggregate'] = function RateLimit$124_debounceAggregate(T, S, $this, duration, collect, opts) {
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let timer = null;
    let soFar = null;
    let hasPending = false;
    let shouldClose = false;
    let emittedLatestAsLeading = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((value, sink) => {
        let t25;
        function emit() {
          sink.add(S.as(soFar));
          soFar = null;
          hasPending = false;
        }
        dart.fn(emit, T$.VoidTovoid());
        t25 = timer;
        t25 == null ? null : t25.cancel();
        soFar = collect(value, soFar);
        hasPending = true;
        if (timer == null && leading) {
          emittedLatestAsLeading = true;
          emit();
        } else {
          emittedLatestAsLeading = false;
        }
        timer = async.Timer.new(duration, dart.fn(() => {
          if (trailing && !emittedLatestAsLeading) emit();
          if (shouldClose) sink.close();
          timer = null;
        }, T$.VoidTovoid()));
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        let t25;
        if (hasPending && trailing) {
          shouldClose = true;
        } else {
          t25 = timer;
          t25 == null ? null : t25.cancel();
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  rate_limit['RateLimit|get#_debounceAggregate'] = function RateLimit$124get$35_debounceAggregate(T, $this) {
    return dart.fn((S, duration, collect, opts) => {
      let leading = opts && 'leading' in opts ? opts.leading : null;
      let trailing = opts && 'trailing' in opts ? opts.trailing : null;
      return rate_limit['RateLimit|_debounceAggregate'](T, S, $this, duration, collect, {leading: leading, trailing: trailing});
    }, dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [__t$StreamOfS(), [core.Duration, dart.fnType(S, [T, __t$SN()])], {leading: core.bool, trailing: core.bool}, {}];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [T$.ObjectN()];
    }));
  };
  rate_limit._dropPrevious = function _dropPrevious(T, element, _) {
    return element;
  };
  rate_limit._collect = function _collect(T, event, soFar) {
    let t26, t26$;
    t26$ = (t26 = soFar, t26 == null ? _interceptors.JSArray$(T).of([]) : t26);
    return (() => {
      t26$[$add](event);
      return t26$;
    })();
  };
  combine_latest['CombineLatest|combineLatest'] = function CombineLatest$124combineLatest(T, T2, S, $this, other, combine) {
    let controller = $this.isBroadcast ? async.StreamController$(S).broadcast({sync: true}) : async.StreamController$(S).new({sync: true});
    other = $this.isBroadcast && !other.isBroadcast ? other.asBroadcastStream() : other;
    let sourceSubscription = null;
    let otherSubscription = null;
    let sourceDone = false;
    let otherDone = false;
    let latestSource = null;
    let latestSource$35isSet = false;
    function latestSource$35get() {
      return latestSource$35isSet ? latestSource : dart.throw(new _internal.LateError.localNI("latestSource"));
    }
    dart.fn(latestSource$35get, dart.fnType(T, []));
    function latestSource$35set(t30) {
      latestSource$35isSet = true;
      return latestSource = t30;
    }
    dart.fn(latestSource$35set, dart.fnType(dart.dynamic, [T]));
    let latestOther = null;
    let latestOther$35isSet = false;
    function latestOther$35get() {
      return latestOther$35isSet ? latestOther : dart.throw(new _internal.LateError.localNI("latestOther"));
    }
    dart.fn(latestOther$35get, dart.fnType(T2, []));
    function latestOther$35set(t35) {
      latestOther$35isSet = true;
      return latestOther = t35;
    }
    dart.fn(latestOther$35set, dart.fnType(dart.dynamic, [T2]));
    let sourceStarted = false;
    let otherStarted = false;
    function emitCombined() {
      if (!sourceStarted || !otherStarted) return;
      let result = null;
      try {
        result = combine(latestSource$35get(), latestOther$35get());
      } catch (e$) {
        let e = dart.getThrown(e$);
        let s = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          controller.addError(e, s);
          return;
        } else
          throw e$;
      }
      if (async.Future$(S).is(result)) {
        dart.nullCheck(sourceSubscription).pause();
        dart.nullCheck(otherSubscription).pause();
        result.then(dart.void, dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')}).whenComplete(dart.fn(() => {
          dart.nullCheck(sourceSubscription).resume();
          dart.nullCheck(otherSubscription).resume();
        }, T$.VoidToNull()));
      } else {
        controller.add(result);
      }
    }
    dart.fn(emitCombined, T$.VoidTovoid());
    controller.onListen = dart.fn(() => {
      let t38;
      if (!(sourceSubscription == null)) dart.assertFailed(null, I[2], 81, 14, "sourceSubscription == null");
      sourceSubscription = $this.listen(dart.fn(s => {
        sourceStarted = true;
        latestSource$35set(s);
        emitCombined();
      }, dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          sourceDone = true;
          if (otherDone) {
            controller.close();
          } else if (!sourceStarted) {
            dart.nullCheck(otherSubscription).cancel();
            controller.close();
          }
        }, T$.VoidTovoid())});
      otherSubscription = other.listen(dart.fn(o => {
        otherStarted = true;
        latestOther$35set(o);
        emitCombined();
      }, dart.fnType(dart.void, [T2])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          otherDone = true;
          if (sourceDone) {
            controller.close();
          } else if (!otherStarted) {
            dart.nullCheck(sourceSubscription).cancel();
            controller.close();
          }
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t38 = controller;
        (() => {
          t38.onPause = dart.fn(() => {
            dart.nullCheck(sourceSubscription).pause();
            dart.nullCheck(otherSubscription).pause();
          }, T$.VoidTovoid());
          t38.onResume = dart.fn(() => {
            dart.nullCheck(sourceSubscription).resume();
            dart.nullCheck(otherSubscription).resume();
          }, T$.VoidTovoid());
          return t38;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t38;
        let cancels = (t38 = T$.JSArrayOfFutureOfvoid().of([dart.nullCheck(sourceSubscription).cancel(), dart.nullCheck(otherSubscription).cancel()]), (() => {
          t38[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t38;
        })());
        sourceSubscription = null;
        otherSubscription = null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  combine_latest['CombineLatest|get#combineLatest'] = function CombineLatest$124get$35combineLatest(T, $this) {
    return dart.fn((T2, S, other, combine) => combine_latest['CombineLatest|combineLatest'](T, T2, S, $this, other, combine), dart.gFnType((T2, S) => {
      var __t$StreamOfT2 = () => (__t$StreamOfT2 = dart.constFn(async.Stream$(T2)))();
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [__t$StreamOfT2(), dart.fnType(__t$FutureOrOfS(), [T, T2])]];
    }, (T2, S) => {
      var __t$StreamOfT2 = () => (__t$StreamOfT2 = dart.constFn(async.Stream$(T2)))();
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN(), T$.ObjectN()];
    }));
  };
  combine_latest['CombineLatest|combineLatestAll'] = function CombineLatest$124combineLatestAll(T, $this, others) {
    let controller = $this.isBroadcast ? async.StreamController$(core.List$(T)).broadcast({sync: true}) : async.StreamController$(core.List$(T)).new({sync: true});
    let allStreams = (() => {
      let t40 = _interceptors.JSArray$(async.Stream$(T)).of([$this]);
      for (let other of others)
        t40[$add](!$this.isBroadcast || other.isBroadcast ? other : other.asBroadcastStream());
      return t40;
    })();
    controller.onListen = dart.fn(() => {
      let t41;
      let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
      let latestData = core.List$(dart.nullable(T)).filled(allStreams[$length], null);
      let hasEmitted = T$.LinkedHashSetOfint().new();
      function handleData(index, data) {
        latestData[$_set](index, data);
        hasEmitted.add(index);
        if (hasEmitted[$length] === allStreams[$length]) {
          controller.add(core.List$(T).from(latestData));
        }
      }
      dart.fn(handleData, dart.fnType(dart.void, [core.int, T]));
      let streamId = 0;
      for (let stream of allStreams) {
        let index = streamId;
        let subscription = stream.listen(dart.fn(data => handleData(index, data), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          if (!subscriptions[$contains](subscription)) dart.assertFailed(null, I[2], 208, 18, "subscriptions.contains(subscription)");
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty] || !hasEmitted.contains(index)) {
            controller.close();
          }
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
        streamId = streamId + 1;
      }
      if (!$this.isBroadcast) {
        t41 = controller;
        (() => {
          t41.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t41.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t41;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t42;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t42 = (() => {
          let t41 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t41[$add](s.cancel());
          return t41;
        })(), (() => {
          t42[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t42;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  combine_latest['CombineLatest|get#combineLatestAll'] = function CombineLatest$124get$35combineLatestAll(T, $this) {
    return dart.fn(others => combine_latest['CombineLatest|combineLatestAll'](T, $this, others), dart.fnType(async.Stream$(core.List$(T)), [core.Iterable$(async.Stream$(T))]));
  };
  take_until['TakeUntil|takeUntil'] = function TakeUntil$124takeUntil(T, $this, trigger) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let subscription = null;
    let isDone = false;
    trigger.then(core.Null, dart.fn(_ => {
      let t44;
      if (isDone) return;
      isDone = true;
      t44 = subscription;
      t44 == null ? null : t44.cancel();
      controller.close();
    }, T$.voidToNull()));
    controller.onListen = dart.fn(() => {
      let t44;
      if (isDone) return;
      subscription = $this.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          if (isDone) return;
          isDone = true;
          controller.close();
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t44 = controller;
        (() => {
          t44.onPause = dart.bind(dart.nullCheck(subscription), 'pause');
          t44.onResume = dart.bind(dart.nullCheck(subscription), 'resume');
          return t44;
        })();
      }
      controller.onCancel = dart.fn(() => {
        if (isDone) return null;
        let toCancel = dart.nullCheck(subscription);
        subscription = null;
        return toCancel.cancel();
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  take_until['TakeUntil|get#takeUntil'] = function TakeUntil$124get$35takeUntil(T, $this) {
    return dart.fn(trigger => take_until['TakeUntil|takeUntil'](T, $this, trigger), dart.fnType(async.Stream$(T), [T$.FutureOfvoid()]));
  };
  merge['Merge|merge'] = function Merge$124merge(T, $this, other) {
    return merge['Merge|mergeAll'](T, $this, _interceptors.JSArray$(async.Stream$(T)).of([other]));
  };
  merge['Merge|get#merge'] = function Merge$124get$35merge(T, $this) {
    return dart.fn(other => merge['Merge|merge'](T, $this, other), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  merge['Merge|mergeAll'] = function Merge$124mergeAll(T, $this, others) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let allStreams = (() => {
      let t48 = _interceptors.JSArray$(async.Stream$(T)).of([$this]);
      for (let other of others)
        t48[$add](!$this.isBroadcast || other.isBroadcast ? other : other.asBroadcastStream());
      return t48;
    })();
    controller.onListen = dart.fn(() => {
      let t49;
      let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
      for (let stream of allStreams) {
        let subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty]) controller.close();
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
      }
      if (!$this.isBroadcast) {
        t49 = controller;
        (() => {
          t49.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t49.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t49;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t50;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t50 = (() => {
          let t49 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t49[$add](s.cancel());
          return t49;
        })(), (() => {
          t50[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t50;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  merge['Merge|get#mergeAll'] = function Merge$124get$35mergeAll(T, $this) {
    return dart.fn(others => merge['Merge|mergeAll'](T, $this, others), dart.fnType(async.Stream$(T), [core.Iterable$(async.Stream$(T))]));
  };
  merge['Merge|concurrentAsyncExpand'] = function Merge$124concurrentAsyncExpand(T, S, $this, convert) {
    return merge['_MergeExpanded|mergeExpanded'](S, $this.map(async.Stream$(S), convert));
  };
  merge['Merge|get#concurrentAsyncExpand'] = function Merge$124get$35concurrentAsyncExpand(T, $this) {
    return dart.fn((S, convert) => merge['Merge|concurrentAsyncExpand'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$StreamOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    }));
  };
  merge['_MergeExpanded|mergeExpanded'] = function _MergeExpanded$124mergeExpanded(T, $this) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    controller.onListen = dart.fn(() => {
      let t54;
      let subscriptions = T$.JSArrayOfStreamSubscription().of([]);
      let outerSubscription = $this.listen(dart.fn(inner => {
        if ($this.isBroadcast && !inner.isBroadcast) {
          inner = inner.asBroadcastStream();
        }
        let subscription = inner.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty]) controller.close();
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
      }, dart.fnType(dart.void, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError')});
      outerSubscription.onDone(dart.fn(() => {
        subscriptions[$remove](outerSubscription);
        if (subscriptions[$isEmpty]) controller.close();
      }, T$.VoidTovoid()));
      subscriptions[$add](outerSubscription);
      if (!$this.isBroadcast) {
        t54 = controller;
        (() => {
          t54.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t54.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t54;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t55;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t55 = (() => {
          let t54 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t54[$add](s.cancel());
          return t54;
        })(), (() => {
          t55[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t55;
        })());
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  merge['_MergeExpanded|get#mergeExpanded'] = function _MergeExpanded$124get$35mergeExpanded(T, $this) {
    return dart.fn(() => merge['_MergeExpanded|mergeExpanded'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  $switch['Switch|switchMap'] = function Switch$124switchMap(T, S, $this, convert) {
    return $switch['SwitchLatest|switchLatest'](S, $this.map(async.Stream$(S), convert));
  };
  $switch['Switch|get#switchMap'] = function Switch$124get$35switchMap(T, $this) {
    return dart.fn((S, convert) => $switch['Switch|switchMap'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$StreamOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    }));
  };
  $switch['SwitchLatest|switchLatest'] = function SwitchLatest$124switchLatest(T, $this) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    controller.onListen = dart.fn(() => {
      let t59;
      let innerSubscription = null;
      let outerStreamDone = false;
      let outerSubscription = $this.listen(dart.fn(innerStream => {
        let t59;
        t59 = innerSubscription;
        t59 == null ? null : t59.cancel();
        innerSubscription = innerStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
            innerSubscription = null;
            if (outerStreamDone) controller.close();
          }, T$.VoidTovoid())});
      }, dart.fnType(dart.void, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          outerStreamDone = true;
          if (innerSubscription == null) controller.close();
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t59 = controller;
        (() => {
          t59.onPause = dart.fn(() => {
            let t60;
            t60 = innerSubscription;
            t60 == null ? null : t60.pause();
            outerSubscription.pause();
          }, T$.VoidTovoid());
          t59.onResume = dart.fn(() => {
            let t60;
            t60 = innerSubscription;
            t60 == null ? null : t60.resume();
            outerSubscription.resume();
          }, T$.VoidTovoid());
          return t59;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t60;
        let cancels = (t60 = (() => {
          let t59 = T$.JSArrayOfFutureOfvoid().of([]);
          if (!outerStreamDone) t59[$add](outerSubscription.cancel());
          if (innerSubscription != null) t59[$add](dart.nullCheck(innerSubscription).cancel());
          return t59;
        })(), (() => {
          t60[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t60;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  $switch['SwitchLatest|get#switchLatest'] = function SwitchLatest$124get$35switchLatest(T, $this) {
    return dart.fn(() => $switch['SwitchLatest|switchLatest'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  scan['Scan|scan'] = function Scan$124scan(T, S, $this, initialValue, combine) {
    let accumulated = initialValue;
    return $this.asyncMap(S, dart.fn(value => {
      let result = combine(accumulated, value);
      if (async.Future$(S).is(result)) {
        return result.then(S, dart.fn(r => accumulated = r, dart.fnType(S, [S])));
      } else {
        return accumulated = result;
      }
    }, dart.fnType(async.FutureOr$(S), [T])));
  };
  scan['Scan|get#scan'] = function Scan$124get$35scan(T, $this) {
    return dart.fn((S, initialValue, combine) => scan['Scan|scan'](T, S, $this, initialValue, combine), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [S, dart.fnType(__t$FutureOrOfS(), [S, T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN()];
    }));
  };
  concatenate['Concatenate|followedBy'] = function Concatenate$124followedBy(T, $this, next) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    next = $this.isBroadcast && !next.isBroadcast ? next.asBroadcastStream() : next;
    let subscription = null;
    let currentStream = $this;
    let thisDone = false;
    let secondDone = false;
    let currentDoneHandler = null;
    function currentDoneHandler$35get() {
      let t65;
      t65 = currentDoneHandler;
      return t65 == null ? dart.throw(new _internal.LateError.localNI("currentDoneHandler")) : t65;
    }
    dart.fn(currentDoneHandler$35get, T$.VoidToFn());
    function currentDoneHandler$35set(t66) {
      return currentDoneHandler = t66;
    }
    dart.fn(currentDoneHandler$35set, T$.FnTodynamic());
    function listen() {
      subscription = currentStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => currentDoneHandler$35get()(), T$.VoidTovoid())});
    }
    dart.fn(listen, T$.VoidTovoid());
    function onSecondDone() {
      secondDone = true;
      controller.close();
    }
    dart.fn(onSecondDone, T$.VoidTovoid());
    function onThisDone() {
      thisDone = true;
      currentStream = next;
      currentDoneHandler$35set(onSecondDone);
      listen();
    }
    dart.fn(onThisDone, T$.VoidTovoid());
    currentDoneHandler$35set(onThisDone);
    controller.onListen = dart.fn(() => {
      let t68;
      if (!(subscription == null)) dart.assertFailed(null, I[3], 58, 14, "subscription == null");
      listen();
      if (!$this.isBroadcast) {
        t68 = controller;
        (() => {
          t68.onPause = dart.fn(() => {
            if (!thisDone || !next.isBroadcast) return dart.nullCheck(subscription).pause();
            dart.nullCheck(subscription).cancel();
            subscription = null;
          }, T$.VoidTovoid());
          t68.onResume = dart.fn(() => {
            if (!thisDone || !next.isBroadcast) return dart.nullCheck(subscription).resume();
            listen();
          }, T$.VoidTovoid());
          return t68;
        })();
      }
      controller.onCancel = dart.fn(() => {
        if (secondDone) return null;
        let toCancel = dart.nullCheck(subscription);
        subscription = null;
        return toCancel.cancel();
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  concatenate['Concatenate|get#followedBy'] = function Concatenate$124get$35followedBy(T, $this) {
    return dart.fn(next => concatenate['Concatenate|followedBy'](T, $this, next), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  concatenate['Concatenate|startWith'] = function Concatenate$124startWith(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Future$(T).value(initial).asStream());
  };
  concatenate['Concatenate|get#startWith'] = function Concatenate$124get$35startWith(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWith'](T, $this, initial), dart.fnType(async.Stream$(T), [T]));
  };
  concatenate['Concatenate|startWithMany'] = function Concatenate$124startWithMany(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Stream$(T).fromIterable(initial));
  };
  concatenate['Concatenate|get#startWithMany'] = function Concatenate$124get$35startWithMany(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithMany'](T, $this, initial), dart.fnType(async.Stream$(T), [core.Iterable$(T)]));
  };
  concatenate['Concatenate|startWithStream'] = function Concatenate$124startWithStream(T, $this, initial) {
    if ($this.isBroadcast && !initial.isBroadcast) {
      initial = initial.asBroadcastStream();
    }
    return concatenate['Concatenate|followedBy'](T, initial, $this);
  };
  concatenate['Concatenate|get#startWithStream'] = function Concatenate$124get$35startWithStream(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithStream'](T, $this, initial), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  async_map['AsyncMap|asyncMapBuffer'] = function AsyncMap$124asyncMapBuffer(T, S, $this, convert) {
    let t76;
    let workFinished = (t76 = T$.StreamControllerOfvoid().new(), (() => {
      t76.add(null);
      return t76;
    })());
    return async_map['AsyncMap|_asyncMapThen'](core.List$(T), S, rate_limit['RateLimit|buffer'](T, $this, workFinished.stream), convert, dart.bind(workFinished, 'add'));
  };
  async_map['AsyncMap|get#asyncMapBuffer'] = function AsyncMap$124get$35asyncMapBuffer(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapBuffer'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [core.List$(T)])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|asyncMapSample'] = function AsyncMap$124asyncMapSample(T, S, $this, convert) {
    let t78;
    let workFinished = (t78 = T$.StreamControllerOfvoid().new(), (() => {
      t78.add(null);
      return t78;
    })());
    return async_map['AsyncMap|_asyncMapThen'](T, S, aggregate_sample['AggregateSample|aggregateSample'](T, T, $this, workFinished.stream, dart.gbind(C[5] || CT.C5, T)), convert, dart.bind(workFinished, 'add'));
  };
  async_map['AsyncMap|get#asyncMapSample'] = function AsyncMap$124get$35asyncMapSample(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapSample'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|concurrentAsyncMap'] = function AsyncMap$124concurrentAsyncMap(T, S, $this, convert) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            sink.add(yield convert(element));
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              sink.addError(e, st);
            } else
              throw e$;
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), T$.VoidToFutureOfNull())();
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  async_map['AsyncMap|get#concurrentAsyncMap'] = function AsyncMap$124get$35concurrentAsyncMap(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|concurrentAsyncMap'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOrOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|_asyncMapThen'] = function AsyncMap$124_asyncMapThen(T, S, $this, convert, then) {
    let pendingEvent = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((event, sink) => {
        pendingEvent = convert(event).then(dart.void, dart.bind(sink, 'add')).catchError(dart.bind(sink, 'addError')).then(dart.void, then);
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        if (pendingEvent != null) {
          dart.nullCheck(pendingEvent).then(dart.void, dart.fn(_ => sink.close(), T$.voidTovoid()));
        } else {
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  async_map['AsyncMap|get#_asyncMapThen'] = function AsyncMap$124get$35_asyncMapThen(T, $this) {
    return dart.fn((S, convert, then) => async_map['AsyncMap|_asyncMapThen'](T, S, $this, convert, then), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [T]), T$.voidTovoid()]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map._dropPrevious = function _dropPrevious$(T, event, _) {
    return event;
  };
  tap['Tap|tap'] = function Tap$124tap(T, $this, onValue, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((value, sink) => {
        let t85;
        try {
          t85 = onValue;
          t85 == null ? null : t85(value);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.add(value);
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onError: dart.fn((error, stackTrace, sink) => {
        let t86;
        try {
          t86 = onError;
          t86 == null ? null : t86(error, stackTrace);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.addError(error, stackTrace);
      }, dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)])), onDone: dart.fn(sink => {
        let t87;
        try {
          t87 = onDone;
          t87 == null ? null : t87();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  tap['Tap|get#tap'] = function Tap$124get$35tap(T, $this) {
    return dart.fn((onValue, opts) => {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return tap['Tap|tap'](T, $this, onValue, {onError: onError, onDone: onDone});
    }, dart.fnType(async.Stream$(T), [dart.nullable(dart.fnType(dart.void, [T]))], {onDone: T$.VoidToNvoid(), onError: T$.ObjectAndStackTraceToNvoid()}, {}));
  };
  dart.trackLibraries("packages/stream_transform/src/aggregate_sample", {
    "package:stream_transform/src/where.dart": where,
    "package:stream_transform/src/from_handlers.dart": from_handlers,
    "package:stream_transform/src/aggregate_sample.dart": aggregate_sample,
    "package:stream_transform/src/rate_limit.dart": rate_limit,
    "package:stream_transform/src/combine_latest.dart": combine_latest,
    "package:stream_transform/src/take_until.dart": take_until,
    "package:stream_transform/src/merge.dart": merge,
    "package:stream_transform/src/switch.dart": $switch,
    "package:stream_transform/src/scan.dart": scan,
    "package:stream_transform/src/concatenate.dart": concatenate,
    "package:stream_transform/src/async_map.dart": async_map,
    "package:stream_transform/stream_transform.dart": stream_transform,
    "package:stream_transform/src/tap.dart": tap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["where.dart","from_handlers.dart","aggregate_sample.dart","rate_limit.dart","combine_latest.dart","take_until.dart","merge.dart","switch.dart","scan.dart","concatenate.dart","async_map.dart","tap.dart"],"names":[],"mappings":"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","file":"aggregate_sample.sound.ddc.js"}');
  // Exports:
  return {
    src__where: where,
    src__from_handlers: from_handlers,
    src__aggregate_sample: aggregate_sample,
    src__rate_limit: rate_limit,
    src__combine_latest: combine_latest,
    src__take_until: take_until,
    src__merge: merge,
    src__switch: $switch,
    src__scan: scan,
    src__concatenate: concatenate,
    src__async_map: async_map,
    stream_transform: stream_transform,
    src__tap: tap
  };
}));

//# sourceMappingURL=aggregate_sample.sound.ddc.js.map
