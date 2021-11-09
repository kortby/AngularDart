define(['dart_sdk', 'packages/built_collection/built_collection', 'packages/built_value/json_object', 'packages/fixnum/fixnum'], (function load__packages__built_value__serializer(dart_sdk, packages__built_collection__built_collection, packages__built_value__json_object, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const list = packages__built_collection__built_collection.src__list;
  const list_multimap = packages__built_collection__built_collection.src__list_multimap;
  const map = packages__built_collection__built_collection.src__map;
  const set = packages__built_collection__built_collection.src__set;
  const set_multimap = packages__built_collection__built_collection.src__set_multimap;
  const hash = packages__built_collection__built_collection.src__internal__hash;
  const json_object = packages__built_value__json_object.json_object;
  const fixnum = packages__fixnum__fixnum.fixnum;
  var built_list_multimap_serializer = Object.create(dart.library);
  var serializer$ = Object.create(dart.library);
  var string_serializer = Object.create(dart.library);
  var regexp_serializer = Object.create(dart.library);
  var null_serializer = Object.create(dart.library);
  var int_serializer = Object.create(dart.library);
  var double_serializer = Object.create(dart.library);
  var built_set_serializer = Object.create(dart.library);
  var built_set_multimap_serializer = Object.create(dart.library);
  var built_map_serializer = Object.create(dart.library);
  var built_list_serializer = Object.create(dart.library);
  var built_json_serializers = Object.create(dart.library);
  var bool_serializer = Object.create(dart.library);
  var uri_serializer = Object.create(dart.library);
  var num_serializer = Object.create(dart.library);
  var json_object_serializer = Object.create(dart.library);
  var int64_serializer = Object.create(dart.library);
  var duration_serializer = Object.create(dart.library);
  var date_time_serializer = Object.create(dart.library);
  var big_int_serializer = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $toList = dartx.toList;
  var $modulo = dartx['%'];
  var $length = dartx.length;
  var $elementAt = dartx.elementAt;
  var $map = dartx.map;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var $_equals = dartx._equals;
  var $replaceRange = dartx.replaceRange;
  var $isNaN = dartx.isNaN;
  var $isInfinite = dartx.isInfinite;
  var $isNegative = dartx.isNegative;
  var $toDouble = dartx.toDouble;
  var $first = dartx.first;
  var $addAll = dartx.addAll;
  var $sublist = dartx.sublist;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    BuiltListOfType: () => (T.BuiltListOfType = dart.constFn(list.BuiltList$(core.Type)))(),
    BuiltListMultimapOfObject$Object: () => (T.BuiltListMultimapOfObject$Object = dart.constFn(list_multimap.BuiltListMultimap$(core.Object, core.Object)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    dynamicToObjectN: () => (T.dynamicToObjectN = dart.constFn(dart.fnType(T.ObjectN(), [dart.dynamic])))(),
    ListMultimapBuilderOfObject$Object: () => (T.ListMultimapBuilderOfObject$Object = dart.constFn(list_multimap.ListMultimapBuilder$(core.Object, core.Object)))(),
    IterableOfObjectN: () => (T.IterableOfObjectN = dart.constFn(core.Iterable$(T.ObjectN())))(),
    ObjectNToObjectN: () => (T.ObjectNToObjectN = dart.constFn(dart.fnType(T.ObjectN(), [T.ObjectN()])))(),
    ListBuilderOfObject: () => (T.ListBuilderOfObject = dart.constFn(list.ListBuilder$(core.Object)))(),
    VoidToListBuilderOfObject: () => (T.VoidToListBuilderOfObject = dart.constFn(dart.fnType(T.ListBuilderOfObject(), [])))(),
    VoidToListMultimapBuilderOfObject$Object: () => (T.VoidToListMultimapBuilderOfObject$Object = dart.constFn(dart.fnType(T.ListMultimapBuilderOfObject$Object(), [])))(),
    MapBuilderOfObject$Object: () => (T.MapBuilderOfObject$Object = dart.constFn(map.MapBuilder$(core.Object, core.Object)))(),
    VoidToMapBuilderOfObject$Object: () => (T.VoidToMapBuilderOfObject$Object = dart.constFn(dart.fnType(T.MapBuilderOfObject$Object(), [])))(),
    SetBuilderOfObject: () => (T.SetBuilderOfObject = dart.constFn(set.SetBuilder$(core.Object)))(),
    VoidToSetBuilderOfObject: () => (T.VoidToSetBuilderOfObject = dart.constFn(dart.fnType(T.SetBuilderOfObject(), [])))(),
    SetMultimapBuilderOfObject$Object: () => (T.SetMultimapBuilderOfObject$Object = dart.constFn(set_multimap.SetMultimapBuilder$(core.Object, core.Object)))(),
    VoidToSetMultimapBuilderOfObject$Object: () => (T.VoidToSetMultimapBuilderOfObject$Object = dart.constFn(dart.fnType(T.SetMultimapBuilderOfObject$Object(), [])))(),
    BuiltSetOfObject: () => (T.BuiltSetOfObject = dart.constFn(set.BuiltSet$(core.Object)))(),
    BuiltSetOfType: () => (T.BuiltSetOfType = dart.constFn(set.BuiltSet$(core.Type)))(),
    BuiltMapOfObject$Object: () => (T.BuiltMapOfObject$Object = dart.constFn(map.BuiltMap$(core.Object, core.Object)))(),
    BuiltListOfObject: () => (T.BuiltListOfObject = dart.constFn(list.BuiltList$(core.Object)))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    ListOfObjectN: () => (T.ListOfObjectN = dart.constFn(core.List$(T.ObjectN())))(),
    MapBuilderOfType$Serializer: () => (T.MapBuilderOfType$Serializer = dart.constFn(map.MapBuilder$(core.Type, serializer$.Serializer)))(),
    MapBuilderOfString$Serializer: () => (T.MapBuilderOfString$Serializer = dart.constFn(map.MapBuilder$(core.String, serializer$.Serializer)))(),
    MapBuilderOfFullType$Function: () => (T.MapBuilderOfFullType$Function = dart.constFn(map.MapBuilder$(serializer$.FullType, core.Function)))(),
    ListBuilderOfSerializerPlugin: () => (T.ListBuilderOfSerializerPlugin = dart.constFn(list.ListBuilder$(serializer$.SerializerPlugin)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constList([], serializer$.FullType);
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[1] || CT.C1,
        [FullType_root]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[1] || CT.C1,
        [FullType_root]: dart.wrapType(core.Object)
      });
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4], serializer$.FullType);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[3] || CT.C3,
        [FullType_root]: dart.wrapType(list.BuiltList)
      });
    },
    get C6() {
      return C[6] = dart.constList([C[4] || CT.C4, C[4] || CT.C4], serializer$.FullType);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[6] || CT.C6,
        [FullType_root]: dart.wrapType(list_multimap.BuiltListMultimap)
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[6] || CT.C6,
        [FullType_root]: dart.wrapType(map.BuiltMap)
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[3] || CT.C3,
        [FullType_root]: dart.wrapType(set.BuiltSet)
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: serializer$.FullType.prototype,
        [FullType_nullable]: false,
        [FullType_parameters]: C[6] || CT.C6,
        [FullType_root]: dart.wrapType(set_multimap.BuiltSetMultimap)
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "package:built_value/src/built_list_multimap_serializer.dart",
    "package:built_value/serializer.dart",
    "package:built_value/src/string_serializer.dart",
    "package:built_value/src/regexp_serializer.dart",
    "package:built_value/src/null_serializer.dart",
    "package:built_value/src/int_serializer.dart",
    "package:built_value/src/double_serializer.dart",
    "package:built_value/src/built_set_serializer.dart",
    "package:built_value/src/built_set_multimap_serializer.dart",
    "package:built_value/src/built_map_serializer.dart",
    "package:built_value/src/built_list_serializer.dart",
    "package:built_value/src/built_json_serializers.dart",
    "package:built_value/src/bool_serializer.dart",
    "package:built_value/src/uri_serializer.dart",
    "package:built_value/src/num_serializer.dart",
    "package:built_value/src/json_object_serializer.dart",
    "package:built_value/src/int64_serializer.dart",
    "package:built_value/src/duration_serializer.dart",
    "package:built_value/src/date_time_serializer.dart",
    "package:built_value/src/big_int_serializer.dart"
  ];
  var structured = dart.privateName(built_list_multimap_serializer, "BuiltListMultimapSerializer.structured");
  var types = dart.privateName(built_list_multimap_serializer, "BuiltListMultimapSerializer.types");
  var wireName = dart.privateName(built_list_multimap_serializer, "BuiltListMultimapSerializer.wireName");
  var FullType_nullable = dart.privateName(serializer$, "FullType.nullable");
  var FullType_parameters = dart.privateName(serializer$, "FullType.parameters");
  var FullType_root = dart.privateName(serializer$, "FullType.root");
  built_list_multimap_serializer.BuiltListMultimapSerializer = class BuiltListMultimapSerializer extends core.Object {
    get structured() {
      return this[structured];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtListMultimap, opts) {
      list_multimap.BuiltListMultimap.as(builtListMultimap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = T.JSArrayOfObjectN().of([]);
      for (let key of builtListMultimap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        result[$add](builtListMultimap._get(key).map(T.ObjectN(), dart.fn(value => serializers.serialize(value, {specifiedType: valueType}), T.dynamicToObjectN()))[$toList]());
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? T.ListMultimapBuilderOfObject$Object().new() : list_multimap.ListMultimapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let values = T.IterableOfObjectN().as(serialized[$elementAt](i + 1))[$map](T.ObjectN(), dart.fn(value => serializers.deserialize(value, {specifiedType: valueType}), T.ObjectNToObjectN()));
        for (let value of values) {
          result.add(key, value);
        }
      }
      return result.build();
    }
  };
  (built_list_multimap_serializer.BuiltListMultimapSerializer.new = function() {
    this[structured] = true;
    this[types] = T.BuiltListOfType().new([dart.wrapType(list_multimap.BuiltListMultimap), T.BuiltListMultimapOfObject$Object().new()[$runtimeType]]);
    this[wireName] = "listMultimap";
    ;
  }).prototype = built_list_multimap_serializer.BuiltListMultimapSerializer.prototype;
  dart.addTypeTests(built_list_multimap_serializer.BuiltListMultimapSerializer);
  dart.addTypeCaches(built_list_multimap_serializer.BuiltListMultimapSerializer);
  built_list_multimap_serializer.BuiltListMultimapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(list_multimap.BuiltListMultimap)];
  dart.setMethodSignature(built_list_multimap_serializer.BuiltListMultimapSerializer, () => ({
    __proto__: dart.getMethods(built_list_multimap_serializer.BuiltListMultimapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(dart.nullable(core.Object)), [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(list_multimap.BuiltListMultimap, [serializer$.Serializers, core.Iterable$(dart.nullable(core.Object))], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(built_list_multimap_serializer.BuiltListMultimapSerializer, I[0]);
  dart.setFieldSignature(built_list_multimap_serializer.BuiltListMultimapSerializer, () => ({
    __proto__: dart.getFields(built_list_multimap_serializer.BuiltListMultimapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var types$ = dart.privateName(serializer$, "SerializersFor.types");
  serializer$.SerializersFor = class SerializersFor extends core.Object {
    get types() {
      return this[types$];
    }
    set types(value) {
      super.types = value;
    }
  };
  (serializer$.SerializersFor.new = function(types) {
    this[types$] = types;
    ;
  }).prototype = serializer$.SerializersFor.prototype;
  dart.addTypeTests(serializer$.SerializersFor);
  dart.addTypeCaches(serializer$.SerializersFor);
  dart.setLibraryUri(serializer$.SerializersFor, I[1]);
  dart.setFieldSignature(serializer$.SerializersFor, () => ({
    __proto__: dart.getFields(serializer$.SerializersFor.__proto__),
    types: dart.finalFieldType(core.List$(core.Type))
  }));
  serializer$.Serializers = class Serializers extends core.Object {
    static new() {
      let t0;
      return (t0 = built_json_serializers.BuiltJsonSerializersBuilder.new(), (() => {
        t0.add(new big_int_serializer.BigIntSerializer.new());
        t0.add(new bool_serializer.BoolSerializer.new());
        t0.add(new built_list_serializer.BuiltListSerializer.new());
        t0.add(new built_list_multimap_serializer.BuiltListMultimapSerializer.new());
        t0.add(new built_map_serializer.BuiltMapSerializer.new());
        t0.add(new built_set_serializer.BuiltSetSerializer.new());
        t0.add(new built_set_multimap_serializer.BuiltSetMultimapSerializer.new());
        t0.add(new date_time_serializer.DateTimeSerializer.new());
        t0.add(new double_serializer.DoubleSerializer.new());
        t0.add(new duration_serializer.DurationSerializer.new());
        t0.add(new int_serializer.IntSerializer.new());
        t0.add(new int64_serializer.Int64Serializer.new());
        t0.add(new json_object_serializer.JsonObjectSerializer.new());
        t0.add(new null_serializer.NullSerializer.new());
        t0.add(new num_serializer.NumSerializer.new());
        t0.add(new regexp_serializer.RegExpSerializer.new());
        t0.add(new string_serializer.StringSerializer.new());
        t0.add(new uri_serializer.UriSerializer.new());
        t0.addBuilderFactory(C[2] || CT.C2, dart.fn(() => T.ListBuilderOfObject().new(), T.VoidToListBuilderOfObject()));
        t0.addBuilderFactory(C[5] || CT.C5, dart.fn(() => T.ListMultimapBuilderOfObject$Object().new(), T.VoidToListMultimapBuilderOfObject$Object()));
        t0.addBuilderFactory(C[7] || CT.C7, dart.fn(() => T.MapBuilderOfObject$Object().new(), T.VoidToMapBuilderOfObject$Object()));
        t0.addBuilderFactory(C[8] || CT.C8, dart.fn(() => T.SetBuilderOfObject().new(), T.VoidToSetBuilderOfObject()));
        t0.addBuilderFactory(C[9] || CT.C9, dart.fn(() => T.SetMultimapBuilderOfObject$Object().new(), T.VoidToSetMultimapBuilderOfObject$Object()));
        return t0;
      })()).build();
    }
    static merge(serializersIterable) {
      let t0;
      return (t0 = serializer$.Serializers.new().toBuilder(), (() => {
        t0.mergeAll(serializersIterable);
        return t0;
      })()).build();
    }
  };
  (serializer$.Serializers[dart.mixinNew] = function() {
  }).prototype = serializer$.Serializers.prototype;
  dart.addTypeTests(serializer$.Serializers);
  dart.addTypeCaches(serializer$.Serializers);
  dart.setLibraryUri(serializer$.Serializers, I[1]);
  serializer$.SerializerPlugin = class SerializerPlugin extends core.Object {};
  (serializer$.SerializerPlugin.new = function() {
    ;
  }).prototype = serializer$.SerializerPlugin.prototype;
  dart.addTypeTests(serializer$.SerializerPlugin);
  dart.addTypeCaches(serializer$.SerializerPlugin);
  dart.setLibraryUri(serializer$.SerializerPlugin, I[1]);
  serializer$.SerializersBuilder = class SerializersBuilder extends core.Object {};
  (serializer$.SerializersBuilder[dart.mixinNew] = function() {
  }).prototype = serializer$.SerializersBuilder.prototype;
  dart.addTypeTests(serializer$.SerializersBuilder);
  dart.addTypeCaches(serializer$.SerializersBuilder);
  dart.setLibraryUri(serializer$.SerializersBuilder, I[1]);
  var _nullabilitySuffix = dart.privateName(serializer$, "_nullabilitySuffix");
  const root$ = FullType_root;
  const parameters$ = FullType_parameters;
  const nullable = FullType_nullable;
  serializer$.FullType = class FullType extends core.Object {
    get root() {
      return this[root$];
    }
    set root(value) {
      super.root = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get nullable() {
      return this[nullable];
    }
    set nullable(value) {
      super.nullable = value;
    }
    get isUnspecified() {
      return this.root == null;
    }
    withNullability(nullability) {
      return nullability ? new serializer$.FullType.nullable(this.root, this.parameters) : new serializer$.FullType.new(this.root, this.parameters);
    }
    _equals(other) {
      if (other == null) return false;
      if (other === this) return true;
      if (!serializer$.FullType.is(other)) return false;
      if (!dart.equals(this.root, other.root)) return false;
      if (this.nullable !== other.nullable) return false;
      if (this.parameters[$length] !== other.parameters[$length]) return false;
      for (let i = 0; i !== this.parameters[$length]; i = i + 1) {
        if (!this.parameters[$_get](i)._equals(other.parameters[$_get](i))) return false;
      }
      return true;
    }
    get hashCode() {
      return (hash.hash2(this.root, hash.hashObjects(this.parameters)) ^ (this.nullable ? 1768878041 : 0)) >>> 0;
    }
    toString() {
      return this.isUnspecified ? "unspecified" : (this.parameters[$isEmpty] ? serializer$.FullType._getRawName(this.root) : serializer$.FullType._getRawName(this.root) + "<" + this.parameters[$join](", ") + ">") + this[_nullabilitySuffix];
    }
    get [_nullabilitySuffix]() {
      return this.nullable ? "?" : "";
    }
    static _getRawName(type) {
      let name = dart.toString(type);
      let genericsStart = name[$indexOf]("<");
      return genericsStart === -1 ? name : name[$substring](0, genericsStart);
    }
  };
  (serializer$.FullType.new = function(root, parameters = C[1] || CT.C1) {
    this[root$] = root;
    this[parameters$] = parameters;
    this[nullable] = false;
    ;
  }).prototype = serializer$.FullType.prototype;
  (serializer$.FullType.nullable = function(root, parameters = C[1] || CT.C1) {
    this[root$] = root;
    this[parameters$] = parameters;
    this[nullable] = true;
    ;
  }).prototype = serializer$.FullType.prototype;
  dart.addTypeTests(serializer$.FullType);
  dart.addTypeCaches(serializer$.FullType);
  dart.setMethodSignature(serializer$.FullType, () => ({
    __proto__: dart.getMethods(serializer$.FullType.__proto__),
    withNullability: dart.fnType(serializer$.FullType, [core.bool]),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setGetterSignature(serializer$.FullType, () => ({
    __proto__: dart.getGetters(serializer$.FullType.__proto__),
    isUnspecified: core.bool,
    [_nullabilitySuffix]: core.String
  }));
  dart.setLibraryUri(serializer$.FullType, I[1]);
  dart.setFieldSignature(serializer$.FullType, () => ({
    __proto__: dart.getFields(serializer$.FullType.__proto__),
    root: dart.finalFieldType(dart.nullable(core.Type)),
    parameters: dart.finalFieldType(core.List$(serializer$.FullType)),
    nullable: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(serializer$.FullType, ['_equals', 'toString']);
  dart.defineExtensionAccessors(serializer$.FullType, ['hashCode']);
  dart.defineLazy(serializer$.FullType, {
    /*serializer$.FullType.unspecified*/get unspecified() {
      return C[0] || CT.C0;
    },
    /*serializer$.FullType.object*/get object() {
      return C[4] || CT.C4;
    }
  }, false);
  const _is_Serializer_default = Symbol('_is_Serializer_default');
  serializer$.Serializer$ = dart.generic(T => {
    class Serializer extends core.Object {}
    (Serializer.new = function() {
      ;
    }).prototype = Serializer.prototype;
    dart.addTypeTests(Serializer);
    Serializer.prototype[_is_Serializer_default] = true;
    dart.addTypeCaches(Serializer);
    dart.setLibraryUri(Serializer, I[1]);
    return Serializer;
  });
  serializer$.Serializer = serializer$.Serializer$();
  dart.addTypeTests(serializer$.Serializer, _is_Serializer_default);
  const _is_PrimitiveSerializer_default = Symbol('_is_PrimitiveSerializer_default');
  serializer$.PrimitiveSerializer$ = dart.generic(T => {
    class PrimitiveSerializer extends core.Object {}
    (PrimitiveSerializer.new = function() {
      ;
    }).prototype = PrimitiveSerializer.prototype;
    dart.addTypeTests(PrimitiveSerializer);
    PrimitiveSerializer.prototype[_is_PrimitiveSerializer_default] = true;
    dart.addTypeCaches(PrimitiveSerializer);
    PrimitiveSerializer[dart.implements] = () => [serializer$.Serializer$(T)];
    dart.setLibraryUri(PrimitiveSerializer, I[1]);
    return PrimitiveSerializer;
  });
  serializer$.PrimitiveSerializer = serializer$.PrimitiveSerializer$();
  dart.addTypeTests(serializer$.PrimitiveSerializer, _is_PrimitiveSerializer_default);
  const _is_StructuredSerializer_default = Symbol('_is_StructuredSerializer_default');
  serializer$.StructuredSerializer$ = dart.generic(T => {
    class StructuredSerializer extends core.Object {}
    (StructuredSerializer.new = function() {
      ;
    }).prototype = StructuredSerializer.prototype;
    dart.addTypeTests(StructuredSerializer);
    StructuredSerializer.prototype[_is_StructuredSerializer_default] = true;
    dart.addTypeCaches(StructuredSerializer);
    StructuredSerializer[dart.implements] = () => [serializer$.Serializer$(T)];
    dart.setLibraryUri(StructuredSerializer, I[1]);
    return StructuredSerializer;
  });
  serializer$.StructuredSerializer = serializer$.StructuredSerializer$();
  dart.addTypeTests(serializer$.StructuredSerializer, _is_StructuredSerializer_default);
  var json$ = dart.privateName(serializer$, "DeserializationError.json");
  var type$ = dart.privateName(serializer$, "DeserializationError.type");
  var error$ = dart.privateName(serializer$, "DeserializationError.error");
  serializer$.DeserializationError = class DeserializationError extends core.Error {
    get json() {
      return this[json$];
    }
    set json(value) {
      super.json = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    static new(json, type, error) {
      let limitedJson = dart.toString(json);
      if (limitedJson.length > 80) {
        limitedJson = limitedJson[$replaceRange](77, limitedJson.length, "...");
      }
      return new serializer$.DeserializationError.__(limitedJson, type, error);
    }
    toString() {
      return "Deserializing '" + dart.str(this.json) + "' to '" + dart.str(this.type) + "' failed due to: " + dart.str(this.error);
    }
  };
  (serializer$.DeserializationError.__ = function(json, type, error) {
    this[json$] = json;
    this[type$] = type;
    this[error$] = error;
    serializer$.DeserializationError.__proto__.new.call(this);
    ;
  }).prototype = serializer$.DeserializationError.prototype;
  dart.addTypeTests(serializer$.DeserializationError);
  dart.addTypeCaches(serializer$.DeserializationError);
  dart.setLibraryUri(serializer$.DeserializationError, I[1]);
  dart.setFieldSignature(serializer$.DeserializationError, () => ({
    __proto__: dart.getFields(serializer$.DeserializationError.__proto__),
    json: dart.finalFieldType(dart.nullable(core.String)),
    type: dart.finalFieldType(serializer$.FullType),
    error: dart.finalFieldType(core.Error)
  }));
  dart.defineExtensionMethods(serializer$.DeserializationError, ['toString']);
  var structured$ = dart.privateName(string_serializer, "StringSerializer.structured");
  var types$0 = dart.privateName(string_serializer, "StringSerializer.types");
  var wireName$ = dart.privateName(string_serializer, "StringSerializer.wireName");
  string_serializer.StringSerializer = class StringSerializer extends core.Object {
    get structured() {
      return this[structured$];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$0];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, string, opts) {
      core.String.as(string);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return string;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.String.as(serialized);
    }
  };
  (string_serializer.StringSerializer.new = function() {
    this[structured$] = false;
    this[types$0] = T.BuiltListOfType().new([dart.wrapType(core.String)]);
    this[wireName$] = "String";
    ;
  }).prototype = string_serializer.StringSerializer.prototype;
  dart.addTypeTests(string_serializer.StringSerializer);
  dart.addTypeCaches(string_serializer.StringSerializer);
  string_serializer.StringSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.String)];
  dart.setMethodSignature(string_serializer.StringSerializer, () => ({
    __proto__: dart.getMethods(string_serializer.StringSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.String, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(string_serializer.StringSerializer, I[2]);
  dart.setFieldSignature(string_serializer.StringSerializer, () => ({
    __proto__: dart.getFields(string_serializer.StringSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var types$1 = dart.privateName(regexp_serializer, "RegExpSerializer.types");
  var wireName$0 = dart.privateName(regexp_serializer, "RegExpSerializer.wireName");
  regexp_serializer.RegExpSerializer = class RegExpSerializer extends core.Object {
    get types() {
      return this[types$1];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$0];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, value, opts) {
      core.RegExp.as(value);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return value.pattern;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.RegExp.new(core.String.as(serialized));
    }
  };
  (regexp_serializer.RegExpSerializer.new = function() {
    this[types$1] = T.BuiltListOfType().new([dart.wrapType(core.RegExp), regexp_serializer._runtimeType]);
    this[wireName$0] = "RegExp";
    ;
  }).prototype = regexp_serializer.RegExpSerializer.prototype;
  dart.addTypeTests(regexp_serializer.RegExpSerializer);
  dart.addTypeCaches(regexp_serializer.RegExpSerializer);
  regexp_serializer.RegExpSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.RegExp)];
  dart.setMethodSignature(regexp_serializer.RegExpSerializer, () => ({
    __proto__: dart.getMethods(regexp_serializer.RegExpSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.RegExp, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(regexp_serializer.RegExpSerializer, I[3]);
  dart.setFieldSignature(regexp_serializer.RegExpSerializer, () => ({
    __proto__: dart.getFields(regexp_serializer.RegExpSerializer.__proto__),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(regexp_serializer, {
    /*regexp_serializer._runtimeType*/get _runtimeType() {
      return core.RegExp.new("")[$runtimeType];
    }
  }, false);
  var structured$0 = dart.privateName(null_serializer, "NullSerializer.structured");
  var types$2 = dart.privateName(null_serializer, "NullSerializer.types");
  var wireName$1 = dart.privateName(null_serializer, "NullSerializer.wireName");
  null_serializer.NullSerializer = class NullSerializer extends core.Object {
    get structured() {
      return this[structured$0];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$2];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$1];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, value, opts) {
      core.Null.as(value);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      dart.throw(new core.UnimplementedError.new());
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      dart.throw(new core.UnimplementedError.new());
    }
  };
  (null_serializer.NullSerializer.new = function() {
    this[structured$0] = false;
    this[types$2] = T.BuiltListOfType().new([dart.wrapType(core.Null)]);
    this[wireName$1] = "Null";
    ;
  }).prototype = null_serializer.NullSerializer.prototype;
  dart.addTypeTests(null_serializer.NullSerializer);
  dart.addTypeCaches(null_serializer.NullSerializer);
  null_serializer.NullSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.Null)];
  dart.setMethodSignature(null_serializer.NullSerializer, () => ({
    __proto__: dart.getMethods(null_serializer.NullSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.Null, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(null_serializer.NullSerializer, I[4]);
  dart.setFieldSignature(null_serializer.NullSerializer, () => ({
    __proto__: dart.getFields(null_serializer.NullSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$1 = dart.privateName(int_serializer, "IntSerializer.structured");
  var types$3 = dart.privateName(int_serializer, "IntSerializer.types");
  var wireName$2 = dart.privateName(int_serializer, "IntSerializer.wireName");
  int_serializer.IntSerializer = class IntSerializer extends core.Object {
    get structured() {
      return this[structured$1];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$3];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$2];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, integer, opts) {
      core.int.as(integer);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return integer;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.int.as(serialized);
    }
  };
  (int_serializer.IntSerializer.new = function() {
    this[structured$1] = false;
    this[types$3] = T.BuiltListOfType().new([dart.wrapType(core.int)]);
    this[wireName$2] = "int";
    ;
  }).prototype = int_serializer.IntSerializer.prototype;
  dart.addTypeTests(int_serializer.IntSerializer);
  dart.addTypeCaches(int_serializer.IntSerializer);
  int_serializer.IntSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.int)];
  dart.setMethodSignature(int_serializer.IntSerializer, () => ({
    __proto__: dart.getMethods(int_serializer.IntSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.int, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(int_serializer.IntSerializer, I[5]);
  dart.setFieldSignature(int_serializer.IntSerializer, () => ({
    __proto__: dart.getFields(int_serializer.IntSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$2 = dart.privateName(double_serializer, "DoubleSerializer.structured");
  var types$4 = dart.privateName(double_serializer, "DoubleSerializer.types");
  var wireName$3 = dart.privateName(double_serializer, "DoubleSerializer.wireName");
  double_serializer.DoubleSerializer = class DoubleSerializer extends core.Object {
    get structured() {
      return this[structured$2];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$4];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$3];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, aDouble, opts) {
      core.double.as(aDouble);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      if (aDouble[$isNaN]) {
        return double_serializer.DoubleSerializer.nan;
      } else if (aDouble[$isInfinite]) {
        return aDouble[$isNegative] ? double_serializer.DoubleSerializer.negativeInfinity : double_serializer.DoubleSerializer.infinity;
      } else {
        return aDouble;
      }
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      if (dart.equals(serialized, double_serializer.DoubleSerializer.nan)) {
        return 0 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.negativeInfinity)) {
        return -1 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.infinity)) {
        return 1 / 0;
      } else {
        return core.num.as(serialized)[$toDouble]();
      }
    }
  };
  (double_serializer.DoubleSerializer.new = function() {
    this[structured$2] = false;
    this[types$4] = T.BuiltListOfType().new([dart.wrapType(core.double)]);
    this[wireName$3] = "double";
    ;
  }).prototype = double_serializer.DoubleSerializer.prototype;
  dart.addTypeTests(double_serializer.DoubleSerializer);
  dart.addTypeCaches(double_serializer.DoubleSerializer);
  double_serializer.DoubleSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.double)];
  dart.setMethodSignature(double_serializer.DoubleSerializer, () => ({
    __proto__: dart.getMethods(double_serializer.DoubleSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.double, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(double_serializer.DoubleSerializer, I[6]);
  dart.setFieldSignature(double_serializer.DoubleSerializer, () => ({
    __proto__: dart.getFields(double_serializer.DoubleSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(double_serializer.DoubleSerializer, {
    /*double_serializer.DoubleSerializer.nan*/get nan() {
      return "NaN";
    },
    /*double_serializer.DoubleSerializer.infinity*/get infinity() {
      return "INF";
    },
    /*double_serializer.DoubleSerializer.negativeInfinity*/get negativeInfinity() {
      return "-INF";
    }
  }, false);
  var structured$3 = dart.privateName(built_set_serializer, "BuiltSetSerializer.structured");
  var types$5 = dart.privateName(built_set_serializer, "BuiltSetSerializer.types");
  var wireName$4 = dart.privateName(built_set_serializer, "BuiltSetSerializer.wireName");
  built_set_serializer.BuiltSetSerializer = class BuiltSetSerializer extends core.Object {
    get structured() {
      return this[structured$3];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$5];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$4];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtSet, opts) {
      set.BuiltSet.as(builtSet);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let elementType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      return builtSet.map(T.ObjectN(), dart.fn(item => serializers.serialize(item, {specifiedType: elementType}), T.dynamicToObjectN()));
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      let elementType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let result = isUnderspecified ? T.SetBuilderOfObject().new() : set.SetBuilder.as(serializers.newBuilder(specifiedType));
      result.replace(serialized[$map](dart.dynamic, dart.fn(item => serializers.deserialize(item, {specifiedType: elementType}), T.dynamicToObjectN())));
      return result.build();
    }
  };
  (built_set_serializer.BuiltSetSerializer.new = function() {
    this[structured$3] = true;
    this[types$5] = T.BuiltListOfType().new([dart.wrapType(set.BuiltSet), T.BuiltSetOfObject().new()[$runtimeType]]);
    this[wireName$4] = "set";
    ;
  }).prototype = built_set_serializer.BuiltSetSerializer.prototype;
  dart.addTypeTests(built_set_serializer.BuiltSetSerializer);
  dart.addTypeCaches(built_set_serializer.BuiltSetSerializer);
  built_set_serializer.BuiltSetSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(set.BuiltSet)];
  dart.setMethodSignature(built_set_serializer.BuiltSetSerializer, () => ({
    __proto__: dart.getMethods(built_set_serializer.BuiltSetSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(dart.nullable(core.Object)), [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(set.BuiltSet, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(built_set_serializer.BuiltSetSerializer, I[7]);
  dart.setFieldSignature(built_set_serializer.BuiltSetSerializer, () => ({
    __proto__: dart.getFields(built_set_serializer.BuiltSetSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$4 = dart.privateName(built_set_multimap_serializer, "BuiltSetMultimapSerializer.structured");
  var types$6 = dart.privateName(built_set_multimap_serializer, "BuiltSetMultimapSerializer.types");
  var wireName$5 = dart.privateName(built_set_multimap_serializer, "BuiltSetMultimapSerializer.wireName");
  built_set_multimap_serializer.BuiltSetMultimapSerializer = class BuiltSetMultimapSerializer extends core.Object {
    get structured() {
      return this[structured$4];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$6];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$5];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtSetMultimap, opts) {
      set_multimap.BuiltSetMultimap.as(builtSetMultimap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = T.JSArrayOfObjectN().of([]);
      for (let key of builtSetMultimap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        result[$add](dart.nullCheck(builtSetMultimap._get(key)).map(T.ObjectN(), dart.fn(value => serializers.serialize(value, {specifiedType: valueType}), T.dynamicToObjectN()))[$toList]());
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? T.SetMultimapBuilderOfObject$Object().new() : set_multimap.SetMultimapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let values = dart.dsend(serialized[$elementAt](i + 1), 'map', [dart.fn(value => serializers.deserialize(value, {specifiedType: valueType}), T.dynamicToObjectN())]);
        for (let value of core.Iterable.as(values)) {
          result.add(key, value);
        }
      }
      return result.build();
    }
  };
  (built_set_multimap_serializer.BuiltSetMultimapSerializer.new = function() {
    this[structured$4] = true;
    this[types$6] = T.BuiltSetOfType().new([dart.wrapType(set_multimap.BuiltSetMultimap)]);
    this[wireName$5] = "setMultimap";
    ;
  }).prototype = built_set_multimap_serializer.BuiltSetMultimapSerializer.prototype;
  dart.addTypeTests(built_set_multimap_serializer.BuiltSetMultimapSerializer);
  dart.addTypeCaches(built_set_multimap_serializer.BuiltSetMultimapSerializer);
  built_set_multimap_serializer.BuiltSetMultimapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(set_multimap.BuiltSetMultimap)];
  dart.setMethodSignature(built_set_multimap_serializer.BuiltSetMultimapSerializer, () => ({
    __proto__: dart.getMethods(built_set_multimap_serializer.BuiltSetMultimapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(dart.nullable(core.Object)), [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(set_multimap.BuiltSetMultimap, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(built_set_multimap_serializer.BuiltSetMultimapSerializer, I[8]);
  dart.setFieldSignature(built_set_multimap_serializer.BuiltSetMultimapSerializer, () => ({
    __proto__: dart.getFields(built_set_multimap_serializer.BuiltSetMultimapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$5 = dart.privateName(built_map_serializer, "BuiltMapSerializer.structured");
  var types$7 = dart.privateName(built_map_serializer, "BuiltMapSerializer.types");
  var wireName$6 = dart.privateName(built_map_serializer, "BuiltMapSerializer.wireName");
  built_map_serializer.BuiltMapSerializer = class BuiltMapSerializer extends core.Object {
    get structured() {
      return this[structured$5];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$7];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$6];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtMap, opts) {
      map.BuiltMap.as(builtMap);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = T.JSArrayOfObjectN().of([]);
      for (let key of builtMap.keys) {
        result[$add](serializers.serialize(key, {specifiedType: keyType}));
        let value = builtMap._get(key);
        result[$add](serializers.serialize(value, {specifiedType: valueType}));
      }
      return result;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      let keyType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let valueType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](1);
      let result = isUnderspecified ? T.MapBuilderOfObject$Object().new() : map.MapBuilder.as(serializers.newBuilder(specifiedType));
      if (serialized[$length][$modulo](2) === 1) {
        dart.throw(new core.ArgumentError.new("odd length"));
      }
      for (let i = 0; i !== serialized[$length]; i = i + 2) {
        let key = serializers.deserialize(serialized[$elementAt](i), {specifiedType: keyType});
        let value = serializers.deserialize(serialized[$elementAt](i + 1), {specifiedType: valueType});
        result._set(key, value);
      }
      return result.build();
    }
  };
  (built_map_serializer.BuiltMapSerializer.new = function() {
    this[structured$5] = true;
    this[types$7] = T.BuiltListOfType().new([dart.wrapType(map.BuiltMap), T.BuiltMapOfObject$Object().new()[$runtimeType]]);
    this[wireName$6] = "map";
    ;
  }).prototype = built_map_serializer.BuiltMapSerializer.prototype;
  dart.addTypeTests(built_map_serializer.BuiltMapSerializer);
  dart.addTypeCaches(built_map_serializer.BuiltMapSerializer);
  built_map_serializer.BuiltMapSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(map.BuiltMap)];
  dart.setMethodSignature(built_map_serializer.BuiltMapSerializer, () => ({
    __proto__: dart.getMethods(built_map_serializer.BuiltMapSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(dart.nullable(core.Object)), [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(map.BuiltMap, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(built_map_serializer.BuiltMapSerializer, I[9]);
  dart.setFieldSignature(built_map_serializer.BuiltMapSerializer, () => ({
    __proto__: dart.getFields(built_map_serializer.BuiltMapSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$6 = dart.privateName(built_list_serializer, "BuiltListSerializer.structured");
  var types$8 = dart.privateName(built_list_serializer, "BuiltListSerializer.types");
  var wireName$7 = dart.privateName(built_list_serializer, "BuiltListSerializer.wireName");
  built_list_serializer.BuiltListSerializer = class BuiltListSerializer extends core.Object {
    get structured() {
      return this[structured$6];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$8];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$7];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, builtList, opts) {
      list.BuiltList.as(builtList);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      if (!isUnderspecified) serializers.expectBuilder(specifiedType);
      let elementType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      return builtList.map(T.ObjectN(), dart.fn(item => serializers.serialize(item, {specifiedType: elementType}), T.dynamicToObjectN()));
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let isUnderspecified = specifiedType.isUnspecified || specifiedType.parameters[$isEmpty];
      let elementType = specifiedType.parameters[$isEmpty] ? serializer$.FullType.unspecified : specifiedType.parameters[$_get](0);
      let result = isUnderspecified ? T.ListBuilderOfObject().new() : list.ListBuilder.as(serializers.newBuilder(specifiedType));
      result.replace(serialized[$map](dart.dynamic, dart.fn(item => serializers.deserialize(item, {specifiedType: elementType}), T.dynamicToObjectN())));
      return result.build();
    }
  };
  (built_list_serializer.BuiltListSerializer.new = function() {
    this[structured$6] = true;
    this[types$8] = T.BuiltListOfType().new([dart.wrapType(list.BuiltList), T.BuiltListOfObject().new()[$runtimeType]]);
    this[wireName$7] = "list";
    ;
  }).prototype = built_list_serializer.BuiltListSerializer.prototype;
  dart.addTypeTests(built_list_serializer.BuiltListSerializer);
  dart.addTypeCaches(built_list_serializer.BuiltListSerializer);
  built_list_serializer.BuiltListSerializer[dart.implements] = () => [serializer$.StructuredSerializer$(list.BuiltList)];
  dart.setMethodSignature(built_list_serializer.BuiltListSerializer, () => ({
    __proto__: dart.getMethods(built_list_serializer.BuiltListSerializer.__proto__),
    serialize: dart.fnType(core.Iterable$(dart.nullable(core.Object)), [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(list.BuiltList, [serializer$.Serializers, core.Iterable], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(built_list_serializer.BuiltListSerializer, I[10]);
  dart.setFieldSignature(built_list_serializer.BuiltListSerializer, () => ({
    __proto__: dart.getFields(built_list_serializer.BuiltListSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var builderFactories$ = dart.privateName(built_json_serializers, "BuiltJsonSerializers.builderFactories");
  var serializerPlugins$ = dart.privateName(built_json_serializers, "BuiltJsonSerializers.serializerPlugins");
  var _typeToSerializer$ = dart.privateName(built_json_serializers, "_typeToSerializer");
  var _wireNameToSerializer$ = dart.privateName(built_json_serializers, "_wireNameToSerializer");
  var _typeNameToSerializer$ = dart.privateName(built_json_serializers, "_typeNameToSerializer");
  var _serialize = dart.privateName(built_json_serializers, "_serialize");
  var _deserialize = dart.privateName(built_json_serializers, "_deserialize");
  var _throwMissingBuilderFactory = dart.privateName(built_json_serializers, "_throwMissingBuilderFactory");
  built_json_serializers.BuiltJsonSerializers = class BuiltJsonSerializers extends core.Object {
    get builderFactories() {
      return this[builderFactories$];
    }
    set builderFactories(value) {
      super.builderFactories = value;
    }
    get serializerPlugins() {
      return this[serializerPlugins$];
    }
    set serializerPlugins(value) {
      super.serializerPlugins = value;
    }
    get serializers() {
      return this[_wireNameToSerializer$].values;
    }
    deserializeWith(T, serializer, serialized) {
      return dart.nullable(T).as(this.deserialize(serialized, {specifiedType: new serializer$.FullType.new(serializer.types[$first])}));
    }
    fromJson(T, serializer, serialized) {
      return this.deserializeWith(T, serializer, convert.json.decode(serialized));
    }
    serializeWith(T, serializer, object) {
      return this.serialize(object, {specifiedType: new serializer$.FullType.new(serializer.types[$first])});
    }
    toJson(T, serializer, object) {
      return convert.json.encode(this.serializeWith(T, serializer, object));
    }
    serialize(object, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let transformedObject = object;
      for (let plugin of this.serializerPlugins) {
        transformedObject = plugin.beforeSerialize(transformedObject, specifiedType);
      }
      let result = this[_serialize](transformedObject, specifiedType);
      for (let plugin of this.serializerPlugins) {
        result = plugin.afterSerialize(result, specifiedType);
      }
      return result;
    }
    [_serialize](object, specifiedType) {
      let t0;
      if (specifiedType.isUnspecified) {
        let serializer = this.serializerForType(dart.runtimeType(object));
        if (serializer == null) {
          dart.throw(new core.StateError.new("No serializer for '" + dart.str(dart.runtimeType(object)) + "'."));
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          let result = T.JSArrayOfObjectN().of([serializer.wireName]);
          t0 = result;
          return (() => {
            t0[$addAll](serializer.serialize(this, object));
            return t0;
          })();
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          return object == null ? T.JSArrayOfObjectN().of([serializer.wireName, null]) : T.JSArrayOfObject().of([serializer.wireName, serializer.serialize(this, object)]);
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      } else {
        let serializer = this.serializerForType(specifiedType.root);
        if (serializer == null) {
          return this.serialize(object);
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          return object == null ? null : serializer.serialize(this, object, {specifiedType: specifiedType})[$toList]();
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          return object == null ? null : serializer.serialize(this, object, {specifiedType: specifiedType});
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      }
    }
    deserialize(object, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let transformedObject = object;
      for (let plugin of this.serializerPlugins) {
        transformedObject = plugin.beforeDeserialize(transformedObject, specifiedType);
      }
      let result = this[_deserialize](object, transformedObject, specifiedType);
      for (let plugin of this.serializerPlugins) {
        result = plugin.afterDeserialize(result, specifiedType);
      }
      return result;
    }
    [_deserialize](objectBeforePlugins, object, specifiedType) {
      if (specifiedType.isUnspecified) {
        let wireName = core.String.as(T.ListOfObjectN().as(object)[$first]);
        let serializer = this.serializerForWireName(wireName);
        if (serializer == null) {
          dart.throw(new core.StateError.new("No serializer for '" + wireName + "'."));
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          try {
            return serializer.deserialize(this, object[$sublist](1));
          } catch (e) {
            let error = dart.getThrown(e);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e;
          }
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          try {
            let primitive = object[$_get](1);
            return primitive == null ? null : serializer.deserialize(this, primitive);
          } catch (e$) {
            let error = dart.getThrown(e$);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$;
          }
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      } else {
        let serializer = this.serializerForType(specifiedType.root);
        if (serializer == null) {
          if (core.List.is(object) && typeof object[$first] == 'string') {
            return this.deserialize(objectBeforePlugins);
          } else {
            dart.throw(new core.StateError.new("No serializer for '" + dart.str(specifiedType.root) + "'."));
          }
        }
        if (serializer$.StructuredSerializer.is(serializer)) {
          try {
            return object == null ? null : serializer.deserialize(this, T.IterableOfObjectN().as(object), {specifiedType: specifiedType});
          } catch (e$0) {
            let error = dart.getThrown(e$0);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$0;
          }
        } else if (serializer$.PrimitiveSerializer.is(serializer)) {
          try {
            return object == null ? null : serializer.deserialize(this, object, {specifiedType: specifiedType});
          } catch (e$1) {
            let error = dart.getThrown(e$1);
            if (core.Error.is(error)) {
              dart.throw(serializer$.DeserializationError.new(object, specifiedType, error));
            } else
              throw e$1;
          }
        } else {
          dart.throw(new core.StateError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
        }
      }
    }
    serializerForType(type) {
      let t4;
      t4 = this[_typeToSerializer$]._get(type);
      return t4 == null ? this[_typeNameToSerializer$]._get(built_json_serializers._getRawName(type)) : t4;
    }
    serializerForWireName(wireName) {
      return this[_wireNameToSerializer$]._get(wireName);
    }
    newBuilder(fullType) {
      let builderFactory = this.builderFactories._get(fullType);
      if (builderFactory == null) this[_throwMissingBuilderFactory](fullType);
      return core.Object.as(dart.dcall(builderFactory, []));
    }
    expectBuilder(fullType) {
      if (!this.hasBuilder(fullType)) this[_throwMissingBuilderFactory](fullType);
    }
    [_throwMissingBuilderFactory](fullType) {
      dart.throw(new core.StateError.new("No builder factory for " + dart.str(fullType) + ". " + "Fix by adding one, see SerializersBuilder.addBuilderFactory."));
    }
    hasBuilder(fullType) {
      return this.builderFactories.containsKey(fullType);
    }
    toBuilder() {
      return new built_json_serializers.BuiltJsonSerializersBuilder.__(this[_typeToSerializer$].toBuilder(), this[_wireNameToSerializer$].toBuilder(), this[_typeNameToSerializer$].toBuilder(), this.builderFactories.toBuilder(), this.serializerPlugins.toBuilder());
    }
  };
  (built_json_serializers.BuiltJsonSerializers.__ = function(_typeToSerializer, _wireNameToSerializer, _typeNameToSerializer, builderFactories, serializerPlugins) {
    this[_typeToSerializer$] = _typeToSerializer;
    this[_wireNameToSerializer$] = _wireNameToSerializer;
    this[_typeNameToSerializer$] = _typeNameToSerializer;
    this[builderFactories$] = builderFactories;
    this[serializerPlugins$] = serializerPlugins;
    ;
  }).prototype = built_json_serializers.BuiltJsonSerializers.prototype;
  dart.addTypeTests(built_json_serializers.BuiltJsonSerializers);
  dart.addTypeCaches(built_json_serializers.BuiltJsonSerializers);
  built_json_serializers.BuiltJsonSerializers[dart.implements] = () => [serializer$.Serializers];
  dart.setMethodSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getMethods(built_json_serializers.BuiltJsonSerializers.__proto__),
    deserializeWith: dart.gFnType(T => [dart.nullable(T), [serializer$.Serializer$(T), dart.nullable(core.Object)]], T => [dart.nullable(core.Object)]),
    fromJson: dart.gFnType(T => [dart.nullable(T), [serializer$.Serializer$(T), core.String]], T => [dart.nullable(core.Object)]),
    serializeWith: dart.gFnType(T => [dart.nullable(core.Object), [serializer$.Serializer$(T), dart.nullable(T)]], T => [dart.nullable(core.Object)]),
    toJson: dart.gFnType(T => [core.String, [serializer$.Serializer$(T), dart.nullable(T)]], T => [dart.nullable(core.Object)]),
    serialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    [_serialize]: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), serializer$.FullType]),
    deserialize: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    [_deserialize]: dart.fnType(dart.nullable(core.Object), [dart.nullable(core.Object), dart.nullable(core.Object), serializer$.FullType]),
    serializerForType: dart.fnType(dart.nullable(serializer$.Serializer), [dart.nullable(core.Type)]),
    serializerForWireName: dart.fnType(dart.nullable(serializer$.Serializer), [core.String]),
    newBuilder: dart.fnType(core.Object, [serializer$.FullType]),
    expectBuilder: dart.fnType(dart.void, [serializer$.FullType]),
    [_throwMissingBuilderFactory]: dart.fnType(dart.Never, [serializer$.FullType]),
    hasBuilder: dart.fnType(core.bool, [serializer$.FullType]),
    toBuilder: dart.fnType(serializer$.SerializersBuilder, [])
  }));
  dart.setGetterSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getGetters(built_json_serializers.BuiltJsonSerializers.__proto__),
    serializers: core.Iterable$(serializer$.Serializer)
  }));
  dart.setLibraryUri(built_json_serializers.BuiltJsonSerializers, I[11]);
  dart.setFieldSignature(built_json_serializers.BuiltJsonSerializers, () => ({
    __proto__: dart.getFields(built_json_serializers.BuiltJsonSerializers.__proto__),
    [_typeToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.Type, serializer$.Serializer)),
    [_wireNameToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.String, serializer$.Serializer)),
    [_typeNameToSerializer$]: dart.finalFieldType(map.BuiltMap$(core.String, serializer$.Serializer)),
    builderFactories: dart.finalFieldType(map.BuiltMap$(serializer$.FullType, core.Function)),
    serializerPlugins: dart.finalFieldType(list.BuiltList$(serializer$.SerializerPlugin))
  }));
  var _builderFactories$ = dart.privateName(built_json_serializers, "_builderFactories");
  var _plugins$ = dart.privateName(built_json_serializers, "_plugins");
  built_json_serializers.BuiltJsonSerializersBuilder = class BuiltJsonSerializersBuilder extends core.Object {
    static new() {
      return new built_json_serializers.BuiltJsonSerializersBuilder.__(T.MapBuilderOfType$Serializer().new(), T.MapBuilderOfString$Serializer().new(), T.MapBuilderOfString$Serializer().new(), T.MapBuilderOfFullType$Function().new(), T.ListBuilderOfSerializerPlugin().new());
    }
    add(serializer) {
      if (!serializer$.StructuredSerializer.is(serializer) && !serializer$.PrimitiveSerializer.is(serializer)) {
        dart.throw(new core.ArgumentError.new("serializer must be StructuredSerializer or PrimitiveSerializer"));
      }
      this[_wireNameToSerializer$]._set(serializer.wireName, serializer);
      for (let type of serializer.types) {
        this[_typeToSerializer$]._set(type, serializer);
        this[_typeNameToSerializer$]._set(built_json_serializers._getRawName(type), serializer);
      }
    }
    addAll(serializers) {
      serializers[$forEach](dart.bind(this, 'add'));
    }
    addBuilderFactory(types, $function) {
      this[_builderFactories$]._set(types, $function);
      this[_builderFactories$]._set(types.withNullability(!types.nullable), $function);
    }
    merge(serializers) {
      this.addAll(serializers.serializers);
      this[_builderFactories$].addAll(serializers.builderFactories.asMap());
    }
    mergeAll(serializersIterable) {
      for (let serializers of serializersIterable) {
        this.merge(serializers);
      }
    }
    addPlugin(plugin) {
      this[_plugins$].add(plugin);
    }
    build() {
      return new built_json_serializers.BuiltJsonSerializers.__(this[_typeToSerializer$].build(), this[_wireNameToSerializer$].build(), this[_typeNameToSerializer$].build(), this[_builderFactories$].build(), this[_plugins$].build());
    }
  };
  (built_json_serializers.BuiltJsonSerializersBuilder.__ = function(_typeToSerializer, _wireNameToSerializer, _typeNameToSerializer, _builderFactories, _plugins) {
    this[_typeToSerializer$] = _typeToSerializer;
    this[_wireNameToSerializer$] = _wireNameToSerializer;
    this[_typeNameToSerializer$] = _typeNameToSerializer;
    this[_builderFactories$] = _builderFactories;
    this[_plugins$] = _plugins;
    ;
  }).prototype = built_json_serializers.BuiltJsonSerializersBuilder.prototype;
  dart.addTypeTests(built_json_serializers.BuiltJsonSerializersBuilder);
  dart.addTypeCaches(built_json_serializers.BuiltJsonSerializersBuilder);
  built_json_serializers.BuiltJsonSerializersBuilder[dart.implements] = () => [serializer$.SerializersBuilder];
  dart.setMethodSignature(built_json_serializers.BuiltJsonSerializersBuilder, () => ({
    __proto__: dart.getMethods(built_json_serializers.BuiltJsonSerializersBuilder.__proto__),
    add: dart.fnType(dart.void, [serializer$.Serializer]),
    addAll: dart.fnType(dart.void, [core.Iterable$(serializer$.Serializer)]),
    addBuilderFactory: dart.fnType(dart.void, [serializer$.FullType, core.Function]),
    merge: dart.fnType(dart.void, [serializer$.Serializers]),
    mergeAll: dart.fnType(dart.void, [core.Iterable$(serializer$.Serializers)]),
    addPlugin: dart.fnType(dart.void, [serializer$.SerializerPlugin]),
    build: dart.fnType(serializer$.Serializers, [])
  }));
  dart.setLibraryUri(built_json_serializers.BuiltJsonSerializersBuilder, I[11]);
  dart.setFieldSignature(built_json_serializers.BuiltJsonSerializersBuilder, () => ({
    __proto__: dart.getFields(built_json_serializers.BuiltJsonSerializersBuilder.__proto__),
    [_typeToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.Type, serializer$.Serializer)),
    [_wireNameToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.String, serializer$.Serializer)),
    [_typeNameToSerializer$]: dart.finalFieldType(map.MapBuilder$(core.String, serializer$.Serializer)),
    [_builderFactories$]: dart.finalFieldType(map.MapBuilder$(serializer$.FullType, core.Function)),
    [_plugins$]: dart.finalFieldType(list.ListBuilder$(serializer$.SerializerPlugin))
  }));
  built_json_serializers._getRawName = function _getRawName(type) {
    let name = dart.toString(type);
    let genericsStart = name[$indexOf]("<");
    return genericsStart === -1 ? name : name[$substring](0, genericsStart);
  };
  var structured$7 = dart.privateName(bool_serializer, "BoolSerializer.structured");
  var types$9 = dart.privateName(bool_serializer, "BoolSerializer.types");
  var wireName$8 = dart.privateName(bool_serializer, "BoolSerializer.wireName");
  bool_serializer.BoolSerializer = class BoolSerializer extends core.Object {
    get structured() {
      return this[structured$7];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$9];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$8];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, boolean, opts) {
      core.bool.as(boolean);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return boolean;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.bool.as(serialized);
    }
  };
  (bool_serializer.BoolSerializer.new = function() {
    this[structured$7] = false;
    this[types$9] = T.BuiltListOfType().new([dart.wrapType(core.bool)]);
    this[wireName$8] = "bool";
    ;
  }).prototype = bool_serializer.BoolSerializer.prototype;
  dart.addTypeTests(bool_serializer.BoolSerializer);
  dart.addTypeCaches(bool_serializer.BoolSerializer);
  bool_serializer.BoolSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.bool)];
  dart.setMethodSignature(bool_serializer.BoolSerializer, () => ({
    __proto__: dart.getMethods(bool_serializer.BoolSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.bool, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(bool_serializer.BoolSerializer, I[12]);
  dart.setFieldSignature(bool_serializer.BoolSerializer, () => ({
    __proto__: dart.getFields(bool_serializer.BoolSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$8 = dart.privateName(uri_serializer, "UriSerializer.structured");
  var types$10 = dart.privateName(uri_serializer, "UriSerializer.types");
  var wireName$9 = dart.privateName(uri_serializer, "UriSerializer.wireName");
  uri_serializer.UriSerializer = class UriSerializer extends core.Object {
    get structured() {
      return this[structured$8];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$10];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$9];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, uri, opts) {
      core.Uri.as(uri);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return uri.toString();
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.Uri.parse(core.String.as(serialized));
    }
  };
  (uri_serializer.UriSerializer.new = function() {
    this[structured$8] = false;
    this[types$10] = T.BuiltListOfType().new([dart.wrapType(core.Uri), core.Uri.parse("http://example.com")[$runtimeType], core.Uri.parse("http://example.com:")[$runtimeType]]);
    this[wireName$9] = "Uri";
    ;
  }).prototype = uri_serializer.UriSerializer.prototype;
  dart.addTypeTests(uri_serializer.UriSerializer);
  dart.addTypeCaches(uri_serializer.UriSerializer);
  uri_serializer.UriSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.Uri)];
  dart.setMethodSignature(uri_serializer.UriSerializer, () => ({
    __proto__: dart.getMethods(uri_serializer.UriSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.Uri, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(uri_serializer.UriSerializer, I[13]);
  dart.setFieldSignature(uri_serializer.UriSerializer, () => ({
    __proto__: dart.getFields(uri_serializer.UriSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$9 = dart.privateName(num_serializer, "NumSerializer.structured");
  var types$11 = dart.privateName(num_serializer, "NumSerializer.types");
  var wireName$10 = dart.privateName(num_serializer, "NumSerializer.wireName");
  num_serializer.NumSerializer = class NumSerializer extends core.Object {
    get structured() {
      return this[structured$9];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$11];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$10];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, number, opts) {
      core.num.as(number);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      if (number[$isNaN]) {
        return double_serializer.DoubleSerializer.nan;
      } else if (number[$isInfinite]) {
        return number[$isNegative] ? double_serializer.DoubleSerializer.negativeInfinity : double_serializer.DoubleSerializer.infinity;
      } else {
        return number;
      }
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      if (dart.equals(serialized, double_serializer.DoubleSerializer.nan)) {
        return 0 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.negativeInfinity)) {
        return -1 / 0;
      } else if (dart.equals(serialized, double_serializer.DoubleSerializer.infinity)) {
        return 1 / 0;
      } else {
        return core.num.as(serialized);
      }
    }
  };
  (num_serializer.NumSerializer.new = function() {
    this[structured$9] = false;
    this[types$11] = T.BuiltListOfType().new([dart.wrapType(core.num)]);
    this[wireName$10] = "num";
    ;
  }).prototype = num_serializer.NumSerializer.prototype;
  dart.addTypeTests(num_serializer.NumSerializer);
  dart.addTypeCaches(num_serializer.NumSerializer);
  num_serializer.NumSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.num)];
  dart.setMethodSignature(num_serializer.NumSerializer, () => ({
    __proto__: dart.getMethods(num_serializer.NumSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.num, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(num_serializer.NumSerializer, I[14]);
  dart.setFieldSignature(num_serializer.NumSerializer, () => ({
    __proto__: dart.getFields(num_serializer.NumSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$10 = dart.privateName(json_object_serializer, "JsonObjectSerializer.structured");
  var types$12 = dart.privateName(json_object_serializer, "JsonObjectSerializer.types");
  var wireName$11 = dart.privateName(json_object_serializer, "JsonObjectSerializer.wireName");
  json_object_serializer.JsonObjectSerializer = class JsonObjectSerializer extends core.Object {
    get structured() {
      return this[structured$10];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$12];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$11];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, jsonObject, opts) {
      json_object.JsonObject.as(jsonObject);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return jsonObject.value;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return json_object.JsonObject.new(serialized);
    }
  };
  (json_object_serializer.JsonObjectSerializer.new = function() {
    this[structured$10] = false;
    this[types$12] = T.BuiltListOfType().new([dart.wrapType(json_object.JsonObject), dart.wrapType(json_object.BoolJsonObject), dart.wrapType(json_object.ListJsonObject), dart.wrapType(json_object.MapJsonObject), dart.wrapType(json_object.NumJsonObject), dart.wrapType(json_object.StringJsonObject)]);
    this[wireName$11] = "JsonObject";
    ;
  }).prototype = json_object_serializer.JsonObjectSerializer.prototype;
  dart.addTypeTests(json_object_serializer.JsonObjectSerializer);
  dart.addTypeCaches(json_object_serializer.JsonObjectSerializer);
  json_object_serializer.JsonObjectSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(json_object.JsonObject)];
  dart.setMethodSignature(json_object_serializer.JsonObjectSerializer, () => ({
    __proto__: dart.getMethods(json_object_serializer.JsonObjectSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(json_object.JsonObject, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(json_object_serializer.JsonObjectSerializer, I[15]);
  dart.setFieldSignature(json_object_serializer.JsonObjectSerializer, () => ({
    __proto__: dart.getFields(json_object_serializer.JsonObjectSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$11 = dart.privateName(int64_serializer, "Int64Serializer.structured");
  var types$13 = dart.privateName(int64_serializer, "Int64Serializer.types");
  var wireName$12 = dart.privateName(int64_serializer, "Int64Serializer.wireName");
  int64_serializer.Int64Serializer = class Int64Serializer extends core.Object {
    get structured() {
      return this[structured$11];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$13];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$12];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, int64, opts) {
      fixnum.Int64.as(int64);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return int64.toString();
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return fixnum.Int64.parseInt(core.String.as(serialized));
    }
  };
  (int64_serializer.Int64Serializer.new = function() {
    this[structured$11] = false;
    this[types$13] = T.BuiltListOfType().new([dart.wrapType(fixnum.Int64)]);
    this[wireName$12] = "Int64";
    ;
  }).prototype = int64_serializer.Int64Serializer.prototype;
  dart.addTypeTests(int64_serializer.Int64Serializer);
  dart.addTypeCaches(int64_serializer.Int64Serializer);
  int64_serializer.Int64Serializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(fixnum.Int64)];
  dart.setMethodSignature(int64_serializer.Int64Serializer, () => ({
    __proto__: dart.getMethods(int64_serializer.Int64Serializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(fixnum.Int64, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(int64_serializer.Int64Serializer, I[16]);
  dart.setFieldSignature(int64_serializer.Int64Serializer, () => ({
    __proto__: dart.getFields(int64_serializer.Int64Serializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$12 = dart.privateName(duration_serializer, "DurationSerializer.structured");
  var types$14 = dart.privateName(duration_serializer, "DurationSerializer.types");
  var wireName$13 = dart.privateName(duration_serializer, "DurationSerializer.wireName");
  duration_serializer.DurationSerializer = class DurationSerializer extends core.Object {
    get structured() {
      return this[structured$12];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$14];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$13];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, duration, opts) {
      core.Duration.as(duration);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return duration.inMicroseconds;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return new core.Duration.new({microseconds: core.int.as(serialized)});
    }
  };
  (duration_serializer.DurationSerializer.new = function() {
    this[structured$12] = false;
    this[types$14] = T.BuiltListOfType().new([dart.wrapType(core.Duration)]);
    this[wireName$13] = "Duration";
    ;
  }).prototype = duration_serializer.DurationSerializer.prototype;
  dart.addTypeTests(duration_serializer.DurationSerializer);
  dart.addTypeCaches(duration_serializer.DurationSerializer);
  duration_serializer.DurationSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.Duration)];
  dart.setMethodSignature(duration_serializer.DurationSerializer, () => ({
    __proto__: dart.getMethods(duration_serializer.DurationSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.Duration, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(duration_serializer.DurationSerializer, I[17]);
  dart.setFieldSignature(duration_serializer.DurationSerializer, () => ({
    __proto__: dart.getFields(duration_serializer.DurationSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$13 = dart.privateName(date_time_serializer, "DateTimeSerializer.structured");
  var types$15 = dart.privateName(date_time_serializer, "DateTimeSerializer.types");
  var wireName$14 = dart.privateName(date_time_serializer, "DateTimeSerializer.wireName");
  date_time_serializer.DateTimeSerializer = class DateTimeSerializer extends core.Object {
    get structured() {
      return this[structured$13];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$15];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$14];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, dateTime, opts) {
      core.DateTime.as(dateTime);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      if (!dateTime.isUtc) {
        dart.throw(new core.ArgumentError.value(dateTime, "dateTime", "Must be in utc for serialization."));
      }
      return dateTime.microsecondsSinceEpoch;
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      let microsecondsSinceEpoch = core.int.as(serialized);
      return new core.DateTime.fromMicrosecondsSinceEpoch(microsecondsSinceEpoch, {isUtc: true});
    }
  };
  (date_time_serializer.DateTimeSerializer.new = function() {
    this[structured$13] = false;
    this[types$15] = T.BuiltListOfType().new([dart.wrapType(core.DateTime)]);
    this[wireName$14] = "DateTime";
    ;
  }).prototype = date_time_serializer.DateTimeSerializer.prototype;
  dart.addTypeTests(date_time_serializer.DateTimeSerializer);
  dart.addTypeCaches(date_time_serializer.DateTimeSerializer);
  date_time_serializer.DateTimeSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.DateTime)];
  dart.setMethodSignature(date_time_serializer.DateTimeSerializer, () => ({
    __proto__: dart.getMethods(date_time_serializer.DateTimeSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.DateTime, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(date_time_serializer.DateTimeSerializer, I[18]);
  dart.setFieldSignature(date_time_serializer.DateTimeSerializer, () => ({
    __proto__: dart.getFields(date_time_serializer.DateTimeSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  var structured$14 = dart.privateName(big_int_serializer, "BigIntSerializer.structured");
  var types$16 = dart.privateName(big_int_serializer, "BigIntSerializer.types");
  var wireName$15 = dart.privateName(big_int_serializer, "BigIntSerializer.wireName");
  big_int_serializer.BigIntSerializer = class BigIntSerializer extends core.Object {
    get structured() {
      return this[structured$14];
    }
    set structured(value) {
      super.structured = value;
    }
    get types() {
      return this[types$16];
    }
    set types(value) {
      super.types = value;
    }
    get wireName() {
      return this[wireName$15];
    }
    set wireName(value) {
      super.wireName = value;
    }
    serialize(serializers, bigInt, opts) {
      core.BigInt.as(bigInt);
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return bigInt.toString();
    }
    deserialize(serializers, serialized, opts) {
      let specifiedType = opts && 'specifiedType' in opts ? opts.specifiedType : C[0] || CT.C0;
      return core.BigInt.parse(core.String.as(serialized));
    }
  };
  (big_int_serializer.BigIntSerializer.new = function() {
    this[structured$14] = false;
    this[types$16] = T.BuiltListOfType().new([dart.wrapType(core.BigInt), core.BigInt.zero[$runtimeType]]);
    this[wireName$15] = "BigInt";
    ;
  }).prototype = big_int_serializer.BigIntSerializer.prototype;
  dart.addTypeTests(big_int_serializer.BigIntSerializer);
  dart.addTypeCaches(big_int_serializer.BigIntSerializer);
  big_int_serializer.BigIntSerializer[dart.implements] = () => [serializer$.PrimitiveSerializer$(core.BigInt)];
  dart.setMethodSignature(big_int_serializer.BigIntSerializer, () => ({
    __proto__: dart.getMethods(big_int_serializer.BigIntSerializer.__proto__),
    serialize: dart.fnType(core.Object, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {}),
    deserialize: dart.fnType(core.BigInt, [serializer$.Serializers, dart.nullable(core.Object)], {specifiedType: serializer$.FullType}, {})
  }));
  dart.setLibraryUri(big_int_serializer.BigIntSerializer, I[19]);
  dart.setFieldSignature(big_int_serializer.BigIntSerializer, () => ({
    __proto__: dart.getFields(big_int_serializer.BigIntSerializer.__proto__),
    structured: dart.finalFieldType(core.bool),
    types: dart.finalFieldType(core.Iterable$(core.Type)),
    wireName: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/built_value/serializer", {
    "package:built_value/src/built_list_multimap_serializer.dart": built_list_multimap_serializer,
    "package:built_value/serializer.dart": serializer$,
    "package:built_value/src/string_serializer.dart": string_serializer,
    "package:built_value/src/regexp_serializer.dart": regexp_serializer,
    "package:built_value/src/null_serializer.dart": null_serializer,
    "package:built_value/src/int_serializer.dart": int_serializer,
    "package:built_value/src/double_serializer.dart": double_serializer,
    "package:built_value/src/built_set_serializer.dart": built_set_serializer,
    "package:built_value/src/built_set_multimap_serializer.dart": built_set_multimap_serializer,
    "package:built_value/src/built_map_serializer.dart": built_map_serializer,
    "package:built_value/src/built_list_serializer.dart": built_list_serializer,
    "package:built_value/src/built_json_serializers.dart": built_json_serializers,
    "package:built_value/src/bool_serializer.dart": bool_serializer,
    "package:built_value/src/uri_serializer.dart": uri_serializer,
    "package:built_value/src/num_serializer.dart": num_serializer,
    "package:built_value/src/json_object_serializer.dart": json_object_serializer,
    "package:built_value/src/int64_serializer.dart": int64_serializer,
    "package:built_value/src/duration_serializer.dart": duration_serializer,
    "package:built_value/src/date_time_serializer.dart": date_time_serializer,
    "package:built_value/src/big_int_serializer.dart": big_int_serializer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/built_list_multimap_serializer.dart","serializer.dart","src/string_serializer.dart","src/regexp_serializer.dart","src/null_serializer.dart","src/int_serializer.dart","src/double_serializer.dart","src/built_set_serializer.dart","src/built_set_multimap_serializer.dart","src/built_map_serializer.dart","src/built_list_serializer.dart","src/built_json_serializers.dart","src/bool_serializer.dart","src/uri_serializer.dart","src/num_serializer.dart","src/json_object_serializer.dart","src/int64_serializer.dart","src/duration_serializer.dart","src/date_time_serializer.dart","src/big_int_serializer.dart"],"names":[],"mappings":"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","file":"serializer.sound.ddc.js"}');
  // Exports:
  return {
    src__built_list_multimap_serializer: built_list_multimap_serializer,
    serializer: serializer$,
    src__string_serializer: string_serializer,
    src__regexp_serializer: regexp_serializer,
    src__null_serializer: null_serializer,
    src__int_serializer: int_serializer,
    src__double_serializer: double_serializer,
    src__built_set_serializer: built_set_serializer,
    src__built_set_multimap_serializer: built_set_multimap_serializer,
    src__built_map_serializer: built_map_serializer,
    src__built_list_serializer: built_list_serializer,
    src__built_json_serializers: built_json_serializers,
    src__bool_serializer: bool_serializer,
    src__uri_serializer: uri_serializer,
    src__num_serializer: num_serializer,
    src__json_object_serializer: json_object_serializer,
    src__int64_serializer: int64_serializer,
    src__duration_serializer: duration_serializer,
    src__date_time_serializer: date_time_serializer,
    src__big_int_serializer: big_int_serializer
  };
}));

//# sourceMappingURL=serializer.sound.ddc.js.map
