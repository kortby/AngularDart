define(['dart_sdk', 'packages/angular/src/di/errors', 'packages/examples.hello_world/app_component.template', 'packages/examples.hello_world/app_component', 'packages/angular/src/bootstrap/modules', 'packages/angular/angular.template'], (function load__web__main(dart_sdk, packages__angular__src__di__errors, packages__examples$46hello_world__app_component$46template, packages__examples$46hello_world__app_component, packages__angular__src__bootstrap__modules, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unsafe_cast = packages__angular__src__di__errors.src__utilities__unsafe_cast;
  const is_dev_mode = packages__angular__src__di__errors.src__utilities__is_dev_mode;
  const reflector = packages__angular__src__di__errors.src__reflector;
  const app_component$46template = packages__examples$46hello_world__app_component$46template.app_component$46template;
  const app_component = packages__examples$46hello_world__app_component.app_component;
  const change_detector_ref = packages__angular__src__bootstrap__modules.src__core__change_detection__change_detector_ref;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var main$46template = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfHelloWorldComponent: () => (T.ComponentFactoryOfHelloWorldComponent = dart.constFn(component_factory.ComponentFactory$(main.HelloWorldComponent)))(),
    HostViewOfHelloWorldComponent: () => (T.HostViewOfHelloWorldComponent = dart.constFn(host_view.HostView$(main.HelloWorldComponent)))(),
    VoidToHostViewOfHelloWorldComponent: () => (T.VoidToHostViewOfHelloWorldComponent = dart.constFn(dart.fnType(T.HostViewOfHelloWorldComponent(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main$46template.ViewHelloWorldComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.fn(main$46template.viewFactory_HelloWorldComponentHost0, T.VoidToHostViewOfHelloWorldComponent());
    },
    get C2() {
      return C[2] = dart.constList([], core.Object);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.ComponentFactoryOfHelloWorldComponent().prototype,
        [ComponentFactory__viewFactory]: C[1] || CT.C1,
        [ComponentFactory_selector]: "my-app"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "org-dartlang-app:///web/main.dart",
    "org-dartlang-app:///web/main.template.dart"
  ];
  var __ViewHelloWorldComponent0__compView_0 = dart.privateName(main$46template, "_#ViewHelloWorldComponent0#_compView_0");
  var __ViewHelloWorldComponent0__AppComponent_0_5 = dart.privateName(main$46template, "_#ViewHelloWorldComponent0#_AppComponent_0_5");
  var _compView_0 = dart.privateName(main$46template, "_compView_0");
  var _AppComponent_0_5 = dart.privateName(main$46template, "_AppComponent_0_5");
  main.HelloWorldComponent = class HelloWorldComponent extends core.Object {};
  (main.HelloWorldComponent.new = function() {
    ;
  }).prototype = main.HelloWorldComponent.prototype;
  dart.addTypeTests(main.HelloWorldComponent);
  dart.addTypeCaches(main.HelloWorldComponent);
  dart.setLibraryUri(main.HelloWorldComponent, I[0]);
  main$46template.ViewHelloWorldComponent0 = class ViewHelloWorldComponent0 extends component_view.ComponentView$(main.HelloWorldComponent) {
    get [_compView_0]() {
      let t0;
      t0 = this[__ViewHelloWorldComponent0__compView_0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_0")) : t0;
    }
    set [_compView_0](t0) {
      if (this[__ViewHelloWorldComponent0__compView_0] == null)
        this[__ViewHelloWorldComponent0__compView_0] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_0"));
    }
    get [_AppComponent_0_5]() {
      let t1;
      t1 = this[__ViewHelloWorldComponent0__AppComponent_0_5];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_AppComponent_0_5")) : t1;
    }
    set [_AppComponent_0_5](t1) {
      if (this[__ViewHelloWorldComponent0__AppComponent_0_5] == null)
        this[__ViewHelloWorldComponent0__AppComponent_0_5] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_AppComponent_0_5"));
    }
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/web/main.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this[_AppComponent_0_5] = new app_component.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_0]);
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      main$46template.ViewHelloWorldComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = main$46template.ViewHelloWorldComponent0._componentStyles;
      if (styles == null) {
        main$46template.ViewHelloWorldComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(main$46template.styles$HelloWorldComponent, main$46template.ViewHelloWorldComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[0] || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (main$46template.ViewHelloWorldComponent0.new = function(parentView, parentIndex) {
    this[__ViewHelloWorldComponent0__compView_0] = null;
    this[__ViewHelloWorldComponent0__AppComponent_0_5] = null;
    main$46template.ViewHelloWorldComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("my-app"));
  }).prototype = main$46template.ViewHelloWorldComponent0.prototype;
  dart.addTypeTests(main$46template.ViewHelloWorldComponent0);
  dart.addTypeCaches(main$46template.ViewHelloWorldComponent0);
  dart.setMethodSignature(main$46template.ViewHelloWorldComponent0, () => ({
    __proto__: dart.getMethods(main$46template.ViewHelloWorldComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(main$46template.ViewHelloWorldComponent0, () => ({
    __proto__: dart.getGetters(main$46template.ViewHelloWorldComponent0.__proto__),
    [_compView_0]: app_component$46template.ViewAppComponent0,
    [_AppComponent_0_5]: app_component.AppComponent
  }));
  dart.setSetterSignature(main$46template.ViewHelloWorldComponent0, () => ({
    __proto__: dart.getSetters(main$46template.ViewHelloWorldComponent0.__proto__),
    [_compView_0]: app_component$46template.ViewAppComponent0,
    [_AppComponent_0_5]: app_component.AppComponent
  }));
  dart.setLibraryUri(main$46template.ViewHelloWorldComponent0, I[1]);
  dart.setFieldSignature(main$46template.ViewHelloWorldComponent0, () => ({
    __proto__: dart.getFields(main$46template.ViewHelloWorldComponent0.__proto__),
    [__ViewHelloWorldComponent0__compView_0]: dart.fieldType(dart.nullable(app_component$46template.ViewAppComponent0)),
    [__ViewHelloWorldComponent0__AppComponent_0_5]: dart.fieldType(dart.nullable(app_component.AppComponent))
  }));
  dart.defineLazy(main$46template.ViewHelloWorldComponent0, {
    /*main$46template.ViewHelloWorldComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  main$46template._ViewHelloWorldComponentHost0 = class _ViewHelloWorldComponentHost0 extends host_view.HostView$(main.HelloWorldComponent) {
    build() {
      this.componentView = new main$46template.ViewHelloWorldComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new main.HelloWorldComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (main$46template._ViewHelloWorldComponentHost0.new = function() {
    main$46template._ViewHelloWorldComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = main$46template._ViewHelloWorldComponentHost0.prototype;
  dart.addTypeTests(main$46template._ViewHelloWorldComponentHost0);
  dart.addTypeCaches(main$46template._ViewHelloWorldComponentHost0);
  dart.setMethodSignature(main$46template._ViewHelloWorldComponentHost0, () => ({
    __proto__: dart.getMethods(main$46template._ViewHelloWorldComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(main$46template._ViewHelloWorldComponentHost0, I[1]);
  main$46template.createHelloWorldComponentFactory = function createHelloWorldComponentFactory() {
    return new (T.ComponentFactoryOfHelloWorldComponent()).new("my-app", C[1] || CT.C1);
  };
  main$46template.viewFactory_HelloWorldComponentHost0 = function viewFactory_HelloWorldComponentHost0() {
    return new main$46template._ViewHelloWorldComponentHost0.new();
  };
  main$46template.initReflector = function initReflector() {
    if (main$46template._visited) {
      return;
    }
    main$46template._visited = true;
    reflector.registerComponent(dart.wrapType(main.HelloWorldComponent), main$46template.createHelloWorldComponentFactory());
    main$46template.initReflector();
    angular$46template.initReflector();
    app_component$46template.initReflector();
  };
  dart.copyProperties(main$46template, {
    get HelloWorldComponentNgFactory() {
      return main$46template._HelloWorldComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(main$46template, {
    /*main$46template.styles$HelloWorldComponent*/get styles$HelloWorldComponent() {
      return C[2] || CT.C2;
    },
    /*main$46template._HelloWorldComponentNgFactory*/get _HelloWorldComponentNgFactory() {
      return C[3] || CT.C3;
    },
    /*main$46template.styles$HelloWorldComponentHost*/get styles$HelloWorldComponentHost() {
      return C[2] || CT.C2;
    },
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  main.main = function main$() {
    return run.runApp(main.HelloWorldComponent, main$46template.HelloWorldComponentNgFactory);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.template.dart": main$46template,
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","main.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAcA;;;;;;;ACUuC;;IAAW;;AAAX;;;;IAAW;;;AAChB;;IAAiB;;AAAjB;;;;IAAiB;;AAO/C,YAAgB,yBAAY,6CAA6C;IAC3E;;AAIQ,6BAAmB,AAAK;AACuB,MAAhD,oBAAsB,mDAAkB,MAAM;AAC7C,kBAAa,AAAY;AACD,MAA9B,AAAiB,gBAAD,UAAQ,KAAK;AACkB,MAA1C,0BAA4B;AACc,MAA1C,AAAY,yBAAY;IAC/B;;AAIkC,MAAf,6DAAZ;IACP;;AAIyC,MAAlC,AAAY;IACnB;;AAGyB,MAAvB,4DAAmB;IACrB;;AAGM,mBAAS;AACb,UAAK,AAAO,MAAD;AACqG,QAA9G,4DAAoB,SAAiC,qDAAS,4CAA4B;AAC1F,YAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;2DAzCsC,YAAgB;mDAHjB;yDACL;AAEqC,sEAAM,UAAU,EAAE,WAAW;AACtE,IAA1B,AAAK;AAC0E,IAA1E,mBAAc,yCAA2B,AAAS,8BAAc;EACvE;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,yDAAgB;;;;;;;AA2DQ,MAAjD,qBAAgB,iDAAyB,MAAM;AAC9C,kBAAa,AAAc;AACa,MAAzC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;AAbE,UAAO,qDAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,QAAI;AACF;;AAEa,IAAf,2BAAW;AAEsE,IAAjF,qEAA8C;AACzB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAlCE,YAAO;IACT;;;;;MArDmB,0CAA0B;;;MAkDvC,6CAA6B;;;MAShB,8CAA8B;;;MAgB7C,wBAAQ;YAAG;;;;;AD3FA,gDAAU;EAA6B","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main$46template: main$46template,
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
