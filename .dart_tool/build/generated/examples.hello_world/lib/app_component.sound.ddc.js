define(['dart_sdk'], (function load__packages__examples_hello_world__app_component(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var app_component = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/app_component.dart"];
  var counter = dart.privateName(app_component, "AppComponent.counter");
  var __AppComponent_title = dart.privateName(app_component, "_#AppComponent#title");
  app_component.AppComponent = class AppComponent extends core.Object {
    get counter() {
      return this[counter];
    }
    set counter(value) {
      this[counter] = value;
    }
    get title() {
      let t0;
      t0 = this[__AppComponent_title];
      return t0 == null ? this[__AppComponent_title] = "Rich!" : t0;
    }
    set title(t0) {
      this[__AppComponent_title] = t0;
    }
    makeMoney() {
      this.counter = this.counter + 100;
    }
    onIsSmartChanged(isSmart) {
      this.title = isSmart;
      core.print("Smart value sent to parent " + isSmart);
    }
  };
  (app_component.AppComponent.new = function() {
    this[__AppComponent_title] = null;
    this[counter] = 0;
    ;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  dart.addTypeCaches(app_component.AppComponent);
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    makeMoney: dart.fnType(dart.void, []),
    onIsSmartChanged: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    title: core.String
  }));
  dart.setSetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getSetters(app_component.AppComponent.__proto__),
    title: core.String
  }));
  dart.setLibraryUri(app_component.AppComponent, I[0]);
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    [__AppComponent_title]: dart.fieldType(dart.nullable(core.String)),
    counter: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/examples.hello_world/app_component", {
    "package:examples.hello_world/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAcM;;;;;;;;AADQ;uDAAQ;IAAO;;AAAf;IAAe;;AAIX,MAAd,eAAA,AAAQ,eAAG;IACb;qBAE6B;AACZ,MAAf,aAAQ,OAAO;AAC6B,MAA5C,WAAM,AAAqC,gCAAR,OAAO;IAC5C;;;iCAVY;IACR,gBAAU;;EAUhB","file":"app_component.sound.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
}));

//# sourceMappingURL=app_component.sound.ddc.js.map
