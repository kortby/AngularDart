define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/di/errors', 'packages/angular/src/bootstrap/modules', 'packages/examples.hello_world/form/form_component.template', 'packages/examples.hello_world/form/form_component', 'packages/examples.hello_world/learn_direct/learn_direct_component.template', 'packages/examples.hello_world/learn_direct/learn_direct_component', 'packages/examples.hello_world/smart_component/smart_component.template', 'packages/examples.hello_world/smart_component/smart_component', 'packages/examples.hello_world/hero/hero_component.template', 'packages/examples.hello_world/hero/hero_component', 'packages/angular/src/runtime/interpolate', 'packages/examples.hello_world/app_component', 'packages/angular/angular.template', 'packages/examples.hello_world/app_component.css.shim'], (function load__packages__examples_hello_world__app_component_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__di__errors, packages__angular__src__bootstrap__modules, packages__examples$46hello_world__form__form_component$46template, packages__examples$46hello_world__form__form_component, packages__examples$46hello_world__learn_direct__learn_direct_component$46template, packages__examples$46hello_world__learn_direct__learn_direct_component, packages__examples$46hello_world__smart_component__smart_component$46template, packages__examples$46hello_world__smart_component__smart_component, packages__examples$46hello_world__hero__hero_component$46template, packages__examples$46hello_world__hero__hero_component, packages__angular__src__runtime__interpolate, packages__examples$46hello_world__app_component, packages__angular__angular$46template, packages__examples$46hello_world__app_component$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const unsafe_cast = packages__angular__src__di__errors.src__utilities__unsafe_cast;
  const is_dev_mode = packages__angular__src__di__errors.src__utilities__is_dev_mode;
  const reflector = packages__angular__src__di__errors.src__reflector;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const devtools = packages__angular__src__bootstrap__modules.src__devtools;
  const inspector = packages__angular__src__bootstrap__modules.src__devtools__inspector;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const check_binding = packages__angular__src__bootstrap__modules.src__runtime__check_binding;
  const change_detector_ref = packages__angular__src__bootstrap__modules.src__core__change_detection__change_detector_ref;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const form_component$46template = packages__examples$46hello_world__form__form_component$46template.form__form_component$46template;
  const form_component = packages__examples$46hello_world__form__form_component.form__form_component;
  const learn_direct_component$46template = packages__examples$46hello_world__learn_direct__learn_direct_component$46template.learn_direct__learn_direct_component$46template;
  const learn_direct_component = packages__examples$46hello_world__learn_direct__learn_direct_component.learn_direct__learn_direct_component;
  const smart_component$46template = packages__examples$46hello_world__smart_component__smart_component$46template.smart_component__smart_component$46template;
  const smart_component = packages__examples$46hello_world__smart_component__smart_component.smart_component__smart_component;
  const hero_component$46template = packages__examples$46hello_world__hero__hero_component$46template.hero__hero_component$46template;
  const hero_component = packages__examples$46hello_world__hero__hero_component.hero__hero_component;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const app_component = packages__examples$46hello_world__app_component.app_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const app_component$46css$46shim = packages__examples$46hello_world__app_component$46css$46shim.app_component$46css$46shim;
  var app_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EmbeddedViewOfvoid: () => (T.EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))(),
    RenderViewAndintToEmbeddedViewOfvoid: () => (T.RenderViewAndintToEmbeddedViewOfvoid = dart.constFn(dart.fnType(T.EmbeddedViewOfvoid(), [render_view.RenderView, core.int])))(),
    StreamSubscriptionOfvoid: () => (T.StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))(),
    JSArrayOfStreamSubscriptionOfvoid: () => (T.JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(T.StreamSubscriptionOfvoid())))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ComponentFactoryOfAppComponent: () => (T.ComponentFactoryOfAppComponent = dart.constFn(component_factory.ComponentFactory$(app_component.AppComponent)))(),
    HostViewOfAppComponent: () => (T.HostViewOfAppComponent = dart.constFn(host_view.HostView$(app_component.AppComponent)))(),
    VoidToHostViewOfAppComponent: () => (T.VoidToHostViewOfAppComponent = dart.constFn(dart.fnType(T.HostViewOfAppComponent(), [])))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(app_component$46template.viewFactory_AppComponent1, T.RenderViewAndintToEmbeddedViewOfvoid());
    },
    get C1() {
      return C[1] = dart.fn(app_component$46template.ViewAppComponent0._debugClearComponentStyles, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.fn(app_component$46template.viewFactory_AppComponentHost0, T.VoidToHostViewOfAppComponent());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T.ComponentFactoryOfAppComponent().prototype,
        [ComponentFactory__viewFactory]: C[2] || CT.C2,
        [ComponentFactory_selector]: "my-co"
      });
    },
    get C4() {
      return C[4] = dart.constList([], core.Object);
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = ["package:examples.hello_world/app_component.template.dart"];
  var _textBinding_7 = dart.privateName(app_component$46template, "_textBinding_7");
  var _textBinding_10 = dart.privateName(app_component$46template, "_textBinding_10");
  var __ViewAppComponent0__compView_1 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_compView_1");
  var __ViewAppComponent0__FormComponent_1_5 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_FormComponent_1_5");
  var __ViewAppComponent0__NgClass_6_5 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_NgClass_6_5");
  var __ViewAppComponent0__appEl_11 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_appEl_11");
  var __ViewAppComponent0__NgIf_11_9 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_NgIf_11_9");
  var __ViewAppComponent0__compView_15 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_compView_15");
  var __ViewAppComponent0__LearnDirectComponent_15_5 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_LearnDirectComponent_15_5");
  var __ViewAppComponent0__compView_20 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_compView_20");
  var __ViewAppComponent0__SmartComponent_20_5 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_SmartComponent_20_5");
  var __ViewAppComponent0__compView_25 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_compView_25");
  var __ViewAppComponent0__HeroesComponent_25_5 = dart.privateName(app_component$46template, "_#ViewAppComponent0#_HeroesComponent_25_5");
  var _expr_0 = dart.privateName(app_component$46template, "_expr_0");
  var _expr_1 = dart.privateName(app_component$46template, "_expr_1");
  var _compView_1 = dart.privateName(app_component$46template, "_compView_1");
  var _FormComponent_1_5 = dart.privateName(app_component$46template, "_FormComponent_1_5");
  var _NgClass_6_5 = dart.privateName(app_component$46template, "_NgClass_6_5");
  var _appEl_11 = dart.privateName(app_component$46template, "_appEl_11");
  var _NgIf_11_9 = dart.privateName(app_component$46template, "_NgIf_11_9");
  var _compView_15 = dart.privateName(app_component$46template, "_compView_15");
  var _LearnDirectComponent_15_5 = dart.privateName(app_component$46template, "_LearnDirectComponent_15_5");
  var _compView_20 = dart.privateName(app_component$46template, "_compView_20");
  var _SmartComponent_20_5 = dart.privateName(app_component$46template, "_SmartComponent_20_5");
  var _compView_25 = dart.privateName(app_component$46template, "_compView_25");
  var _HeroesComponent_25_5 = dart.privateName(app_component$46template, "_HeroesComponent_25_5");
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends component_view.ComponentView$(app_component.AppComponent) {
    get [_compView_1]() {
      let t0;
      t0 = this[__ViewAppComponent0__compView_1];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_1")) : t0;
    }
    set [_compView_1](t0) {
      if (this[__ViewAppComponent0__compView_1] == null)
        this[__ViewAppComponent0__compView_1] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_1"));
    }
    get [_FormComponent_1_5]() {
      let t1;
      t1 = this[__ViewAppComponent0__FormComponent_1_5];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_FormComponent_1_5")) : t1;
    }
    set [_FormComponent_1_5](t1) {
      if (this[__ViewAppComponent0__FormComponent_1_5] == null)
        this[__ViewAppComponent0__FormComponent_1_5] = t1;
      else
        dart.throw(new _internal.LateError.fieldAI("_FormComponent_1_5"));
    }
    get [_NgClass_6_5]() {
      let t2;
      t2 = this[__ViewAppComponent0__NgClass_6_5];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_NgClass_6_5")) : t2;
    }
    set [_NgClass_6_5](t2) {
      if (this[__ViewAppComponent0__NgClass_6_5] == null)
        this[__ViewAppComponent0__NgClass_6_5] = t2;
      else
        dart.throw(new _internal.LateError.fieldAI("_NgClass_6_5"));
    }
    get [_appEl_11]() {
      let t3;
      t3 = this[__ViewAppComponent0__appEl_11];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_appEl_11")) : t3;
    }
    set [_appEl_11](t3) {
      if (this[__ViewAppComponent0__appEl_11] == null)
        this[__ViewAppComponent0__appEl_11] = t3;
      else
        dart.throw(new _internal.LateError.fieldAI("_appEl_11"));
    }
    get [_NgIf_11_9]() {
      let t4;
      t4 = this[__ViewAppComponent0__NgIf_11_9];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_NgIf_11_9")) : t4;
    }
    set [_NgIf_11_9](t4) {
      if (this[__ViewAppComponent0__NgIf_11_9] == null)
        this[__ViewAppComponent0__NgIf_11_9] = t4;
      else
        dart.throw(new _internal.LateError.fieldAI("_NgIf_11_9"));
    }
    get [_compView_15]() {
      let t5;
      t5 = this[__ViewAppComponent0__compView_15];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_15")) : t5;
    }
    set [_compView_15](t5) {
      if (this[__ViewAppComponent0__compView_15] == null)
        this[__ViewAppComponent0__compView_15] = t5;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_15"));
    }
    get [_LearnDirectComponent_15_5]() {
      let t6;
      t6 = this[__ViewAppComponent0__LearnDirectComponent_15_5];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_LearnDirectComponent_15_5")) : t6;
    }
    set [_LearnDirectComponent_15_5](t6) {
      if (this[__ViewAppComponent0__LearnDirectComponent_15_5] == null)
        this[__ViewAppComponent0__LearnDirectComponent_15_5] = t6;
      else
        dart.throw(new _internal.LateError.fieldAI("_LearnDirectComponent_15_5"));
    }
    get [_compView_20]() {
      let t7;
      t7 = this[__ViewAppComponent0__compView_20];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_20")) : t7;
    }
    set [_compView_20](t7) {
      if (this[__ViewAppComponent0__compView_20] == null)
        this[__ViewAppComponent0__compView_20] = t7;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_20"));
    }
    get [_SmartComponent_20_5]() {
      let t8;
      t8 = this[__ViewAppComponent0__SmartComponent_20_5];
      return t8 == null ? dart.throw(new _internal.LateError.fieldNI("_SmartComponent_20_5")) : t8;
    }
    set [_SmartComponent_20_5](t8) {
      if (this[__ViewAppComponent0__SmartComponent_20_5] == null)
        this[__ViewAppComponent0__SmartComponent_20_5] = t8;
      else
        dart.throw(new _internal.LateError.fieldAI("_SmartComponent_20_5"));
    }
    get [_compView_25]() {
      let t9;
      t9 = this[__ViewAppComponent0__compView_25];
      return t9 == null ? dart.throw(new _internal.LateError.fieldNI("_compView_25")) : t9;
    }
    set [_compView_25](t9) {
      if (this[__ViewAppComponent0__compView_25] == null)
        this[__ViewAppComponent0__compView_25] = t9;
      else
        dart.throw(new _internal.LateError.fieldAI("_compView_25"));
    }
    get [_HeroesComponent_25_5]() {
      let t10;
      t10 = this[__ViewAppComponent0__HeroesComponent_25_5];
      return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_HeroesComponent_25_5")) : t10;
    }
    set [_HeroesComponent_25_5](t10) {
      if (this[__ViewAppComponent0__HeroesComponent_25_5] == null)
        this[__ViewAppComponent0__HeroesComponent_25_5] = t10;
      else
        dart.throw(new _internal.LateError.fieldAI("_HeroesComponent_25_5"));
    }
    static get _debugComponentUrl() {
      return is_dev_mode.isDevMode ? "asset:examples.hello_world/lib/app_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this[_compView_1] = new form_component$46template.ViewFormComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_FormComponent_1_5] = new form_component.FormComponent.new();
      this[_compView_1].create(this[_FormComponent_1_5]);
      let _el_2 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_3);
      let _el_4 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_4);
      let _el_5 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_5);
      let _el_6 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "h1");
      this.addShimC(_el_6);
      this[_NgClass_6_5] = new ng_class.NgClass.new(_el_6);
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.registerDirective(_el_6, this[_NgClass_6_5]);
      }
      _el_6[$append](this[_textBinding_7].element);
      let _el_8 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "h3");
      this.addShimC(_el_8);
      let _text_9 = dom_helpers.appendText(_el_8, "$");
      _el_8[$append](this[_textBinding_10].element);
      let _anchor_11 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 0, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C[0] || CT.C0);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.registerDirective(_anchor_11, this[_NgIf_11_9]);
      }
      let _el_12 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_12, "btn");
      this.addShimC(_el_12);
      let _el_13 = dom_helpers.appendElement(html.ButtonElement, doc, _el_12, "button");
      this.addShimC(_el_13);
      let _text_14 = dom_helpers.appendText(_el_13, "Make money!");
      this[_compView_15] = new learn_direct_component$46template.ViewLearnDirectComponent0.new(this, 15);
      let _el_15 = this[_compView_15].rootElement;
      _el_0[$append](_el_15);
      this.addShimC(_el_15);
      this[_LearnDirectComponent_15_5] = new learn_direct_component.LearnDirectComponent.new();
      this[_compView_15].create(this[_LearnDirectComponent_15_5]);
      let _el_16 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_16);
      let _el_17 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_17);
      let _el_18 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_18);
      let _el_19 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_19);
      this[_compView_20] = new smart_component$46template.ViewSmartComponent0.new(this, 20);
      let _el_20 = this[_compView_20].rootElement;
      _el_0[$append](_el_20);
      this.addShimC(_el_20);
      this[_SmartComponent_20_5] = new smart_component.SmartComponent.new();
      this[_compView_20].create(this[_SmartComponent_20_5]);
      let _el_21 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_21);
      let _el_22 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_22);
      let _el_23 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "hr");
      this.addShimC(_el_23);
      let _el_24 = dom_helpers.appendElement(html.HtmlElement, doc, _el_0, "br");
      this.addShimC(_el_24);
      this[_compView_25] = new hero_component$46template.ViewHeroesComponent0.new(this, 25);
      let _el_25 = this[_compView_25].rootElement;
      _el_0[$append](_el_25);
      this.addShimC(_el_25);
      this[_HeroesComponent_25_5] = new hero_component.HeroesComponent.new();
      this[_compView_25].create(this[_HeroesComponent_25_5]);
      _el_13[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'makeMoney')));
      let subscription_0 = this[_SmartComponent_20_5].change.listen(this.eventHandler1(core.String, core.String, dart.bind(_ctx, 'onIsSmartChanged')));
      this.initSubscriptions(T.JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!check_binding.debugThrowIfChanged && firstCheck) {
        this[_FormComponent_1_5].ngOnInit();
      }
      let currVal_0 = _ctx.counter > 400 ? "green" : "red";
      if (check_binding.checkBinding(this[_expr_0], currVal_0, "counter > 400 ? 'green' : 'red'", "package:examples.hello_world/app_component.html")) {
        if (devtools.isDevToolsEnabled) {
          inspector.Inspector.instance.recordInput(this[_NgClass_6_5], "ngClass", currVal_0);
        }
        this[_NgClass_6_5].rawClass = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!check_binding.debugThrowIfChanged) {
        this[_NgClass_6_5].ngDoCheck();
      }
      if (devtools.isDevToolsEnabled) {
        inspector.Inspector.instance.recordInput(this[_NgIf_11_9], "ngIf", _ctx.counter > 400);
      }
      this[_NgIf_11_9].ngIf = _ctx.counter > 400;
      let currVal_1 = _ctx.title;
      if (check_binding.checkBinding(this[_expr_1], currVal_1, "title", "package:examples.hello_world/app_component.html")) {
        if (devtools.isDevToolsEnabled) {
          inspector.Inspector.instance.recordInput(this[_SmartComponent_20_5], "name", currVal_1);
        }
        this[_SmartComponent_20_5].name = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_appEl_11].detectChangesInNestedViews();
      this[_textBinding_7].updateText(interpolate.interpolateString0(_ctx.title));
      this[_textBinding_10].updateTextWithPrimitive(_ctx.counter);
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_1]);
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_15]);
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_20]);
      change_detector_ref['DeprecatedDetectChanges|detectChanges'](this[_compView_25]);
    }
    destroyInternal() {
      this[_appEl_11].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_15].destroyInternalState();
      this[_compView_20].destroyInternalState();
      this[_compView_25].destroyInternalState();
      this[_NgClass_6_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      app_component$46template.ViewAppComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
        if (is_dev_mode.isDevMode) {
          style_encapsulation.ComponentStyles.debugOnClear(C[1] || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_7] = new text_binding.TextBinding.new();
    this[_textBinding_10] = new text_binding.TextBinding.new();
    this[__ViewAppComponent0__compView_1] = null;
    this[__ViewAppComponent0__FormComponent_1_5] = null;
    this[__ViewAppComponent0__NgClass_6_5] = null;
    this[__ViewAppComponent0__appEl_11] = null;
    this[__ViewAppComponent0__NgIf_11_9] = null;
    this[__ViewAppComponent0__compView_15] = null;
    this[__ViewAppComponent0__LearnDirectComponent_15_5] = null;
    this[__ViewAppComponent0__compView_20] = null;
    this[__ViewAppComponent0__SmartComponent_20_5] = null;
    this[__ViewAppComponent0__compView_25] = null;
    this[__ViewAppComponent0__HeroesComponent_25_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = unsafe_cast.unsafeCast(html.HtmlElement, html.document[$createElement]("my-co"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.addTypeCaches(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_1]: form_component$46template.ViewFormComponent0,
    [_FormComponent_1_5]: form_component.FormComponent,
    [_NgClass_6_5]: ng_class.NgClass,
    [_appEl_11]: view_container.ViewContainer,
    [_NgIf_11_9]: ng_if.NgIf,
    [_compView_15]: learn_direct_component$46template.ViewLearnDirectComponent0,
    [_LearnDirectComponent_15_5]: learn_direct_component.LearnDirectComponent,
    [_compView_20]: smart_component$46template.ViewSmartComponent0,
    [_SmartComponent_20_5]: smart_component.SmartComponent,
    [_compView_25]: hero_component$46template.ViewHeroesComponent0,
    [_HeroesComponent_25_5]: hero_component.HeroesComponent
  }));
  dart.setSetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getSetters(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_1]: form_component$46template.ViewFormComponent0,
    [_FormComponent_1_5]: form_component.FormComponent,
    [_NgClass_6_5]: ng_class.NgClass,
    [_appEl_11]: view_container.ViewContainer,
    [_NgIf_11_9]: ng_if.NgIf,
    [_compView_15]: learn_direct_component$46template.ViewLearnDirectComponent0,
    [_LearnDirectComponent_15_5]: learn_direct_component.LearnDirectComponent,
    [_compView_20]: smart_component$46template.ViewSmartComponent0,
    [_SmartComponent_20_5]: smart_component.SmartComponent,
    [_compView_25]: hero_component$46template.ViewHeroesComponent0,
    [_HeroesComponent_25_5]: hero_component.HeroesComponent
  }));
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, I[0]);
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_textBinding_7]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_10]: dart.finalFieldType(text_binding.TextBinding),
    [__ViewAppComponent0__compView_1]: dart.fieldType(dart.nullable(form_component$46template.ViewFormComponent0)),
    [__ViewAppComponent0__FormComponent_1_5]: dart.fieldType(dart.nullable(form_component.FormComponent)),
    [__ViewAppComponent0__NgClass_6_5]: dart.fieldType(dart.nullable(ng_class.NgClass)),
    [__ViewAppComponent0__appEl_11]: dart.fieldType(dart.nullable(view_container.ViewContainer)),
    [__ViewAppComponent0__NgIf_11_9]: dart.fieldType(dart.nullable(ng_if.NgIf)),
    [__ViewAppComponent0__compView_15]: dart.fieldType(dart.nullable(learn_direct_component$46template.ViewLearnDirectComponent0)),
    [__ViewAppComponent0__LearnDirectComponent_15_5]: dart.fieldType(dart.nullable(learn_direct_component.LearnDirectComponent)),
    [__ViewAppComponent0__compView_20]: dart.fieldType(dart.nullable(smart_component$46template.ViewSmartComponent0)),
    [__ViewAppComponent0__SmartComponent_20_5]: dart.fieldType(dart.nullable(smart_component.SmartComponent)),
    [__ViewAppComponent0__compView_25]: dart.fieldType(dart.nullable(hero_component$46template.ViewHeroesComponent0)),
    [__ViewAppComponent0__HeroesComponent_25_5]: dart.fieldType(dart.nullable(hero_component.HeroesComponent)),
    [_expr_0]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_1]: dart.fieldType(dart.nullable(core.Object))
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, false);
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends embedded_view.EmbeddedView$(app_component.AppComponent) {
    build() {
      let doc = html.document;
      let _el_0 = unsafe_cast.unsafeCast(dart.dynamic, doc[$createElement]("div"));
      this.addShimC(html.HtmlElement.as(_el_0));
      let _text_1 = dom_helpers.appendText(html.Node.as(_el_0), "Hey I am Rich!");
      this.initRootNode(core.Object.as(_el_0));
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.addTypeCaches(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component$46template._ViewAppComponent1, I[0]);
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends host_view.HostView$(app_component.AppComponent) {
    build() {
      this.componentView = new app_component$46template.ViewAppComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new app_component.AppComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function() {
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.addTypeCaches(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, I[0]);
  app_component$46template.createAppComponentFactory = function createAppComponentFactory() {
    return new (T.ComponentFactoryOfAppComponent()).new("my-co", C[2] || CT.C2);
  };
  app_component$46template.viewFactory_AppComponent1 = function viewFactory_AppComponent1(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  app_component$46template.viewFactory_AppComponentHost0 = function viewFactory_AppComponentHost0() {
    return new app_component$46template._ViewAppComponentHost0.new();
  };
  app_component$46template.initReflector = function initReflector() {
    if (app_component$46template._visited) {
      return;
    }
    app_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(app_component.AppComponent), app_component$46template.createAppComponentFactory());
    angular$46template.initReflector();
    form_component$46template.initReflector();
    hero_component$46template.initReflector();
    learn_direct_component$46template.initReflector();
    smart_component$46template.initReflector();
  };
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return T.JSArrayOfObject().of([app_component$46css$46shim.styles]);
    },
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return C[3] || CT.C3;
    },
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return C[4] || CT.C4;
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/app_component.template", {
    "package:examples.hello_world/app_component.template.dart": app_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8CwC;;IAAW;;AAAX;;;;IAAW;;;AAChB;;IAAkB;;AAAlB;;;;IAAkB;;;AACxB;;IAAY;;AAAZ;;;;IAAY;;;AACd;;IAAS;;AAAT;;;;IAAS;;;AAClB;;IAAU;;AAAV;;;;IAAU;;;AACmB;;IAAY;;AAAZ;;;;IAAY;;;AAChB;;IAA0B;;AAA1B;;;;IAA0B;;;AAC3B;;IAAY;;AAAZ;;;;IAAY;;;AACjB;;IAAoB;;AAApB;;;;IAAoB;;;AACd;;IAAY;;AAAZ;;;;IAAY;;;AACjB;;IAAqB;;AAArB;;;;IAAqB;;AASvD,YAAiB,yBAAY,sDAAsD;IACrF;;AAIQ,iBAAY;AACZ,6BAAmB,AAAK;AACxB,gBAAe;AACf,kBAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACb,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACmC,MAAjD,oBAAsB,qDAAmB,MAAM;AAC9C,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACE,MAApB,AAAK,cAAS,KAAK;AAC8B,MAA5C,2BAA6B;AACc,MAA3C,AAAY,yBAAY;AACvB,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACuB,MAArC,qBAAuB,yBAAQ,KAAK;AACzC,UAAa;AAC4D,QAApD,AAAS,+CAAkB,KAAK,EAAO;;AAEnB,MAAzC,AAAM,KAAD,UAAa,AAAe;AAC3B,kBAAQ,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAoB,KAAK,EAAE;AACD,MAA1C,AAAM,KAAD,UAAa,AAAgB;AAC5B,uBAAa,yBAAsB,KAAK;AACS,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AAClD,8BAAoB,iCAAiB;AACgB,MAApD,mBAAa,mBAAU,iBAAW,iBAAiB;AACxD,UAAa;AAC+D,QAAvD,AAAS,+CAAkB,UAAU,EAAO;;AAE3D,mBAAS,sBAAmB,GAAG,EAAE,KAAK;AACR,MAApC,AAAK,sBAAiB,MAAM,EAAE;AACT,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,8CAA+C,GAAG,EAAE,MAAM,EAAE;AACtD,MAArB,AAAK,cAAS,MAAM;AACd,qBAAW,uBAAoB,MAAM,EAAE;AACkB,MAA1D,qBAAuB,oEAA0B,MAAM;AACtD,mBAAc,AAAa;AACb,MAApB,AAAM,KAAD,UAAQ,MAAM;AACE,MAArB,AAAK,cAAS,MAAM;AAC6C,MAA5D,mCAAsC;AACc,MAApD,AAAa,0BAAY;AACxB,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACsC,MAArD,qBAAwB,uDAAoB,MAAM;AACjD,mBAAc,AAAa;AACb,MAApB,AAAM,KAAD,UAAQ,MAAM;AACE,MAArB,AAAK,cAAS,MAAM;AACiC,MAAhD,6BAAgC;AACc,MAA9C,AAAa,0BAAY;AACxB,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACd,mBAAS,4CAA6C,GAAG,EAAE,KAAK,EAAE;AACnD,MAArB,AAAK,cAAS,MAAM;AACuC,MAAtD,qBAAwB,uDAAqB,MAAM;AAClD,mBAAc,AAAa;AACb,MAApB,AAAM,KAAD,UAAQ,MAAM;AACE,MAArB,AAAK,cAAS,MAAM;AACmC,MAAlD,8BAAiC;AACc,MAA/C,AAAa,0BAAY;AACsC,MAApE,AAAO,MAAD,oBAAkB,SAAS,AAAK,+BAAmB,UAAL,IAAI;AAClD,2BAAsB,AAAqB,AAAO,yCAAO,AAAK,6CAAmB,UAAL,IAAI;AAC9C,MAAxC,AAAK,uBAAkB,0CAAC,cAAc;IACxC;;AAIQ,iBAAY;AACb,uBAAkB;AACvB,WAAgB,qCAAwB,UAAU;AACd,QAA7B,AAAmB;;AAEpB,sBAAc,AAAK,AAAQ,IAAT,WAAW,MAAO,UAAU;AACpD,UAAI,2BAA2B,eAAS,SAAS,EAAE,mCAAuC;AACxF,YAAa;AACqE,UAA7D,AAAS,yCAAiB,oBAAc,WAAW,SAAS;;AAEsB,QAAlG,AAAa,8BAAW,SAAS;AACd,QAAnB,gBAAU,SAAS;;AAE1B,WAAe;AACgB,QAAxB,AAAa;;AAEpB,UAAa;AAC2E,QAAnE,AAAS,yCAAiB,kBAAY,QAAS,AAAK,AAAQ,IAAT,WAAW;;AAE0B,MAAxG,AAAW,wBAAQ,AAAK,AAAQ,IAAT,WAAW;AACjC,sBAAY,AAAK,IAAD;AACtB,UAAI,2BAA2B,eAAS,SAAS,EAAE,SAAS;AAC1D,YAAa;AAC0E,UAAlE,AAAS,yCAAiB,4BAAsB,QAAQ,SAAS;;AAEsB,QAAvG,AAAqB,kCAAO,SAAS;AAClB,QAAnB,gBAAU,SAAS;;AAEiB,MAAtC,AAAU;AAC0H,MAApI,AAAe,gCAAW,+BAA4B,AAAK,IAAD;AAC6D,MAAvH,AAAgB,8CAAwB,AAAK,IAAD;AACjB,MAAf,6DAAZ;AAC4B,MAAf,6DAAb;AAC4B,MAAf,6DAAb;AAC4B,MAAf,6DAAb;IACP;;AAIqC,MAA9B,AAAU;AACwB,MAAlC,AAAY;AACuB,MAAnC,AAAa;AACsB,MAAnC,AAAa;AACsB,MAAnC,AAAa;AACa,MAA1B,AAAa;IACpB;;AAGyB,MAAvB,8DAAmB;IACrB;;AAGM,mBAAS;AACb,UAAK,AAAO,MAAD;AAC6F,QAAtG,8DAAoB,SAAkC,2CAAO,8CAAqB;AAClF,YAAa;AACsD,UAAxC;;;AAGA,MAAxB,uBAAkB,MAAM;IAC/B;;6DA3JgC,YAAgB;IAhBtB,uBAAyB;IACzB,wBAA0B;4CACd;mDACL;6CACN;0CACF;2CACT;6CAC6B;2DACJ;6CACD;qDACL;6CACM;sDACL;IAC5B;IACA;AAEuD,wEAAM,UAAU,EAAE,WAAW;AAChE,IAA1B,AAAK;AAC2E,IAA3E,mBAAc,yCAA6B,AAAS,8BAAc;EACzE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJiC,2DAAgB;;;;;;;AA4KzC,gBAAe;AACf,kBAAQ,qCAAoB,AAAI,GAAD,iBAAe;AAChC,MAApB,AAAK,kCAAS,KAAK;AACb,oBAAU,oCAAoB,KAAK,GAAE;AACnB,MAAxB,AAAK,iCAAa,KAAK;IACzB;;8DARuC,YAAgB;AAAe,yEAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;AAoBnD,MAA1C,qBAAgB,mDAAkB,MAAM;AACvC,kBAAa,AAAc;AACM,MAAlC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;AA7BE,UAAO,8CAAiB;EAC1B;0FAc0E,YAAgB;AACxF,UAAO,qDAAmB,UAAU,EAAE,WAAW;EACnD;;AAeE,UAAO;EACT;;AAIE,QAAI;AACF;;AAEa,IAAf,oCAAW;AAEwD,IAAnE,uEAAuC;AAClB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AApDE,YAAO;IACT;;;;;MApLmB,4CAAmB;YAAG,yBAAS;;MAiL5C,+CAAsB;;;MAyBT,gDAAuB;;;MAgBtC,iCAAQ;YAAG","file":"app_component.template.sound.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
}));

//# sourceMappingURL=app_component.template.sound.ddc.js.map
