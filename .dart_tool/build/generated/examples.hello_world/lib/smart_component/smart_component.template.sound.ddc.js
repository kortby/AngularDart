define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/di/errors', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/examples.hello_world/smart_component/smart_component', 'packages/angular/angular.template', 'packages/examples.hello_world/smart_component/smart_component.css.shim'], (function load__packages__examples_hello_world__smart_component__smart_component_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__di__errors, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__examples$46hello_world__smart_component__smart_component, packages__angular__angular$46template, packages__examples$46hello_world__smart_component__smart_component$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const unsafe_cast = packages__angular__src__di__errors.src__utilities__unsafe_cast;
  const is_dev_mode = packages__angular__src__di__errors.src__utilities__is_dev_mode;
  const reflector = packages__angular__src__di__errors.src__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const smart_component = packages__examples$46hello_world__smart_component__smart_component.smart_component__smart_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const smart_component$46css$46shim = packages__examples$46hello_world__smart_component__smart_component$46css$46shim.smart_component__smart_component$46css$46shim;
  var smart_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfSmartComponent: () => (T.ComponentFactoryOfSmartComponent = dart.constFn(component_factory.ComponentFactory$(smart_component.SmartComponent)))(),
    HostViewOfSmartComponent: () => (T.HostViewOfSmartComponent = dart.constFn(host_view.HostView$(smart_component.SmartComponent)))(),
    VoidToHostViewOfSmartComponent: () => (T.VoidToHostViewOfSmartComponent = dart.constFn(dart.fnType(T.HostViewOfSmartComponent(), [])))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(smart_component$46template.ViewSmartComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.fn(smart_component$46template.viewFactory_SmartComponentHost0, T.VoidToHostViewOfSmartComponent());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: T.ComponentFactoryOfSmartComponent().prototype,
        [ComponentFactory__viewFactory]: C[1] || CT.C1,
        [ComponentFactory_selector]: "smart-co"
      });
    },
    get C3() {
      return C[3] = dart.constList([], core.Object);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["package:examples.hello_world/smart_component/smart_component.template.dart"];
  var _textBinding_4 = dart.privateName(smart_component$46template, "_textBinding_4");
  smart_component$46template.ViewSmartComponent0 = class ViewSmartComponent0 extends component_view.ComponentView$(smart_component.SmartComponent) {
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/lib/smart_component/smart_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(html.HtmlElement, doc, parentRenderNode, "h1");
      this.addShimC(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, interpolate.interpolateString0(_ctx.title));
      let _el_2 = dom_helpers.appendElement(html.HtmlElement, doc, parentRenderNode, "p");
      this.addShimC(_el_2);
      let _text_3 = dom_helpers.appendText(_el_2, "Parent to child ");
      _el_2[$append](this[_textBinding_4].element);
      let _el_5 = dom_helpers.appendElement(html.ButtonElement, doc, parentRenderNode, "button");
      this.addShimC(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "get name");
      _el_5[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'getName')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.name));
    }
    static _debugClearComponentStyles() {
      smart_component$46template.ViewSmartComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = smart_component$46template.ViewSmartComponent0._componentStyles;
      if (styles == null) {
        smart_component$46template.ViewSmartComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(smart_component$46template.styles$SmartComponent, smart_component$46template.ViewSmartComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[0] || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (smart_component$46template.ViewSmartComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    smart_component$46template.ViewSmartComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("smart-co"));
  }).prototype = smart_component$46template.ViewSmartComponent0.prototype;
  dart.addTypeTests(smart_component$46template.ViewSmartComponent0);
  dart.addTypeCaches(smart_component$46template.ViewSmartComponent0);
  dart.setMethodSignature(smart_component$46template.ViewSmartComponent0, () => ({
    __proto__: dart.getMethods(smart_component$46template.ViewSmartComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(smart_component$46template.ViewSmartComponent0, I[0]);
  dart.setFieldSignature(smart_component$46template.ViewSmartComponent0, () => ({
    __proto__: dart.getFields(smart_component$46template.ViewSmartComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(text_binding.TextBinding)
  }));
  dart.defineLazy(smart_component$46template.ViewSmartComponent0, {
    /*smart_component$46template.ViewSmartComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  smart_component$46template._ViewSmartComponentHost0 = class _ViewSmartComponentHost0 extends host_view.HostView$(smart_component.SmartComponent) {
    build() {
      this.componentView = new smart_component$46template.ViewSmartComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new smart_component.SmartComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (smart_component$46template._ViewSmartComponentHost0.new = function() {
    smart_component$46template._ViewSmartComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = smart_component$46template._ViewSmartComponentHost0.prototype;
  dart.addTypeTests(smart_component$46template._ViewSmartComponentHost0);
  dart.addTypeCaches(smart_component$46template._ViewSmartComponentHost0);
  dart.setMethodSignature(smart_component$46template._ViewSmartComponentHost0, () => ({
    __proto__: dart.getMethods(smart_component$46template._ViewSmartComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(smart_component$46template._ViewSmartComponentHost0, I[0]);
  smart_component$46template.createSmartComponentFactory = function createSmartComponentFactory() {
    return new (T.ComponentFactoryOfSmartComponent()).new("smart-co", C[1] || CT.C1);
  };
  smart_component$46template.viewFactory_SmartComponentHost0 = function viewFactory_SmartComponentHost0() {
    return new smart_component$46template._ViewSmartComponentHost0.new();
  };
  smart_component$46template.initReflector = function initReflector() {
    if (smart_component$46template._visited) {
      return;
    }
    smart_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(smart_component.SmartComponent), smart_component$46template.createSmartComponentFactory());
    angular$46template.initReflector();
  };
  dart.copyProperties(smart_component$46template, {
    get SmartComponentNgFactory() {
      return smart_component$46template._SmartComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(smart_component$46template, {
    /*smart_component$46template.styles$SmartComponent*/get styles$SmartComponent() {
      return T.JSArrayOfObject().of([smart_component$46css$46shim.styles]);
    },
    /*smart_component$46template._SmartComponentNgFactory*/get _SmartComponentNgFactory() {
      return C[2] || CT.C2;
    },
    /*smart_component$46template.styles$SmartComponentHost*/get styles$SmartComponentHost() {
      return C[3] || CT.C3;
    },
    /*smart_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/smart_component/smart_component.template", {
    "package:examples.hello_world/smart_component/smart_component.template.dart": smart_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["smart_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BI,YAAgB,yBAAY,wEAAwE;IACtG;;AAIQ,iBAAY;AACZ,6BAAmB,AAAK;AACxB,gBAAc;AACd,kBAAQ,4CAA2C,GAAG,EAAE,gBAAgB,EAAE;AAC5D,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAmB,KAAK,EAAE,+BAA4B,AAAK,IAAD;AACpE,kBAAQ,4CAA2C,GAAG,EAAE,gBAAgB,EAAE;AAC5D,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAmB,KAAK,EAAE;AACD,MAAzC,AAAM,KAAD,UAAa,AAAe;AAC3B,kBAAQ,8CAA6C,GAAG,EAAE,gBAAgB,EAAE;AAC9D,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAmB,KAAK,EAAE;AACuB,MAAjE,AAAM,KAAD,oBAAkB,SAAS,AAAK,+BAAmB,UAAL,IAAI;IACzD;;AAIQ,iBAAY;AACsI,MAAnJ,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IACjE;;AAGyB,MAAvB,kEAAmB;IACrB;;AAGM,mBAAS;AACb,UAAK,AAAO,MAAD;AAC8F,QAAvG,kEAAoB,SAAiC,2CAAO,kDAAuB;AACnF,YAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iEA7CiC,YAAgB;IAFvB,uBAAyB;AAEa,4EAAM,UAAU,EAAE,WAAW;AACjE,IAA1B,AAAK;AAC4E,IAA5E,mBAAc,yCAA2B,AAAS,8BAAc;EACvE;;;;;;;;;;;;;MAJgC,+DAAgB;;;;;;;AA+DG,MAA5C,qBAAgB,uDAAoB,MAAM;AACzC,kBAAa,AAAc;AACQ,MAApC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;AAbE,UAAO,gDAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,QAAI;AACF;;AAEa,IAAf,sCAAW;AAE4D,IAAvE,2EAAyC;AACpB,IAArB;EACF;;;AAhCE,YAAO;IACT;;;;;MAxDmB,gDAAqB;YAAG,yBAAS;;MAqD9C,mDAAwB;;;MASX,oDAAyB;;;MAgBxC,mCAAQ;YAAG","file":"smart_component.template.sound.ddc.js"}');
  // Exports:
  return {
    smart_component__smart_component$46template: smart_component$46template
  };
}));

//# sourceMappingURL=smart_component.template.sound.ddc.js.map
