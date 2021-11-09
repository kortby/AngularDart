// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:examples.hello_world/form/form_component.template.dart' as _ref1;
import 'package:examples.hello_world/hero/hero_component.template.dart' as _ref2;
import 'package:examples.hello_world/learn_direct/learn_direct_component.template.dart' as _ref3;
import 'package:examples.hello_world/smart_component/smart_component.template.dart' as _ref4;
import 'package:examples.hello_world/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'app_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'form/form_component.template.dart' as import4;
import 'form/form_component.dart' as import5;
import 'package:angular/src/common/directives/ng_class.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'learn_direct/learn_direct_component.template.dart' as import9;
import 'learn_direct/learn_direct_component.dart' as import10;
import 'smart_component/smart_component.template.dart' as import11;
import 'smart_component/smart_component.dart' as import12;
import 'hero/hero_component.template.dart' as import13;
import 'hero/hero_component.dart' as import14;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import15;
import 'package:angular/src/core/linker/views/view.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import18;
import 'dart:html' as import19;
import 'package:angular/src/runtime/dom_helpers.dart' as import20;
import 'package:angular/src/devtools.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/check_binding.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import26;
import 'package:angular/src/core/linker/views/render_view.dart' as import27;
import 'package:angular/src/core/linker/views/host_view.dart' as import28;

final List<Object> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends import1.ComponentView<import2.AppComponent> {
  final import3.TextBinding _textBinding_7 = import3.TextBinding();
  final import3.TextBinding _textBinding_10 = import3.TextBinding();
  late final import4.ViewFormComponent0 _compView_1;
  late final import5.FormComponent _FormComponent_1_5;
  late final import6.NgClass _NgClass_6_5;
  late final ViewContainer _appEl_11;
  late final NgIf _NgIf_11_9;
  late final import9.ViewLearnDirectComponent0 _compView_15;
  late final import10.LearnDirectComponent _LearnDirectComponent_15_5;
  late final import11.ViewSmartComponent0 _compView_20;
  late final import12.SmartComponent _SmartComponent_20_5;
  late final import13.ViewHeroesComponent0 _compView_25;
  late final import14.HeroesComponent _HeroesComponent_25_5;
  Object? _expr_0;
  Object? _expr_1;
  static import15.ComponentStyles? _componentStyles;
  ViewAppComponent0(import16.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import18.unsafeCast(import19.document.createElement('my-co'));
  }
  static String? get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:examples.hello_world/lib/app_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final parentRenderNode = this.initViewRoot();
    final doc = import19.document;
    final _el_0 = import20.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this._compView_1 = import4.ViewFormComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._FormComponent_1_5 = import5.FormComponent();
    this._compView_1.create(this._FormComponent_1_5);
    final _el_2 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_2);
    final _el_3 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_3);
    final _el_4 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_4);
    final _el_5 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_5);
    final _el_6 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'h1');
    this.addShimC(_el_6);
    this._NgClass_6_5 = import6.NgClass(_el_6);
    if (import21.isDevToolsEnabled) {
      import21.Inspector.instance.registerDirective(_el_6, this._NgClass_6_5);
    }
    _el_6.append(this._textBinding_7.element);
    final _el_8 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'h3');
    this.addShimC(_el_8);
    final _text_9 = import20.appendText(_el_8, '\$');
    _el_8.append(this._textBinding_10.element);
    final _anchor_11 = import20.appendAnchor(_el_0);
    this._appEl_11 = ViewContainer(11, 0, this, _anchor_11);
    var _TemplateRef_11_8 = TemplateRef(this._appEl_11, viewFactory_AppComponent1);
    this._NgIf_11_9 = NgIf(this._appEl_11, _TemplateRef_11_8);
    if (import21.isDevToolsEnabled) {
      import21.Inspector.instance.registerDirective(_anchor_11, this._NgIf_11_9);
    }
    final _el_12 = import20.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'btn');
    this.addShimC(_el_12);
    final _el_13 = import20.appendElement<import19.ButtonElement>(doc, _el_12, 'button');
    this.addShimC(_el_13);
    final _text_14 = import20.appendText(_el_13, 'Make money!');
    this._compView_15 = import9.ViewLearnDirectComponent0(this, 15);
    final _el_15 = this._compView_15.rootElement;
    _el_0.append(_el_15);
    this.addShimC(_el_15);
    this._LearnDirectComponent_15_5 = import10.LearnDirectComponent();
    this._compView_15.create(this._LearnDirectComponent_15_5);
    final _el_16 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_16);
    final _el_17 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_17);
    final _el_18 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_18);
    final _el_19 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_19);
    this._compView_20 = import11.ViewSmartComponent0(this, 20);
    final _el_20 = this._compView_20.rootElement;
    _el_0.append(_el_20);
    this.addShimC(_el_20);
    this._SmartComponent_20_5 = import12.SmartComponent();
    this._compView_20.create(this._SmartComponent_20_5);
    final _el_21 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_21);
    final _el_22 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_22);
    final _el_23 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'hr');
    this.addShimC(_el_23);
    final _el_24 = import20.appendElement<import19.HtmlElement>(doc, _el_0, 'br');
    this.addShimC(_el_24);
    this._compView_25 = import13.ViewHeroesComponent0(this, 25);
    final _el_25 = this._compView_25.rootElement;
    _el_0.append(_el_25);
    this.addShimC(_el_25);
    this._HeroesComponent_25_5 = import14.HeroesComponent();
    this._compView_25.create(this._HeroesComponent_25_5);
    _el_13.addEventListener('click', this.eventHandler0(_ctx.makeMoney));
    final subscription_0 = this._SmartComponent_20_5.change.listen(this.eventHandler1(_ctx.onIsSmartChanged));
    this.initSubscriptions([subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import23.debugThrowIfChanged) && firstCheck)) {
      this._FormComponent_1_5.ngOnInit();
    }
    final currVal_0 = ((_ctx.counter > 400) ? 'green' : 'red');
    if (import23.checkBinding(this._expr_0, currVal_0, 'counter > 400 ? \'green\' : \'red\'', 'package:examples.hello_world/app_component.html')) {
      if (import21.isDevToolsEnabled) {
        import21.Inspector.instance.recordInput(this._NgClass_6_5, 'ngClass', currVal_0);
      }
      this._NgClass_6_5.rawClass = currVal_0 /* REF:package:examples.hello_world/app_component.html:80:123 */;
      this._expr_0 = currVal_0;
    }
    if ((!import23.debugThrowIfChanged)) {
      this._NgClass_6_5.ngDoCheck();
    }
    if (import21.isDevToolsEnabled) {
      import21.Inspector.instance.recordInput(this._NgIf_11_9, 'ngIf', (_ctx.counter > 400));
    }
    this._NgIf_11_9.ngIf = (_ctx.counter > 400) /* REF:package:examples.hello_world/app_component.html:170:191 */;
    final currVal_1 = _ctx.title;
    if (import23.checkBinding(this._expr_1, currVal_1, 'title', 'package:examples.hello_world/app_component.html')) {
      if (import21.isDevToolsEnabled) {
        import21.Inspector.instance.recordInput(this._SmartComponent_20_5, 'name', currVal_1);
      }
      this._SmartComponent_20_5.name = currVal_1 /* REF:package:examples.hello_world/app_component.html:405:419 */;
      this._expr_1 = currVal_1;
    }
    this._appEl_11.detectChangesInNestedViews();
    this._textBinding_7.updateText(import24.interpolateString0(_ctx.title)) /* REF:package:examples.hello_world/app_component.html:124:133 */;
    this._textBinding_10.updateTextWithPrimitive(_ctx.counter) /* REF:package:examples.hello_world/app_component.html:146:157 */;
    this._compView_1.detectChanges();
    this._compView_15.detectChanges();
    this._compView_20.detectChanges();
    this._compView_25.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_11.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._compView_15.destroyInternalState();
    this._compView_20.destroyInternalState();
    this._compView_25.destroyInternalState();
    this._NgClass_6_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import15.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl));
      if (import18.isDevMode) {
        import15.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _AppComponentNgFactory = ComponentFactory<import2.AppComponent>('my-co', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

ComponentFactory<import2.AppComponent> createAppComponentFactory() {
  return ComponentFactory('my-co', viewFactory_AppComponentHost0);
}

class _ViewAppComponent1 extends import26.EmbeddedView<import2.AppComponent> {
  _ViewAppComponent1(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import19.document;
    final _el_0 = import18.unsafeCast(doc.createElement('div'));
    this.addShimC(_el_0);
    final _text_1 = import20.appendText(_el_0, 'Hey I am Rich!');
    this.initRootNode(_el_0);
  }
}

import26.EmbeddedView<void> viewFactory_AppComponent1(import27.RenderView parentView, int parentIndex) {
  return _ViewAppComponent1(parentView, parentIndex);
}

final List<Object> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends import28.HostView<import2.AppComponent> {
  @override
  void build() {
    this.componentView = ViewAppComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.AppComponent();
    this.initRootNode(_el_0);
  }
}

import28.HostView<import2.AppComponent> viewFactory_AppComponentHost0() {
  return _ViewAppComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, createAppComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
