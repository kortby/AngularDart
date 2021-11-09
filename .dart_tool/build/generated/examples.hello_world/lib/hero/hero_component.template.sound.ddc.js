define(['dart_sdk', 'packages/angular/src/di/errors', 'packages/angular/src/bootstrap/modules', 'packages/examples.hello_world/hero/horo_list/hero_list_component.template', 'packages/examples.hello_world/hero/horo_list/hero_list_component', 'packages/examples.hello_world/hero/hero_component', 'packages/angular/angular.template'], (function load__packages__examples_hello_world__hero__hero_component_template(dart_sdk, packages__angular__src__di__errors, packages__angular__src__bootstrap__modules, packages__examples$46hello_world__hero__horo_list__hero_list_component$46template, packages__examples$46hello_world__hero__horo_list__hero_list_component, packages__examples$46hello_world__hero__hero_component, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unsafe_cast = packages__angular__src__di__errors.src__utilities__unsafe_cast;
  const is_dev_mode = packages__angular__src__di__errors.src__utilities__is_dev_mode;
  const reflector = packages__angular__src__di__errors.src__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const change_detector_ref = packages__angular__src__bootstrap__modules.src__core__change_detection__change_detector_ref;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const hero_list_component$46template = packages__examples$46hello_world__hero__horo_list__hero_list_component$46template.hero__horo_list__hero_list_component$46template;
  const hero_list_component = packages__examples$46hello_world__hero__horo_list__hero_list_component.hero__horo_list__hero_list_component;
  const hero_component = packages__examples$46hello_world__hero__hero_component.hero__hero_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var hero_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfHeroesComponent: () => (T.ComponentFactoryOfHeroesComponent = dart.constFn(component_factory.ComponentFactory$(hero_component.HeroesComponent)))(),
    HostViewOfHeroesComponent: () => (T.HostViewOfHeroesComponent = dart.constFn(host_view.HostView$(hero_component.HeroesComponent)))(),
    VoidToHostViewOfHeroesComponent: () => (T.VoidToHostViewOfHeroesComponent = dart.constFn(dart.fnType(T.HostViewOfHeroesComponent(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(hero_component$46template.ViewHeroesComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.fn(hero_component$46template.viewFactory_HeroesComponentHost0, T.VoidToHostViewOfHeroesComponent());
    },
    get C2() {
      return C[2] = dart.constList([], core.Object);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.ComponentFactoryOfHeroesComponent().prototype,
        [ComponentFactory__viewFactory]: C[1] || CT.C1,
        [ComponentFactory_selector]: "my-heroes"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:examples.hello_world/hero/hero_component.template.dart"];
  var __ViewHeroesComponent0__compView_2 = dart.privateName(hero_component$46template, "_#ViewHeroesComponent0#_compView_2");
  var __ViewHeroesComponent0__HeroListComponent_2_5 = dart.privateName(hero_component$46template, "_#ViewHeroesComponent0#_HeroListComponent_2_5");
  var _compView_2 = dart.privateName(hero_component$46template, "_compView_2");
  var _HeroListComponent_2_5 = dart.privateName(hero_component$46template, "_HeroListComponent_2_5");
  hero_component$46template.ViewHeroesComponent0 = class ViewHeroesComponent0 extends component_view.ComponentView$(hero_component.HeroesComponent) {
    get [_compView_2]() {
      let t0;
      t0 = this[__ViewHeroesComponent0__compView_2];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_2")) : t0;
    }
    set [_compView_2](t0) {
      if (this[__ViewHeroesComponent0__compView_2] == null)
        this[__ViewHeroesComponent0__compView_2] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_2"));
    }
    get [_HeroListComponent_2_5]() {
      let t1;
      t1 = this[__ViewHeroesComponent0__HeroListComponent_2_5];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_HeroListComponent_2_5")) : t1;
    }
    set [_HeroListComponent_2_5](t1) {
      if (this[__ViewHeroesComponent0__HeroListComponent_2_5] == null)
        this[__ViewHeroesComponent0__HeroListComponent_2_5] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_HeroListComponent_2_5"));
    }
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/lib/hero/hero_component.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(html.HtmlElement, doc, parentRenderNode, "h2");
      let _text_1 = dom_helpers.appendText(_el_0, "Heroes");
      this[_compView_2] = new hero_list_component$46template.ViewHeroListComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      parentRenderNode[$append](_el_2);
      this[_HeroListComponent_2_5] = new hero_list_component.HeroListComponent.new();
      this[_compView_2].create(this[_HeroListComponent_2_5]);
    }
    detectChangesInternal() {
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_2]);
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      hero_component$46template.ViewHeroesComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = hero_component$46template.ViewHeroesComponent0._componentStyles;
      if (styles == null) {
        hero_component$46template.ViewHeroesComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(hero_component$46template.styles$HeroesComponent, hero_component$46template.ViewHeroesComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[0] || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (hero_component$46template.ViewHeroesComponent0.new = function(parentView, parentIndex) {
    this[__ViewHeroesComponent0__compView_2] = null;
    this[__ViewHeroesComponent0__HeroListComponent_2_5] = null;
    hero_component$46template.ViewHeroesComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("my-heroes"));
  }).prototype = hero_component$46template.ViewHeroesComponent0.prototype;
  dart.addTypeTests(hero_component$46template.ViewHeroesComponent0);
  dart.addTypeCaches(hero_component$46template.ViewHeroesComponent0);
  dart.setMethodSignature(hero_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getMethods(hero_component$46template.ViewHeroesComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hero_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getGetters(hero_component$46template.ViewHeroesComponent0.__proto__),
    [_compView_2]: hero_list_component$46template.ViewHeroListComponent0,
    [_HeroListComponent_2_5]: hero_list_component.HeroListComponent
  }));
  dart.setSetterSignature(hero_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getSetters(hero_component$46template.ViewHeroesComponent0.__proto__),
    [_compView_2]: hero_list_component$46template.ViewHeroListComponent0,
    [_HeroListComponent_2_5]: hero_list_component.HeroListComponent
  }));
  dart.setLibraryUri(hero_component$46template.ViewHeroesComponent0, I[0]);
  dart.setFieldSignature(hero_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getFields(hero_component$46template.ViewHeroesComponent0.__proto__),
    [__ViewHeroesComponent0__compView_2]: dart.fieldType(dart.nullable(hero_list_component$46template.ViewHeroListComponent0)),
    [__ViewHeroesComponent0__HeroListComponent_2_5]: dart.fieldType(dart.nullable(hero_list_component.HeroListComponent))
  }));
  dart.defineLazy(hero_component$46template.ViewHeroesComponent0, {
    /*hero_component$46template.ViewHeroesComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  hero_component$46template._ViewHeroesComponentHost0 = class _ViewHeroesComponentHost0 extends host_view.HostView$(hero_component.HeroesComponent) {
    build() {
      this.componentView = new hero_component$46template.ViewHeroesComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new hero_component.HeroesComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (hero_component$46template._ViewHeroesComponentHost0.new = function() {
    hero_component$46template._ViewHeroesComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = hero_component$46template._ViewHeroesComponentHost0.prototype;
  dart.addTypeTests(hero_component$46template._ViewHeroesComponentHost0);
  dart.addTypeCaches(hero_component$46template._ViewHeroesComponentHost0);
  dart.setMethodSignature(hero_component$46template._ViewHeroesComponentHost0, () => ({
    __proto__: dart.getMethods(hero_component$46template._ViewHeroesComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(hero_component$46template._ViewHeroesComponentHost0, I[0]);
  hero_component$46template.createHeroesComponentFactory = function createHeroesComponentFactory() {
    return new (T.ComponentFactoryOfHeroesComponent()).new("my-heroes", C[1] || CT.C1);
  };
  hero_component$46template.viewFactory_HeroesComponentHost0 = function viewFactory_HeroesComponentHost0() {
    return new hero_component$46template._ViewHeroesComponentHost0.new();
  };
  hero_component$46template.initReflector = function initReflector() {
    if (hero_component$46template._visited) {
      return;
    }
    hero_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(hero_component.HeroesComponent), hero_component$46template.createHeroesComponentFactory());
    angular$46template.initReflector();
    hero_list_component$46template.initReflector();
  };
  dart.copyProperties(hero_component$46template, {
    get HeroesComponentNgFactory() {
      return hero_component$46template._HeroesComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(hero_component$46template, {
    /*hero_component$46template.styles$HeroesComponent*/get styles$HeroesComponent() {
      return C[2] || CT.C2;
    },
    /*hero_component$46template._HeroesComponentNgFactory*/get _HeroesComponentNgFactory() {
      return C[3] || CT.C3;
    },
    /*hero_component$46template.styles$HeroesComponentHost*/get styles$HeroesComponentHost() {
      return C[2] || CT.C2;
    },
    /*hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/hero/hero_component.template", {
    "package:examples.hello_world/hero/hero_component.template.dart": hero_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwB4C;;IAAW;;AAAX;;;;IAAW;;;AAChB;;IAAsB;;AAAtB;;;;IAAsB;;AAOzD,YAAgB,yBAAY,4DAA4D;IAC1F;;AAIQ,6BAAmB,AAAK;AACxB,gBAAc;AACd,kBAAQ,4CAA2C,GAAG,EAAE,gBAAgB,EAAE;AAC1E,oBAAU,uBAAmB,KAAK,EAAE;AACgB,MAArD,oBAAsB,8DAAuB,MAAM;AAClD,kBAAa,AAAY;AACD,MAA9B,AAAiB,gBAAD,UAAQ,KAAK;AAC4B,MAApD,+BAAiC;AACc,MAA/C,AAAY,yBAAY;IAC/B;;AAIkC,MAAf,6DAAZ;IACP;;AAIyC,MAAlC,AAAY;IACnB;;AAGyB,MAAvB,kEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAK,AAAO,MAAD;AACiG,QAA1G,kEAAoB,SAAiC,qDAAS,kDAAwB;AACtF,YAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iEA5CkC,YAAgB;+CAHR;0DACL;AAE4B,4EAAM,UAAU,EAAE,WAAW;AAClE,IAA1B,AAAK;AAC6E,IAA7E,mBAAc,yCAA2B,AAAS,8BAAc;EACvE;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,+DAAgB;;;;;;;AA8DI,MAA7C,qBAAgB,uDAAqB,MAAM;AAC1C,kBAAa,AAAc;AACS,MAArC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;AAbE,UAAO,iDAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,QAAI;AACF;;AAEa,IAAf,qCAAW;AAE8D,IAAzE,2EAA0C;AACrB,IAArB;AACqB,IAArB;EACF;;;AAjCE,YAAO;IACT;;;;;MAxDmB,gDAAsB;;;MAqDnC,mDAAyB;;;MASZ,oDAA0B;;;MAgBzC,kCAAQ;YAAG","file":"hero_component.template.sound.ddc.js"}');
  // Exports:
  return {
    hero__hero_component$46template: hero_component$46template
  };
}));

//# sourceMappingURL=hero_component.template.sound.ddc.js.map
