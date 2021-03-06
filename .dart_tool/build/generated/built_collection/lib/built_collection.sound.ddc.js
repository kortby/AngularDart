define(['dart_sdk'], (function load__packages__built_collection__built_collection(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var iterable$ = Object.create(dart.library);
  var set = Object.create(dart.library);
  var unmodifiable_set = Object.create(dart.library);
  var null_safety = Object.create(dart.library);
  var iterables = Object.create(dart.library);
  var copy_on_write_set = Object.create(dart.library);
  var hash = Object.create(dart.library);
  var list = Object.create(dart.library);
  var copy_on_write_list = Object.create(dart.library);
  var set_multimap = Object.create(dart.library);
  var copy_on_write_map = Object.create(dart.library);
  var built_collection = Object.create(dart.library);
  var map$ = Object.create(dart.library);
  var list_multimap = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $hashCode = dartx.hashCode;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $followedBy = dartx.followedBy;
  var $whereType = dartx.whereType;
  var $where = dartx.where;
  var $expand = dartx.expand;
  var $forEach = dartx.forEach;
  var $reduce = dartx.reduce;
  var $fold = dartx.fold;
  var $every = dartx.every;
  var $join = dartx.join;
  var $any = dartx.any;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $first = dartx.first;
  var $last = dartx.last;
  var $single = dartx.single;
  var $firstWhere = dartx.firstWhere;
  var $lastWhere = dartx.lastWhere;
  var $singleWhere = dartx.singleWhere;
  var $elementAt = dartx.elementAt;
  var $cast = dartx.cast;
  var $contains = dartx.contains;
  var $toSet = dartx.toSet;
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $plus = dartx['+'];
  var $reversed = dartx.reversed;
  var $indexOf = dartx.indexOf;
  var $lastIndexOf = dartx.lastIndexOf;
  var $indexWhere = dartx.indexWhere;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $sublist = dartx.sublist;
  var $getRange = dartx.getRange;
  var $asMap = dartx.asMap;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $removeRange = dartx.removeRange;
  var $shuffle = dartx.shuffle;
  var $clear = dartx.clear;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $setAll = dartx.setAll;
  var $remove = dartx.remove;
  var $removeAt = dartx.removeAt;
  var $removeLast = dartx.removeLast;
  var $removeWhere = dartx.removeWhere;
  var $retainWhere = dartx.retainWhere;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $replaceRange = dartx.replaceRange;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $containsValue = dartx.containsValue;
  var $entries = dartx.entries;
  var $addEntries = dartx.addEntries;
  var $putIfAbsent = dartx.putIfAbsent;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    JSArrayOfintN: () => (T.JSArrayOfintN = dart.constFn(_interceptors.JSArray$(T.intN())))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    intAnddynamicToint: () => (T.intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    BuiltSetN: () => (T.BuiltSetN = dart.constFn(dart.nullable(set.BuiltSet)))(),
    dynamicToBuiltSetN: () => (T.dynamicToBuiltSetN = dart.constFn(dart.fnType(T.BuiltSetN(), [dart.dynamic])))(),
    dynamicAnddynamicTovoid: () => (T.dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))(),
    dynamicToBuiltList: () => (T.dynamicToBuiltList = dart.constFn(dart.fnType(list.BuiltList, [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C[1] = dart.constMap(dart.dynamic, dart.dynamic, []);
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:built_collection/src/iterable.dart",
    "package:built_collection/src/set.dart",
    "org-dartlang-app:///packages/built_collection/src/set/set_builder.dart",
    "package:built_collection/src/internal/unmodifiable_set.dart",
    "package:built_collection/src/internal/copy_on_write_set.dart",
    "package:built_collection/src/list.dart",
    "package:built_collection/src/internal/copy_on_write_list.dart",
    "package:built_collection/src/set_multimap.dart",
    "package:built_collection/src/internal/copy_on_write_map.dart",
    "package:built_collection/src/map.dart",
    "org-dartlang-app:///packages/built_collection/src/map/map_builder.dart",
    "package:built_collection/src/list_multimap.dart"
  ];
  const _is_BuiltIterable_default = Symbol('_is_BuiltIterable_default');
  iterable$.BuiltIterable$ = dart.generic(E => {
    class BuiltIterable extends core.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (BuiltIterable.new = function() {
      ;
    }).prototype = BuiltIterable.prototype;
    BuiltIterable.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltIterable);
    BuiltIterable.prototype[_is_BuiltIterable_default] = true;
    dart.addTypeCaches(BuiltIterable);
    BuiltIterable[dart.implements] = () => [core.Iterable$(E)];
    dart.setLibraryUri(BuiltIterable, I[0]);
    return BuiltIterable;
  });
  iterable$.BuiltIterable = iterable$.BuiltIterable$();
  dart.addTypeTests(iterable$.BuiltIterable, _is_BuiltIterable_default);
  var _overridenHashCode$ = dart.privateName(set, "_overridenHashCode");
  var _maybeCheckForNull = dart.privateName(set, "_maybeCheckForNull");
  var _needsNullCheck = dart.privateName(set, "_needsNullCheck");
  var _set$ = dart.privateName(set, "_set");
  var _hashCode = dart.privateName(set, "_hashCode");
  var _setFactory$ = dart.privateName(set, "_setFactory");
  const _is_BuiltSet_default = Symbol('_is_BuiltSet_default');
  set.BuiltSet$ = dart.generic(E => {
    var __t$SetBuilderOfE = () => (__t$SetBuilderOfE = dart.constFn(set.SetBuilder$(E)))();
    var __t$_BuiltSetOfE = () => (__t$_BuiltSetOfE = dart.constFn(set._BuiltSet$(E)))();
    var __t$BuiltListOfE = () => (__t$BuiltListOfE = dart.constFn(list.BuiltList$(E)))();
    var __t$EToint = () => (__t$EToint = dart.constFn(dart.fnType(core.int, [E])))();
    var __t$UnmodifiableSetViewOfE = () => (__t$UnmodifiableSetViewOfE = dart.constFn(unmodifiable_set.UnmodifiableSetView$(E)))();
    var __t$BuiltSetOfE = () => (__t$BuiltSetOfE = dart.constFn(set.BuiltSet$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    var __t$CopyOnWriteSetOfE = () => (__t$CopyOnWriteSetOfE = dart.constFn(copy_on_write_set.CopyOnWriteSet$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    class BuiltSet extends core.Object {
      static new(iterable = C[0] || CT.C0) {
        return set.BuiltSet$(E).from(iterable);
      }
      static from(iterable) {
        if (set._BuiltSet.is(iterable) && iterable.hasExactElementType(dart.wrapType(E))) {
          return set.BuiltSet$(E).as(iterable);
        } else {
          return new (set._BuiltSet$(E)).from(iterable);
        }
      }
      static of(iterable) {
        if (set._BuiltSet$(E).is(iterable) && iterable.hasExactElementType(dart.wrapType(E))) {
          return iterable;
        } else {
          return new (set._BuiltSet$(E)).of(iterable);
        }
      }
      static build(updates) {
        let t0;
        return (t0 = set.SetBuilder$(E).new(), (() => {
          t0.update(updates);
          return t0;
        })()).build();
      }
      toBuilder() {
        return new (__t$SetBuilderOfE())._fromBuiltSet(__t$_BuiltSetOfE().as(this));
      }
      rebuild(updates) {
        let t0;
        return (t0 = this.toBuilder(), (() => {
          t0.update(updates);
          return t0;
        })()).build();
      }
      toBuiltList() {
        return __t$BuiltListOfE().new(this);
      }
      toBuiltSet() {
        return this;
      }
      get hashCode() {
        let t0;
        this[_hashCode] == null ? this[_hashCode] = hash.hashObjects((t0 = this[_set$][$map](core.int, dart.fn(e => dart.hashCode(e), __t$EToint()))[$toList]({growable: false}), (() => {
          t0[$sort]();
          return t0;
        })())) : null;
        return dart.nullCheck(this[_hashCode]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!set.BuiltSet.is(other)) return false;
        if (other.length !== this.length) return false;
        if (other.hashCode !== this.hashCode) return false;
        return this.containsAll(other);
      }
      toString() {
        return this[_set$][$toString]();
      }
      asSet() {
        return new (__t$UnmodifiableSetViewOfE()).new(this[_set$]);
      }
      get length() {
        return this[_set$][$length];
      }
      containsAll(other) {
        return this[_set$].containsAll(other);
      }
      difference(other) {
        return new (__t$_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].difference(other[_set$]));
      }
      intersection(other) {
        return new (__t$_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].intersection(other[_set$]));
      }
      lookup(object) {
        return this[_set$].lookup(object);
      }
      union(other) {
        __t$BuiltSetOfE().as(other);
        return new (__t$_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$].union(other[_set$]));
      }
      get iterator() {
        return this[_set$].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      cast(T) {
        return core.Iterable.castFrom(E, T, this[_set$]);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_set$][$followedBy](other);
      }
      whereType(T) {
        return this[_set$][$whereType](T);
      }
      map(T, f) {
        return this[_set$][$map](T, f);
      }
      where(test) {
        return this[_set$][$where](test);
      }
      expand(T, f) {
        return this[_set$][$expand](T, f);
      }
      contains(element) {
        return this[_set$].contains(element);
      }
      forEach(f) {
        return this[_set$][$forEach](f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_set$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_set$][$fold](T, initialValue, combine);
      }
      every(test) {
        return this[_set$][$every](test);
      }
      join(separator = "") {
        return this[_set$][$join](separator);
      }
      any(test) {
        return this[_set$][$any](test);
      }
      toSet() {
        return new (__t$CopyOnWriteSetOfE()).new(this[_set$], this[_setFactory$]);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$][$toList]({growable: growable});
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      take(n) {
        return this[_set$][$take](n);
      }
      takeWhile(test) {
        return this[_set$][$takeWhile](test);
      }
      skip(n) {
        return this[_set$][$skip](n);
      }
      skipWhile(test) {
        return this[_set$][$skipWhile](test);
      }
      get first() {
        return this[_set$][$first];
      }
      get last() {
        return this[_set$][$last];
      }
      get single() {
        return this[_set$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_set$][$elementAt](index);
      }
    }
    (BuiltSet.__ = function(_setFactory, _set) {
      this[_hashCode] = null;
      this[_setFactory$] = _setFactory;
      this[_set$] = _set;
      ;
    }).prototype = BuiltSet.prototype;
    BuiltSet.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltSet);
    BuiltSet.prototype[_is_BuiltSet_default] = true;
    dart.addTypeCaches(BuiltSet);
    BuiltSet[dart.implements] = () => [core.Iterable$(E), iterable$.BuiltIterable$(E)];
    dart.setMethodSignature(BuiltSet, () => ({
      __proto__: dart.getMethods(BuiltSet.__proto__),
      toBuilder: dart.fnType(set.SetBuilder$(E), []),
      rebuild: dart.fnType(set.BuiltSet$(E), [dart.fnType(dart.dynamic, [set.SetBuilder$(E)])]),
      toBuiltList: dart.fnType(list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(set.BuiltSet$(E), []),
      asSet: dart.fnType(core.Set$(E), []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      difference: dart.fnType(set.BuiltSet$(E), [set.BuiltSet$(dart.nullable(core.Object))]),
      intersection: dart.fnType(set.BuiltSet$(E), [set.BuiltSet$(dart.nullable(core.Object))]),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      union: dart.fnType(set.BuiltSet$(E), [dart.nullable(core.Object)]),
      cast: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int])
    }));
    dart.setGetterSignature(BuiltSet, () => ({
      __proto__: dart.getGetters(BuiltSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(BuiltSet, I[1]);
    dart.setFieldSignature(BuiltSet, () => ({
      __proto__: dart.getFields(BuiltSet.__proto__),
      [_setFactory$]: dart.finalFieldType(dart.nullable(dart.fnType(core.Set$(E), []))),
      [_set$]: dart.finalFieldType(core.Set$(E)),
      [_hashCode]: dart.fieldType(dart.nullable(core.int))
    }));
    dart.defineExtensionMethods(BuiltSet, [
      '_equals',
      'toString',
      'cast',
      'followedBy',
      'whereType',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toSet',
      'toList',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt'
    ]);
    dart.defineExtensionAccessors(BuiltSet, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltSet;
  });
  set.BuiltSet = set.BuiltSet$();
  dart.addTypeTests(set.BuiltSet, _is_BuiltSet_default);
  const _is__BuiltSet_default = Symbol('_is__BuiltSet_default');
  set._BuiltSet$ = dart.generic(E => {
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class _BuiltSet extends set.BuiltSet$(E) {
      get [_needsNullCheck]() {
        return !null_safety.isSoundMode && !E.is(null);
      }
      [_maybeCheckForNull]() {
        if (!this[_needsNullCheck]) return;
        for (let element of this[_set$]) {
          if (element == null) {
            dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
          }
        }
      }
      hasExactElementType(type) {
        return dart.wrapType(E)._equals(type);
      }
    }
    (_BuiltSet.withSafeSet = function(setFactory, set) {
      _BuiltSet.__proto__.__.call(this, setFactory, set);
      ;
    }).prototype = _BuiltSet.prototype;
    dart.defineValue(_BuiltSet, 'from', function(iterable) {
      _BuiltSet.__proto__.__.call(this, null, __t$LinkedHashSetOfE().from(iterable));
      this[_maybeCheckForNull]();
    }).prototype = _BuiltSet.prototype;
    dart.defineValue(_BuiltSet, 'of', function(iterable) {
      let t0;
      _BuiltSet.__proto__.__.call(this, null, (t0 = __t$LinkedHashSetOfE().new(), (() => {
        t0.addAll(iterable);
        return t0;
      })()));
      this[_maybeCheckForNull]();
    }).prototype = _BuiltSet.prototype;
    dart.addTypeTests(_BuiltSet);
    _BuiltSet.prototype[_is__BuiltSet_default] = true;
    dart.addTypeCaches(_BuiltSet);
    dart.setMethodSignature(_BuiltSet, () => ({
      __proto__: dart.getMethods(_BuiltSet.__proto__),
      [_maybeCheckForNull]: dart.fnType(dart.void, []),
      hasExactElementType: dart.fnType(core.bool, [core.Type])
    }));
    dart.setGetterSignature(_BuiltSet, () => ({
      __proto__: dart.getGetters(_BuiltSet.__proto__),
      [_needsNullCheck]: core.bool
    }));
    dart.setLibraryUri(_BuiltSet, I[1]);
    return _BuiltSet;
  });
  set._BuiltSet = set._BuiltSet$();
  dart.addTypeTests(set._BuiltSet, _is__BuiltSet_default);
  const _is_OverriddenHashcodeBuiltSet_default = Symbol('_is_OverriddenHashcodeBuiltSet_default');
  set.OverriddenHashcodeBuiltSet$ = dart.generic(T => {
    class OverriddenHashcodeBuiltSet extends set._BuiltSet$(T) {
      get hashCode() {
        return this[_overridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltSet.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$] = _overridenHashCode;
      OverriddenHashcodeBuiltSet.__proto__.from.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltSet.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSet);
    OverriddenHashcodeBuiltSet.prototype[_is_OverriddenHashcodeBuiltSet_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltSet);
    dart.setLibraryUri(OverriddenHashcodeBuiltSet, I[1]);
    dart.setFieldSignature(OverriddenHashcodeBuiltSet, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSet.__proto__),
      [_overridenHashCode$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSet, ['hashCode']);
    return OverriddenHashcodeBuiltSet;
  });
  set.OverriddenHashcodeBuiltSet = set.OverriddenHashcodeBuiltSet$();
  dart.addTypeTests(set.OverriddenHashcodeBuiltSet, _is_OverriddenHashcodeBuiltSet_default);
  var __SetBuilder__set = dart.privateName(set, "_#SetBuilder#_set");
  var _setOwner = dart.privateName(set, "_setOwner");
  var _withOwner = dart.privateName(set, "_withOwner");
  var _createSet = dart.privateName(set, "_createSet");
  var _setSafeSet = dart.privateName(set, "_setSafeSet");
  var _maybeCheckElement = dart.privateName(set, "_maybeCheckElement");
  var _safeSet = dart.privateName(set, "_safeSet");
  var _maybeCheckElements = dart.privateName(set, "_maybeCheckElements");
  var _checkElement = dart.privateName(set, "_checkElement");
  const _is_SetBuilder_default = Symbol('_is_SetBuilder_default');
  set.SetBuilder$ = dart.generic(E => {
    var __t$_BuiltSetOfE = () => (__t$_BuiltSetOfE = dart.constFn(set._BuiltSet$(E)))();
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$VoidToSetOfE = () => (__t$VoidToSetOfE = dart.constFn(dart.fnType(__t$SetOfE(), [])))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EToE = () => (__t$EToE = dart.constFn(dart.fnType(E, [E])))();
    var __t$EToIterableOfE = () => (__t$EToIterableOfE = dart.constFn(dart.fnType(__t$IterableOfE(), [E])))();
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class SetBuilder extends core.Object {
      set [_set$](t0) {
        this[__SetBuilder__set] = t0;
      }
      get [_set$]() {
        let t1;
        t1 = this[__SetBuilder__set];
        return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_set")) : t1;
      }
      static new(iterable = C[0] || CT.C0) {
        let t1;
        t1 = new (set.SetBuilder$(E))._uninitialized();
        return (() => {
          t1.replace(iterable);
          return t1;
        })();
      }
      build() {
        this[_setOwner] == null ? this[_setOwner] = new (__t$_BuiltSetOfE()).withSafeSet(this[_setFactory$], this[_set$]) : null;
        return dart.nullCheck(this[_setOwner]);
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (__t$_BuiltSetOfE().is(iterable) && dart.equals(iterable[_setFactory$], this[_setFactory$])) {
          this[_withOwner](iterable);
        } else {
          let set = this[_createSet]();
          for (let element of iterable) {
            if (E.is(element)) {
              set.add(element);
            } else {
              dart.throw(new core.ArgumentError.new("iterable contained invalid element: " + dart.str(element)));
            }
          }
          this[_setSafeSet](set);
        }
      }
      withBase(base) {
        let t1;
        __t$VoidToSetOfE().as(base);
        core.ArgumentError.checkNotNull(__t$VoidToSetOfE(), base, "base");
        this[_setFactory$] = base;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$]);
          return t1;
        })()));
      }
      withDefaultBase() {
        let t1;
        this[_setFactory$] = null;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$]);
          return t1;
        })()));
      }
      get length() {
        return this[_set$][$length];
      }
      get isEmpty() {
        return this[_set$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$][$isNotEmpty];
      }
      add(value) {
        E.as(value);
        this[_maybeCheckElement](value);
        return this[_safeSet].add(value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_maybeCheckElements](iterable);
        this[_safeSet].addAll(iterable);
      }
      clear() {
        this[_safeSet].clear();
      }
      remove(value) {
        return this[_safeSet].remove(value);
      }
      removeAll(elements) {
        this[_safeSet].removeAll(elements);
      }
      removeWhere(test) {
        this[_safeSet].removeWhere(test);
      }
      retainAll(elements) {
        this[_safeSet].retainAll(elements);
      }
      retainWhere(test) {
        this[_safeSet].retainWhere(test);
      }
      map(f) {
        let t1;
        __t$EToE().as(f);
        let result = (t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$map](E, f));
          return t1;
        })());
        this[_maybeCheckElements](result);
        this[_setSafeSet](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        let t1;
        __t$EToIterableOfE().as(f);
        let result = (t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$expand](E, f));
          return t1;
        })());
        this[_maybeCheckElements](result);
        this[_setSafeSet](result);
      }
      take(n) {
        let t1;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$take](n));
          return t1;
        })()));
      }
      takeWhile(test) {
        let t1;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$takeWhile](test));
          return t1;
        })()));
      }
      skip(n) {
        let t1;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$skip](n));
          return t1;
        })()));
      }
      skipWhile(test) {
        let t1;
        this[_setSafeSet]((t1 = this[_createSet](), (() => {
          t1.addAll(this[_set$][$skipWhile](test));
          return t1;
        })()));
      }
      [_withOwner](setOwner) {
        if (!dart.equals(setOwner[_setFactory$], this[_setFactory$])) dart.assertFailed("Can't reuse a built set that uses a different base", I[2], 193, 12, "setOwner._setFactory == _setFactory");
        this[_set$] = setOwner[_set$];
        this[_setOwner] = setOwner;
      }
      [_setSafeSet](set) {
        this[_setOwner] = null;
        this[_set$] = set;
      }
      get [_safeSet]() {
        let t1;
        if (this[_setOwner] != null) {
          this[_set$] = (t1 = this[_createSet](), (() => {
            t1.addAll(this[_set$]);
            return t1;
          })());
          this[_setOwner] = null;
        }
        return this[_set$];
      }
      [_createSet]() {
        return this[_setFactory$] != null ? dart.nullCheck(this[_setFactory$])() : __t$LinkedHashSetOfE().new();
      }
      get [_needsNullCheck]() {
        return !null_safety.isSoundMode && !E.is(null);
      }
      [_maybeCheckElement](element) {
        if (this[_needsNullCheck]) this[_checkElement](element);
      }
      [_checkElement](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_maybeCheckElements](elements) {
        if (!this[_needsNullCheck]) return;
        for (let element of elements) {
          this[_checkElement](element);
        }
      }
    }
    (SetBuilder._uninitialized = function() {
      this[__SetBuilder__set] = null;
      this[_setOwner] = null;
      this[_setFactory$] = null;
      ;
    }).prototype = SetBuilder.prototype;
    (SetBuilder._fromBuiltSet = function(set) {
      this[__SetBuilder__set] = null;
      this[_setFactory$] = set[_setFactory$];
      this[__SetBuilder__set] = set[_set$];
      this[_setOwner] = set;
      ;
    }).prototype = SetBuilder.prototype;
    dart.addTypeTests(SetBuilder);
    SetBuilder.prototype[_is_SetBuilder_default] = true;
    dart.addTypeCaches(SetBuilder);
    dart.setMethodSignature(SetBuilder, () => ({
      __proto__: dart.getMethods(SetBuilder.__proto__),
      build: dart.fnType(set.BuiltSet$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [set.SetBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core.Iterable]),
      withBase: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      withDefaultBase: dart.fnType(dart.void, []),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      map: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      where: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      expand: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      take: dart.fnType(dart.void, [core.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(dart.void, [core.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [_withOwner]: dart.fnType(dart.void, [set._BuiltSet$(E)]),
      [_setSafeSet]: dart.fnType(dart.void, [core.Set$(E)]),
      [_createSet]: dart.fnType(core.Set$(E), []),
      [_maybeCheckElement]: dart.fnType(dart.void, [E]),
      [_checkElement]: dart.fnType(dart.void, [E]),
      [_maybeCheckElements]: dart.fnType(dart.void, [core.Iterable$(E)])
    }));
    dart.setGetterSignature(SetBuilder, () => ({
      __proto__: dart.getGetters(SetBuilder.__proto__),
      [_set$]: core.Set$(E),
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeSet]: core.Set$(E),
      [_needsNullCheck]: core.bool
    }));
    dart.setSetterSignature(SetBuilder, () => ({
      __proto__: dart.getSetters(SetBuilder.__proto__),
      [_set$]: core.Set$(E)
    }));
    dart.setLibraryUri(SetBuilder, I[1]);
    dart.setFieldSignature(SetBuilder, () => ({
      __proto__: dart.getFields(SetBuilder.__proto__),
      [_setFactory$]: dart.fieldType(dart.nullable(dart.fnType(core.Set$(E), []))),
      [__SetBuilder__set]: dart.fieldType(dart.nullable(core.Set$(E))),
      [_setOwner]: dart.fieldType(dart.nullable(set._BuiltSet$(E)))
    }));
    return SetBuilder;
  });
  set.SetBuilder = set.SetBuilder$();
  dart.addTypeTests(set.SetBuilder, _is_SetBuilder_default);
  set['BuiltSetExtension|build'] = function BuiltSetExtension$124build(T, $this) {
    return new (set._BuiltSet$(T)).of($this);
  };
  set['BuiltSetExtension|get#build'] = function BuiltSetExtension$124get$35build(T, $this) {
    return dart.fn(() => set['BuiltSetExtension|build'](T, $this), dart.fnType(set.BuiltSet$(T), []));
  };
  set['BuiltSetIterableExtension|toBuiltSet'] = function BuiltSetIterableExtension$124toBuiltSet(E, $this) {
    return set.BuiltSet$(E).of($this);
  };
  set['BuiltSetIterableExtension|get#toBuiltSet'] = function BuiltSetIterableExtension$124get$35toBuiltSet(E, $this) {
    return dart.fn(() => set['BuiltSetIterableExtension|toBuiltSet'](E, $this), dart.fnType(set.BuiltSet$(E), []));
  };
  var _set$0 = dart.privateName(unmodifiable_set, "_set");
  const _is_UnmodifiableSetView_default = Symbol('_is_UnmodifiableSetView_default');
  unmodifiable_set.UnmodifiableSetView$ = dart.generic(E => {
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class UnmodifiableSetView extends core.Object {
      get length() {
        return this[_set$0][$length];
      }
      lookup(object) {
        return this[_set$0].lookup(object);
      }
      intersection(other) {
        return this[_set$0].intersection(other);
      }
      union(other) {
        __t$SetOfE().as(other);
        return this[_set$0].union(other);
      }
      difference(other) {
        return this[_set$0].difference(other);
      }
      containsAll(other) {
        return this[_set$0].containsAll(other);
      }
      any(test) {
        return this[_set$0][$any](test);
      }
      cast(T) {
        return new (unmodifiable_set.UnmodifiableSetView$(T)).new(this[_set$0].cast(T));
      }
      contains(element) {
        return this[_set$0].contains(element);
      }
      elementAt(index) {
        return this[_set$0][$elementAt](index);
      }
      every(test) {
        return this[_set$0][$every](test);
      }
      expand(T, f) {
        return this[_set$0][$expand](T, f);
      }
      get first() {
        return this[_set$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set$0][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_set$0][$followedBy](other);
      }
      forEach(f) {
        return this[_set$0][$forEach](f);
      }
      get isEmpty() {
        return this[_set$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$0][$isNotEmpty];
      }
      get iterator() {
        return this[_set$0].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_set$0][$join](separator);
      }
      get last() {
        return this[_set$0][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set$0][$map](T, f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_set$0][$reduce](combine);
      }
      get single() {
        return this[_set$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_set$0][$skip](count);
      }
      skipWhile(test) {
        return this[_set$0][$skipWhile](test);
      }
      take(count) {
        return this[_set$0][$take](count);
      }
      takeWhile(test) {
        return this[_set$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_set$0].toSet();
      }
      where(test) {
        return this[_set$0][$where](test);
      }
      whereType(T) {
        return this[_set$0][$whereType](T);
      }
      add(value) {
        E.as(value);
        return unmodifiable_set.UnmodifiableSetView._throw(core.bool);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      clear() {
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      remove(value) {
        return unmodifiable_set.UnmodifiableSetView._throw(core.bool);
      }
      removeWhere(test) {
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      retainWhere(test) {
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      removeAll(elements) {
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      retainAll(elements) {
        return unmodifiable_set.UnmodifiableSetView._throw(dart.void);
      }
      toString() {
        return this[_set$0][$toString]();
      }
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
    }
    (UnmodifiableSetView.new = function(_set) {
      this[_set$0] = _set;
      ;
    }).prototype = UnmodifiableSetView.prototype;
    dart.addTypeTests(UnmodifiableSetView);
    UnmodifiableSetView.prototype[_is_UnmodifiableSetView_default] = true;
    dart.addTypeCaches(UnmodifiableSetView);
    UnmodifiableSetView[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(UnmodifiableSetView, () => ({
      __proto__: dart.getMethods(UnmodifiableSetView.__proto__),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      union: dart.fnType(core.Set$(E), [dart.nullable(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))])
    }));
    dart.setGetterSignature(UnmodifiableSetView, () => ({
      __proto__: dart.getGetters(UnmodifiableSetView.__proto__),
      length: core.int,
      [$length]: core.int,
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(UnmodifiableSetView, I[3]);
    dart.setFieldSignature(UnmodifiableSetView, () => ({
      __proto__: dart.getFields(UnmodifiableSetView.__proto__),
      [_set$0]: dart.finalFieldType(core.Set$(E))
    }));
    dart.defineExtensionMethods(UnmodifiableSetView, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(UnmodifiableSetView, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return UnmodifiableSetView;
  });
  unmodifiable_set.UnmodifiableSetView = unmodifiable_set.UnmodifiableSetView$();
  dart.addTypeTests(unmodifiable_set.UnmodifiableSetView, _is_UnmodifiableSetView_default);
  dart.defineLazy(null_safety, {
    /*null_safety.isSoundMode*/get isSoundMode() {
      return !T.ListOfint().is(T.JSArrayOfintN().of([]));
    }
  }, false);
  iterables.evaluateIterable = function evaluateIterable(E, iterable) {
    if (!core.List.is(iterable) && !iterable$.BuiltIterable.is(iterable) && !core.Set.is(iterable)) {
      iterable = iterable[$toList]();
    }
    return iterable;
  };
  var _set$1 = dart.privateName(copy_on_write_set, "_set");
  var _setFactory$0 = dart.privateName(copy_on_write_set, "_setFactory");
  var _copyBeforeWrite = dart.privateName(copy_on_write_set, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite = dart.privateName(copy_on_write_set, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteSet_default = Symbol('_is_CopyOnWriteSet_default');
  copy_on_write_set.CopyOnWriteSet$ = dart.generic(E => {
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class CopyOnWriteSet extends core.Object {
      get length() {
        return this[_set$1][$length];
      }
      lookup(object) {
        return this[_set$1].lookup(object);
      }
      intersection(other) {
        return this[_set$1].intersection(other);
      }
      union(other) {
        __t$SetOfE().as(other);
        return this[_set$1].union(other);
      }
      difference(other) {
        return this[_set$1].difference(other);
      }
      containsAll(other) {
        return this[_set$1].containsAll(other);
      }
      any(test) {
        return this[_set$1][$any](test);
      }
      cast(T) {
        return new (copy_on_write_set.CopyOnWriteSet$(T)).new(this[_set$1].cast(T));
      }
      contains(element) {
        return this[_set$1].contains(element);
      }
      elementAt(index) {
        return this[_set$1][$elementAt](index);
      }
      every(test) {
        return this[_set$1][$every](test);
      }
      expand(T, f) {
        return this[_set$1][$expand](T, f);
      }
      get first() {
        return this[_set$1][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$1][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_set$1][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_set$1][$followedBy](other);
      }
      forEach(f) {
        return this[_set$1][$forEach](f);
      }
      get isEmpty() {
        return this[_set$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_set$1][$isNotEmpty];
      }
      get iterator() {
        return this[_set$1].iterator;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_set$1][$join](separator);
      }
      get last() {
        return this[_set$1][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$1][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_set$1][$map](T, f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_set$1][$reduce](combine);
      }
      get single() {
        return this[_set$1][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_set$1][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_set$1][$skip](count);
      }
      skipWhile(test) {
        return this[_set$1][$skipWhile](test);
      }
      take(count) {
        return this[_set$1][$take](count);
      }
      takeWhile(test) {
        return this[_set$1][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_set$1][$toList]({growable: growable});
      }
      toSet() {
        return this[_set$1].toSet();
      }
      where(test) {
        return this[_set$1][$where](test);
      }
      whereType(T) {
        return this[_set$1][$whereType](T);
      }
      add(value) {
        E.as(value);
        this[_maybeCopyBeforeWrite]();
        return this[_set$1].add(value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite]();
        this[_set$1].addAll(iterable);
      }
      clear() {
        this[_maybeCopyBeforeWrite]();
        this[_set$1].clear();
      }
      remove(value) {
        this[_maybeCopyBeforeWrite]();
        return this[_set$1].remove(value);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set$1].removeWhere(test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite]();
        this[_set$1].retainWhere(test);
      }
      removeAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set$1].removeAll(elements);
      }
      retainAll(elements) {
        this[_maybeCopyBeforeWrite]();
        this[_set$1].retainAll(elements);
      }
      toString() {
        return this[_set$1][$toString]();
      }
      [_maybeCopyBeforeWrite]() {
        let t5;
        if (!this[_copyBeforeWrite]) return;
        this[_copyBeforeWrite] = false;
        this[_set$1] = this[_setFactory$0] != null ? (t5 = dart.nullCheck(this[_setFactory$0])(), (() => {
          t5.addAll(this[_set$1]);
          return t5;
        })()) : __t$LinkedHashSetOfE().from(this[_set$1]);
      }
    }
    (CopyOnWriteSet.new = function(_set, _setFactory = null) {
      this[_set$1] = _set;
      this[_setFactory$0] = _setFactory;
      this[_copyBeforeWrite] = true;
      ;
    }).prototype = CopyOnWriteSet.prototype;
    dart.addTypeTests(CopyOnWriteSet);
    CopyOnWriteSet.prototype[_is_CopyOnWriteSet_default] = true;
    dart.addTypeCaches(CopyOnWriteSet);
    CopyOnWriteSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getMethods(CopyOnWriteSet.__proto__),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      union: dart.fnType(core.Set$(E), [dart.nullable(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      [_maybeCopyBeforeWrite]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getGetters(CopyOnWriteSet.__proto__),
      length: core.int,
      [$length]: core.int,
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(CopyOnWriteSet, I[4]);
    dart.setFieldSignature(CopyOnWriteSet, () => ({
      __proto__: dart.getFields(CopyOnWriteSet.__proto__),
      [_setFactory$0]: dart.finalFieldType(dart.nullable(dart.fnType(core.Set$(E), []))),
      [_copyBeforeWrite]: dart.fieldType(core.bool),
      [_set$1]: dart.fieldType(core.Set$(E))
    }));
    dart.defineExtensionMethods(CopyOnWriteSet, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteSet, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'single'
    ]);
    return CopyOnWriteSet;
  });
  copy_on_write_set.CopyOnWriteSet = copy_on_write_set.CopyOnWriteSet$();
  dart.addTypeTests(copy_on_write_set.CopyOnWriteSet, _is_CopyOnWriteSet_default);
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), T.intAnddynamicToint())));
  };
  hash.hash2 = function hash2(a, b) {
    return hash._finish(hash._combine(hash._combine(0, dart.hashCode(a)), dart.hashCode(b)));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & hash + value;
    hash = 536870911 & hash + ((524287 & hash) << 10);
    return (hash ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & hash + ((67108863 & hash) << 3);
    hash = (hash ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & hash + ((16383 & hash) << 15);
  };
  var _overridenHashCode$0 = dart.privateName(list, "_overridenHashCode");
  var _maybeCheckForNull$ = dart.privateName(list, "_maybeCheckForNull");
  var _needsNullCheck$ = dart.privateName(list, "_needsNullCheck");
  var _list$ = dart.privateName(list, "_list");
  var _hashCode$ = dart.privateName(list, "_hashCode");
  const _is_BuiltList_default = Symbol('_is_BuiltList_default');
  list.BuiltList$ = dart.generic(E => {
    var __t$ListBuilderOfE = () => (__t$ListBuilderOfE = dart.constFn(list.ListBuilder$(E)))();
    var __t$BuiltSetOfE = () => (__t$BuiltSetOfE = dart.constFn(set.BuiltSet$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$BuiltListOfE = () => (__t$BuiltListOfE = dart.constFn(list.BuiltList$(E)))();
    var __t$_BuiltListOfE = () => (__t$_BuiltListOfE = dart.constFn(list._BuiltList$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$CopyOnWriteListOfE = () => (__t$CopyOnWriteListOfE = dart.constFn(copy_on_write_list.CopyOnWriteList$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    class BuiltList extends core.Object {
      static new(iterable = C[0] || CT.C0) {
        return list.BuiltList$(E).from(iterable);
      }
      static from(iterable) {
        if (list._BuiltList.is(iterable) && iterable.hasExactElementType(dart.wrapType(E))) {
          return list.BuiltList$(E).as(iterable);
        } else {
          return new (list._BuiltList$(E)).from(iterable);
        }
      }
      static of(iterable) {
        if (list._BuiltList$(E).is(iterable) && iterable.hasExactElementType(dart.wrapType(E))) {
          return iterable;
        } else {
          return new (list._BuiltList$(E)).of(iterable);
        }
      }
      static build(updates) {
        let t5;
        return (t5 = list.ListBuilder$(E).new(), (() => {
          t5.update(updates);
          return t5;
        })()).build();
      }
      toBuilder() {
        return __t$ListBuilderOfE().new(this);
      }
      rebuild(updates) {
        let t5;
        return (t5 = this.toBuilder(), (() => {
          t5.update(updates);
          return t5;
        })()).build();
      }
      toBuiltList() {
        return this;
      }
      toBuiltSet() {
        return __t$BuiltSetOfE().new(this);
      }
      get hashCode() {
        this[_hashCode$] == null ? this[_hashCode$] = hash.hashObjects(this[_list$]) : null;
        return dart.nullCheck(this[_hashCode$]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!list.BuiltList.is(other)) return false;
        if (other.length !== this.length) return false;
        if (other.hashCode !== this.hashCode) return false;
        for (let i = 0; i !== this.length; i = i + 1) {
          if (!dart.equals(other._get(i), this._get(i))) return false;
        }
        return true;
      }
      toString() {
        return this[_list$][$toString]();
      }
      asList() {
        return __t$ListOfE().unmodifiable(this[_list$]);
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      ['+'](other) {
        __t$BuiltListOfE().as(other);
        return new (__t$_BuiltListOfE()).withSafeList(this[_list$][$plus](other[_list$]));
      }
      get length() {
        return this[_list$][$length];
      }
      get reversed() {
        return this[_list$][$reversed];
      }
      indexOf(element, start = 0) {
        E.as(element);
        return this[_list$][$indexOf](element, start);
      }
      lastIndexOf(element, start = null) {
        E.as(element);
        return this[_list$][$lastIndexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_list$][$indexWhere](test, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_list$][$lastIndexWhere](test, start);
      }
      sublist(start, end = null) {
        return new (__t$_BuiltListOfE()).withSafeList(this[_list$][$sublist](start, end));
      }
      getRange(start, end) {
        return this[_list$][$getRange](start, end);
      }
      asMap() {
        return this[_list$][$asMap]();
      }
      get iterator() {
        return this[_list$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      map(T, f) {
        return this[_list$][$map](T, f);
      }
      where(test) {
        return this[_list$][$where](test);
      }
      whereType(T) {
        return this[_list$][$whereType](T);
      }
      expand(T, f) {
        return this[_list$][$expand](T, f);
      }
      contains(element) {
        return this[_list$][$contains](element);
      }
      forEach(f) {
        return this[_list$][$forEach](f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_list$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_list$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_list$][$followedBy](other);
      }
      every(test) {
        return this[_list$][$every](test);
      }
      join(separator = "") {
        return this[_list$][$join](separator);
      }
      any(test) {
        return this[_list$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return new (__t$CopyOnWriteListOfE()).new(this[_list$], growable);
      }
      toSet() {
        return this[_list$][$toSet]();
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      take(n) {
        return this[_list$][$take](n);
      }
      takeWhile(test) {
        return this[_list$][$takeWhile](test);
      }
      skip(n) {
        return this[_list$][$skip](n);
      }
      skipWhile(test) {
        return this[_list$][$skipWhile](test);
      }
      get first() {
        return this[_list$][$first];
      }
      get last() {
        return this[_list$][$last];
      }
      get single() {
        return this[_list$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$][$lastWhere](test, {orElse: orElse});
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$][$singleWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_list$][$elementAt](index);
      }
      cast(T) {
        return core.Iterable.castFrom(E, T, this[_list$]);
      }
    }
    (BuiltList.__ = function(_list) {
      this[_hashCode$] = null;
      this[_list$] = _list;
      ;
    }).prototype = BuiltList.prototype;
    BuiltList.prototype[dart.isIterable] = true;
    dart.addTypeTests(BuiltList);
    BuiltList.prototype[_is_BuiltList_default] = true;
    dart.addTypeCaches(BuiltList);
    BuiltList[dart.implements] = () => [core.Iterable$(E), iterable$.BuiltIterable$(E)];
    dart.setMethodSignature(BuiltList, () => ({
      __proto__: dart.getMethods(BuiltList.__proto__),
      toBuilder: dart.fnType(list.ListBuilder$(E), []),
      rebuild: dart.fnType(list.BuiltList$(E), [dart.fnType(dart.dynamic, [list.ListBuilder$(E)])]),
      toBuiltList: dart.fnType(list.BuiltList$(E), []),
      toBuiltSet: dart.fnType(set.BuiltSet$(E), []),
      asList: dart.fnType(core.List$(E), []),
      _get: dart.fnType(E, [core.int]),
      '+': dart.fnType(list.BuiltList$(E), [dart.nullable(core.Object)]),
      indexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      lastIndexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      sublist: dart.fnType(list.BuiltList$(E), [core.int], [dart.nullable(core.int)]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      cast: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(BuiltList, () => ({
      __proto__: dart.getGetters(BuiltList.__proto__),
      length: core.int,
      [$length]: core.int,
      reversed: core.Iterable$(E),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(BuiltList, I[5]);
    dart.setFieldSignature(BuiltList, () => ({
      __proto__: dart.getFields(BuiltList.__proto__),
      [_list$]: dart.finalFieldType(core.List$(E)),
      [_hashCode$]: dart.fieldType(dart.nullable(core.int))
    }));
    dart.defineExtensionMethods(BuiltList, [
      '_equals',
      'toString',
      'map',
      'where',
      'whereType',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'followedBy',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'singleWhere',
      'elementAt',
      'cast'
    ]);
    dart.defineExtensionAccessors(BuiltList, [
      'hashCode',
      'length',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single'
    ]);
    return BuiltList;
  });
  list.BuiltList = list.BuiltList$();
  dart.addTypeTests(list.BuiltList, _is_BuiltList_default);
  const _is__BuiltList_default = Symbol('_is__BuiltList_default');
  list._BuiltList$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    class _BuiltList extends list.BuiltList$(E) {
      get [_needsNullCheck$]() {
        return !null_safety.isSoundMode && !E.is(null);
      }
      [_maybeCheckForNull$]() {
        if (!this[_needsNullCheck$]) return;
        for (let element of this[_list$]) {
          if (element == null) {
            dart.throw(new core.ArgumentError.new("iterable contained invalid element: null"));
          }
        }
      }
      hasExactElementType(type) {
        return dart.wrapType(E)._equals(type);
      }
    }
    (_BuiltList.withSafeList = function(list) {
      _BuiltList.__proto__.__.call(this, list);
      ;
    }).prototype = _BuiltList.prototype;
    dart.defineValue(_BuiltList, 'from', function(iterable = C[0] || CT.C0) {
      _BuiltList.__proto__.__.call(this, __t$ListOfE().from(iterable, {growable: false}));
      this[_maybeCheckForNull$]();
    }).prototype = _BuiltList.prototype;
    dart.defineValue(_BuiltList, 'of', function(iterable) {
      _BuiltList.__proto__.__.call(this, __t$ListOfE().from(iterable, {growable: false}));
      this[_maybeCheckForNull$]();
    }).prototype = _BuiltList.prototype;
    dart.addTypeTests(_BuiltList);
    _BuiltList.prototype[_is__BuiltList_default] = true;
    dart.addTypeCaches(_BuiltList);
    dart.setMethodSignature(_BuiltList, () => ({
      __proto__: dart.getMethods(_BuiltList.__proto__),
      [_maybeCheckForNull$]: dart.fnType(dart.void, []),
      hasExactElementType: dart.fnType(core.bool, [core.Type])
    }));
    dart.setGetterSignature(_BuiltList, () => ({
      __proto__: dart.getGetters(_BuiltList.__proto__),
      [_needsNullCheck$]: core.bool
    }));
    dart.setLibraryUri(_BuiltList, I[5]);
    return _BuiltList;
  });
  list._BuiltList = list._BuiltList$();
  dart.addTypeTests(list._BuiltList, _is__BuiltList_default);
  const _is_OverriddenHashcodeBuiltList_default = Symbol('_is_OverriddenHashcodeBuiltList_default');
  list.OverriddenHashcodeBuiltList$ = dart.generic(T => {
    class OverriddenHashcodeBuiltList extends list._BuiltList$(T) {
      get hashCode() {
        return this[_overridenHashCode$0];
      }
    }
    (OverriddenHashcodeBuiltList.new = function(iterable, _overridenHashCode) {
      this[_overridenHashCode$0] = _overridenHashCode;
      OverriddenHashcodeBuiltList.__proto__.from.call(this, iterable);
      ;
    }).prototype = OverriddenHashcodeBuiltList.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltList);
    OverriddenHashcodeBuiltList.prototype[_is_OverriddenHashcodeBuiltList_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltList);
    dart.setLibraryUri(OverriddenHashcodeBuiltList, I[5]);
    dart.setFieldSignature(OverriddenHashcodeBuiltList, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltList.__proto__),
      [_overridenHashCode$0]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltList, ['hashCode']);
    return OverriddenHashcodeBuiltList;
  });
  list.OverriddenHashcodeBuiltList = list.OverriddenHashcodeBuiltList$();
  dart.addTypeTests(list.OverriddenHashcodeBuiltList, _is_OverriddenHashcodeBuiltList_default);
  var __ListBuilder__list = dart.privateName(list, "_#ListBuilder#_list");
  var _listOwner = dart.privateName(list, "_listOwner");
  var _setOwner$ = dart.privateName(list, "_setOwner");
  var _setSafeList = dart.privateName(list, "_setSafeList");
  var _maybeCheckElement$ = dart.privateName(list, "_maybeCheckElement");
  var _safeList = dart.privateName(list, "_safeList");
  var _checkElement$ = dart.privateName(list, "_checkElement");
  var _maybeCheckElements$ = dart.privateName(list, "_maybeCheckElements");
  const _is_ListBuilder_default = Symbol('_is_ListBuilder_default');
  list.ListBuilder$ = dart.generic(E => {
    var __t$_BuiltListOfE = () => (__t$_BuiltListOfE = dart.constFn(list._BuiltList$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EToE = () => (__t$EToE = dart.constFn(dart.fnType(E, [E])))();
    var __t$EToIterableOfE = () => (__t$EToIterableOfE = dart.constFn(dart.fnType(__t$IterableOfE(), [E])))();
    class ListBuilder extends core.Object {
      set [_list$](t5) {
        this[__ListBuilder__list] = t5;
      }
      get [_list$]() {
        let t6;
        t6 = this[__ListBuilder__list];
        return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_list")) : t6;
      }
      static new(iterable = C[0] || CT.C0) {
        let t6;
        t6 = new (list.ListBuilder$(E))._uninitialized();
        return (() => {
          t6.replace(iterable);
          return t6;
        })();
      }
      build() {
        if (this[_listOwner] == null) {
          this[_setOwner$](new (__t$_BuiltListOfE()).withSafeList(this[_list$]));
        }
        return dart.nullCheck(this[_listOwner]);
      }
      update(updates) {
        updates(this);
      }
      replace(iterable) {
        if (__t$_BuiltListOfE().is(iterable)) {
          this[_setOwner$](iterable);
        } else {
          this[_setSafeList](__t$ListOfE().from(iterable));
        }
      }
      _get(index) {
        return this[_list$][$_get](index);
      }
      _set(index, element$) {
        let element = element$;
        E.as(element);
        this[_maybeCheckElement$](element);
        this[_safeList][$_set](index, element);
        return element$;
      }
      get first() {
        return this[_list$][$first];
      }
      set first(value) {
        E.as(value);
        this[_maybeCheckElement$](value);
        this[_safeList][$first] = value;
      }
      get last() {
        return this[_list$][$last];
      }
      set last(value) {
        E.as(value);
        this[_maybeCheckElement$](value);
        this[_safeList][$last] = value;
      }
      get length() {
        return this[_list$][$length];
      }
      get isEmpty() {
        return this[_list$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$][$isNotEmpty];
      }
      add(value) {
        E.as(value);
        this[_maybeCheckElement$](value);
        this[_safeList][$add](value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$addAll](iterable);
        if (!this[_needsNullCheck$]) return;
        try {
          for (let i = lengthBefore; i !== safeList[$length]; i = i + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            safeList[$removeRange](lengthBefore, safeList[$length]);
            dart.rethrow(e);
          } else
            throw e;
        }
      }
      reverse() {
        this[_list$] = this[_list$][$reversed][$toList]({growable: true});
        this[_listOwner] = null;
      }
      sort(compare = null) {
        this[_safeList][$sort](compare);
      }
      shuffle(random = null) {
        this[_safeList][$shuffle](random);
      }
      clear() {
        this[_safeList][$clear]();
      }
      insert(index, element) {
        E.as(element);
        this[_maybeCheckElement$](element);
        this[_safeList][$insert](index, element);
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        let safeList = this[_safeList];
        let lengthBefore = safeList[$length];
        safeList[$insertAll](index, iterable);
        if (!this[_needsNullCheck$]) return;
        let insertedLength = safeList[$length] - lengthBefore;
        try {
          for (let i = index; i !== index + insertedLength; i = i + 1) {
            this[_checkElement$](safeList[$_get](i));
          }
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            safeList[$removeRange](index, index + insertedLength);
            dart.rethrow(e);
          } else
            throw e;
        }
      }
      setAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_maybeCheckElements$](iterable);
        this[_safeList][$setAll](index, iterable);
      }
      remove(value) {
        return this[_safeList][$remove](value);
      }
      removeAt(index) {
        return this[_safeList][$removeAt](index);
      }
      removeLast() {
        return this[_safeList][$removeLast]();
      }
      removeWhere(test) {
        this[_safeList][$removeWhere](test);
      }
      retainWhere(test) {
        this[_safeList][$retainWhere](test);
      }
      sublist(start, end = null) {
        this[_setSafeList](this[_list$][$sublist](start, end));
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_maybeCheckElements$](iterable);
        this[_safeList][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_safeList][$removeRange](start, end);
      }
      fillRange(start, end, fillValue) {
        E.as(fillValue);
        this[_maybeCheckElement$](fillValue);
        this[_safeList][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        __t$IterableOfE().as(iterable);
        iterable = iterables.evaluateIterable(E, iterable);
        this[_maybeCheckElements$](iterable);
        this[_safeList][$replaceRange](start, end, iterable);
      }
      map(f) {
        __t$EToE().as(f);
        let result = this[_list$][$map](E, f)[$toList]({growable: true});
        this[_maybeCheckElements$](result);
        this[_setSafeList](result);
      }
      where(test) {
        return this.retainWhere(test);
      }
      expand(f) {
        __t$EToIterableOfE().as(f);
        let result = this[_list$][$expand](E, f)[$toList]({growable: true});
        this[_maybeCheckElements$](result);
        this[_setSafeList](result);
      }
      take(n) {
        this[_setSafeList](this[_list$][$take](n)[$toList]({growable: true}));
      }
      takeWhile(test) {
        this[_setSafeList](this[_list$][$takeWhile](test)[$toList]({growable: true}));
      }
      skip(n) {
        this[_setSafeList](this[_list$][$skip](n)[$toList]({growable: true}));
      }
      skipWhile(test) {
        this[_setSafeList](this[_list$][$skipWhile](test)[$toList]({growable: true}));
      }
      [_setOwner$](listOwner) {
        this[_list$] = listOwner[_list$];
        this[_listOwner] = listOwner;
      }
      [_setSafeList](list) {
        this[_list$] = list;
        this[_listOwner] = null;
      }
      get [_safeList]() {
        if (this[_listOwner] != null) {
          this[_setSafeList](__t$ListOfE().from(this[_list$], {growable: true}));
        }
        return this[_list$];
      }
      get [_needsNullCheck$]() {
        return !null_safety.isSoundMode && !E.is(null);
      }
      [_maybeCheckElement$](element) {
        if (this[_needsNullCheck$]) this[_checkElement$](element);
      }
      [_checkElement$](element) {
        if (element == null) {
          dart.throw(new core.ArgumentError.new("null element"));
        }
      }
      [_maybeCheckElements$](elements) {
        if (!this[_needsNullCheck$]) return;
        for (let element of elements) {
          this[_checkElement$](element);
        }
      }
    }
    (ListBuilder._uninitialized = function() {
      this[__ListBuilder__list] = null;
      this[_listOwner] = null;
      ;
    }).prototype = ListBuilder.prototype;
    dart.addTypeTests(ListBuilder);
    ListBuilder.prototype[_is_ListBuilder_default] = true;
    dart.addTypeCaches(ListBuilder);
    dart.setMethodSignature(ListBuilder, () => ({
      __proto__: dart.getMethods(ListBuilder.__proto__),
      build: dart.fnType(list.BuiltList$(E), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [list.ListBuilder$(E)])]),
      replace: dart.fnType(dart.void, [core.Iterable]),
      _get: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      reverse: dart.fnType(dart.void, []),
      sort: dart.fnType(dart.void, [], [dart.nullable(dart.fnType(core.int, [E, E]))]),
      shuffle: dart.fnType(dart.void, [], [dart.nullable(math.Random)]),
      clear: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      setAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAt: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      sublist: dart.fnType(dart.void, [core.int], [dart.nullable(core.int)]),
      setRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)], [core.int]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      map: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      where: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      expand: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      take: dart.fnType(dart.void, [core.int]),
      takeWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      skip: dart.fnType(dart.void, [core.int]),
      skipWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [_setOwner$]: dart.fnType(dart.void, [list._BuiltList$(E)]),
      [_setSafeList]: dart.fnType(dart.void, [core.List$(E)]),
      [_maybeCheckElement$]: dart.fnType(dart.void, [E]),
      [_checkElement$]: dart.fnType(dart.void, [E]),
      [_maybeCheckElements$]: dart.fnType(dart.void, [core.Iterable$(E)])
    }));
    dart.setGetterSignature(ListBuilder, () => ({
      __proto__: dart.getGetters(ListBuilder.__proto__),
      [_list$]: core.List$(E),
      first: E,
      last: E,
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeList]: core.List$(E),
      [_needsNullCheck$]: core.bool
    }));
    dart.setSetterSignature(ListBuilder, () => ({
      __proto__: dart.getSetters(ListBuilder.__proto__),
      [_list$]: core.List$(E),
      first: dart.nullable(core.Object),
      last: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ListBuilder, I[5]);
    dart.setFieldSignature(ListBuilder, () => ({
      __proto__: dart.getFields(ListBuilder.__proto__),
      [__ListBuilder__list]: dart.fieldType(dart.nullable(core.List$(E))),
      [_listOwner]: dart.fieldType(dart.nullable(list._BuiltList$(E)))
    }));
    return ListBuilder;
  });
  list.ListBuilder = list.ListBuilder$();
  dart.addTypeTests(list.ListBuilder, _is_ListBuilder_default);
  list['BuiltListExtension|build'] = function BuiltListExtension$124build(T, $this) {
    return new (list._BuiltList$(T)).of($this);
  };
  list['BuiltListExtension|get#build'] = function BuiltListExtension$124get$35build(T, $this) {
    return dart.fn(() => list['BuiltListExtension|build'](T, $this), dart.fnType(list.BuiltList$(T), []));
  };
  list['BuiltListIterableExtension|toBuiltList'] = function BuiltListIterableExtension$124toBuiltList(E, $this) {
    return list.BuiltList$(E).of($this);
  };
  list['BuiltListIterableExtension|get#toBuiltList'] = function BuiltListIterableExtension$124get$35toBuiltList(E, $this) {
    return dart.fn(() => list['BuiltListIterableExtension|toBuiltList'](E, $this), dart.fnType(list.BuiltList$(E), []));
  };
  var _list$0 = dart.privateName(copy_on_write_list, "_list");
  var _growable$ = dart.privateName(copy_on_write_list, "_growable");
  var _copyBeforeWrite$ = dart.privateName(copy_on_write_list, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite$ = dart.privateName(copy_on_write_list, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteList_default = Symbol('_is_CopyOnWriteList_default');
  copy_on_write_list.CopyOnWriteList$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    class CopyOnWriteList extends core.Object {
      get length() {
        return this[_list$0][$length];
      }
      _get(index) {
        return this[_list$0][$_get](index);
      }
      ['+'](other) {
        __t$ListOfE().as(other);
        return this[_list$0][$plus](other);
      }
      any(test) {
        return this[_list$0][$any](test);
      }
      asMap() {
        return this[_list$0][$asMap]();
      }
      cast(T) {
        return new (copy_on_write_list.CopyOnWriteList$(T)).new(this[_list$0][$cast](T), this[_growable$]);
      }
      contains(element) {
        return this[_list$0][$contains](element);
      }
      elementAt(index) {
        return this[_list$0][$elementAt](index);
      }
      every(test) {
        return this[_list$0][$every](test);
      }
      expand(T, f) {
        return this[_list$0][$expand](T, f);
      }
      get first() {
        return this[_list$0][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$0][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_list$0][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_list$0][$followedBy](other);
      }
      forEach(f) {
        return this[_list$0][$forEach](f);
      }
      getRange(start, end) {
        return this[_list$0][$getRange](start, end);
      }
      indexOf(element, start = 0) {
        E.as(element);
        return this[_list$0][$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_list$0][$indexWhere](test, start);
      }
      get isEmpty() {
        return this[_list$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list$0][$isNotEmpty];
      }
      get iterator() {
        return this[_list$0][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_list$0][$join](separator);
      }
      get last() {
        return this[_list$0][$last];
      }
      lastIndexOf(element, start = null) {
        E.as(element);
        return this[_list$0][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_list$0][$lastIndexWhere](test, start);
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$0][$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this[_list$0][$map](T, f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_list$0][$reduce](combine);
      }
      get reversed() {
        return this[_list$0][$reversed];
      }
      get single() {
        return this[_list$0][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_list$0][$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this[_list$0][$skip](count);
      }
      skipWhile(test) {
        return this[_list$0][$skipWhile](test);
      }
      sublist(start, end = null) {
        return this[_list$0][$sublist](start, end);
      }
      take(count) {
        return this[_list$0][$take](count);
      }
      takeWhile(test) {
        return this[_list$0][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_list$0][$toList]({growable: growable});
      }
      toSet() {
        return this[_list$0][$toSet]();
      }
      where(test) {
        return this[_list$0][$where](test);
      }
      whereType(T) {
        return this[_list$0][$whereType](T);
      }
      set length(length) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$length] = length;
      }
      _set(index, element$) {
        let element = element$;
        E.as(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$_set](index, element);
        return element$;
      }
      set first(element) {
        E.as(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$first] = element;
      }
      set last(element) {
        E.as(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$last] = element;
      }
      add(value) {
        E.as(value);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$add](value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$addAll](iterable);
      }
      sort(compare = null) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$sort](compare);
      }
      shuffle(random = null) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$shuffle](random);
      }
      clear() {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$clear]();
      }
      insert(index, element) {
        E.as(element);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$insert](index, element);
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$setAll](index, iterable);
      }
      remove(value) {
        this[_maybeCopyBeforeWrite$]();
        return this[_list$0][$remove](value);
      }
      removeAt(index) {
        this[_maybeCopyBeforeWrite$]();
        return this[_list$0][$removeAt](index);
      }
      removeLast() {
        this[_maybeCopyBeforeWrite$]();
        return this[_list$0][$removeLast]();
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$removeWhere](test);
      }
      retainWhere(test) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$removeRange](start, end);
      }
      fillRange(start, end, fillValue = null) {
        __t$EN().as(fillValue);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$fillRange](start, end, fillValue);
      }
      replaceRange(start, end, iterable) {
        __t$IterableOfE().as(iterable);
        this[_maybeCopyBeforeWrite$]();
        this[_list$0][$replaceRange](start, end, iterable);
      }
      toString() {
        return this[_list$0][$toString]();
      }
      [_maybeCopyBeforeWrite$]() {
        if (!this[_copyBeforeWrite$]) return;
        this[_copyBeforeWrite$] = false;
        this[_list$0] = __t$ListOfE().from(this[_list$0], {growable: this[_growable$]});
      }
    }
    (CopyOnWriteList.new = function(_list, _growable) {
      this[_list$0] = _list;
      this[_growable$] = _growable;
      this[_copyBeforeWrite$] = true;
      ;
    }).prototype = CopyOnWriteList.prototype;
    CopyOnWriteList.prototype[dart.isList] = true;
    dart.addTypeTests(CopyOnWriteList);
    CopyOnWriteList.prototype[_is_CopyOnWriteList_default] = true;
    dart.addTypeCaches(CopyOnWriteList);
    CopyOnWriteList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(CopyOnWriteList, () => ({
      __proto__: dart.getMethods(CopyOnWriteList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      '+': dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      [$plus]: dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.List$(T), []], T => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      [$indexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastIndexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      [$lastIndexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      sort: dart.fnType(dart.void, [], [dart.nullable(dart.fnType(core.int, [E, E]))]),
      [$sort]: dart.fnType(dart.void, [], [dart.nullable(dart.fnType(core.int, [E, E]))]),
      shuffle: dart.fnType(dart.void, [], [dart.nullable(math.Random)]),
      [$shuffle]: dart.fnType(dart.void, [], [dart.nullable(math.Random)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      insert: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insert]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      setAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      setRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)], [core.int]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [dart.nullable(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [dart.nullable(core.Object)]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      [_maybeCopyBeforeWrite$]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getGetters(CopyOnWriteList.__proto__),
      length: core.int,
      [$length]: core.int,
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E),
      single: E,
      [$single]: E
    }));
    dart.setSetterSignature(CopyOnWriteList, () => ({
      __proto__: dart.getSetters(CopyOnWriteList.__proto__),
      length: core.int,
      [$length]: core.int,
      first: dart.nullable(core.Object),
      [$first]: dart.nullable(core.Object),
      last: dart.nullable(core.Object),
      [$last]: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(CopyOnWriteList, I[6]);
    dart.setFieldSignature(CopyOnWriteList, () => ({
      __proto__: dart.getFields(CopyOnWriteList.__proto__),
      [_copyBeforeWrite$]: dart.fieldType(core.bool),
      [_growable$]: dart.finalFieldType(core.bool),
      [_list$0]: dart.fieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CopyOnWriteList, [
      '_get',
      '+',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      '_set',
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange',
      'toString'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteList, [
      'length',
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'reversed',
      'single'
    ]);
    return CopyOnWriteList;
  });
  copy_on_write_list.CopyOnWriteList = copy_on_write_list.CopyOnWriteList$();
  dart.addTypeTests(copy_on_write_list.CopyOnWriteList, _is_CopyOnWriteList_default);
  var _overridenHashCode$1 = dart.privateName(set_multimap, "_overridenHashCode");
  var _map$ = dart.privateName(set_multimap, "_map");
  var _emptySet = dart.privateName(set_multimap, "_emptySet");
  var _hashCode$0 = dart.privateName(set_multimap, "_hashCode");
  var _keys = dart.privateName(set_multimap, "_keys");
  var _values = dart.privateName(set_multimap, "_values");
  const _is_BuiltSetMultimap_default = Symbol('_is_BuiltSetMultimap_default');
  set_multimap.BuiltSetMultimap$ = dart.generic((K, V) => {
    var __t$SetMultimapBuilderOfK$V = () => (__t$SetMultimapBuilderOfK$V = dart.constFn(set_multimap.SetMultimapBuilder$(K, V)))();
    var __t$CopyOnWriteMapOfK$BuiltSetOfV = () => (__t$CopyOnWriteMapOfK$BuiltSetOfV = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, __t$BuiltSetOfV())))();
    var __t$KToint = () => (__t$KToint = dart.constFn(dart.fnType(core.int, [K])))();
    var __t$MapOfK$IterableOfV = () => (__t$MapOfK$IterableOfV = dart.constFn(core.Map$(K, __t$IterableOfV())))();
    var __t$KAndBuiltSetOfVTovoid = () => (__t$KAndBuiltSetOfVTovoid = dart.constFn(dart.fnType(dart.void, [K, __t$BuiltSetOfV()])))();
    var __t$BuiltSetOfV = () => (__t$BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    var __t$IterableOfV = () => (__t$IterableOfV = dart.constFn(core.Iterable$(V)))();
    var __t$VTovoid = () => (__t$VTovoid = dart.constFn(dart.fnType(dart.void, [V])))();
    var __t$BuiltSetOfVToBuiltSetOfV = () => (__t$BuiltSetOfVToBuiltSetOfV = dart.constFn(dart.fnType(__t$BuiltSetOfV(), [__t$BuiltSetOfV()])))();
    class BuiltSetMultimap extends core.Object {
      static new(multimap = C[1] || CT.C1) {
        if (set_multimap._BuiltSetMultimap.is(multimap) && multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V))) {
          return set_multimap.BuiltSetMultimap$(K, V).as(multimap);
        } else if (core.Map.is(multimap)) {
          return new (set_multimap._BuiltSetMultimap$(K, V)).copyAndCheck(multimap[$keys], dart.fn(k => multimap[$_get](k), T.dynamicTodynamic()));
        } else if (set_multimap.BuiltSetMultimap.is(multimap)) {
          return new (set_multimap._BuiltSetMultimap$(K, V)).copyAndCheck(multimap.keys, dart.fn(k => multimap._get(k), T.dynamicToBuiltSetN()));
        } else {
          return new (set_multimap._BuiltSetMultimap$(K, V)).copyAndCheck(core.Iterable.as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), T.dynamicTodynamic()));
        }
      }
      static build(updates) {
        let t12;
        return (t12 = set_multimap.SetMultimapBuilder$(K, V).new(), (() => {
          t12.update(updates);
          return t12;
        })()).build();
      }
      toBuilder() {
        return __t$SetMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        let t12;
        return (t12 = this.toBuilder(), (() => {
          t12.update(updates);
          return t12;
        })()).build();
      }
      toMap() {
        return new (__t$CopyOnWriteMapOfK$BuiltSetOfV()).new(this[_map$]);
      }
      get hashCode() {
        let t12;
        this[_hashCode$0] == null ? this[_hashCode$0] = hash.hashObjects((t12 = this[_map$][$keys][$map](core.int, dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$][$_get](key))), __t$KToint()))[$toList]({growable: false}), (() => {
          t12[$sort]();
          return t12;
        })())) : null;
        return dart.nullCheck(this[_hashCode$0]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!set_multimap.BuiltSetMultimap.is(other)) return false;
        if (other.length !== this.length) return false;
        if (other.hashCode !== this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(other._get(key), this._get(key))) return false;
        }
        return true;
      }
      asMap() {
        return __t$MapOfK$IterableOfV().unmodifiable(this[_map$]);
      }
      toString() {
        return this[_map$][$toString]();
      }
      _get(key) {
        let result = this[_map$][$_get](key);
        return result == null ? this[_emptySet] : result;
      }
      containsKey(key) {
        return this[_map$][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, __t$VTovoid()));
        }, __t$KAndBuiltSetOfVTovoid()));
      }
      forEachKey(f) {
        this[_map$][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, __t$KAndBuiltSetOfVTovoid()));
      }
      get isEmpty() {
        return this[_map$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$][$isNotEmpty];
      }
      get keys() {
        this[_keys] == null ? this[_keys] = this[_map$][$keys] : null;
        return dart.nullCheck(this[_keys]);
      }
      get length() {
        return this[_map$][$length];
      }
      get values() {
        this[_values] == null ? this[_values] = this[_map$][$values][$expand](V, dart.fn(x => x, __t$BuiltSetOfVToBuiltSetOfV())) : null;
        return dart.nullCheck(this[_values]);
      }
    }
    (BuiltSetMultimap.__ = function(_map) {
      this[_emptySet] = __t$BuiltSetOfV().new();
      this[_hashCode$0] = null;
      this[_keys] = null;
      this[_values] = null;
      this[_map$] = _map;
      ;
    }).prototype = BuiltSetMultimap.prototype;
    dart.addTypeTests(BuiltSetMultimap);
    BuiltSetMultimap.prototype[_is_BuiltSetMultimap_default] = true;
    dart.addTypeCaches(BuiltSetMultimap);
    dart.setMethodSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(BuiltSetMultimap.__proto__),
      toBuilder: dart.fnType(set_multimap.SetMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(set_multimap.BuiltSetMultimap$(K, V), [dart.fnType(dart.dynamic, [set_multimap.SetMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core.Map$(K, set.BuiltSet$(V)), []),
      asMap: dart.fnType(core.Map$(K, core.Iterable$(V)), []),
      _get: dart.fnType(dart.nullable(set.BuiltSet$(V)), [dart.nullable(core.Object)]),
      containsKey: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      containsValue: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getGetters(BuiltSetMultimap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V)
    }));
    dart.setLibraryUri(BuiltSetMultimap, I[7]);
    dart.setFieldSignature(BuiltSetMultimap, () => ({
      __proto__: dart.getFields(BuiltSetMultimap.__proto__),
      [_map$]: dart.finalFieldType(core.Map$(K, set.BuiltSet$(V))),
      [_emptySet]: dart.finalFieldType(set.BuiltSet$(V)),
      [_hashCode$0]: dart.fieldType(dart.nullable(core.int)),
      [_keys]: dart.fieldType(dart.nullable(core.Iterable$(K))),
      [_values]: dart.fieldType(dart.nullable(core.Iterable$(V)))
    }));
    dart.defineExtensionMethods(BuiltSetMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltSetMultimap, ['hashCode']);
    return BuiltSetMultimap;
  });
  set_multimap.BuiltSetMultimap = set_multimap.BuiltSetMultimap$();
  dart.addTypeTests(set_multimap.BuiltSetMultimap, _is_BuiltSetMultimap_default);
  const _is__BuiltSetMultimap_default = Symbol('_is__BuiltSetMultimap_default');
  set_multimap._BuiltSetMultimap$ = dart.generic((K, V) => {
    var __t$LinkedMapOfK$BuiltSetOfV = () => (__t$LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$BuiltSetOfV())))();
    var __t$BuiltSetOfV = () => (__t$BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    class _BuiltSetMultimap extends set_multimap.BuiltSetMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)._equals(key) && dart.wrapType(V)._equals(value);
      }
    }
    (_BuiltSetMultimap.withSafeMap = function(map) {
      _BuiltSetMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltSetMultimap.prototype;
    (_BuiltSetMultimap.copyAndCheck = function(keys, lookup) {
      _BuiltSetMultimap.__proto__.__.call(this, new (__t$LinkedMapOfK$BuiltSetOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$][$_set](key, __t$BuiltSetOfV().new(core.Iterable.as(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltSetMultimap.prototype;
    dart.addTypeTests(_BuiltSetMultimap);
    _BuiltSetMultimap.prototype[_is__BuiltSetMultimap_default] = true;
    dart.addTypeCaches(_BuiltSetMultimap);
    dart.setMethodSignature(_BuiltSetMultimap, () => ({
      __proto__: dart.getMethods(_BuiltSetMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltSetMultimap, I[7]);
    return _BuiltSetMultimap;
  });
  set_multimap._BuiltSetMultimap = set_multimap._BuiltSetMultimap$();
  dart.addTypeTests(set_multimap._BuiltSetMultimap, _is__BuiltSetMultimap_default);
  const _is_OverriddenHashcodeBuiltSetMultimap_default = Symbol('_is_OverriddenHashcodeBuiltSetMultimap_default');
  set_multimap.OverriddenHashcodeBuiltSetMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltSetMultimap extends set_multimap._BuiltSetMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$1];
      }
    }
    (OverriddenHashcodeBuiltSetMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$1] = _overridenHashCode;
      OverriddenHashcodeBuiltSetMultimap.__proto__.copyAndCheck.call(this, core.Iterable.as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), T.dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltSetMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltSetMultimap);
    OverriddenHashcodeBuiltSetMultimap.prototype[_is_OverriddenHashcodeBuiltSetMultimap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltSetMultimap);
    dart.setLibraryUri(OverriddenHashcodeBuiltSetMultimap, I[7]);
    dart.setFieldSignature(OverriddenHashcodeBuiltSetMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltSetMultimap.__proto__),
      [_overridenHashCode$1]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltSetMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltSetMultimap;
  });
  set_multimap.OverriddenHashcodeBuiltSetMultimap = set_multimap.OverriddenHashcodeBuiltSetMultimap$();
  dart.addTypeTests(set_multimap.OverriddenHashcodeBuiltSetMultimap, _is_OverriddenHashcodeBuiltSetMultimap_default);
  var __SetMultimapBuilder__builtMap = dart.privateName(set_multimap, "_#SetMultimapBuilder#_builtMap");
  var _builtMapOwner = dart.privateName(set_multimap, "_builtMapOwner");
  var __SetMultimapBuilder__builderMap = dart.privateName(set_multimap, "_#SetMultimapBuilder#_builderMap");
  var _builtMap = dart.privateName(set_multimap, "_builtMap");
  var _builderMap = dart.privateName(set_multimap, "_builderMap");
  var _setOwner$0 = dart.privateName(set_multimap, "_setOwner");
  var _setWithCopyAndCheck = dart.privateName(set_multimap, "_setWithCopyAndCheck");
  var _makeWriteableCopy = dart.privateName(set_multimap, "_makeWriteableCopy");
  var _checkKey = dart.privateName(set_multimap, "_checkKey");
  var _checkValue = dart.privateName(set_multimap, "_checkValue");
  var _getValuesBuilder = dart.privateName(set_multimap, "_getValuesBuilder");
  const _is_SetMultimapBuilder_default = Symbol('_is_SetMultimapBuilder_default');
  set_multimap.SetMultimapBuilder$ = dart.generic((K, V) => {
    var __t$_BuiltSetMultimapOfK$V = () => (__t$_BuiltSetMultimapOfK$V = dart.constFn(set_multimap._BuiltSetMultimap$(K, V)))();
    var __t$LinkedHashMapOfK$BuiltSetOfV = () => (__t$LinkedHashMapOfK$BuiltSetOfV = dart.constFn(collection.LinkedHashMap$(K, __t$BuiltSetOfV())))();
    var __t$LinkedMapOfK$SetBuilderOfV = () => (__t$LinkedMapOfK$SetBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$SetBuilderOfV())))();
    var __t$LinkedMapOfK$BuiltSetOfV = () => (__t$LinkedMapOfK$BuiltSetOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$BuiltSetOfV())))();
    var __t$IterableOfV = () => (__t$IterableOfV = dart.constFn(core.Iterable$(V)))();
    var __t$VTovoid = () => (__t$VTovoid = dart.constFn(dart.fnType(dart.void, [V])))();
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    var __t$SetBuilderOfV = () => (__t$SetBuilderOfV = dart.constFn(set.SetBuilder$(V)))();
    var __t$BuiltSetOfV = () => (__t$BuiltSetOfV = dart.constFn(set.BuiltSet$(V)))();
    class SetMultimapBuilder extends core.Object {
      get [_builtMap]() {
        let t12;
        t12 = this[__SetMultimapBuilder__builtMap];
        return t12 == null ? dart.throw(new _internal.LateError.fieldNI("_builtMap")) : t12;
      }
      set [_builtMap](t12) {
        this[__SetMultimapBuilder__builtMap] = t12;
      }
      get [_builderMap]() {
        let t13;
        t13 = this[__SetMultimapBuilder__builderMap];
        return t13 == null ? dart.throw(new _internal.LateError.fieldNI("_builderMap")) : t13;
      }
      set [_builderMap](t13) {
        this[__SetMultimapBuilder__builderMap] = t13;
      }
      static new(multimap = C[1] || CT.C1) {
        let t14;
        t14 = new (set_multimap.SetMultimapBuilder$(K, V))._uninitialized();
        return (() => {
          t14.replace(multimap);
          return t14;
        })();
      }
      build() {
        if (this[_builtMapOwner] == null) {
          for (let key of this[_builderMap][$keys]) {
            let builtSet = dart.nullCheck(this[_builderMap][$_get](key)).build();
            if (builtSet.isEmpty) {
              this[_builtMap][$remove](key);
            } else {
              this[_builtMap][$_set](key, builtSet);
            }
          }
          this[_builtMapOwner] = new (__t$_BuiltSetMultimapOfK$V()).withSafeMap(this[_builtMap]);
        }
        return dart.nullCheck(this[_builtMapOwner]);
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (__t$_BuiltSetMultimapOfK$V().is(multimap)) {
          this[_setOwner$0](multimap);
        } else if (core.Map.is(multimap)) {
          this[_setWithCopyAndCheck](multimap[$keys], dart.fn(k => multimap[$_get](k), T.dynamicTodynamic()));
        } else if (set_multimap.BuiltSetMultimap.is(multimap)) {
          this[_setWithCopyAndCheck](multimap.keys, dart.fn(k => multimap._get(k), T.dynamicToBuiltSetN()));
        } else {
          this[_setWithCopyAndCheck](core.Iterable.as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), T.dynamicTodynamic()));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.nullable(dart.fnType(K, [T])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.nullable(dart.fnType(V, [T])).as(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.nullable(dart.fnType(__t$IterableOfV(), [T])).as(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        key == null ? key = dart.fn(x => K.as(x), dart.fnType(K, [T])) : null;
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          value == null ? value = dart.fn(x => V.as(x), dart.fnType(V, [T])) : null;
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K.as(key);
        V.as(value);
        this[_makeWriteableCopy]();
        this[_checkKey](key);
        this[_checkValue](value);
        this[_getValuesBuilder](key).add(value);
      }
      addValues(key, values) {
        K.as(key);
        __t$IterableOfV().as(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, __t$VTovoid()));
      }
      remove(key, value) {
        __t$VN().as(value);
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_getValuesBuilder](key).remove(value);
        }
      }
      removeAll(key) {
        if (K.is(key)) {
          this[_makeWriteableCopy]();
          this[_builtMap] = this[_builtMap];
          this[_builderMap][$_set](key, __t$SetBuilderOfV().new());
        }
      }
      clear() {
        this[_makeWriteableCopy]();
        this[_builtMap][$clear]();
        this[_builderMap][$clear]();
      }
      [_getValuesBuilder](key) {
        let result = this[_builderMap][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap][$_get](key);
          if (builtValues == null) {
            result = __t$SetBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy]() {
        if (this[_builtMapOwner] != null) {
          this[_builtMap] = __t$LinkedHashMapOfK$BuiltSetOfV().from(this[_builtMap]);
          this[_builtMapOwner] = null;
        }
      }
      [_setOwner$0](builtSetMultimap) {
        this[_builtMapOwner] = builtSetMultimap;
        this[_builtMap] = builtSetMultimap[_map$];
        this[_builderMap] = new (__t$LinkedMapOfK$SetBuilderOfV()).new();
      }
      [_setWithCopyAndCheck](keys, lookup) {
        this[_builtMapOwner] = null;
        this[_builtMap] = new (__t$LinkedMapOfK$BuiltSetOfV()).new();
        this[_builderMap] = new (__t$LinkedMapOfK$SetBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core.Iterable.as(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkKey](key) {
        if (null_safety.isSoundMode) return;
        if (K.is(null)) return;
        if (key == null) {
          dart.throw(new core.ArgumentError.new("invalid key: " + dart.str(key)));
        }
      }
      [_checkValue](value) {
        if (null_safety.isSoundMode) return;
        if (V.is(null)) return;
        if (value == null) {
          dart.throw(new core.ArgumentError.new("invalid value: " + dart.str(value)));
        }
      }
    }
    (SetMultimapBuilder._uninitialized = function() {
      this[__SetMultimapBuilder__builtMap] = null;
      this[_builtMapOwner] = null;
      this[__SetMultimapBuilder__builderMap] = null;
      ;
    }).prototype = SetMultimapBuilder.prototype;
    dart.addTypeTests(SetMultimapBuilder);
    SetMultimapBuilder.prototype[_is_SetMultimapBuilder_default] = true;
    dart.addTypeCaches(SetMultimapBuilder);
    dart.setMethodSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapBuilder.__proto__),
      build: dart.fnType(set_multimap.BuiltSetMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [set_multimap.SetMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: dart.nullable(core.Object), value: dart.nullable(core.Object), values: dart.nullable(core.Object)}, {}], T => [dart.nullable(core.Object)]),
      add: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addValues: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      remove: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [_getValuesBuilder]: dart.fnType(set.SetBuilder$(V), [K]),
      [_makeWriteableCopy]: dart.fnType(dart.void, []),
      [_setOwner$0]: dart.fnType(dart.void, [set_multimap._BuiltSetMultimap$(K, V)]),
      [_setWithCopyAndCheck]: dart.fnType(dart.void, [core.Iterable, core.Function]),
      [_checkKey]: dart.fnType(dart.void, [K]),
      [_checkValue]: dart.fnType(dart.void, [V])
    }));
    dart.setGetterSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getGetters(SetMultimapBuilder.__proto__),
      [_builtMap]: core.Map$(K, set.BuiltSet$(V)),
      [_builderMap]: core.Map$(K, set.SetBuilder$(V))
    }));
    dart.setSetterSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getSetters(SetMultimapBuilder.__proto__),
      [_builtMap]: core.Map$(K, set.BuiltSet$(V)),
      [_builderMap]: core.Map$(K, set.SetBuilder$(V))
    }));
    dart.setLibraryUri(SetMultimapBuilder, I[7]);
    dart.setFieldSignature(SetMultimapBuilder, () => ({
      __proto__: dart.getFields(SetMultimapBuilder.__proto__),
      [__SetMultimapBuilder__builtMap]: dart.fieldType(dart.nullable(core.Map$(K, set.BuiltSet$(V)))),
      [_builtMapOwner]: dart.fieldType(dart.nullable(set_multimap._BuiltSetMultimap$(K, V))),
      [__SetMultimapBuilder__builderMap]: dart.fieldType(dart.nullable(core.Map$(K, set.SetBuilder$(V))))
    }));
    return SetMultimapBuilder;
  });
  set_multimap.SetMultimapBuilder = set_multimap.SetMultimapBuilder$();
  dart.addTypeTests(set_multimap.SetMultimapBuilder, _is_SetMultimapBuilder_default);
  var _map$0 = dart.privateName(copy_on_write_map, "_map");
  var _mapFactory$ = dart.privateName(copy_on_write_map, "_mapFactory");
  var _copyBeforeWrite$0 = dart.privateName(copy_on_write_map, "_copyBeforeWrite");
  var _maybeCopyBeforeWrite$0 = dart.privateName(copy_on_write_map, "_maybeCopyBeforeWrite");
  const _is_CopyOnWriteMap_default = Symbol('_is_CopyOnWriteMap_default');
  copy_on_write_map.CopyOnWriteMap$ = dart.generic((K, V) => {
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$MapEntryOfK$V = () => (__t$MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    var __t$IterableOfMapEntryOfK$V = () => (__t$IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(__t$MapEntryOfK$V())))();
    var __t$KAndVToV = () => (__t$KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    var __t$LinkedHashMapOfK$V = () => (__t$LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    var __t$VoidToV = () => (__t$VoidToV = dart.constFn(dart.fnType(V, [])))();
    var __t$VToV = () => (__t$VToV = dart.constFn(dart.fnType(V, [V])))();
    var __t$VoidToNV = () => (__t$VoidToNV = dart.constFn(dart.nullable(__t$VoidToV())))();
    class CopyOnWriteMap extends core.Object {
      _get(key) {
        return this[_map$0][$_get](key);
      }
      cast(K2, V2) {
        return new (copy_on_write_map.CopyOnWriteMap$(K2, V2)).new(this[_map$0][$cast](K2, V2));
      }
      containsKey(key) {
        return this[_map$0][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$0][$containsValue](value);
      }
      get entries() {
        return this[_map$0][$entries];
      }
      forEach(f) {
        return this[_map$0][$forEach](f);
      }
      get isEmpty() {
        return this[_map$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$0][$isNotEmpty];
      }
      get keys() {
        return this[_map$0][$keys];
      }
      get length() {
        return this[_map$0][$length];
      }
      map(K2, V2, f) {
        return this[_map$0][$map](K2, V2, f);
      }
      get values() {
        return this[_map$0][$values];
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$_set](key, value);
        return value$;
      }
      addAll(other) {
        __t$MapOfK$V().as(other);
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$addAll](other);
      }
      addEntries(entries) {
        __t$IterableOfMapEntryOfK$V().as(entries);
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$addEntries](entries);
      }
      clear() {
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$clear]();
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        __t$VoidToV().as(ifAbsent);
        this[_maybeCopyBeforeWrite$0]();
        return this[_map$0][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        this[_maybeCopyBeforeWrite$0]();
        return this[_map$0][$remove](key);
      }
      removeWhere(test) {
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$removeWhere](test);
      }
      toString() {
        return this[_map$0][$toString]();
      }
      update(key, update, opts) {
        K.as(key);
        __t$VToV().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        __t$VoidToNV().as(ifAbsent);
        this[_maybeCopyBeforeWrite$0]();
        return this[_map$0][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        __t$KAndVToV().as(update);
        this[_maybeCopyBeforeWrite$0]();
        this[_map$0][$updateAll](update);
      }
      [_maybeCopyBeforeWrite$0]() {
        let t14;
        if (!this[_copyBeforeWrite$0]) return;
        this[_copyBeforeWrite$0] = false;
        this[_map$0] = this[_mapFactory$] != null ? (t14 = dart.nullCheck(this[_mapFactory$])(), (() => {
          t14[$addAll](this[_map$0]);
          return t14;
        })()) : __t$LinkedHashMapOfK$V().from(this[_map$0]);
      }
    }
    (CopyOnWriteMap.new = function(_map, _mapFactory = null) {
      this[_map$0] = _map;
      this[_mapFactory$] = _mapFactory;
      this[_copyBeforeWrite$0] = true;
      ;
    }).prototype = CopyOnWriteMap.prototype;
    CopyOnWriteMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CopyOnWriteMap);
    CopyOnWriteMap.prototype[_is_CopyOnWriteMap_default] = true;
    dart.addTypeCaches(CopyOnWriteMap);
    CopyOnWriteMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getMethods(CopyOnWriteMap.__proto__),
      _get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$_get]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
      containsKey: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$containsKey]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      containsValue: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$containsValue]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
      _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addEntries: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      putIfAbsent: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$putIfAbsent]: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      remove: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      update: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)], {ifAbsent: dart.nullable(core.Object)}, {}),
      [$update]: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)], {ifAbsent: dart.nullable(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_maybeCopyBeforeWrite$0]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getGetters(CopyOnWriteMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(CopyOnWriteMap, I[8]);
    dart.setFieldSignature(CopyOnWriteMap, () => ({
      __proto__: dart.getFields(CopyOnWriteMap.__proto__),
      [_mapFactory$]: dart.finalFieldType(dart.nullable(dart.fnType(core.Map$(K, V), []))),
      [_copyBeforeWrite$0]: dart.fieldType(core.bool),
      [_map$0]: dart.fieldType(core.Map$(K, V))
    }));
    dart.defineExtensionMethods(CopyOnWriteMap, [
      '_get',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(CopyOnWriteMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CopyOnWriteMap;
  });
  copy_on_write_map.CopyOnWriteMap = copy_on_write_map.CopyOnWriteMap$();
  dart.addTypeTests(copy_on_write_map.CopyOnWriteMap, _is_CopyOnWriteMap_default);
  var _overrridenHashCode$ = dart.privateName(map$, "_overrridenHashCode");
  var _map$1 = dart.privateName(map$, "_map");
  var _hashCode$1 = dart.privateName(map$, "_hashCode");
  var _keys$ = dart.privateName(map$, "_keys");
  var _values$ = dart.privateName(map$, "_values");
  var _mapFactory$0 = dart.privateName(map$, "_mapFactory");
  const _is_BuiltMap_default = Symbol('_is_BuiltMap_default');
  map$.BuiltMap$ = dart.generic((K, V) => {
    var __t$MapBuilderOfK$V = () => (__t$MapBuilderOfK$V = dart.constFn(map$.MapBuilder$(K, V)))();
    var __t$_BuiltMapOfK$V = () => (__t$_BuiltMapOfK$V = dart.constFn(map$._BuiltMap$(K, V)))();
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$CopyOnWriteMapOfK$V = () => (__t$CopyOnWriteMapOfK$V = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, V)))();
    var __t$KToint = () => (__t$KToint = dart.constFn(dart.fnType(core.int, [K])))();
    class BuiltMap extends core.Object {
      static new(map = C[1] || CT.C1) {
        if (map$._BuiltMap.is(map) && map.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V))) {
          return map$.BuiltMap$(K, V).as(map);
        } else if (core.Map.is(map) || map$.BuiltMap.is(map)) {
          return new (map$._BuiltMap$(K, V)).copyAndCheckTypes(core.Iterable.as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), T.dynamicTodynamic()));
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(dart.runtimeType(map))));
        }
      }
      static from(map) {
        return new (map$._BuiltMap$(K, V)).copyAndCheckTypes(map[$keys], dart.fn(k => map[$_get](k), T.dynamicTodynamic()));
      }
      static of(map) {
        return new (map$._BuiltMap$(K, V)).copyAndCheckForNull(map[$keys], dart.fn(k => V.as(map[$_get](k)), dart.fnType(V, [K])));
      }
      static build(updates) {
        let t14;
        return (t14 = map$.MapBuilder$(K, V).new(), (() => {
          t14.update(updates);
          return t14;
        })()).build();
      }
      toBuilder() {
        return new (__t$MapBuilderOfK$V())._fromBuiltMap(__t$_BuiltMapOfK$V().as(this));
      }
      rebuild(updates) {
        let t14;
        return (t14 = this.toBuilder(), (() => {
          t14.update(updates);
          return t14;
        })()).build();
      }
      asMap() {
        return __t$MapOfK$V().unmodifiable(this[_map$1]);
      }
      toMap() {
        return new (__t$CopyOnWriteMapOfK$V()).new(this[_map$1], this[_mapFactory$0]);
      }
      get hashCode() {
        let t14;
        this[_hashCode$1] == null ? this[_hashCode$1] = hash.hashObjects((t14 = this[_map$1][$keys][$map](core.int, dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$1][$_get](key))), __t$KToint()))[$toList]({growable: false}), (() => {
          t14[$sort]();
          return t14;
        })())) : null;
        return dart.nullCheck(this[_hashCode$1]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!map$.BuiltMap.is(other)) return false;
        if (other.length !== this.length) return false;
        if (other.hashCode !== this.hashCode) return false;
        for (let key of this.keys) {
          if (!dart.equals(other._get(key), this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return this[_map$1][$toString]();
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      containsKey(key) {
        return this[_map$1][$containsKey](key);
      }
      containsValue(value) {
        return this[_map$1][$containsValue](value);
      }
      forEach(f) {
        this[_map$1][$forEach](f);
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      get keys() {
        this[_keys$] == null ? this[_keys$] = this[_map$1][$keys] : null;
        return dart.nullCheck(this[_keys$]);
      }
      get length() {
        return this[_map$1][$length];
      }
      get values() {
        this[_values$] == null ? this[_values$] = this[_map$1][$values] : null;
        return dart.nullCheck(this[_values$]);
      }
      get entries() {
        return this[_map$1][$entries];
      }
      map(K2, V2, f) {
        return new (map$._BuiltMap$(K2, V2)).withSafeMap(null, this[_map$1][$map](K2, V2, f));
      }
    }
    (BuiltMap.__ = function(_mapFactory, _map) {
      this[_hashCode$1] = null;
      this[_keys$] = null;
      this[_values$] = null;
      this[_mapFactory$0] = _mapFactory;
      this[_map$1] = _map;
      ;
    }).prototype = BuiltMap.prototype;
    dart.addTypeTests(BuiltMap);
    BuiltMap.prototype[_is_BuiltMap_default] = true;
    dart.addTypeCaches(BuiltMap);
    dart.setMethodSignature(BuiltMap, () => ({
      __proto__: dart.getMethods(BuiltMap.__proto__),
      toBuilder: dart.fnType(map$.MapBuilder$(K, V), []),
      rebuild: dart.fnType(map$.BuiltMap$(K, V), [dart.fnType(dart.dynamic, [map$.MapBuilder$(K, V)])]),
      asMap: dart.fnType(core.Map$(K, V), []),
      toMap: dart.fnType(core.Map$(K, V), []),
      _get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [map$.BuiltMap$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(BuiltMap, () => ({
      __proto__: dart.getGetters(BuiltMap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V),
      entries: core.Iterable$(core.MapEntry$(K, V))
    }));
    dart.setLibraryUri(BuiltMap, I[9]);
    dart.setFieldSignature(BuiltMap, () => ({
      __proto__: dart.getFields(BuiltMap.__proto__),
      [_mapFactory$0]: dart.finalFieldType(dart.nullable(dart.fnType(core.Map$(K, V), []))),
      [_map$1]: dart.finalFieldType(core.Map$(K, V)),
      [_hashCode$1]: dart.fieldType(dart.nullable(core.int)),
      [_keys$]: dart.fieldType(dart.nullable(core.Iterable$(K))),
      [_values$]: dart.fieldType(dart.nullable(core.Iterable$(V)))
    }));
    dart.defineExtensionMethods(BuiltMap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltMap, ['hashCode']);
    return BuiltMap;
  });
  map$.BuiltMap = map$.BuiltMap$();
  dart.addTypeTests(map$.BuiltMap, _is_BuiltMap_default);
  const _is__BuiltMap_default = Symbol('_is__BuiltMap_default');
  map$._BuiltMap$ = dart.generic((K, V) => {
    var __t$LinkedMapOfK$V = () => (__t$LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    class _BuiltMap extends map$.BuiltMap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)._equals(key) && dart.wrapType(V)._equals(value);
      }
    }
    (_BuiltMap.withSafeMap = function(mapFactory, map) {
      _BuiltMap.__proto__.__.call(this, mapFactory, map);
      ;
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckTypes = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (__t$LinkedMapOfK$V()).new());
      for (let key of keys) {
        if (K.is(key)) {
          let value = dart.dcall(lookup, [key]);
          if (V.is(value)) {
            this[_map$1][$_set](key, value);
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value)));
          }
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltMap.prototype;
    (_BuiltMap.copyAndCheckForNull = function(keys, lookup) {
      _BuiltMap.__proto__.__.call(this, null, new (__t$LinkedMapOfK$V()).new());
      let checkKeys = !null_safety.isSoundMode && !K.is(null);
      let checkValues = !null_safety.isSoundMode && !V.is(null);
      for (let key of keys) {
        if (checkKeys && key == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid key: null"));
        }
        let value = lookup(key);
        if (checkValues && value == null) {
          dart.throw(new core.ArgumentError.new("map contained invalid value: null"));
        }
        this[_map$1][$_set](key, value);
      }
    }).prototype = _BuiltMap.prototype;
    dart.addTypeTests(_BuiltMap);
    _BuiltMap.prototype[_is__BuiltMap_default] = true;
    dart.addTypeCaches(_BuiltMap);
    dart.setMethodSignature(_BuiltMap, () => ({
      __proto__: dart.getMethods(_BuiltMap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltMap, I[9]);
    return _BuiltMap;
  });
  map$._BuiltMap = map$._BuiltMap$();
  dart.addTypeTests(map$._BuiltMap, _is__BuiltMap_default);
  const _is_OverriddenHashcodeBuiltMap_default = Symbol('_is_OverriddenHashcodeBuiltMap_default');
  map$.OverriddenHashcodeBuiltMap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltMap extends map$._BuiltMap$(K, V) {
      get hashCode() {
        return this[_overrridenHashCode$];
      }
    }
    (OverriddenHashcodeBuiltMap.new = function(map, _overrridenHashCode) {
      this[_overrridenHashCode$] = _overrridenHashCode;
      OverriddenHashcodeBuiltMap.__proto__.copyAndCheckTypes.call(this, core.Iterable.as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), T.dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltMap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltMap);
    OverriddenHashcodeBuiltMap.prototype[_is_OverriddenHashcodeBuiltMap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltMap);
    dart.setLibraryUri(OverriddenHashcodeBuiltMap, I[9]);
    dart.setFieldSignature(OverriddenHashcodeBuiltMap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltMap.__proto__),
      [_overrridenHashCode$]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltMap, ['hashCode']);
    return OverriddenHashcodeBuiltMap;
  });
  map$.OverriddenHashcodeBuiltMap = map$.OverriddenHashcodeBuiltMap$();
  dart.addTypeTests(map$.OverriddenHashcodeBuiltMap, _is_OverriddenHashcodeBuiltMap_default);
  var __MapBuilder__map = dart.privateName(map$, "_#MapBuilder#_map");
  var _mapOwner = dart.privateName(map$, "_mapOwner");
  var _setOwner$1 = dart.privateName(map$, "_setOwner");
  var _createMap = dart.privateName(map$, "_createMap");
  var _setSafeMap = dart.privateName(map$, "_setSafeMap");
  var _checkKey$ = dart.privateName(map$, "_checkKey");
  var _checkValue$ = dart.privateName(map$, "_checkValue");
  var _safeMap = dart.privateName(map$, "_safeMap");
  var _checkKeys = dart.privateName(map$, "_checkKeys");
  var _checkValues = dart.privateName(map$, "_checkValues");
  const _is_MapBuilder_default = Symbol('_is_MapBuilder_default');
  map$.MapBuilder$ = dart.generic((K, V) => {
    var __t$_BuiltMapOfK$V = () => (__t$_BuiltMapOfK$V = dart.constFn(map$._BuiltMap$(K, V)))();
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$VoidToMapOfK$V = () => (__t$VoidToMapOfK$V = dart.constFn(dart.fnType(__t$MapOfK$V(), [])))();
    var __t$MapEntryOfK$V = () => (__t$MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    var __t$IterableOfMapEntryOfK$V = () => (__t$IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(__t$MapEntryOfK$V())))();
    var __t$KAndVToV = () => (__t$KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    var __t$LinkedMapOfK$V = () => (__t$LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    var __t$VoidToV = () => (__t$VoidToV = dart.constFn(dart.fnType(V, [])))();
    var __t$VToV = () => (__t$VToV = dart.constFn(dart.fnType(V, [V])))();
    var __t$VoidToNV = () => (__t$VoidToNV = dart.constFn(dart.nullable(__t$VoidToV())))();
    class MapBuilder extends core.Object {
      get [_map$1]() {
        let t14;
        t14 = this[__MapBuilder__map];
        return t14 == null ? dart.throw(new _internal.LateError.fieldNI("_map")) : t14;
      }
      set [_map$1](t14) {
        this[__MapBuilder__map] = t14;
      }
      static new(map = C[1] || CT.C1) {
        let t15;
        t15 = new (map$.MapBuilder$(K, V))._uninitialized();
        return (() => {
          t15.replace(core.Object.as(map));
          return t15;
        })();
      }
      build() {
        this[_mapOwner] == null ? this[_mapOwner] = new (__t$_BuiltMapOfK$V()).withSafeMap(this[_mapFactory$0], this[_map$1]) : null;
        return dart.nullCheck(this[_mapOwner]);
      }
      update(updates) {
        updates(this);
      }
      replace(map) {
        if (__t$_BuiltMapOfK$V().is(map) && dart.equals(map[_mapFactory$0], this[_mapFactory$0])) {
          this[_setOwner$1](map);
        } else if (map$.BuiltMap.is(map)) {
          let replacement = this[_createMap]();
          map.forEach(dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, T.dynamicAnddynamicTovoid()));
          this[_setSafeMap](replacement);
        } else if (core.Map.is(map)) {
          let replacement = this[_createMap]();
          map[$forEach](dart.fn((key, value) => {
            replacement[$_set](K.as(key), V.as(value));
          }, T.dynamicAnddynamicTovoid()));
          this[_setSafeMap](replacement);
        } else {
          dart.throw(new core.ArgumentError.new("expected Map or BuiltMap, got " + dart.str(map[$runtimeType])));
        }
      }
      withBase(base) {
        let t15;
        __t$VoidToMapOfK$V().as(base);
        core.ArgumentError.checkNotNull(__t$VoidToMapOfK$V(), base, "base");
        this[_mapFactory$0] = base;
        this[_setSafeMap]((t15 = this[_createMap](), (() => {
          t15[$addAll](this[_map$1]);
          return t15;
        })()));
      }
      withDefaultBase() {
        let t15;
        this[_mapFactory$0] = null;
        this[_setSafeMap]((t15 = this[_createMap](), (() => {
          t15[$addAll](this[_map$1]);
          return t15;
        })()));
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.nullable(dart.fnType(K, [T])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.nullable(dart.fnType(V, [T])).as(value);
        key == null ? key = dart.fn(x => K.as(x), dart.fnType(K, [T])) : null;
        value == null ? value = dart.fn(x => V.as(x), dart.fnType(V, [T])) : null;
        for (let element of iterable) {
          this._set(key(element), value(element));
        }
      }
      _get(key) {
        return this[_map$1][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        this[_checkKey$](key);
        this[_checkValue$](value);
        this[_safeMap][$_set](key, value);
        return value$;
      }
      get length() {
        return this[_map$1][$length];
      }
      get isEmpty() {
        return this[_map$1][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$1][$isNotEmpty];
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        __t$VoidToV().as(ifAbsent);
        this[_checkKey$](key);
        return this[_safeMap][$putIfAbsent](key, dart.fn(() => {
          let value = ifAbsent();
          this[_checkValue$](value);
          return value;
        }, __t$VoidToV()));
      }
      addAll(other) {
        __t$MapOfK$V().as(other);
        this[_checkKeys](other[$keys]);
        this[_checkValues](other[$values]);
        this[_safeMap][$addAll](other);
      }
      remove(key) {
        return this[_safeMap][$remove](key);
      }
      removeWhere(predicate) {
        this[_safeMap][$removeWhere](predicate);
      }
      clear() {
        this[_safeMap][$clear]();
      }
      addEntries(newEntries) {
        __t$IterableOfMapEntryOfK$V().as(newEntries);
        this[_safeMap][$addEntries](newEntries);
      }
      updateValue(key, update, opts) {
        K.as(key);
        __t$VToV().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        __t$VoidToNV().as(ifAbsent);
        return this[_safeMap][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAllValues(update) {
        __t$KAndVToV().as(update);
        this[_safeMap][$updateAll](update);
      }
      [_setOwner$1](mapOwner) {
        if (!dart.equals(mapOwner[_mapFactory$0], this[_mapFactory$0])) dart.assertFailed("Can't reuse a built map that uses a different base", I[10], 176, 12, "mapOwner._mapFactory == _mapFactory");
        this[_mapOwner] = mapOwner;
        this[_map$1] = mapOwner[_map$1];
      }
      [_setSafeMap](map) {
        this[_mapOwner] = null;
        this[_map$1] = map;
      }
      get [_safeMap]() {
        let t15;
        if (this[_mapOwner] != null) {
          this[_map$1] = (t15 = this[_createMap](), (() => {
            t15[$addAll](this[_map$1]);
            return t15;
          })());
          this[_mapOwner] = null;
        }
        return this[_map$1];
      }
      [_createMap]() {
        return this[_mapFactory$0] != null ? dart.nullCheck(this[_mapFactory$0])() : new (__t$LinkedMapOfK$V()).new();
      }
      [_checkKey$](key) {
        if (null_safety.isSoundMode) return;
        if (K.is(null)) return;
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkKeys](keys) {
        if (null_safety.isSoundMode) return;
        if (K.is(null)) return;
        for (let key of keys) {
          this[_checkKey$](key);
        }
      }
      [_checkValue$](value) {
        if (null_safety.isSoundMode) return;
        if (V.is(null)) return;
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
      [_checkValues](values) {
        if (null_safety.isSoundMode) return;
        if (V.is(null)) return;
        for (let value of values) {
          this[_checkValue$](value);
        }
      }
    }
    (MapBuilder._uninitialized = function() {
      this[__MapBuilder__map] = null;
      this[_mapOwner] = null;
      this[_mapFactory$0] = null;
      ;
    }).prototype = MapBuilder.prototype;
    (MapBuilder._fromBuiltMap = function(map) {
      this[__MapBuilder__map] = null;
      this[_mapFactory$0] = map[_mapFactory$0];
      this[__MapBuilder__map] = map[_map$1];
      this[_mapOwner] = map;
      ;
    }).prototype = MapBuilder.prototype;
    dart.addTypeTests(MapBuilder);
    MapBuilder.prototype[_is_MapBuilder_default] = true;
    dart.addTypeCaches(MapBuilder);
    dart.setMethodSignature(MapBuilder, () => ({
      __proto__: dart.getMethods(MapBuilder.__proto__),
      build: dart.fnType(map$.BuiltMap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [map$.MapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [core.Object]),
      withBase: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      withDefaultBase: dart.fnType(dart.void, []),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: dart.nullable(core.Object), value: dart.nullable(core.Object)}, {}], T => [dart.nullable(core.Object)]),
      _get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      putIfAbsent: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      clear: dart.fnType(dart.void, []),
      addEntries: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      updateValue: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)], {ifAbsent: dart.nullable(core.Object)}, {}),
      updateAllValues: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_setOwner$1]: dart.fnType(dart.void, [map$._BuiltMap$(K, V)]),
      [_setSafeMap]: dart.fnType(dart.void, [core.Map$(K, V)]),
      [_createMap]: dart.fnType(core.Map$(K, V), []),
      [_checkKey$]: dart.fnType(dart.void, [K]),
      [_checkKeys]: dart.fnType(dart.void, [core.Iterable$(K)]),
      [_checkValue$]: dart.fnType(dart.void, [V]),
      [_checkValues]: dart.fnType(dart.void, [core.Iterable$(V)])
    }));
    dart.setGetterSignature(MapBuilder, () => ({
      __proto__: dart.getGetters(MapBuilder.__proto__),
      [_map$1]: core.Map$(K, V),
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      [_safeMap]: core.Map$(K, V)
    }));
    dart.setSetterSignature(MapBuilder, () => ({
      __proto__: dart.getSetters(MapBuilder.__proto__),
      [_map$1]: core.Map$(K, V)
    }));
    dart.setLibraryUri(MapBuilder, I[9]);
    dart.setFieldSignature(MapBuilder, () => ({
      __proto__: dart.getFields(MapBuilder.__proto__),
      [_mapFactory$0]: dart.fieldType(dart.nullable(dart.fnType(core.Map$(K, V), []))),
      [__MapBuilder__map]: dart.fieldType(dart.nullable(core.Map$(K, V))),
      [_mapOwner]: dart.fieldType(dart.nullable(map$._BuiltMap$(K, V)))
    }));
    return MapBuilder;
  });
  map$.MapBuilder = map$.MapBuilder$();
  dart.addTypeTests(map$.MapBuilder, _is_MapBuilder_default);
  map$['BuiltMapExtension|build'] = function BuiltMapExtension$124build(K, V, $this) {
    return map$.BuiltMap$(K, V).of($this);
  };
  map$['BuiltMapExtension|get#build'] = function BuiltMapExtension$124get$35build(K, V, $this) {
    return dart.fn(() => map$['BuiltMapExtension|build'](K, V, $this), dart.fnType(map$.BuiltMap$(K, V), []));
  };
  var _overridenHashCode$2 = dart.privateName(list_multimap, "_overridenHashCode");
  var _map$2 = dart.privateName(list_multimap, "_map");
  var _emptyList = dart.privateName(list_multimap, "_emptyList");
  var _hashCode$2 = dart.privateName(list_multimap, "_hashCode");
  var _keys$0 = dart.privateName(list_multimap, "_keys");
  var _values$0 = dart.privateName(list_multimap, "_values");
  const _is_BuiltListMultimap_default = Symbol('_is_BuiltListMultimap_default');
  list_multimap.BuiltListMultimap$ = dart.generic((K, V) => {
    var __t$ListMultimapBuilderOfK$V = () => (__t$ListMultimapBuilderOfK$V = dart.constFn(list_multimap.ListMultimapBuilder$(K, V)))();
    var __t$CopyOnWriteMapOfK$BuiltListOfV = () => (__t$CopyOnWriteMapOfK$BuiltListOfV = dart.constFn(copy_on_write_map.CopyOnWriteMap$(K, __t$BuiltListOfV())))();
    var __t$KToint = () => (__t$KToint = dart.constFn(dart.fnType(core.int, [K])))();
    var __t$MapOfK$IterableOfV = () => (__t$MapOfK$IterableOfV = dart.constFn(core.Map$(K, __t$IterableOfV())))();
    var __t$KAndBuiltListOfVTovoid = () => (__t$KAndBuiltListOfVTovoid = dart.constFn(dart.fnType(dart.void, [K, __t$BuiltListOfV()])))();
    var __t$BuiltListOfV = () => (__t$BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    var __t$IterableOfV = () => (__t$IterableOfV = dart.constFn(core.Iterable$(V)))();
    var __t$VTovoid = () => (__t$VTovoid = dart.constFn(dart.fnType(dart.void, [V])))();
    var __t$BuiltListOfVToBuiltListOfV = () => (__t$BuiltListOfVToBuiltListOfV = dart.constFn(dart.fnType(__t$BuiltListOfV(), [__t$BuiltListOfV()])))();
    class BuiltListMultimap extends core.Object {
      static new(multimap = C[1] || CT.C1) {
        if (list_multimap._BuiltListMultimap.is(multimap) && multimap.hasExactKeyAndValueTypes(dart.wrapType(K), dart.wrapType(V))) {
          return list_multimap.BuiltListMultimap$(K, V).as(multimap);
        } else if (core.Map.is(multimap)) {
          return new (list_multimap._BuiltListMultimap$(K, V)).copy(multimap[$keys], dart.fn(k => multimap[$_get](k), T.dynamicTodynamic()));
        } else if (list_multimap.BuiltListMultimap.is(multimap)) {
          return new (list_multimap._BuiltListMultimap$(K, V)).copy(multimap.keys, dart.fn(k => multimap._get(k), T.dynamicToBuiltList()));
        } else {
          return new (list_multimap._BuiltListMultimap$(K, V)).copy(core.Iterable.as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), T.dynamicTodynamic()));
        }
      }
      static build(updates) {
        let t17;
        return (t17 = list_multimap.ListMultimapBuilder$(K, V).new(), (() => {
          t17.update(updates);
          return t17;
        })()).build();
      }
      toBuilder() {
        return __t$ListMultimapBuilderOfK$V().new(this);
      }
      rebuild(updates) {
        let t17;
        return (t17 = this.toBuilder(), (() => {
          t17.update(updates);
          return t17;
        })()).build();
      }
      toMap() {
        return new (__t$CopyOnWriteMapOfK$BuiltListOfV()).new(this[_map$2]);
      }
      get hashCode() {
        let t17;
        this[_hashCode$2] == null ? this[_hashCode$2] = hash.hashObjects((t17 = this[_map$2][$keys][$map](core.int, dart.fn(key => hash.hash2(dart.hashCode(key), dart.hashCode(this[_map$2][$_get](key))), __t$KToint()))[$toList]({growable: false}), (() => {
          t17[$sort]();
          return t17;
        })())) : null;
        return dart.nullCheck(this[_hashCode$2]);
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) return true;
        if (!list_multimap.BuiltListMultimap.is(other)) return false;
        if (other.length !== this.length) return false;
        if (other.hashCode !== this.hashCode) return false;
        for (let key of this.keys) {
          if (!other._get(key)._equals(this._get(key))) return false;
        }
        return true;
      }
      toString() {
        return this[_map$2][$toString]();
      }
      asMap() {
        return __t$MapOfK$IterableOfV().unmodifiable(this[_map$2]);
      }
      _get(key) {
        let t17;
        let result = this[_map$2][$_get](key);
        t17 = result;
        return t17 == null ? this[_emptyList] : t17;
      }
      containsKey(key) {
        return this[_map$2][$containsKey](key);
      }
      containsValue(value) {
        return this.values[$contains](value);
      }
      forEach(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          values.forEach(dart.fn(value => {
            f(key, value);
          }, __t$VTovoid()));
        }, __t$KAndBuiltListOfVTovoid()));
      }
      forEachKey(f) {
        this[_map$2][$forEach](dart.fn((key, values) => {
          f(key, values);
        }, __t$KAndBuiltListOfVTovoid()));
      }
      get isEmpty() {
        return this[_map$2][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map$2][$isNotEmpty];
      }
      get keys() {
        this[_keys$0] == null ? this[_keys$0] = this[_map$2][$keys] : null;
        return dart.nullCheck(this[_keys$0]);
      }
      get length() {
        return this[_map$2][$length];
      }
      get values() {
        this[_values$0] == null ? this[_values$0] = this[_map$2][$values][$expand](V, dart.fn(x => x, __t$BuiltListOfVToBuiltListOfV())) : null;
        return dart.nullCheck(this[_values$0]);
      }
    }
    (BuiltListMultimap.__ = function(_map) {
      this[_emptyList] = __t$BuiltListOfV().new();
      this[_hashCode$2] = null;
      this[_keys$0] = null;
      this[_values$0] = null;
      this[_map$2] = _map;
      ;
    }).prototype = BuiltListMultimap.prototype;
    dart.addTypeTests(BuiltListMultimap);
    BuiltListMultimap.prototype[_is_BuiltListMultimap_default] = true;
    dart.addTypeCaches(BuiltListMultimap);
    dart.setMethodSignature(BuiltListMultimap, () => ({
      __proto__: dart.getMethods(BuiltListMultimap.__proto__),
      toBuilder: dart.fnType(list_multimap.ListMultimapBuilder$(K, V), []),
      rebuild: dart.fnType(list_multimap.BuiltListMultimap$(K, V), [dart.fnType(dart.dynamic, [list_multimap.ListMultimapBuilder$(K, V)])]),
      toMap: dart.fnType(core.Map$(K, list.BuiltList$(V)), []),
      asMap: dart.fnType(core.Map$(K, core.Iterable$(V)), []),
      _get: dart.fnType(list.BuiltList$(V), [dart.nullable(core.Object)]),
      containsKey: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      containsValue: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      forEachKey: dart.fnType(dart.void, [dart.fnType(dart.void, [K, core.Iterable$(V)])])
    }));
    dart.setGetterSignature(BuiltListMultimap, () => ({
      __proto__: dart.getGetters(BuiltListMultimap.__proto__),
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      keys: core.Iterable$(K),
      length: core.int,
      values: core.Iterable$(V)
    }));
    dart.setLibraryUri(BuiltListMultimap, I[11]);
    dart.setFieldSignature(BuiltListMultimap, () => ({
      __proto__: dart.getFields(BuiltListMultimap.__proto__),
      [_map$2]: dart.finalFieldType(core.Map$(K, list.BuiltList$(V))),
      [_emptyList]: dart.finalFieldType(list.BuiltList$(V)),
      [_hashCode$2]: dart.fieldType(dart.nullable(core.int)),
      [_keys$0]: dart.fieldType(dart.nullable(core.Iterable$(K))),
      [_values$0]: dart.fieldType(dart.nullable(core.Iterable$(V)))
    }));
    dart.defineExtensionMethods(BuiltListMultimap, ['_equals', 'toString']);
    dart.defineExtensionAccessors(BuiltListMultimap, ['hashCode']);
    return BuiltListMultimap;
  });
  list_multimap.BuiltListMultimap = list_multimap.BuiltListMultimap$();
  dart.addTypeTests(list_multimap.BuiltListMultimap, _is_BuiltListMultimap_default);
  const _is__BuiltListMultimap_default = Symbol('_is__BuiltListMultimap_default');
  list_multimap._BuiltListMultimap$ = dart.generic((K, V) => {
    var __t$LinkedMapOfK$BuiltListOfV = () => (__t$LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$BuiltListOfV())))();
    var __t$BuiltListOfV = () => (__t$BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    class _BuiltListMultimap extends list_multimap.BuiltListMultimap$(K, V) {
      hasExactKeyAndValueTypes(key, value) {
        return dart.wrapType(K)._equals(key) && dart.wrapType(V)._equals(value);
      }
    }
    (_BuiltListMultimap.withSafeMap = function(map) {
      _BuiltListMultimap.__proto__.__.call(this, map);
      ;
    }).prototype = _BuiltListMultimap.prototype;
    (_BuiltListMultimap.copy = function(keys, lookup) {
      _BuiltListMultimap.__proto__.__.call(this, new (__t$LinkedMapOfK$BuiltListOfV()).new());
      for (let key of keys) {
        if (K.is(key)) {
          this[_map$2][$_set](key, __t$BuiltListOfV().new(core.Iterable.as(dart.dcall(lookup, [key]))));
        } else {
          dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
        }
      }
    }).prototype = _BuiltListMultimap.prototype;
    dart.addTypeTests(_BuiltListMultimap);
    _BuiltListMultimap.prototype[_is__BuiltListMultimap_default] = true;
    dart.addTypeCaches(_BuiltListMultimap);
    dart.setMethodSignature(_BuiltListMultimap, () => ({
      __proto__: dart.getMethods(_BuiltListMultimap.__proto__),
      hasExactKeyAndValueTypes: dart.fnType(core.bool, [core.Type, core.Type])
    }));
    dart.setLibraryUri(_BuiltListMultimap, I[11]);
    return _BuiltListMultimap;
  });
  list_multimap._BuiltListMultimap = list_multimap._BuiltListMultimap$();
  dart.addTypeTests(list_multimap._BuiltListMultimap, _is__BuiltListMultimap_default);
  const _is_OverriddenHashcodeBuiltListMultimap_default = Symbol('_is_OverriddenHashcodeBuiltListMultimap_default');
  list_multimap.OverriddenHashcodeBuiltListMultimap$ = dart.generic((K, V) => {
    class OverriddenHashcodeBuiltListMultimap extends list_multimap._BuiltListMultimap$(K, V) {
      get hashCode() {
        return this[_overridenHashCode$2];
      }
    }
    (OverriddenHashcodeBuiltListMultimap.new = function(map, _overridenHashCode) {
      this[_overridenHashCode$2] = _overridenHashCode;
      OverriddenHashcodeBuiltListMultimap.__proto__.copy.call(this, core.Iterable.as(dart.dload(map, 'keys')), dart.fn(k => dart.dsend(map, '_get', [k]), T.dynamicTodynamic()));
      ;
    }).prototype = OverriddenHashcodeBuiltListMultimap.prototype;
    dart.addTypeTests(OverriddenHashcodeBuiltListMultimap);
    OverriddenHashcodeBuiltListMultimap.prototype[_is_OverriddenHashcodeBuiltListMultimap_default] = true;
    dart.addTypeCaches(OverriddenHashcodeBuiltListMultimap);
    dart.setLibraryUri(OverriddenHashcodeBuiltListMultimap, I[11]);
    dart.setFieldSignature(OverriddenHashcodeBuiltListMultimap, () => ({
      __proto__: dart.getFields(OverriddenHashcodeBuiltListMultimap.__proto__),
      [_overridenHashCode$2]: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionAccessors(OverriddenHashcodeBuiltListMultimap, ['hashCode']);
    return OverriddenHashcodeBuiltListMultimap;
  });
  list_multimap.OverriddenHashcodeBuiltListMultimap = list_multimap.OverriddenHashcodeBuiltListMultimap$();
  dart.addTypeTests(list_multimap.OverriddenHashcodeBuiltListMultimap, _is_OverriddenHashcodeBuiltListMultimap_default);
  var __ListMultimapBuilder__builtMap = dart.privateName(list_multimap, "_#ListMultimapBuilder#_builtMap");
  var _builtMapOwner$ = dart.privateName(list_multimap, "_builtMapOwner");
  var __ListMultimapBuilder__builderMap = dart.privateName(list_multimap, "_#ListMultimapBuilder#_builderMap");
  var _builtMap$ = dart.privateName(list_multimap, "_builtMap");
  var _builderMap$ = dart.privateName(list_multimap, "_builderMap");
  var _setOwner$2 = dart.privateName(list_multimap, "_setOwner");
  var _setWithCopyAndCheck$ = dart.privateName(list_multimap, "_setWithCopyAndCheck");
  var _makeWriteableCopy$ = dart.privateName(list_multimap, "_makeWriteableCopy");
  var _checkKey$0 = dart.privateName(list_multimap, "_checkKey");
  var _checkValue$0 = dart.privateName(list_multimap, "_checkValue");
  var _getValuesBuilder$ = dart.privateName(list_multimap, "_getValuesBuilder");
  const _is_ListMultimapBuilder_default = Symbol('_is_ListMultimapBuilder_default');
  list_multimap.ListMultimapBuilder$ = dart.generic((K, V) => {
    var __t$_BuiltListMultimapOfK$V = () => (__t$_BuiltListMultimapOfK$V = dart.constFn(list_multimap._BuiltListMultimap$(K, V)))();
    var __t$LinkedHashMapOfK$BuiltListOfV = () => (__t$LinkedHashMapOfK$BuiltListOfV = dart.constFn(collection.LinkedHashMap$(K, __t$BuiltListOfV())))();
    var __t$LinkedMapOfK$ListBuilderOfV = () => (__t$LinkedMapOfK$ListBuilderOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$ListBuilderOfV())))();
    var __t$LinkedMapOfK$BuiltListOfV = () => (__t$LinkedMapOfK$BuiltListOfV = dart.constFn(_js_helper.LinkedMap$(K, __t$BuiltListOfV())))();
    var __t$IterableOfV = () => (__t$IterableOfV = dart.constFn(core.Iterable$(V)))();
    var __t$VTovoid = () => (__t$VTovoid = dart.constFn(dart.fnType(dart.void, [V])))();
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    var __t$BuiltListOfV = () => (__t$BuiltListOfV = dart.constFn(list.BuiltList$(V)))();
    var __t$ListBuilderOfV = () => (__t$ListBuilderOfV = dart.constFn(list.ListBuilder$(V)))();
    class ListMultimapBuilder extends core.Object {
      get [_builtMap$]() {
        let t17;
        t17 = this[__ListMultimapBuilder__builtMap];
        return t17 == null ? dart.throw(new _internal.LateError.fieldNI("_builtMap")) : t17;
      }
      set [_builtMap$](t17) {
        this[__ListMultimapBuilder__builtMap] = t17;
      }
      get [_builderMap$]() {
        let t18;
        t18 = this[__ListMultimapBuilder__builderMap];
        return t18 == null ? dart.throw(new _internal.LateError.fieldNI("_builderMap")) : t18;
      }
      set [_builderMap$](t18) {
        this[__ListMultimapBuilder__builderMap] = t18;
      }
      static new(multimap = C[1] || CT.C1) {
        let t19;
        t19 = new (list_multimap.ListMultimapBuilder$(K, V))._uninitialized();
        return (() => {
          t19.replace(multimap);
          return t19;
        })();
      }
      build() {
        if (this[_builtMapOwner$] == null) {
          for (let key of this[_builderMap$][$keys]) {
            let builtList = dart.nullCheck(this[_builderMap$][$_get](key)).build();
            if (builtList.isEmpty) {
              this[_builtMap$][$remove](key);
            } else {
              this[_builtMap$][$_set](key, builtList);
            }
          }
          this[_builtMapOwner$] = new (__t$_BuiltListMultimapOfK$V()).withSafeMap(this[_builtMap$]);
        }
        return dart.nullCheck(this[_builtMapOwner$]);
      }
      update(updates) {
        updates(this);
      }
      replace(multimap) {
        if (__t$_BuiltListMultimapOfK$V().is(multimap)) {
          this[_setOwner$2](multimap);
        } else if (core.Map.is(multimap)) {
          this[_setWithCopyAndCheck$](multimap[$keys], dart.fn(k => multimap[$_get](k), T.dynamicTodynamic()));
        } else if (list_multimap.BuiltListMultimap.is(multimap)) {
          this[_setWithCopyAndCheck$](multimap.keys, dart.fn(k => multimap._get(k), T.dynamicToBuiltList()));
        } else {
          this[_setWithCopyAndCheck$](core.Iterable.as(dart.dload(multimap, 'keys')), dart.fn(k => dart.dsend(multimap, '_get', [k]), T.dynamicTodynamic()));
        }
      }
      addIterable(T, iterable, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        dart.nullable(dart.fnType(K, [T])).as(key);
        let value = opts && 'value' in opts ? opts.value : null;
        dart.nullable(dart.fnType(V, [T])).as(value);
        let values = opts && 'values' in opts ? opts.values : null;
        dart.nullable(dart.fnType(__t$IterableOfV(), [T])).as(values);
        if (value != null && values != null) {
          dart.throw(new core.ArgumentError.new("expected value or values to be set, got both"));
        }
        key == null ? key = dart.fn(x => K.as(x), dart.fnType(K, [T])) : null;
        if (values != null) {
          for (let element of iterable) {
            this.addValues(key(element), values(element));
          }
        } else {
          value == null ? value = dart.fn(x => V.as(x), dart.fnType(V, [T])) : null;
          for (let element of iterable) {
            this.add(key(element), value(element));
          }
        }
      }
      add(key, value) {
        K.as(key);
        V.as(value);
        this[_makeWriteableCopy$]();
        this[_checkKey$0](key);
        this[_checkValue$0](value);
        this[_getValuesBuilder$](key).add(value);
      }
      addValues(key, values) {
        K.as(key);
        __t$IterableOfV().as(values);
        values[$forEach](dart.fn(value => {
          this.add(key, value);
        }, __t$VTovoid()));
      }
      remove(key, value) {
        __t$VN().as(value);
        if (!K.is(key)) return false;
        this[_makeWriteableCopy$]();
        return this[_getValuesBuilder$](key).remove(value);
      }
      removeAll(key) {
        let t19;
        if (!K.is(key)) return __t$BuiltListOfV().new();
        this[_makeWriteableCopy$]();
        let builder = this[_builderMap$][$_get](key);
        if (builder == null) {
          this[_builderMap$][$_set](key, __t$ListBuilderOfV().new());
          t19 = this[_builtMap$][$_get](key);
          return t19 == null ? __t$BuiltListOfV().new() : t19;
        }
        let old = builder.build();
        builder.clear();
        return old;
      }
      clear() {
        this[_makeWriteableCopy$]();
        this[_builtMap$][$clear]();
        this[_builderMap$][$clear]();
      }
      _get(key) {
        this[_makeWriteableCopy$]();
        return K.is(key) ? this[_getValuesBuilder$](key) : __t$ListBuilderOfV().new();
      }
      [_getValuesBuilder$](key) {
        let result = this[_builderMap$][$_get](key);
        if (result == null) {
          let builtValues = this[_builtMap$][$_get](key);
          if (builtValues == null) {
            result = __t$ListBuilderOfV().new();
          } else {
            result = builtValues.toBuilder();
          }
          this[_builderMap$][$_set](key, result);
        }
        return result;
      }
      [_makeWriteableCopy$]() {
        if (this[_builtMapOwner$] != null) {
          this[_builtMap$] = __t$LinkedHashMapOfK$BuiltListOfV().from(this[_builtMap$]);
          this[_builtMapOwner$] = null;
        }
      }
      [_setOwner$2](builtListMultimap) {
        this[_builtMapOwner$] = builtListMultimap;
        this[_builtMap$] = builtListMultimap[_map$2];
        this[_builderMap$] = new (__t$LinkedMapOfK$ListBuilderOfV()).new();
      }
      [_setWithCopyAndCheck$](keys, lookup) {
        this[_builtMapOwner$] = null;
        this[_builtMap$] = new (__t$LinkedMapOfK$BuiltListOfV()).new();
        this[_builderMap$] = new (__t$LinkedMapOfK$ListBuilderOfV()).new();
        for (let key of keys) {
          if (K.is(key)) {
            for (let value of core.Iterable.as(dart.dcall(lookup, [key]))) {
              if (V.is(value)) {
                this.add(key, value);
              } else {
                dart.throw(new core.ArgumentError.new("map contained invalid value: " + dart.str(value) + ", for key " + dart.str(key)));
              }
            }
          } else {
            dart.throw(new core.ArgumentError.new("map contained invalid key: " + dart.str(key)));
          }
        }
      }
      [_checkKey$0](key) {
        if (null_safety.isSoundMode) return;
        if (K.is(null)) return;
        if (key == null) {
          dart.throw(new core.ArgumentError.new("null key"));
        }
      }
      [_checkValue$0](value) {
        if (null_safety.isSoundMode) return;
        if (V.is(null)) return;
        if (value == null) {
          dart.throw(new core.ArgumentError.new("null value"));
        }
      }
    }
    (ListMultimapBuilder._uninitialized = function() {
      this[__ListMultimapBuilder__builtMap] = null;
      this[_builtMapOwner$] = null;
      this[__ListMultimapBuilder__builderMap] = null;
      ;
    }).prototype = ListMultimapBuilder.prototype;
    dart.addTypeTests(ListMultimapBuilder);
    ListMultimapBuilder.prototype[_is_ListMultimapBuilder_default] = true;
    dart.addTypeCaches(ListMultimapBuilder);
    dart.setMethodSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapBuilder.__proto__),
      build: dart.fnType(list_multimap.BuiltListMultimap$(K, V), []),
      update: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [list_multimap.ListMultimapBuilder$(K, V)])]),
      replace: dart.fnType(dart.void, [dart.dynamic]),
      addIterable: dart.gFnType(T => [dart.void, [core.Iterable$(T)], {key: dart.nullable(core.Object), value: dart.nullable(core.Object), values: dart.nullable(core.Object)}, {}], T => [dart.nullable(core.Object)]),
      add: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addValues: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      removeAll: dart.fnType(list.BuiltList$(V), [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      _get: dart.fnType(list.ListBuilder$(V), [dart.nullable(core.Object)]),
      [_getValuesBuilder$]: dart.fnType(list.ListBuilder$(V), [K]),
      [_makeWriteableCopy$]: dart.fnType(dart.void, []),
      [_setOwner$2]: dart.fnType(dart.void, [list_multimap._BuiltListMultimap$(K, V)]),
      [_setWithCopyAndCheck$]: dart.fnType(dart.void, [core.Iterable, core.Function]),
      [_checkKey$0]: dart.fnType(dart.void, [K]),
      [_checkValue$0]: dart.fnType(dart.void, [V])
    }));
    dart.setGetterSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getGetters(ListMultimapBuilder.__proto__),
      [_builtMap$]: core.Map$(K, list.BuiltList$(V)),
      [_builderMap$]: core.Map$(K, list.ListBuilder$(V))
    }));
    dart.setSetterSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getSetters(ListMultimapBuilder.__proto__),
      [_builtMap$]: core.Map$(K, list.BuiltList$(V)),
      [_builderMap$]: core.Map$(K, list.ListBuilder$(V))
    }));
    dart.setLibraryUri(ListMultimapBuilder, I[11]);
    dart.setFieldSignature(ListMultimapBuilder, () => ({
      __proto__: dart.getFields(ListMultimapBuilder.__proto__),
      [__ListMultimapBuilder__builtMap]: dart.fieldType(dart.nullable(core.Map$(K, list.BuiltList$(V)))),
      [_builtMapOwner$]: dart.fieldType(dart.nullable(list_multimap._BuiltListMultimap$(K, V))),
      [__ListMultimapBuilder__builderMap]: dart.fieldType(dart.nullable(core.Map$(K, list.ListBuilder$(V))))
    }));
    return ListMultimapBuilder;
  });
  list_multimap.ListMultimapBuilder = list_multimap.ListMultimapBuilder$();
  dart.addTypeTests(list_multimap.ListMultimapBuilder, _is_ListMultimapBuilder_default);
  dart.trackLibraries("packages/built_collection/built_collection", {
    "package:built_collection/src/iterable.dart": iterable$,
    "package:built_collection/src/set.dart": set,
    "package:built_collection/src/internal/unmodifiable_set.dart": unmodifiable_set,
    "package:built_collection/src/internal/null_safety.dart": null_safety,
    "package:built_collection/src/internal/iterables.dart": iterables,
    "package:built_collection/src/internal/copy_on_write_set.dart": copy_on_write_set,
    "package:built_collection/src/internal/hash.dart": hash,
    "package:built_collection/src/list.dart": list,
    "package:built_collection/src/internal/copy_on_write_list.dart": copy_on_write_list,
    "package:built_collection/src/set_multimap.dart": set_multimap,
    "package:built_collection/src/internal/copy_on_write_map.dart": copy_on_write_map,
    "package:built_collection/built_collection.dart": built_collection,
    "package:built_collection/src/map.dart": map$,
    "package:built_collection/src/list_multimap.dart": list_multimap
  }, {
    "package:built_collection/src/iterable.dart": ["iterable/built_iterable.dart"],
    "package:built_collection/src/set.dart": ["set/built_set.dart", "set/set_builder.dart"],
    "package:built_collection/src/list.dart": ["list/built_list.dart", "list/list_builder.dart"],
    "package:built_collection/src/set_multimap.dart": ["set_multimap/built_set_multimap.dart", "set_multimap/set_multimap_builder.dart"],
    "package:built_collection/src/map.dart": ["map/built_map.dart", "map/map_builder.dart"],
    "package:built_collection/src/list_multimap.dart": ["list_multimap/built_list_multimap.dart", "list_multimap/list_multimap_builder.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/iterable/built_iterable.dart","src/set/built_set.dart","src/set.dart","src/set/set_builder.dart","src/internal/unmodifiable_set.dart","src/internal/null_safety.dart","src/internal/iterables.dart","src/internal/copy_on_write_set.dart","src/internal/hash.dart","src/list/built_list.dart","src/list.dart","src/list/list_builder.dart","src/internal/copy_on_write_list.dart","src/set_multimap/built_set_multimap.dart","src/set_multimap.dart","src/set_multimap/set_multimap_builder.dart","src/internal/copy_on_write_map.dart","src/map/built_map.dart","src/map.dart","src/map/map_builder.dart","src/list_multimap/built_list_multimap.dart","src/list_multimap.dart","src/list_multimap/list_multimap_builder.dart"],"names":[],"mappings":"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","file":"built_collection.sound.ddc.js"}');
  // Exports:
  return {
    src__iterable: iterable$,
    src__set: set,
    src__internal__unmodifiable_set: unmodifiable_set,
    src__internal__null_safety: null_safety,
    src__internal__iterables: iterables,
    src__internal__copy_on_write_set: copy_on_write_set,
    src__internal__hash: hash,
    src__list: list,
    src__internal__copy_on_write_list: copy_on_write_list,
    src__set_multimap: set_multimap,
    src__internal__copy_on_write_map: copy_on_write_map,
    built_collection: built_collection,
    src__map: map$,
    src__list_multimap: list_multimap
  };
}));

//# sourceMappingURL=built_collection.sound.ddc.js.map
