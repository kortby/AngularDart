define(['dart_sdk'], (function load__packages__collection__collection(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var union_set = Object.create(dart.library);
  var unmodifiable_wrappers = Object.create(dart.library);
  var wrappers = Object.create(dart.library);
  var empty_unmodifiable_set = Object.create(dart.library);
  var collection$ = Object.create(dart.library);
  var union_set_controller = Object.create(dart.library);
  var equality_set = Object.create(dart.library);
  var equality_map = Object.create(dart.library);
  var $toSet = dartx.toSet;
  var $length = dartx.length;
  var $fold = dartx.fold;
  var $iterator = dartx.iterator;
  var $expand = dartx.expand;
  var $where = dartx.where;
  var $any = dartx.any;
  var $contains = dartx.contains;
  var $cast = dartx.cast;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $plus = dartx['+'];
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $asMap = dartx.asMap;
  var $clear = dartx.clear;
  var $fillRange = dartx.fillRange;
  var $getRange = dartx.getRange;
  var $indexOf = dartx.indexOf;
  var $indexWhere = dartx.indexWhere;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $lastIndexOf = dartx.lastIndexOf;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $remove = dartx.remove;
  var $removeAt = dartx.removeAt;
  var $removeLast = dartx.removeLast;
  var $removeRange = dartx.removeRange;
  var $removeWhere = dartx.removeWhere;
  var $replaceRange = dartx.replaceRange;
  var $retainWhere = dartx.retainWhere;
  var $reversed = dartx.reversed;
  var $setAll = dartx.setAll;
  var $setRange = dartx.setRange;
  var $shuffle = dartx.shuffle;
  var $sort = dartx.sort;
  var $sublist = dartx.sublist;
  var $elementAt = dartx.elementAt;
  var $every = dartx.every;
  var $first = dartx.first;
  var $firstWhere = dartx.firstWhere;
  var $followedBy = dartx.followedBy;
  var $forEach = dartx.forEach;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $last = dartx.last;
  var $lastWhere = dartx.lastWhere;
  var $map = dartx.map;
  var $reduce = dartx.reduce;
  var $single = dartx.single;
  var $singleWhere = dartx.singleWhere;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $toList = dartx.toList;
  var $whereType = dartx.whereType;
  var $toString = dartx.toString;
  var $putIfAbsent = dartx.putIfAbsent;
  var $addEntries = dartx.addEntries;
  var $containsKey = dartx.containsKey;
  var $containsValue = dartx.containsValue;
  var $entries = dartx.entries;
  var $keys = dartx.keys;
  var $values = dartx.values;
  var $update = dartx.update;
  var $updateAll = dartx.updateAll;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _js_helper.PrivateSymbol.new('_base', _base$4));
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:collection/src/unmodifiable_wrappers.dart",
    "package:collection/src/union_set.dart",
    "package:collection/src/wrappers.dart",
    "package:collection/src/empty_unmodifiable_set.dart",
    "package:collection/src/union_set_controller.dart",
    "package:collection/src/equality_set.dart",
    "package:collection/src/equality_map.dart"
  ];
  var _sets = dart.privateName(union_set, "_sets");
  var _disjoint = dart.privateName(union_set, "_disjoint");
  var _iterable = dart.privateName(union_set, "_iterable");
  const _is_UnmodifiableSetMixin_default = Symbol('_is_UnmodifiableSetMixin_default');
  unmodifiable_wrappers.UnmodifiableSetMixin$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    class UnmodifiableSetMixin extends core.Object {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      add(value) {
        E.as(value);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      addAll(elements) {
        __t$IterableOfE().as(elements);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      remove(value) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      removeAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      retainAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      removeWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      retainWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw();
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (UnmodifiableSetMixin.new = function() {
      ;
    }).prototype = UnmodifiableSetMixin.prototype;
    dart.addTypeTests(UnmodifiableSetMixin);
    UnmodifiableSetMixin.prototype[_is_UnmodifiableSetMixin_default] = true;
    dart.addTypeCaches(UnmodifiableSetMixin);
    UnmodifiableSetMixin[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(UnmodifiableSetMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableSetMixin.__proto__),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, [core.Iterable]),
      retainAll: dart.fnType(dart.void, [core.Iterable]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(UnmodifiableSetMixin, I[0]);
    return UnmodifiableSetMixin;
  });
  unmodifiable_wrappers.UnmodifiableSetMixin = unmodifiable_wrappers.UnmodifiableSetMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetMixin, _is_UnmodifiableSetMixin_default);
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  union_set.UnionSet$ = dart.generic(E => {
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$intAndSetOfEToint = () => (__t$intAndSetOfEToint = dart.constFn(dart.fnType(core.int, [core.int, __t$SetOfE()])))();
    var __t$SetOfEToSetOfE = () => (__t$SetOfEToSetOfE = dart.constFn(dart.fnType(__t$SetOfE(), [__t$SetOfE()])))();
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    var __t$SetOfETobool = () => (__t$SetOfETobool = dart.constFn(dart.fnType(core.bool, [__t$SetOfE()])))();
    const SetBase_UnmodifiableSetMixin$36 = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(E) {};
    (SetBase_UnmodifiableSetMixin$36.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(SetBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnionSet extends SetBase_UnmodifiableSetMixin$36 {
      get length() {
        return this[_disjoint] ? this[_sets][$fold](core.int, 0, dart.fn((length, set) => length + set[$length], __t$intAndSetOfEToint())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        let allElements = this[_sets][$expand](E, dart.fn(set => set, __t$SetOfEToSetOfE()));
        return this[_disjoint] ? allElements : allElements[$where](dart.bind(__t$LinkedHashSetOfE().new(), 'add'));
      }
      contains(element) {
        return this[_sets][$any](dart.fn(set => set.contains(element), __t$SetOfETobool()));
      }
      lookup(element) {
        for (let set of this[_sets]) {
          let result = set.lookup(element);
          if (result != null || set.contains(null)) return result;
        }
        return null;
      }
      toSet() {
        return (() => {
          let t0 = __t$LinkedHashSetOfE().new();
          for (let set of this[_sets])
            t0.addAll(set);
          return t0;
        })();
      }
    }
    (UnionSet.new = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets] = sets;
      this[_disjoint] = disjoint;
      ;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.addTypeCaches(UnionSet);
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_iterable]: core.Iterable$(E)
    }));
    dart.setLibraryUri(UnionSet, I[1]);
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets]: dart.finalFieldType(core.Set$(core.Set$(E))),
      [_disjoint]: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  union_set.UnionSet = union_set.UnionSet$();
  dart.addTypeTests(union_set.UnionSet, _is_UnionSet_default);
  var _base = dart.privateName(wrappers, "DelegatingList._base");
  var _base$ = dart.privateName(wrappers, "_base");
  const _is__DelegatingIterableBase_default = Symbol('_is__DelegatingIterableBase_default');
  wrappers._DelegatingIterableBase$ = dart.generic(E => {
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class _DelegatingIterableBase extends core.Object {
      any(test) {
        return this[_base$][$any](test);
      }
      cast(T) {
        return this[_base$][$cast](T);
      }
      contains(element) {
        return this[_base$][$contains](element);
      }
      elementAt(index) {
        return this[_base$][$elementAt](index);
      }
      every(test) {
        return this[_base$][$every](test);
      }
      expand(T, f) {
        return this[_base$][$expand](T, f);
      }
      get first() {
        return this[_base$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_base$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_base$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this[_base$][$followedBy](other);
      }
      forEach(f) {
        return this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get iterator() {
        return this[_base$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this[_base$][$join](separator);
      }
      get last() {
        return this[_base$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_base$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this[_base$][$length];
      }
      map(T, f) {
        return this[_base$][$map](T, f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_base$][$reduce](combine);
      }
      retype(T) {
        return this.cast(T);
      }
      get single() {
        return this[_base$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_base$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this[_base$][$skip](n);
      }
      skipWhile(test) {
        return this[_base$][$skipWhile](test);
      }
      take(n) {
        return this[_base$][$take](n);
      }
      takeWhile(test) {
        return this[_base$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_base$][$toList]({growable: growable});
      }
      toSet() {
        return this[_base$][$toSet]();
      }
      where(test) {
        return this[_base$][$where](test);
      }
      whereType(T) {
        return this[_base$][$whereType](T);
      }
      toString() {
        return this[_base$][$toString]();
      }
    }
    (_DelegatingIterableBase.new = function() {
      ;
    }).prototype = _DelegatingIterableBase.prototype;
    _DelegatingIterableBase.prototype[dart.isIterable] = true;
    dart.addTypeTests(_DelegatingIterableBase);
    _DelegatingIterableBase.prototype[_is__DelegatingIterableBase_default] = true;
    dart.addTypeCaches(_DelegatingIterableBase);
    _DelegatingIterableBase[dart.implements] = () => [core.Iterable$(E)];
    dart.setMethodSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getMethods(_DelegatingIterableBase.__proto__),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
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
      retype: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
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
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getGetters(_DelegatingIterableBase.__proto__),
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
      length: core.int,
      [$length]: core.int,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(_DelegatingIterableBase, I[2]);
    dart.defineExtensionMethods(_DelegatingIterableBase, [
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
    dart.defineExtensionAccessors(_DelegatingIterableBase, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _DelegatingIterableBase;
  });
  wrappers._DelegatingIterableBase = wrappers._DelegatingIterableBase$();
  dart.addTypeTests(wrappers._DelegatingIterableBase, _is__DelegatingIterableBase_default);
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  wrappers.DelegatingList$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    class DelegatingList extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base[$cast](E);
      }
      _get(index) {
        return this[_base$][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        this[_base$][$_set](index, value);
        return value$;
      }
      ['+'](other) {
        __t$ListOfE().as(other);
        return this[_base$][$plus](other);
      }
      add(value) {
        E.as(value);
        this[_base$][$add](value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        this[_base$][$addAll](iterable);
      }
      asMap() {
        return this[_base$][$asMap]();
      }
      cast(T) {
        return this[_base$][$cast](T);
      }
      clear() {
        this[_base$][$clear]();
      }
      fillRange(start, end, fillValue = null) {
        __t$EN().as(fillValue);
        this[_base$][$fillRange](start, end, fillValue);
      }
      set first(value) {
        E.as(value);
        if (this.isEmpty) dart.throw(new core.IndexError.new(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this[_base$][$getRange](start, end);
      }
      indexOf(element, start = 0) {
        E.as(element);
        return this[_base$][$indexOf](element, start);
      }
      indexWhere(test, start = 0) {
        return this[_base$][$indexWhere](test, start);
      }
      insert(index, element) {
        E.as(element);
        this[_base$][$insert](index, element);
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        this[_base$][$insertAll](index, iterable);
      }
      set last(value) {
        E.as(value);
        if (this.isEmpty) dart.throw(new core.IndexError.new(0, this));
        this._set(this.length - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start = null) {
        E.as(element);
        return this[_base$][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start = null) {
        return this[_base$][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_base$][$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this[_base$][$remove](value);
      }
      removeAt(index) {
        return this[_base$][$removeAt](index);
      }
      removeLast() {
        return this[_base$][$removeLast]();
      }
      removeRange(start, end) {
        this[_base$][$removeRange](start, end);
      }
      removeWhere(test) {
        this[_base$][$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        __t$IterableOfE().as(iterable);
        this[_base$][$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        this[_base$][$retainWhere](test);
      }
      retype(T) {
        return this.cast(T);
      }
      get reversed() {
        return this[_base$][$reversed];
      }
      setAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        this[_base$][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        this[_base$][$setRange](start, end, iterable, skipCount);
      }
      shuffle(random = null) {
        this[_base$][$shuffle](random);
      }
      sort(compare = null) {
        this[_base$][$sort](compare);
      }
      sublist(start, end = null) {
        return this[_base$][$sublist](start, end);
      }
    }
    (DelegatingList.new = function(base) {
      this[_base] = base;
      DelegatingList.__proto__.new.call(this);
      ;
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    dart.addTypeCaches(DelegatingList);
    DelegatingList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      '+': dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      [$plus]: dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.List$(T), []], T => [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [dart.nullable(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [dart.nullable(core.Object)]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      [$indexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insert]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      lastIndexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      [$lastIndexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [core.List$(T), []], T => [dart.nullable(core.Object)]),
      setAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$setAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      setRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)], [core.int]),
      shuffle: dart.fnType(dart.void, [], [dart.nullable(math.Random)]),
      [$shuffle]: dart.fnType(dart.void, [], [dart.nullable(math.Random)]),
      sort: dart.fnType(dart.void, [], [dart.nullable(dart.fnType(core.int, [E, E]))]),
      [$sort]: dart.fnType(dart.void, [], [dart.nullable(dart.fnType(core.int, [E, E]))]),
      sublist: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E)
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: dart.nullable(core.Object),
      [$first]: dart.nullable(core.Object),
      last: dart.nullable(core.Object),
      [$last]: dart.nullable(core.Object),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(DelegatingList, I[2]);
    dart.setFieldSignature(DelegatingList, () => ({
      __proto__: dart.getFields(DelegatingList.__proto__),
      [_base$]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  wrappers.DelegatingList = wrappers.DelegatingList$();
  dart.addTypeTests(wrappers.DelegatingList, _is_DelegatingList_default);
  const _is_NonGrowableListMixin_default = Symbol('_is_NonGrowableListMixin_default');
  unmodifiable_wrappers.NonGrowableListMixin$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    class NonGrowableListMixin extends core.Object {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot change the length of a fixed-length list"));
      }
      set length(newLength) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      add(value) {
        E.as(value);
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      insert(index, element) {
        E.as(element);
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      remove(value) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      removeAt(index) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      removeLast() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      removeWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      retainWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      removeRange(start, end) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      replaceRange(start, end, iterable) {
        __t$IterableOfE().as(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      clear() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw();
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (NonGrowableListMixin.new = function() {
      ;
    }).prototype = NonGrowableListMixin.prototype;
    NonGrowableListMixin.prototype[dart.isList] = true;
    dart.addTypeTests(NonGrowableListMixin);
    NonGrowableListMixin.prototype[_is_NonGrowableListMixin_default] = true;
    dart.addTypeCaches(NonGrowableListMixin);
    NonGrowableListMixin[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getMethods(NonGrowableListMixin.__proto__),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$add]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      insert: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insert]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
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
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getSetters(NonGrowableListMixin.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(NonGrowableListMixin, I[0]);
    dart.defineExtensionMethods(NonGrowableListMixin, [
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'removeRange',
      'replaceRange',
      'clear'
    ]);
    dart.defineExtensionAccessors(NonGrowableListMixin, ['length']);
    return NonGrowableListMixin;
  });
  unmodifiable_wrappers.NonGrowableListMixin = unmodifiable_wrappers.NonGrowableListMixin$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListMixin, _is_NonGrowableListMixin_default);
  const _is_NonGrowableListView_default = Symbol('_is_NonGrowableListView_default');
  unmodifiable_wrappers.NonGrowableListView$ = dart.generic(E => {
    const DelegatingList_NonGrowableListMixin$36 = class DelegatingList_NonGrowableListMixin extends wrappers.DelegatingList$(E) {};
    (DelegatingList_NonGrowableListMixin$36.new = function(base) {
      DelegatingList_NonGrowableListMixin$36.__proto__.new.call(this, base);
    }).prototype = DelegatingList_NonGrowableListMixin$36.prototype;
    dart.applyMixin(DelegatingList_NonGrowableListMixin$36, unmodifiable_wrappers.NonGrowableListMixin$(E));
    class NonGrowableListView extends DelegatingList_NonGrowableListMixin$36 {}
    (NonGrowableListView.new = function(listBase) {
      NonGrowableListView.__proto__.new.call(this, listBase);
      ;
    }).prototype = NonGrowableListView.prototype;
    dart.addTypeTests(NonGrowableListView);
    NonGrowableListView.prototype[_is_NonGrowableListView_default] = true;
    dart.addTypeCaches(NonGrowableListView);
    dart.setLibraryUri(NonGrowableListView, I[0]);
    return NonGrowableListView;
  });
  unmodifiable_wrappers.NonGrowableListView = unmodifiable_wrappers.NonGrowableListView$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListView, _is_NonGrowableListView_default);
  var _base$0 = dart.privateName(wrappers, "DelegatingSet._base");
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  wrappers.DelegatingSet$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$DelegatingSetOfE = () => (__t$DelegatingSetOfE = dart.constFn(wrappers.DelegatingSet$(E)))();
    class DelegatingSet extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base$0];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base.cast(E);
      }
      add(value) {
        E.as(value);
        return this[_base$].add(value);
      }
      addAll(elements) {
        __t$IterableOfE().as(elements);
        this[_base$].addAll(elements);
      }
      cast(T) {
        return this[_base$].cast(T);
      }
      clear() {
        this[_base$].clear();
      }
      containsAll(other) {
        return this[_base$].containsAll(other);
      }
      difference(other) {
        return this[_base$].difference(other);
      }
      intersection(other) {
        return this[_base$].intersection(other);
      }
      lookup(element) {
        return this[_base$].lookup(element);
      }
      remove(value) {
        return this[_base$].remove(value);
      }
      removeAll(elements) {
        this[_base$].removeAll(elements);
      }
      removeWhere(test) {
        this[_base$].removeWhere(test);
      }
      retainAll(elements) {
        this[_base$].retainAll(elements);
      }
      retype(T) {
        return this.cast(T);
      }
      retainWhere(test) {
        this[_base$].retainWhere(test);
      }
      union(other) {
        __t$SetOfE().as(other);
        return this[_base$].union(other);
      }
      toSet() {
        return new (__t$DelegatingSetOfE()).new(this[_base$].toSet());
      }
    }
    (DelegatingSet.new = function(base) {
      this[_base$0] = base;
      DelegatingSet.__proto__.new.call(this);
      ;
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    dart.addTypeCaches(DelegatingSet);
    DelegatingSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      cast: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      difference: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      retype: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      union: dart.fnType(core.Set$(E), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(DelegatingSet, I[2]);
    dart.setFieldSignature(DelegatingSet, () => ({
      __proto__: dart.getFields(DelegatingSet.__proto__),
      [_base$]: dart.finalFieldType(core.Set$(E))
    }));
    dart.defineExtensionMethods(DelegatingSet, ['cast', 'toSet']);
    return DelegatingSet;
  });
  wrappers.DelegatingSet = wrappers.DelegatingSet$();
  dart.addTypeTests(wrappers.DelegatingSet, _is_DelegatingSet_default);
  const _is_UnmodifiableSetView_default = Symbol('_is_UnmodifiableSetView_default');
  unmodifiable_wrappers.UnmodifiableSetView$ = dart.generic(E => {
    const DelegatingSet_UnmodifiableSetMixin$36 = class DelegatingSet_UnmodifiableSetMixin extends wrappers.DelegatingSet$(E) {};
    (DelegatingSet_UnmodifiableSetMixin$36.new = function(base) {
      DelegatingSet_UnmodifiableSetMixin$36.__proto__.new.call(this, base);
    }).prototype = DelegatingSet_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(DelegatingSet_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnmodifiableSetView extends DelegatingSet_UnmodifiableSetMixin$36 {}
    (UnmodifiableSetView.new = function(setBase) {
      UnmodifiableSetView.__proto__.new.call(this, setBase);
      ;
    }).prototype = UnmodifiableSetView.prototype;
    dart.addTypeTests(UnmodifiableSetView);
    UnmodifiableSetView.prototype[_is_UnmodifiableSetView_default] = true;
    dart.addTypeCaches(UnmodifiableSetView);
    dart.setLibraryUri(UnmodifiableSetView, I[0]);
    return UnmodifiableSetView;
  });
  unmodifiable_wrappers.UnmodifiableSetView = unmodifiable_wrappers.UnmodifiableSetView$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetView, _is_UnmodifiableSetView_default);
  const _is_UnmodifiableMapMixin_default = Symbol('_is_UnmodifiableMapMixin_default');
  unmodifiable_wrappers.UnmodifiableMapMixin$ = dart.generic((K, V) => {
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$VoidToV = () => (__t$VoidToV = dart.constFn(dart.fnType(V, [])))();
    class UnmodifiableMapMixin extends core.Object {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Map"));
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        unmodifiable_wrappers.UnmodifiableMapMixin._throw();
        return value$;
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        __t$VoidToV().as(ifAbsent);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
      addAll(other) {
        __t$MapOfK$V().as(other);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
      remove(key) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
      set first(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
      set last(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw();
      }
    }
    (UnmodifiableMapMixin.new = function() {
      ;
    }).prototype = UnmodifiableMapMixin.prototype;
    UnmodifiableMapMixin.prototype[dart.isMap] = true;
    dart.addTypeTests(UnmodifiableMapMixin);
    UnmodifiableMapMixin.prototype[_is_UnmodifiableMapMixin_default] = true;
    dart.addTypeCaches(UnmodifiableMapMixin);
    UnmodifiableMapMixin[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableMapMixin.__proto__),
      _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      putIfAbsent: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$putIfAbsent]: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(V, [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(V, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getSetters(UnmodifiableMapMixin.__proto__),
      first: dart.dynamic,
      last: dart.dynamic
    }));
    dart.setLibraryUri(UnmodifiableMapMixin, I[0]);
    dart.defineExtensionMethods(UnmodifiableMapMixin, [
      '_set',
      'putIfAbsent',
      'addAll',
      'remove',
      'clear'
    ]);
    return UnmodifiableMapMixin;
  });
  unmodifiable_wrappers.UnmodifiableMapMixin = unmodifiable_wrappers.UnmodifiableMapMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableMapMixin, _is_UnmodifiableMapMixin_default);
  var _base$1 = dart.privateName(wrappers, "DelegatingIterable._base");
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  wrappers.DelegatingIterable$ = dart.generic(E => {
    class DelegatingIterable extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base$1];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base[$cast](E);
      }
    }
    (DelegatingIterable.new = function(base) {
      this[_base$1] = base;
      DelegatingIterable.__proto__.new.call(this);
      ;
    }).prototype = DelegatingIterable.prototype;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    dart.addTypeCaches(DelegatingIterable);
    dart.setLibraryUri(DelegatingIterable, I[2]);
    dart.setFieldSignature(DelegatingIterable, () => ({
      __proto__: dart.getFields(DelegatingIterable.__proto__),
      [_base$]: dart.finalFieldType(core.Iterable$(E))
    }));
    return DelegatingIterable;
  });
  wrappers.DelegatingIterable = wrappers.DelegatingIterable$();
  dart.addTypeTests(wrappers.DelegatingIterable, _is_DelegatingIterable_default);
  var _base$2 = dart.privateName(wrappers, "DelegatingQueue._base");
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  wrappers.DelegatingQueue$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingQueue extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base$2];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base.cast(E);
      }
      add(value) {
        E.as(value);
        this[_base$].add(value);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        this[_base$].addAll(iterable);
      }
      addFirst(value) {
        E.as(value);
        this[_base$].addFirst(value);
      }
      addLast(value) {
        E.as(value);
        this[_base$].addLast(value);
      }
      cast(T) {
        return this[_base$].cast(T);
      }
      clear() {
        this[_base$].clear();
      }
      remove(object) {
        return this[_base$].remove(object);
      }
      removeWhere(test) {
        this[_base$].removeWhere(test);
      }
      retainWhere(test) {
        this[_base$].retainWhere(test);
      }
      retype(T) {
        return this.cast(T);
      }
      removeFirst() {
        return this[_base$].removeFirst();
      }
      removeLast() {
        return this[_base$].removeLast();
      }
    }
    (DelegatingQueue.new = function(queue) {
      this[_base$2] = queue;
      DelegatingQueue.__proto__.new.call(this);
      ;
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    dart.addTypeCaches(DelegatingQueue);
    DelegatingQueue[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      cast: dart.gFnType(T => [collection.Queue$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [collection.Queue$(T), []], T => [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [collection.Queue$(T), []], T => [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      removeLast: dart.fnType(E, [])
    }));
    dart.setLibraryUri(DelegatingQueue, I[2]);
    dart.setFieldSignature(DelegatingQueue, () => ({
      __proto__: dart.getFields(DelegatingQueue.__proto__),
      [_base$]: dart.finalFieldType(collection.Queue$(E))
    }));
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  wrappers.DelegatingQueue = wrappers.DelegatingQueue$();
  dart.addTypeTests(wrappers.DelegatingQueue, _is_DelegatingQueue_default);
  var _base$3 = dart.privateName(wrappers, "DelegatingMap._base");
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  wrappers.DelegatingMap$ = dart.generic((K, V) => {
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$MapEntryOfK$V = () => (__t$MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    var __t$IterableOfMapEntryOfK$V = () => (__t$IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(__t$MapEntryOfK$V())))();
    var __t$KAndVToV = () => (__t$KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    var __t$VoidToV = () => (__t$VoidToV = dart.constFn(dart.fnType(V, [])))();
    var __t$VToV = () => (__t$VToV = dart.constFn(dart.fnType(V, [V])))();
    var __t$VoidToNV = () => (__t$VoidToNV = dart.constFn(dart.nullable(__t$VoidToV())))();
    class DelegatingMap extends core.Object {
      get [_base$]() {
        return this[_base$3];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(K, V, base) {
        return base[$cast](K, V);
      }
      _get(key) {
        return this[_base$][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        this[_base$][$_set](key, value);
        return value$;
      }
      addAll(other) {
        __t$MapOfK$V().as(other);
        this[_base$][$addAll](other);
      }
      addEntries(entries) {
        __t$IterableOfMapEntryOfK$V().as(entries);
        this[_base$][$addEntries](entries);
      }
      clear() {
        this[_base$][$clear]();
      }
      cast(K2, V2) {
        return this[_base$][$cast](K2, V2);
      }
      containsKey(key) {
        return this[_base$][$containsKey](key);
      }
      containsValue(value) {
        return this[_base$][$containsValue](value);
      }
      get entries() {
        return this[_base$][$entries];
      }
      forEach(f) {
        this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get keys() {
        return this[_base$][$keys];
      }
      get length() {
        return this[_base$][$length];
      }
      map(K2, V2, transform) {
        return this[_base$][$map](K2, V2, transform);
      }
      putIfAbsent(key, ifAbsent) {
        K.as(key);
        __t$VoidToV().as(ifAbsent);
        return this[_base$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this[_base$][$remove](key);
      }
      removeWhere(test) {
        return this[_base$][$removeWhere](test);
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      get values() {
        return this[_base$][$values];
      }
      toString() {
        return this[_base$][$toString]();
      }
      update(key, update, opts) {
        K.as(key);
        __t$VToV().as(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        __t$VoidToNV().as(ifAbsent);
        return this[_base$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        __t$KAndVToV().as(update);
        return this[_base$][$updateAll](update);
      }
    }
    (DelegatingMap.new = function(base) {
      this[_base$3] = base;
      ;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    dart.addTypeCaches(DelegatingMap);
    DelegatingMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$_get]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addEntries: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$addEntries]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
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
      putIfAbsent: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$putIfAbsent]: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      remove: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []], (K2, V2) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
      update: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)], {ifAbsent: dart.nullable(core.Object)}, {}),
      [$update]: dart.fnType(V, [dart.nullable(core.Object), dart.nullable(core.Object)], {ifAbsent: dart.nullable(core.Object)}, {}),
      updateAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [$updateAll]: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
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
    dart.setLibraryUri(DelegatingMap, I[2]);
    dart.setFieldSignature(DelegatingMap, () => ({
      __proto__: dart.getFields(DelegatingMap.__proto__),
      [_base$]: dart.finalFieldType(core.Map$(K, V))
    }));
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  wrappers.DelegatingMap = wrappers.DelegatingMap$();
  dart.addTypeTests(wrappers.DelegatingMap, _is_DelegatingMap_default);
  var _baseMap$ = dart.privateName(wrappers, "_baseMap");
  const _is_MapKeySet_default = Symbol('_is_MapKeySet_default');
  wrappers.MapKeySet$ = dart.generic(E => {
    var __t$ETobool = () => (__t$ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    const _DelegatingIterableBase_UnmodifiableSetMixin$36 = class _DelegatingIterableBase_UnmodifiableSetMixin extends wrappers._DelegatingIterableBase$(E) {};
    (_DelegatingIterableBase_UnmodifiableSetMixin$36.new = function() {
      _DelegatingIterableBase_UnmodifiableSetMixin$36.__proto__.new.call(this);
    }).prototype = _DelegatingIterableBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(_DelegatingIterableBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class MapKeySet extends _DelegatingIterableBase_UnmodifiableSetMixin$36 {
      get [_base$]() {
        return this[_baseMap$][$keys];
      }
      cast(T) {
        if (wrappers.MapKeySet$(T).is(this)) {
          return wrappers.MapKeySet$(T).as(this);
        }
        return core.Set.castFrom(E, T, this);
      }
      contains(element) {
        return this[_baseMap$][$containsKey](element);
      }
      get isEmpty() {
        return this[_baseMap$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap$][$isNotEmpty];
      }
      get length() {
        return this[_baseMap$][$length];
      }
      toString() {
        return collection.SetBase.setToString(this);
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !other.contains(element), __t$ETobool()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        return dart.throw(new core.UnsupportedError.new("MapKeySet doesn't support lookup()."));
      }
      retype(T) {
        return core.Set.castFrom(E, T, this);
      }
      union(other) {
        let t1;
        __t$SetOfE().as(other);
        t1 = this.toSet();
        return (() => {
          t1.addAll(other);
          return t1;
        })();
      }
    }
    (MapKeySet.new = function(_baseMap) {
      this[_baseMap$] = _baseMap;
      MapKeySet.__proto__.new.call(this);
      ;
    }).prototype = MapKeySet.prototype;
    dart.addTypeTests(MapKeySet);
    MapKeySet.prototype[_is_MapKeySet_default] = true;
    dart.addTypeCaches(MapKeySet);
    dart.setMethodSignature(MapKeySet, () => ({
      __proto__: dart.getMethods(MapKeySet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      difference: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      lookup: dart.fnType(E, [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      union: dart.fnType(core.Set$(E), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(MapKeySet, () => ({
      __proto__: dart.getGetters(MapKeySet.__proto__),
      [_base$]: core.Iterable$(E)
    }));
    dart.setLibraryUri(MapKeySet, I[2]);
    dart.setFieldSignature(MapKeySet, () => ({
      __proto__: dart.getFields(MapKeySet.__proto__),
      [_baseMap$]: dart.finalFieldType(core.Map$(E, dart.dynamic))
    }));
    dart.defineExtensionMethods(MapKeySet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapKeySet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapKeySet;
  });
  wrappers.MapKeySet = wrappers.MapKeySet$();
  dart.addTypeTests(wrappers.MapKeySet, _is_MapKeySet_default);
  var _keyForValue$ = dart.privateName(wrappers, "_keyForValue");
  const _is_MapValueSet_default = Symbol('_is_MapValueSet_default');
  wrappers.MapValueSet$ = dart.generic((K, V) => {
    var __t$KAndVTovoid = () => (__t$KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    var __t$VoidToV = () => (__t$VoidToV = dart.constFn(dart.fnType(V, [])))();
    var __t$IterableOfV = () => (__t$IterableOfV = dart.constFn(core.Iterable$(V)))();
    var __t$VTobool = () => (__t$VTobool = dart.constFn(dart.fnType(core.bool, [V])))();
    var __t$_IdentityHashSetOfV = () => (__t$_IdentityHashSetOfV = dart.constFn(collection._IdentityHashSet$(V)))();
    var __t$SetOfV = () => (__t$SetOfV = dart.constFn(core.Set$(V)))();
    class MapValueSet extends wrappers._DelegatingIterableBase$(V) {
      get [_base$]() {
        return this[_baseMap$][$values];
      }
      cast(T) {
        if (core.Set$(T).is(this)) {
          return core.Set$(T).as(this);
        }
        return core.Set.castFrom(V, T, this);
      }
      contains(element) {
        let t1;
        if (!V.is(element)) return false;
        let key = (t1 = element, this[_keyForValue$](t1));
        return this[_baseMap$][$containsKey](key);
      }
      get isEmpty() {
        return this[_baseMap$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap$][$isNotEmpty];
      }
      get length() {
        return this[_baseMap$][$length];
      }
      toString() {
        return this.toSet()[$toString]();
      }
      add(value) {
        let t1;
        V.as(value);
        let key = (t1 = value, this[_keyForValue$](t1));
        let result = false;
        this[_baseMap$][$putIfAbsent](key, dart.fn(() => {
          result = true;
          return value;
        }, __t$VoidToV()));
        return result;
      }
      addAll(elements) {
        __t$IterableOfV().as(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        return this[_baseMap$][$clear]();
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !other.contains(element), __t$VTobool()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        let t1;
        if (!V.is(element)) return null;
        let key = (t1 = element, this[_keyForValue$](t1));
        return this[_baseMap$][$_get](key);
      }
      remove(element) {
        let t1;
        if (!V.is(element)) return false;
        let key = (t1 = element, this[_keyForValue$](t1));
        if (!this[_baseMap$][$containsKey](key)) return false;
        this[_baseMap$][$remove](key);
        return true;
      }
      removeAll(elements) {
        return elements[$forEach](dart.bind(this, 'remove'));
      }
      removeWhere(test) {
        let toRemove = [];
        this[_baseMap$][$forEach](dart.fn((key, value) => {
          if (test(value)) toRemove[$add](key);
        }, __t$KAndVTovoid()));
        toRemove[$forEach](dart.bind(this[_baseMap$], $remove));
      }
      retainAll(elements) {
        let t1, t1$;
        let valuesToRetain = new (__t$_IdentityHashSetOfV()).new();
        for (let element of elements) {
          if (!V.is(element)) continue;
          let key = (t1 = element, this[_keyForValue$](t1));
          if (!this[_baseMap$][$containsKey](key)) continue;
          valuesToRetain.add((t1$ = this[_baseMap$][$_get](key), t1$ == null ? V.as(null) : t1$));
        }
        let keysToRemove = [];
        this[_baseMap$][$forEach](dart.fn((k, v) => {
          if (!valuesToRetain.contains(v)) keysToRemove[$add](k);
        }, __t$KAndVTovoid()));
        keysToRemove[$forEach](dart.bind(this[_baseMap$], $remove));
      }
      retainWhere(test) {
        return this.removeWhere(dart.fn(element => !test(element), __t$VTobool()));
      }
      retype(T) {
        return core.Set.castFrom(V, T, this);
      }
      union(other) {
        let t1;
        __t$SetOfV().as(other);
        t1 = this.toSet();
        return (() => {
          t1.addAll(other);
          return t1;
        })();
      }
    }
    (MapValueSet.new = function(_baseMap, _keyForValue) {
      this[_baseMap$] = _baseMap;
      this[_keyForValue$] = _keyForValue;
      MapValueSet.__proto__.new.call(this);
      ;
    }).prototype = MapValueSet.prototype;
    dart.addTypeTests(MapValueSet);
    MapValueSet.prototype[_is_MapValueSet_default] = true;
    dart.addTypeCaches(MapValueSet);
    MapValueSet[dart.implements] = () => [core.Set$(V)];
    dart.setMethodSignature(MapValueSet, () => ({
      __proto__: dart.getMethods(MapValueSet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      add: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      difference: dart.fnType(core.Set$(V), [core.Set$(dart.nullable(core.Object))]),
      intersection: dart.fnType(core.Set$(V), [core.Set$(dart.nullable(core.Object))]),
      lookup: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(dart.nullable(core.Object))]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []], T => [dart.nullable(core.Object)]),
      union: dart.fnType(core.Set$(V), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(MapValueSet, () => ({
      __proto__: dart.getGetters(MapValueSet.__proto__),
      [_base$]: core.Iterable$(V)
    }));
    dart.setLibraryUri(MapValueSet, I[2]);
    dart.setFieldSignature(MapValueSet, () => ({
      __proto__: dart.getFields(MapValueSet.__proto__),
      [_baseMap$]: dart.finalFieldType(core.Map$(K, V)),
      [_keyForValue$]: dart.finalFieldType(dart.fnType(K, [V]))
    }));
    dart.defineExtensionMethods(MapValueSet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapValueSet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapValueSet;
  });
  wrappers.MapValueSet = wrappers.MapValueSet$();
  dart.addTypeTests(wrappers.MapValueSet, _is_MapValueSet_default);
  var _base$4 = dart.privateName(empty_unmodifiable_set, "_base");
  const _is_EmptyUnmodifiableSet_default = Symbol('_is_EmptyUnmodifiableSet_default');
  empty_unmodifiable_set.EmptyUnmodifiableSet$ = dart.generic(E => {
    var __t$EmptyIterableOfE = () => (__t$EmptyIterableOfE = dart.constFn(_internal.EmptyIterable$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$DelegatingIterableOfE = () => (__t$DelegatingIterableOfE = dart.constFn(wrappers.DelegatingIterable$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    const IterableBase_UnmodifiableSetMixin$36 = class IterableBase_UnmodifiableSetMixin extends collection.IterableBase$(E) {};
    (IterableBase_UnmodifiableSetMixin$36.new = function() {
      IterableBase_UnmodifiableSetMixin$36.__proto__.new.call(this);
    }).prototype = IterableBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(IterableBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class EmptyUnmodifiableSet extends IterableBase_UnmodifiableSetMixin$36 {
      get iterator() {
        return new (__t$EmptyIterableOfE()).new()[$iterator];
      }
      get length() {
        return 0;
      }
      cast(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      contains(element) {
        return false;
      }
      containsAll(other) {
        return other[$isEmpty];
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return new (__t$DelegatingIterableOfE()).new(other);
      }
      lookup(element) {
        return null;
      }
      retype(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return orElse != null ? orElse() : dart.throw(new core.StateError.new("No element"));
      }
      whereType(T) {
        return new (_internal.EmptyIterable$(T)).new();
      }
      toSet() {
        return __t$LinkedHashSetOfE().new();
      }
      union(other) {
        __t$SetOfE().as(other);
        return __t$LinkedHashSetOfE().of(other);
      }
      intersection(other) {
        return __t$LinkedHashSetOfE().new();
      }
      difference(other) {
        return __t$LinkedHashSetOfE().new();
      }
      get [_base$]() {
        return __t$SetOfE().as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
      }
    }
    (EmptyUnmodifiableSet.new = function() {
      EmptyUnmodifiableSet.__proto__.new.call(this);
      ;
    }).prototype = EmptyUnmodifiableSet.prototype;
    dart.addTypeTests(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet.prototype[_is_EmptyUnmodifiableSet_default] = true;
    dart.addTypeCaches(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet[dart.implements] = () => [unmodifiable_wrappers.UnmodifiableSetView$(E)];
    dart.setMethodSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getMethods(EmptyUnmodifiableSet.__proto__),
      cast: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []], T => [dart.nullable(core.Object)]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(dart.nullable(core.Object))]),
      lookup: dart.fnType(dart.nullable(E), [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []], T => [dart.nullable(core.Object)]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      union: dart.fnType(core.Set$(E), [dart.nullable(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))]),
      difference: dart.fnType(core.Set$(E), [core.Set$(dart.nullable(core.Object))])
    }));
    dart.setGetterSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getGetters(EmptyUnmodifiableSet.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_base$]: core.Set$(E)
    }));
    dart.setLibraryUri(EmptyUnmodifiableSet, I[3]);
    dart.defineExtensionMethods(EmptyUnmodifiableSet, [
      'cast',
      'contains',
      'followedBy',
      'singleWhere',
      'whereType',
      'toSet'
    ]);
    dart.defineExtensionAccessors(EmptyUnmodifiableSet, ['iterator', 'length']);
    return EmptyUnmodifiableSet;
  });
  empty_unmodifiable_set.EmptyUnmodifiableSet = empty_unmodifiable_set.EmptyUnmodifiableSet$();
  dart.addTypeTests(empty_unmodifiable_set.EmptyUnmodifiableSet, _is_EmptyUnmodifiableSet_default);
  var set = dart.privateName(union_set_controller, "UnionSetController.set");
  var _sets$ = dart.privateName(union_set_controller, "_sets");
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  union_set_controller.UnionSetController$ = dart.generic(E => {
    var __t$SetOfE = () => (__t$SetOfE = dart.constFn(core.Set$(E)))();
    var __t$LinkedHashSetOfSetOfE = () => (__t$LinkedHashSetOfSetOfE = dart.constFn(collection.LinkedHashSet$(__t$SetOfE())))();
    var __t$UnionSetOfE = () => (__t$UnionSetOfE = dart.constFn(union_set.UnionSet$(E)))();
    class UnionSetController extends core.Object {
      get set() {
        return this[set];
      }
      set set(value) {
        super.set = value;
      }
      add(component) {
        __t$SetOfE().as(component);
        this[_sets$].add(component);
      }
      remove(component) {
        __t$SetOfE().as(component);
        return this[_sets$].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSetController.__.call(this, __t$LinkedHashSetOfSetOfE().new(), disjoint);
    }).prototype = UnionSetController.prototype;
    (UnionSetController.__ = function(_sets, disjoint) {
      this[_sets$] = _sets;
      this[set] = new (__t$UnionSetOfE()).new(_sets, {disjoint: disjoint});
      ;
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.addTypeCaches(UnionSetController);
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(UnionSetController, I[4]);
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      set: dart.finalFieldType(union_set.UnionSet$(E)),
      [_sets$]: dart.finalFieldType(core.Set$(core.Set$(E)))
    }));
    return UnionSetController;
  });
  union_set_controller.UnionSetController = union_set_controller.UnionSetController$();
  dart.addTypeTests(union_set_controller.UnionSetController, _is_UnionSetController_default);
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  equality_set.EqualitySet$ = dart.generic(E => {
    var __t$LinkedHashSetOfE = () => (__t$LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class EqualitySet extends wrappers.DelegatingSet$(E) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, __t$LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, __t$LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    dart.addTypeCaches(EqualitySet);
    dart.setLibraryUri(EqualitySet, I[5]);
    return EqualitySet;
  });
  equality_set.EqualitySet = equality_set.EqualitySet$();
  dart.addTypeTests(equality_set.EqualitySet, _is_EqualitySet_default);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  equality_map.EqualityMap$ = dart.generic((K, V) => {
    var __t$LinkedHashMapOfK$V = () => (__t$LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    class EqualityMap extends wrappers.DelegatingMap$(K, V) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, __t$LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, __t$LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    dart.addTypeCaches(EqualityMap);
    dart.setLibraryUri(EqualityMap, I[6]);
    return EqualityMap;
  });
  equality_map.EqualityMap = equality_map.EqualityMap$();
  dart.addTypeTests(equality_map.EqualityMap, _is_EqualityMap_default);
  dart.trackLibraries("packages/collection/collection", {
    "package:collection/src/union_set.dart": union_set,
    "package:collection/src/unmodifiable_wrappers.dart": unmodifiable_wrappers,
    "package:collection/src/wrappers.dart": wrappers,
    "package:collection/src/empty_unmodifiable_set.dart": empty_unmodifiable_set,
    "package:collection/collection.dart": collection$,
    "package:collection/src/union_set_controller.dart": union_set_controller,
    "package:collection/src/equality_set.dart": equality_set,
    "package:collection/src/equality_map.dart": equality_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/unmodifiable_wrappers.dart","src/union_set.dart","src/wrappers.dart","src/empty_unmodifiable_set.dart","src/union_set_controller.dart","src/equality_set.dart","src/equality_map.dart"],"names":[],"mappings":"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","file":"collection.sound.ddc.js"}');
  // Exports:
  return {
    src__union_set: union_set,
    src__unmodifiable_wrappers: unmodifiable_wrappers,
    src__wrappers: wrappers,
    src__empty_unmodifiable_set: empty_unmodifiable_set,
    collection: collection$,
    src__union_set_controller: union_set_controller,
    src__equality_set: equality_set,
    src__equality_map: equality_map
  };
}));

//# sourceMappingURL=collection.sound.ddc.js.map
