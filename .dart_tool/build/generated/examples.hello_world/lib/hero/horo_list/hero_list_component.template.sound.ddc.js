define(['dart_sdk', 'packages/angular/src/di/errors', 'packages/angular/src/bootstrap/modules', 'packages/examples.hello_world/hero/horo_list/hero_list_component', 'packages/angular/src/runtime/text_binding', 'packages/examples.hello_world/hero/hero', 'packages/angular/src/runtime/interpolate', 'packages/examples.hello_world/hero/hero.template', 'packages/examples.hello_world/hero/horo_list/mock_heros.template', 'packages/angular/angular.template'], (function load__packages__examples_hello_world__hero__horo_list__hero_list_component_template(dart_sdk, packages__angular__src__di__errors, packages__angular__src__bootstrap__modules, packages__examples$46hello_world__hero__horo_list__hero_list_component, packages__angular__src__runtime__text_binding, packages__examples$46hello_world__hero__hero, packages__angular__src__runtime__interpolate, packages__examples$46hello_world__hero__hero$46template, packages__examples$46hello_world__hero__horo_list__mock_heros$46template, packages__angular__angular$46template) {
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
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const devtools = packages__angular__src__bootstrap__modules.src__devtools;
  const inspector = packages__angular__src__bootstrap__modules.src__devtools__inspector;
  const check_binding = packages__angular__src__bootstrap__modules.src__runtime__check_binding;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const hero_list_component = packages__examples$46hello_world__hero__horo_list__hero_list_component.hero__horo_list__hero_list_component;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const hero = packages__examples$46hello_world__hero__hero.hero__hero;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const hero$46template = packages__examples$46hello_world__hero__hero$46template.hero__hero$46template;
  const mock_heros$46template = packages__examples$46hello_world__hero__horo_list__mock_heros$46template.hero__horo_list__mock_heros$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var hero_list_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EmbeddedViewOfvoid: () => (T.EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))(),
    RenderViewAndintToEmbeddedViewOfvoid: () => (T.RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(T.EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfHeroListComponent: () => (T.ComponentFactoryOfHeroListComponent = dart.constFn(component_factory.ComponentFactory$(hero_list_component.HeroListComponent)))(),
    HostViewOfHeroListComponent: () => (T.HostViewOfHeroListComponent = dart.constFn(host_view.HostView$(hero_list_component.HeroListComponent)))(),
    VoidToHostViewOfHeroListComponent: () => (T.VoidToHostViewOfHeroListComponent = dart.constFn(dart.fnType(T.HostViewOfHeroListComponent(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(hero_list_component$46template.viewFactory_HeroListComponent1, T.RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C[1] = dart.fn(hero_list_component$46template.ViewHeroListComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.fn(hero_list_component$46template.viewFactory_HeroListComponentHost0, T.VoidToHostViewOfHeroListComponent());
    },
    get C3() {
      return C[3] = dart.constList([], core.Object);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: T.ComponentFactoryOfHeroListComponent().prototype,
        [ComponentFactory__viewFactory]: C[2] || CT.C2,
        [ComponentFactory_selector]: "hero-list"
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:examples.hello_world/hero/horo_list/hero_list_component.template.dart"];
  var __ViewHeroListComponent0__appEl_0 = dart.privateName(hero_list_component$46template, "_#ViewHeroListComponent0#_appEl_0");
  var __ViewHeroListComponent0__NgFor_0_9 = dart.privateName(hero_list_component$46template, "_#ViewHeroListComponent0#_NgFor_0_9");
  var _appEl_0 = dart.privateName(hero_list_component$46template, "_appEl_0");
  var _NgFor_0_9 = dart.privateName(hero_list_component$46template, "_NgFor_0_9");
  hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends component_view.ComponentView$(hero_list_component.HeroListComponent) {
    get [_appEl_0]() {
      let t0;
      t0 = this[__ViewHeroListComponent0__appEl_0];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_appEl_0")) : t0;
    }
    set [_appEl_0](t0) {
      if (this[__ViewHeroListComponent0__appEl_0] == null)
        this[__ViewHeroListComponent0__appEl_0] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_appEl_0"));
    }
    get [_NgFor_0_9]() {
      let t1;
      t1 = this[__ViewHeroListComponent0__NgFor_0_9];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_NgFor_0_9")) : t1;
    }
    set [_NgFor_0_9](t1) {
      if (this[__ViewHeroListComponent0__NgFor_0_9] == null)
        this[__ViewHeroListComponent0__NgFor_0_9] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_NgFor_0_9"));
    }
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/lib/hero/horo_list/hero_list_component.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C[0] || CT.C0);
      this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.registerDirective(_anchor_0, this[_NgFor_0_9]);
      }
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (firstCheck) {
        if (_ctx.heroes !== null) {
          if (devtools.isDevToolsEnabled) {
            inspector.Inspector.instance.recordInput(this[_NgFor_0_9], "ngForOf", _ctx.heroes);
          }
          this[_NgFor_0_9].ngForOf = _ctx.heroes;
        }
      }
      if (!check_binding.debugThrowIfChanged) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      hero_list_component$46template.ViewHeroListComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = hero_list_component$46template.ViewHeroListComponent0._componentStyles;
      if (styles == null) {
        hero_list_component$46template.ViewHeroListComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(hero_list_component$46template.styles$HeroListComponent, hero_list_component$46template.ViewHeroListComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[1] || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[__ViewHeroListComponent0__appEl_0] = null;
    this[__ViewHeroListComponent0__NgFor_0_9] = null;
    hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("hero-list"));
  }).prototype = hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(hero_list_component$46template.ViewHeroListComponent0);
  dart.addTypeCaches(hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(hero_list_component$46template.ViewHeroListComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getGetters(hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_appEl_0]: view_container.ViewContainer,
    [_NgFor_0_9]: ng_for.NgFor
  }));
  dart.setSetterSignature(hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getSetters(hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_appEl_0]: view_container.ViewContainer,
    [_NgFor_0_9]: ng_for.NgFor
  }));
  dart.setLibraryUri(hero_list_component$46template.ViewHeroListComponent0, I[0]);
  dart.setFieldSignature(hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [__ViewHeroListComponent0__appEl_0]: dart.fieldType(dart.nullable(view_container.ViewContainer)),
    [__ViewHeroListComponent0__NgFor_0_9]: dart.fieldType(dart.nullable(ng_for.NgFor))
  }));
  dart.defineLazy(hero_list_component$46template.ViewHeroListComponent0, {
    /*hero_list_component$46template.ViewHeroListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  var _textBinding_1 = dart.privateName(hero_list_component$46template, "_textBinding_1");
  var _textBinding_3 = dart.privateName(hero_list_component$46template, "_textBinding_3");
  hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends embedded_view.EmbeddedView$(hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = unsafe_cast.unsafeCast(dart.dynamic, doc[$createElement]("div"));
      dart.dsend(_el_0, 'append', [this[_textBinding_1].element]);
      let _text_2 = dom_helpers.appendText(html.Node.as(_el_0), " - ");
      dart.dsend(_el_0, 'append', [this[_textBinding_3].element]);
      this.initRootNode(core.Object.as(_el_0));
    }
    detectChangesInternal() {
      let local_hero = unsafe_cast.unsafeCast(hero.Hero, this.locals[$_get]("$implicit"));
      this[_textBinding_1].updateTextWithPrimitive(local_hero.id);
      this[_textBinding_3].updateText(interpolate.interpolateString0(local_hero.name));
    }
  };
  (hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_textBinding_3] = new text_binding.TextBinding.new();
    hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(hero_list_component$46template._ViewHeroListComponent1);
  dart.addTypeCaches(hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(hero_list_component$46template._ViewHeroListComponent1, I[0]);
  dart.setFieldSignature(hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_3]: dart.finalFieldType(text_binding.TextBinding)
  }));
  hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends host_view.HostView$(hero_list_component.HeroListComponent) {
    build() {
      this.componentView = new hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new hero_list_component.HeroListComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (hero_list_component$46template._ViewHeroListComponentHost0.new = function() {
    hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(hero_list_component$46template._ViewHeroListComponentHost0);
  dart.addTypeCaches(hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(hero_list_component$46template._ViewHeroListComponentHost0, I[0]);
  hero_list_component$46template.createHeroListComponentFactory = function createHeroListComponentFactory() {
    return new (T.ComponentFactoryOfHeroListComponent()).new("hero-list", C[2] || CT.C2);
  };
  hero_list_component$46template.viewFactory_HeroListComponent1 = function viewFactory_HeroListComponent1(parentView, parentIndex) {
    return new hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  hero_list_component$46template.viewFactory_HeroListComponentHost0 = function viewFactory_HeroListComponentHost0() {
    return new hero_list_component$46template._ViewHeroListComponentHost0.new();
  };
  hero_list_component$46template.initReflector = function initReflector() {
    if (hero_list_component$46template._visited) {
      return;
    }
    hero_list_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(hero_list_component.HeroListComponent), hero_list_component$46template.createHeroListComponentFactory());
    hero$46template.initReflector();
    mock_heros$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.copyProperties(hero_list_component$46template, {
    get HeroListComponentNgFactory() {
      return hero_list_component$46template._HeroListComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(hero_list_component$46template, {
    /*hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return C[3] || CT.C3;
    },
    /*hero_list_component$46template._HeroListComponentNgFactory*/get _HeroListComponentNgFactory() {
      return C[4] || CT.C4;
    },
    /*hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return C[3] || CT.C3;
    },
    /*hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/hero/horo_list/hero_list_component.template", {
    "package:examples.hello_world/hero/horo_list/hero_list_component.template.dart": hero_list_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiC2B;;IAAQ;;AAAR;;;;IAAQ;;;AACR;;IAAU;;AAAV;;;;IAAU;;AAOjC,YAAgB,yBAAY,2EAA2E;IACzG;;AAIQ,6BAAmB,AAAK;AACxB,sBAAY,yBAAqB,gBAAgB;AACA,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAClD,6BAAmB,iCAAiB;AACwB,MAA3D,mBAAqB,qBAAW,gBAAU,gBAAgB;AAC/D,UAAa;AAC8D,QAAtD,AAAS,+CAAkB,SAAS,EAAO;;IAElE;;AAIQ,iBAAY;AACb,uBAAkB;AACvB,UAAI,UAAU;AACZ,YAAK,AAAK,IAAD;AACP,cAAa;AACqE,YAA7D,AAAS,yCAAiB,kBAAY,WAAW,AAAK,IAAD;;AAEoD,UAAzH,AAAW,2BAAU,AAAK,IAAD;;;AAGlC,WAAe;AACc,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,yEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAK,AAAO,MAAD;AACmG,QAA5G,yEAAoB,SAAiC,qDAAS,yDAA0B;AACxF,YAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;wEAxDoC,YAAgB;8CAH3B;gDACA;AAE0C,mFAAM,UAAU,EAAE,WAAW;AACpE,IAA1B,AAAK;AAC6E,IAA7E,mBAAc,yCAA2B,AAAS,8BAAc;EACvE;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,sEAAgB;;;;;;;;;AA2ExC,gBAAc;AACd,kBAAQ,qCAAmB,AAAI,GAAD,iBAAe;AACV,MAAnC,WAAN,KAAK,aAAa,AAAe;AAC3B,oBAAU,oCAAmB,KAAK,GAAE;AACD,MAAnC,WAAN,KAAK,aAAa,AAAe;AACT,MAAxB,AAAK,iCAAa,KAAK;IACzB;;AAIQ,uBAAa,kCAAuC,AAAM,mBAAC;AACkF,MAA9I,AAAe,6CAAwB,AAAW,UAAD;AAC+G,MAAhK,AAAe,gCAAW,+BAA4B,AAAW,UAAD;IACvE;;yEAhB4C,YAAgB;IAFjC,uBAA0B;IAC1B,uBAA0B;AACsB,oFAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;AA4BnD,MAA/C,qBAAgB,8DAAuB,MAAM;AAC5C,kBAAa,AAAc;AACW,MAAvC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;AAvCE,UAAO,mDAAiB;EAC1B;0GAwB+E,YAAgB;AAC7F,UAAO,gEAAwB,UAAU,EAAE,WAAW;EACxD;;AAeE,UAAO;EACT;;AAIE,QAAI;AACF;;AAEa,IAAf,0CAAW;AAEkE,IAA7E,kFAA4C;AACvB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA5DE,YAAO;IACT;;;;;MApEmB,uDAAwB;;;MAiErC,0DAA2B;;;MAmCd,2DAA4B;;;MAgB3C,uCAAQ;YAAG","file":"hero_list_component.template.sound.ddc.js"}');
  // Exports:
  return {
    hero__horo_list__hero_list_component$46template: hero_list_component$46template
  };
}));

//# sourceMappingURL=hero_list_component.template.sound.ddc.js.map
