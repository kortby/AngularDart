define(['dart_sdk', 'packages/angular/src/di/errors', 'packages/angular/src/bootstrap/modules', 'packages/examples.hello_world/learn_direct/text_zoom_directive', 'packages/examples.hello_world/learn_direct/learn_direct_component', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/examples.hello_world/learn_direct/text_zoom_directive.template', 'packages/examples.hello_world/learn_direct/learn_direct_component.css.shim'], (function load__packages__examples_hello_world__learn_direct__learn_direct_component_template(dart_sdk, packages__angular__src__di__errors, packages__angular__src__bootstrap__modules, packages__examples$46hello_world__learn_direct__text_zoom_directive, packages__examples$46hello_world__learn_direct__learn_direct_component, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__examples$46hello_world__learn_direct__text_zoom_directive$46template, packages__examples$46hello_world__learn_direct__learn_direct_component$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
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
  const text_zoom_directive = packages__examples$46hello_world__learn_direct__text_zoom_directive.learn_direct__text_zoom_directive;
  const learn_direct_component = packages__examples$46hello_world__learn_direct__learn_direct_component.learn_direct__learn_direct_component;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const text_zoom_directive$46template = packages__examples$46hello_world__learn_direct__text_zoom_directive$46template.learn_direct__text_zoom_directive$46template;
  const learn_direct_component$46css$46shim = packages__examples$46hello_world__learn_direct__learn_direct_component$46css$46shim.learn_direct__learn_direct_component$46css$46shim;
  var learn_direct_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EmbeddedViewOfvoid: () => (T.EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))(),
    RenderViewAndintToEmbeddedViewOfvoid: () => (T.RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(T.EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfLearnDirectComponent: () => (T.ComponentFactoryOfLearnDirectComponent = dart.constFn(component_factory.ComponentFactory$(learn_direct_component.LearnDirectComponent)))(),
    HostViewOfLearnDirectComponent: () => (T.HostViewOfLearnDirectComponent = dart.constFn(host_view.HostView$(learn_direct_component.LearnDirectComponent)))(),
    VoidToHostViewOfLearnDirectComponent: () => (T.VoidToHostViewOfLearnDirectComponent = dart.constFn(dart.fnType(T.HostViewOfLearnDirectComponent(), [])))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(learn_direct_component$46template.viewFactory_LearnDirectComponent1, T.RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C[1] = dart.fn(learn_direct_component$46template.ViewLearnDirectComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.fn(learn_direct_component$46template.viewFactory_LearnDirectComponentHost0, T.VoidToHostViewOfLearnDirectComponent());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.ComponentFactoryOfLearnDirectComponent().prototype,
        [ComponentFactory__viewFactory]: C[2] || CT.C2,
        [ComponentFactory_selector]: "learn-direct"
      });
    },
    get C4() {
      return C[4] = dart.constList([], core.Object);
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:examples.hello_world/learn_direct/learn_direct_component.template.dart"];
  var __ViewLearnDirectComponent0__appEl_6 = dart.privateName(learn_direct_component$46template, "_#ViewLearnDirectComponent0#_appEl_6");
  var __ViewLearnDirectComponent0__NgFor_6_9 = dart.privateName(learn_direct_component$46template, "_#ViewLearnDirectComponent0#_NgFor_6_9");
  var __ViewLearnDirectComponent0__TextZoomDirective_7_5 = dart.privateName(learn_direct_component$46template, "_#ViewLearnDirectComponent0#_TextZoomDirective_7_5");
  var _expr_0 = dart.privateName(learn_direct_component$46template, "_expr_0");
  var _expr_1 = dart.privateName(learn_direct_component$46template, "_expr_1");
  var __ViewLearnDirectComponent0__el_0 = dart.privateName(learn_direct_component$46template, "_#ViewLearnDirectComponent0#_el_0");
  var _appEl_6 = dart.privateName(learn_direct_component$46template, "_appEl_6");
  var _NgFor_6_9 = dart.privateName(learn_direct_component$46template, "_NgFor_6_9");
  var _TextZoomDirective_7_5 = dart.privateName(learn_direct_component$46template, "_TextZoomDirective_7_5");
  var _el_0 = dart.privateName(learn_direct_component$46template, "_el_0");
  learn_direct_component$46template.ViewLearnDirectComponent0 = class ViewLearnDirectComponent0 extends component_view.ComponentView$(learn_direct_component.LearnDirectComponent) {
    get [_appEl_6]() {
      let t0;
      t0 = this[__ViewLearnDirectComponent0__appEl_6];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_appEl_6")) : t0;
    }
    set [_appEl_6](t0) {
      if (this[__ViewLearnDirectComponent0__appEl_6] == null)
        this[__ViewLearnDirectComponent0__appEl_6] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_appEl_6"));
    }
    get [_NgFor_6_9]() {
      let t1;
      t1 = this[__ViewLearnDirectComponent0__NgFor_6_9];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_NgFor_6_9")) : t1;
    }
    set [_NgFor_6_9](t1) {
      if (this[__ViewLearnDirectComponent0__NgFor_6_9] == null)
        this[__ViewLearnDirectComponent0__NgFor_6_9] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_NgFor_6_9"));
    }
    get [_TextZoomDirective_7_5]() {
      let t2;
      t2 = this[__ViewLearnDirectComponent0__TextZoomDirective_7_5];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_TextZoomDirective_7_5")) : t2;
    }
    set [_TextZoomDirective_7_5](t2) {
      if (this[__ViewLearnDirectComponent0__TextZoomDirective_7_5] == null)
        this[__ViewLearnDirectComponent0__TextZoomDirective_7_5] = t2;
      else
        dart.throw(new _internal.LateError.fieldAI("_TextZoomDirective_7_5"));
    }
    get [_el_0]() {
      let t3;
      t3 = this[__ViewLearnDirectComponent0__el_0];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_el_0")) : t3;
    }
    set [_el_0](t3) {
      if (this[__ViewLearnDirectComponent0__el_0] == null)
        this[__ViewLearnDirectComponent0__el_0] = t3;
      else
        dart.throw(new _internal.LateError.fieldAI("_el_0"));
    }
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/lib/learn_direct/learn_direct_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendElement(html.HtmlElement, doc, parentRenderNode, "h1");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "learn direct");
      let _el_2 = dom_helpers.appendElement(html.ButtonElement, doc, parentRenderNode, "button");
      this.addShimC(_el_2);
      let _text_3 = dom_helpers.appendText(_el_2, "toggle show");
      let _el_4 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_4, "di");
      this.addShimC(_el_4);
      let _el_5 = dom_helpers.appendElement(html.UListElement, doc, _el_4, "ul");
      this.addShimC(_el_5);
      let _anchor_6 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C[0] || CT.C0);
      this[_NgFor_6_9] = new ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.registerDirective(_anchor_6, this[_NgFor_6_9]);
      }
      let _el_7 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_7, "test");
      dom_helpers.setAttribute(_el_7, "myTextZoom", "");
      this.addShimC(_el_7);
      this[_TextZoomDirective_7_5] = new text_zoom_directive.TextZoomDirective.new(_el_7);
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.registerDirective(_el_7, this[_TextZoomDirective_7_5]);
      }
      let _text_8 = dom_helpers.appendText(_el_7, "Test");
      _el_2[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'toggleVisible')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (firstCheck) {
        if (dart.bind(_ctx, 'trackByStudentId') !== null) {
          if (devtools.isDevToolsEnabled) {
            inspector.Inspector.instance.recordInput(this[_NgFor_6_9], "ngForTrackBy", dart.bind(_ctx, 'trackByStudentId'));
          }
          this[_NgFor_6_9].ngForTrackBy = dart.bind(_ctx, 'trackByStudentId');
        }
      }
      let currVal_1 = _ctx.students;
      if (check_binding.checkBinding(this[_expr_1], currVal_1, "students", "package:examples.hello_world/learn_direct/learn_direct_component.html")) {
        if (devtools.isDevToolsEnabled) {
          inspector.Inspector.instance.recordInput(this[_NgFor_6_9], "ngForOf", currVal_1);
        }
        this[_NgFor_6_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!check_binding.debugThrowIfChanged) {
        this[_NgFor_6_9].ngDoCheck();
      }
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.isVisible;
      if (check_binding.checkBinding(this[_expr_0], currVal_0, "isVisible", "package:examples.hello_world/learn_direct/learn_direct_component.html")) {
        dom_helpers.setProperty(this[_el_0], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_6].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      learn_direct_component$46template.ViewLearnDirectComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = learn_direct_component$46template.ViewLearnDirectComponent0._componentStyles;
      if (styles == null) {
        learn_direct_component$46template.ViewLearnDirectComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(learn_direct_component$46template.styles$LearnDirectComponent, learn_direct_component$46template.ViewLearnDirectComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[1] || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (learn_direct_component$46template.ViewLearnDirectComponent0.new = function(parentView, parentIndex) {
    this[__ViewLearnDirectComponent0__appEl_6] = null;
    this[__ViewLearnDirectComponent0__NgFor_6_9] = null;
    this[__ViewLearnDirectComponent0__TextZoomDirective_7_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[__ViewLearnDirectComponent0__el_0] = null;
    learn_direct_component$46template.ViewLearnDirectComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("learn-direct"));
  }).prototype = learn_direct_component$46template.ViewLearnDirectComponent0.prototype;
  dart.addTypeTests(learn_direct_component$46template.ViewLearnDirectComponent0);
  dart.addTypeCaches(learn_direct_component$46template.ViewLearnDirectComponent0);
  dart.setMethodSignature(learn_direct_component$46template.ViewLearnDirectComponent0, () => ({
    __proto__: dart.getMethods(learn_direct_component$46template.ViewLearnDirectComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(learn_direct_component$46template.ViewLearnDirectComponent0, () => ({
    __proto__: dart.getGetters(learn_direct_component$46template.ViewLearnDirectComponent0.__proto__),
    [_appEl_6]: view_container.ViewContainer,
    [_NgFor_6_9]: ng_for.NgFor,
    [_TextZoomDirective_7_5]: text_zoom_directive.TextZoomDirective,
    [_el_0]: html.HtmlElement
  }));
  dart.setSetterSignature(learn_direct_component$46template.ViewLearnDirectComponent0, () => ({
    __proto__: dart.getSetters(learn_direct_component$46template.ViewLearnDirectComponent0.__proto__),
    [_appEl_6]: view_container.ViewContainer,
    [_NgFor_6_9]: ng_for.NgFor,
    [_TextZoomDirective_7_5]: text_zoom_directive.TextZoomDirective,
    [_el_0]: html.HtmlElement
  }));
  dart.setLibraryUri(learn_direct_component$46template.ViewLearnDirectComponent0, I[0]);
  dart.setFieldSignature(learn_direct_component$46template.ViewLearnDirectComponent0, () => ({
    __proto__: dart.getFields(learn_direct_component$46template.ViewLearnDirectComponent0.__proto__),
    [__ViewLearnDirectComponent0__appEl_6]: dart.fieldType(dart.nullable(view_container.ViewContainer)),
    [__ViewLearnDirectComponent0__NgFor_6_9]: dart.fieldType(dart.nullable(ng_for.NgFor)),
    [__ViewLearnDirectComponent0__TextZoomDirective_7_5]: dart.fieldType(dart.nullable(text_zoom_directive.TextZoomDirective)),
    [_expr_0]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_1]: dart.fieldType(dart.nullable(core.Object)),
    [__ViewLearnDirectComponent0__el_0]: dart.fieldType(dart.nullable(html.HtmlElement))
  }));
  dart.defineLazy(learn_direct_component$46template.ViewLearnDirectComponent0, {
    /*learn_direct_component$46template.ViewLearnDirectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  var _textBinding_1 = dart.privateName(learn_direct_component$46template, "_textBinding_1");
  var _textBinding_3 = dart.privateName(learn_direct_component$46template, "_textBinding_3");
  learn_direct_component$46template._ViewLearnDirectComponent1 = class _ViewLearnDirectComponent1 extends embedded_view.EmbeddedView$(learn_direct_component.LearnDirectComponent) {
    build() {
      let doc = html.document;
      let _el_0 = unsafe_cast.unsafeCast(dart.dynamic, doc[$createElement]("li"));
      this.addShimC(html.HtmlElement.as(_el_0));
      dart.dsend(_el_0, 'append', [this[_textBinding_1].element]);
      let _text_2 = dom_helpers.appendText(html.Node.as(_el_0), "- ");
      dart.dsend(_el_0, 'append', [this[_textBinding_3].element]);
      this.initRootNode(core.Object.as(_el_0));
    }
    detectChangesInternal() {
      let local_student = unsafe_cast.unsafeCast(learn_direct_component.Student, this.locals[$_get]("$implicit"));
      this[_textBinding_1].updateTextWithPrimitive(local_student.id);
      this[_textBinding_3].updateText(interpolate.interpolateString0(local_student.name));
    }
  };
  (learn_direct_component$46template._ViewLearnDirectComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_textBinding_3] = new text_binding.TextBinding.new();
    learn_direct_component$46template._ViewLearnDirectComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = learn_direct_component$46template._ViewLearnDirectComponent1.prototype;
  dart.addTypeTests(learn_direct_component$46template._ViewLearnDirectComponent1);
  dart.addTypeCaches(learn_direct_component$46template._ViewLearnDirectComponent1);
  dart.setMethodSignature(learn_direct_component$46template._ViewLearnDirectComponent1, () => ({
    __proto__: dart.getMethods(learn_direct_component$46template._ViewLearnDirectComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(learn_direct_component$46template._ViewLearnDirectComponent1, I[0]);
  dart.setFieldSignature(learn_direct_component$46template._ViewLearnDirectComponent1, () => ({
    __proto__: dart.getFields(learn_direct_component$46template._ViewLearnDirectComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_3]: dart.finalFieldType(text_binding.TextBinding)
  }));
  learn_direct_component$46template._ViewLearnDirectComponentHost0 = class _ViewLearnDirectComponentHost0 extends host_view.HostView$(learn_direct_component.LearnDirectComponent) {
    build() {
      this.componentView = new learn_direct_component$46template.ViewLearnDirectComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new learn_direct_component.LearnDirectComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (learn_direct_component$46template._ViewLearnDirectComponentHost0.new = function() {
    learn_direct_component$46template._ViewLearnDirectComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = learn_direct_component$46template._ViewLearnDirectComponentHost0.prototype;
  dart.addTypeTests(learn_direct_component$46template._ViewLearnDirectComponentHost0);
  dart.addTypeCaches(learn_direct_component$46template._ViewLearnDirectComponentHost0);
  dart.setMethodSignature(learn_direct_component$46template._ViewLearnDirectComponentHost0, () => ({
    __proto__: dart.getMethods(learn_direct_component$46template._ViewLearnDirectComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(learn_direct_component$46template._ViewLearnDirectComponentHost0, I[0]);
  learn_direct_component$46template.createLearnDirectComponentFactory = function createLearnDirectComponentFactory() {
    return new (T.ComponentFactoryOfLearnDirectComponent()).new("learn-direct", C[2] || CT.C2);
  };
  learn_direct_component$46template.viewFactory_LearnDirectComponent1 = function viewFactory_LearnDirectComponent1(parentView, parentIndex) {
    return new learn_direct_component$46template._ViewLearnDirectComponent1.new(parentView, parentIndex);
  };
  learn_direct_component$46template.viewFactory_LearnDirectComponentHost0 = function viewFactory_LearnDirectComponentHost0() {
    return new learn_direct_component$46template._ViewLearnDirectComponentHost0.new();
  };
  learn_direct_component$46template.initReflector = function initReflector() {
    if (learn_direct_component$46template._visited) {
      return;
    }
    learn_direct_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(learn_direct_component.LearnDirectComponent), learn_direct_component$46template.createLearnDirectComponentFactory());
    angular$46template.initReflector();
    text_zoom_directive$46template.initReflector();
  };
  dart.copyProperties(learn_direct_component$46template, {
    get LearnDirectComponentNgFactory() {
      return learn_direct_component$46template._LearnDirectComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(learn_direct_component$46template, {
    /*learn_direct_component$46template.styles$LearnDirectComponent*/get styles$LearnDirectComponent() {
      return T.JSArrayOfObject().of([learn_direct_component$46css$46shim.styles]);
    },
    /*learn_direct_component$46template._LearnDirectComponentNgFactory*/get _LearnDirectComponentNgFactory() {
      return C[3] || CT.C3;
    },
    /*learn_direct_component$46template.styles$LearnDirectComponentHost*/get styles$LearnDirectComponentHost() {
      return C[4] || CT.C4;
    },
    /*learn_direct_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/learn_direct/learn_direct_component.template", {
    "package:examples.hello_world/learn_direct/learn_direct_component.template.dart": learn_direct_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["learn_direct_component.template.dart"],"names":[],"mappings":"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","file":"learn_direct_component.template.sound.ddc.js"}');
  // Exports:
  return {
    learn_direct__learn_direct_component$46template: learn_direct_component$46template
  };
}));

//# sourceMappingURL=learn_direct_component.template.sound.ddc.js.map
