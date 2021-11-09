// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'form_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;
import 'package:examples.hello_world/form/student_model.template.dart' as _ref2;
import 'package:examples.hello_world/form/form_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'form_component.dart' as import2;
import 'package:angular_forms/src/directives/ng_form_model.dart' as import3;
import 'package:angular/src/common/directives/ng_class.dart' as import4;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import5;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import6;
import 'package:angular_forms/src/directives/ng_form_control.dart' as import7;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/devtools.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/meta/di_tokens.dart' as import18;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import19;
import 'package:angular_forms/src/directives/ng_control.dart' as import20;
import 'package:angular_forms/src/directives/control_container.dart' as import21;
import 'package:angular/src/runtime/check_binding.dart' as import22;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import24;
import 'package:angular/src/core/linker/views/render_view.dart' as import25;
import 'package:angular/src/core/linker/views/host_view.dart' as import26;

final List<Object> styles$FormComponent = [import0.styles];

class ViewFormComponent0 extends import1.ComponentView<import2.FormComponent> {
  late final import3.NgFormModel _NgFormModel_2_5;
  late final import4.NgClass _NgClass_7_5;
  late final import5.DefaultValueAccessor _DefaultValueAccessor_7_6;
  late final List<import6.ControlValueAccessor<dynamic>> _NgValueAccessor_7_7;
  late final import7.NgFormControl _NgFormControl_7_8;
  late final ViewContainer _appEl_8;
  late final NgIf _NgIf_8_9;
  late final import5.DefaultValueAccessor _DefaultValueAccessor_13_5;
  late final List<import6.ControlValueAccessor<dynamic>> _NgValueAccessor_13_6;
  late final import7.NgFormControl _NgFormControl_13_7;
  late final import5.DefaultValueAccessor _DefaultValueAccessor_18_5;
  late final List<import6.ControlValueAccessor<dynamic>> _NgValueAccessor_18_6;
  late final import7.NgFormControl _NgFormControl_18_7;
  Object? _expr_0;
  Object? _expr_2;
  Object? _expr_6;
  late final import10.ButtonElement _el_20;
  static import11.ComponentStyles? _componentStyles;
  ViewFormComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import14.unsafeCast(import10.document.createElement('my-form'));
  }
  static String? get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:examples.hello_world/lib/form/form_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final parentRenderNode = this.initViewRoot();
    final doc = import10.document;
    final _el_0 = import15.appendElement<import10.HtmlElement>(doc, parentRenderNode, 'h1');
    this.addShimC(_el_0);
    final _text_1 = import15.appendText(_el_0, 'My form');
    final _el_2 = import15.appendElement<import10.FormElement>(doc, parentRenderNode, 'form');
    import15.setAttribute(_el_2, 'novalidate', '');
    this.addShimC(_el_2);
    this._NgFormModel_2_5 = import3.NgFormModel(null);
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.registerDirective(_el_2, this._NgFormModel_2_5);
    }
    final _el_3 = import15.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'mb-3');
    this.addShimC(_el_3);
    final _el_4 = import15.appendElement<import10.HtmlElement>(doc, _el_3, 'label');
    this.updateChildClass(_el_4, 'form-label');
    import15.setAttribute(_el_4, 'for', 'firstName');
    this.addShimC(_el_4);
    final _text_5 = import15.appendText(_el_4, 'First name');
    final _text_6 = import15.appendText(_el_3, ' ');
    final _el_7 = import15.appendElement<import10.InputElement>(doc, _el_3, 'input');
    this.updateChildClass(_el_7, 'form-control');
    import15.setAttribute(_el_7, 'id', 'firstName');
    import15.setAttribute(_el_7, 'placeholder', 'firstName');
    import15.setAttribute(_el_7, 'type', 'text');
    this.addShimC(_el_7);
    this._NgClass_7_5 = import4.NgClass(_el_7);
    this._DefaultValueAccessor_7_6 = import5.DefaultValueAccessor(_el_7);
    this._NgValueAccessor_7_7 = [this._DefaultValueAccessor_7_6];
    this._NgFormControl_7_8 = import7.NgFormControl(null, this._NgValueAccessor_7_7);
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.registerDirective(_el_7, this._NgClass_7_5);
      import16.Inspector.instance.registerDirective(_el_7, this._DefaultValueAccessor_7_6);
      import16.Inspector.instance.registerDirective(_el_7, this._NgFormControl_7_8);
    }
    final _anchor_8 = import15.appendAnchor(_el_3);
    this._appEl_8 = ViewContainer(8, 3, this, _anchor_8);
    var _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_FormComponent1);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.registerDirective(_anchor_8, this._NgIf_8_9);
    }
    final _el_9 = import15.appendDiv(doc, _el_2);
    this.updateChildClass(_el_9, 'mb-3');
    this.addShimC(_el_9);
    final _el_10 = import15.appendElement<import10.HtmlElement>(doc, _el_9, 'label');
    this.updateChildClass(_el_10, 'form-label');
    import15.setAttribute(_el_10, 'for', 'lastName');
    this.addShimC(_el_10);
    final _text_11 = import15.appendText(_el_10, 'Last name');
    final _text_12 = import15.appendText(_el_9, ' ');
    final _el_13 = import15.appendElement<import10.InputElement>(doc, _el_9, 'input');
    this.updateChildClass(_el_13, 'form-control');
    import15.setAttribute(_el_13, 'id', 'lastName');
    import15.setAttribute(_el_13, 'placeholder', 'lastName');
    import15.setAttribute(_el_13, 'type', 'text');
    this.addShimC(_el_13);
    this._DefaultValueAccessor_13_5 = import5.DefaultValueAccessor(_el_13);
    this._NgValueAccessor_13_6 = [this._DefaultValueAccessor_13_5];
    this._NgFormControl_13_7 = import7.NgFormControl(null, this._NgValueAccessor_13_6);
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.registerDirective(_el_13, this._DefaultValueAccessor_13_5);
      import16.Inspector.instance.registerDirective(_el_13, this._NgFormControl_13_7);
    }
    final _el_14 = import15.appendDiv(doc, _el_2);
    this.updateChildClass(_el_14, 'mb-3');
    this.addShimC(_el_14);
    final _el_15 = import15.appendElement<import10.HtmlElement>(doc, _el_14, 'label');
    this.updateChildClass(_el_15, 'form-label');
    import15.setAttribute(_el_15, 'for', 'description');
    this.addShimC(_el_15);
    final _text_16 = import15.appendText(_el_15, 'Description');
    final _text_17 = import15.appendText(_el_14, ' ');
    final _el_18 = import15.appendElement<import10.TextAreaElement>(doc, _el_14, 'textarea');
    this.updateChildClass(_el_18, 'form-control');
    import15.setAttribute(_el_18, 'id', 'description');
    import15.setAttribute(_el_18, 'rows', '3');
    this.addShimC(_el_18);
    this._DefaultValueAccessor_18_5 = import5.DefaultValueAccessor(_el_18);
    this._NgValueAccessor_18_6 = [this._DefaultValueAccessor_18_5];
    this._NgFormControl_18_7 = import7.NgFormControl(null, this._NgValueAccessor_18_6);
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.registerDirective(_el_18, this._DefaultValueAccessor_18_5);
      import16.Inspector.instance.registerDirective(_el_18, this._NgFormControl_18_7);
    }
    final _el_19 = import15.appendDiv(doc, _el_2);
    this.updateChildClass(_el_19, 'mb-3');
    this.addShimC(_el_19);
    this._el_20 = import15.appendElement<import10.ButtonElement>(doc, _el_19, 'button');
    this.updateChildClass(this._el_20, 'btn btn-primary mb-3');
    import15.setAttribute(this._el_20, 'type', 'submit');
    this.addShimC(this._el_20);
    final _text_21 = import15.appendText(this._el_20, 'Submit');
    final _text_22 = import15.appendText(_el_19, ' ');
    final _el_23 = import15.appendElement<import10.ButtonElement>(doc, _el_19, 'button');
    this.updateChildClass(_el_23, 'btn mb-3');
    import15.setAttribute(_el_23, 'type', 'button');
    this.addShimC(_el_23);
    final _text_24 = import15.appendText(_el_23, 'Clear');
    _el_2.addEventListener('submit', this.eventHandler1(this._NgFormModel_2_5.onSubmit));
    _el_2.addEventListener('reset', this.eventHandler1(this._NgFormModel_2_5.onReset));
    _el_7.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_7_6.touchHandler));
    _el_7.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    _el_13.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_13_5.touchHandler));
    _el_13.addEventListener('input', this.eventHandler1(this._handleEvent_1));
    _el_18.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_18_5.touchHandler));
    _el_18.addEventListener('input', this.eventHandler1(this._handleEvent_2));
    _el_23.addEventListener('click', this.eventHandler0(_ctx.clearFrom));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((2 <= nodeIndex) && (nodeIndex <= 24))) {
      if ((7 == nodeIndex)) {
        if (identical(token, const import18.MultiToken<import19.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return this._NgValueAccessor_7_7;
        }
        if (identical(token, import20.NgControl)) {
          return this._NgFormControl_7_8;
        }
      }
      if ((13 == nodeIndex)) {
        if (identical(token, const import18.MultiToken<import19.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return this._NgValueAccessor_13_6;
        }
        if (identical(token, import20.NgControl)) {
          return this._NgFormControl_13_7;
        }
      }
      if ((18 == nodeIndex)) {
        if (identical(token, const import18.MultiToken<import19.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
          return this._NgValueAccessor_18_6;
        }
        if (identical(token, import20.NgControl)) {
          return this._NgFormControl_18_7;
        }
      }
      if ((identical(token, import3.NgFormModel) || identical(token, import21.ControlContainer))) {
        return this._NgFormModel_2_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    final currVal_0 = _ctx.formGroup;
    if (import22.checkBinding(this._expr_0, currVal_0, 'formGroup', 'package:examples.hello_world/form/form_component.html')) {
      if (import16.isDevToolsEnabled) {
        import16.Inspector.instance.recordInput(this._NgFormModel_2_5, 'ngFormModel', currVal_0);
      }
      this._NgFormModel_2_5.form = currVal_0 /* REF:package:examples.hello_world/form/form_component.html:24:49 */;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgFormModel_2_5.ngAfterChanges();
    }
    if (firstCheck) {
      if (import16.isDevToolsEnabled) {
        import16.Inspector.instance.recordInput(this._NgClass_7_5, 'class', 'form-control');
      }
      this._NgClass_7_5.initialClasses = 'form-control' /* REF:package:examples.hello_world/form/form_component.html:180:200 */;
    }
    final currVal_2 = (_ctx.firstNameControl.valid ? 'is-valid' : 'is-invalid');
    if (import22.checkBinding(this._expr_2, currVal_2, 'firstNameControl.valid ? \'is-valid\':\'is-invalid\'', 'package:examples.hello_world/form/form_component.html')) {
      if (import16.isDevToolsEnabled) {
        import16.Inspector.instance.recordInput(this._NgClass_7_5, 'ngClass', currVal_2);
      }
      this._NgClass_7_5.rawClass = currVal_2 /* REF:package:examples.hello_world/form/form_component.html:284:344 */;
      this._expr_2 = currVal_2;
    }
    if ((!import22.debugThrowIfChanged)) {
      this._NgClass_7_5.ngDoCheck();
    }
    changed = false;
    if (firstCheck) {
      if ((_ctx.firstNameControl != null)) {
        if (import16.isDevToolsEnabled) {
          import16.Inspector.instance.recordInput(this._NgFormControl_7_8, 'ngFormControl', _ctx.firstNameControl);
        }
        this._NgFormControl_7_8.form = _ctx.firstNameControl /* REF:package:examples.hello_world/form/form_component.html:238:272 */;
        changed = true;
      }
    }
    if (changed) {
      this._NgFormControl_7_8.ngAfterChanges();
    }
    if (import16.isDevToolsEnabled) {
      import16.Inspector.instance.recordInput(this._NgIf_8_9, 'ngIf', _ctx.firstNameControl.invalid);
    }
    this._NgIf_8_9.ngIf = _ctx.firstNameControl.invalid /* REF:package:examples.hello_world/form/form_component.html:390:422 */;
    changed = false;
    if (firstCheck) {
      if ((_ctx.firstNameControl != null)) {
        if (import16.isDevToolsEnabled) {
          import16.Inspector.instance.recordInput(this._NgFormControl_13_7, 'ngFormControl', _ctx.firstNameControl);
        }
        this._NgFormControl_13_7.form = _ctx.firstNameControl /* REF:package:examples.hello_world/form/form_component.html:672:706 */;
        changed = true;
      }
    }
    if (changed) {
      this._NgFormControl_13_7.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      if ((_ctx.descriptionControl != null)) {
        if (import16.isDevToolsEnabled) {
          import16.Inspector.instance.recordInput(this._NgFormControl_18_7, 'ngFormControl', _ctx.descriptionControl);
        }
        this._NgFormControl_18_7.form = _ctx.descriptionControl /* REF:package:examples.hello_world/form/form_component.html:939:975 */;
        changed = true;
      }
    }
    if (changed) {
      this._NgFormControl_18_7.ngAfterChanges();
    }
    this._appEl_8.detectChangesInNestedViews();
    final currVal_6 = (!_ctx.formGroup.valid);
    if (import22.checkBinding(this._expr_6, currVal_6, '!formGroup.valid', 'package:examples.hello_world/form/form_component.html')) {
      import15.setProperty(this._el_20, 'disabled', currVal_6) /* REF:package:examples.hello_world/form/form_component.html:1098:1127 */;
      this._expr_6 = currVal_6;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_8.destroyNestedViews();
    this._NgClass_7_5.ngOnDestroy();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_7_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    this._DefaultValueAccessor_13_5.handleChange($event.target.value);
  }

  void _handleEvent_2($event) {
    this._DefaultValueAccessor_18_5.handleChange($event.target.value);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$FormComponent, _debugComponentUrl));
      if (import14.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FormComponentNgFactory = ComponentFactory<import2.FormComponent>('my-form', viewFactory_FormComponentHost0);
ComponentFactory<import2.FormComponent> get FormComponentNgFactory {
  return _FormComponentNgFactory;
}

ComponentFactory<import2.FormComponent> createFormComponentFactory() {
  return ComponentFactory('my-form', viewFactory_FormComponentHost0);
}

class _ViewFormComponent1 extends import24.EmbeddedView<import2.FormComponent> {
  _ViewFormComponent1(import25.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import10.document;
    final _el_0 = import14.unsafeCast(doc.createElement('div'));
    this.updateChildClass(_el_0, 'invalid-feedback');
    this.addShimC(_el_0);
    final _text_1 = import15.appendText(_el_0, 'First name is required!');
    this.initRootNode(_el_0);
  }
}

import24.EmbeddedView<void> viewFactory_FormComponent1(import25.RenderView parentView, int parentIndex) {
  return _ViewFormComponent1(parentView, parentIndex);
}

final List<Object> styles$FormComponentHost = const [];

class _ViewFormComponentHost0 extends import26.HostView<import2.FormComponent> {
  @override
  void build() {
    this.componentView = ViewFormComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FormComponent();
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import26.HostView<import2.FormComponent> viewFactory_FormComponentHost0() {
  return _ViewFormComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FormComponent, createFormComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
