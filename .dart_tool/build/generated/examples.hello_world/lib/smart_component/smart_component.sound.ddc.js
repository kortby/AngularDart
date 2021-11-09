define(['dart_sdk'], (function load__packages__examples_hello_world__smart_component__smart_component(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var smart_component = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StreamControllerOfString: () => (T.StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/smart_component/smart_component.dart"];
  var title = dart.privateName(smart_component, "SmartComponent.title");
  var __SmartComponent_name = dart.privateName(smart_component, "_#SmartComponent#name");
  var _changeRequest = dart.privateName(smart_component, "_changeRequest");
  smart_component.SmartComponent = class SmartComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get name() {
      let t0;
      t0 = this[__SmartComponent_name];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("name")) : t0;
    }
    set name(t0) {
      this[__SmartComponent_name] = t0;
    }
    get change() {
      return this[_changeRequest].stream;
    }
    ngOnInit() {
      core.print(this.name);
    }
    getName() {
      this[_changeRequest].add(this.title);
    }
  };
  (smart_component.SmartComponent.new = function() {
    this[title] = "Smart Component";
    this[__SmartComponent_name] = null;
    this[_changeRequest] = T.StreamControllerOfString().new();
    ;
  }).prototype = smart_component.SmartComponent.prototype;
  dart.addTypeTests(smart_component.SmartComponent);
  dart.addTypeCaches(smart_component.SmartComponent);
  dart.setMethodSignature(smart_component.SmartComponent, () => ({
    __proto__: dart.getMethods(smart_component.SmartComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    getName: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(smart_component.SmartComponent, () => ({
    __proto__: dart.getGetters(smart_component.SmartComponent.__proto__),
    name: core.String,
    change: async.Stream$(core.String)
  }));
  dart.setSetterSignature(smart_component.SmartComponent, () => ({
    __proto__: dart.getSetters(smart_component.SmartComponent.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(smart_component.SmartComponent, I[0]);
  dart.setFieldSignature(smart_component.SmartComponent, () => ({
    __proto__: dart.getFields(smart_component.SmartComponent.__proto__),
    title: dart.finalFieldType(core.String),
    [__SmartComponent_name]: dart.fieldType(dart.nullable(core.String)),
    [_changeRequest]: dart.finalFieldType(async.StreamController$(core.String))
  }));
  dart.trackLibraries("packages/examples.hello_world/smart_component/smart_component", {
    "package:examples.hello_world/smart_component/smart_component.dart": smart_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["smart_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAWQ;;;;;;;;AAGM;;IAAI;;AAAJ;IAAI;;AAKa,YAAA,AAAe;IAAM;;AAGrC,MAAX,WAAM;IACR;;AAG2B,MAAzB,AAAe,yBAAI;IACrB;;;IAhBM,cAAQ;kCAGF;IAEN,uBAAiB;;EAYzB","file":"smart_component.sound.ddc.js"}');
  // Exports:
  return {
    smart_component__smart_component: smart_component
  };
}));

//# sourceMappingURL=smart_component.sound.ddc.js.map
