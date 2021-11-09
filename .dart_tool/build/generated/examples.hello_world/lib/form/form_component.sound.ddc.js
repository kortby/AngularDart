define(['dart_sdk', 'packages/examples.hello_world/form/student_model', 'packages/angular_forms/src/directives', 'packages/angular/src/di/errors'], (function load__packages__examples_hello_world__form__form_component(dart_sdk, packages__examples$46hello_world__form__student_model, packages__angular_forms__src__directives, packages__angular__src__di__errors) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const student_model = packages__examples$46hello_world__form__student_model.form__student_model;
  const model = packages__angular_forms__src__directives.src__model;
  const validators = packages__angular_forms__src__directives.src__validators;
  const form_builder = packages__angular_forms__src__directives.src__form_builder;
  const lifecycle_hooks = packages__angular__src__di__errors.src__meta__lifecycle_hooks;
  var form_component = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    MapOfString$bool: () => (T.MapOfString$bool = dart.constFn(core.Map$(core.String, core.bool)))(),
    MapNOfString$bool: () => (T.MapNOfString$bool = dart.constFn(dart.nullable(T.MapOfString$bool())))(),
    AbstractControlToMapNOfString$bool: () => (T.AbstractControlToMapNOfString$bool = dart.constFn(dart.fnType(T.MapNOfString$bool(), [model.AbstractControl])))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(validators.Validators.required, T.AbstractControlToMapNOfString$bool());
    }
  }, false);
  var C = [void 0];
  var I = ["package:examples.hello_world/form/form_component.dart"];
  var title = dart.privateName(form_component, "FormComponent.title");
  var birthday = dart.privateName(form_component, "FormComponent.birthday");
  var model$ = dart.privateName(form_component, "FormComponent.model");
  var firstNameControl = dart.privateName(form_component, "FormComponent.firstNameControl");
  var lastNameControl = dart.privateName(form_component, "FormComponent.lastNameControl");
  var descriptionControl = dart.privateName(form_component, "FormComponent.descriptionControl");
  var __FormComponent_formGroup = dart.privateName(form_component, "_#FormComponent#formGroup");
  form_component.FormComponent = class FormComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get birthday() {
      return this[birthday];
    }
    set birthday(value) {
      this[birthday] = value;
    }
    get model() {
      return this[model$];
    }
    set model(value) {
      this[model$] = value;
    }
    get firstNameControl() {
      return this[firstNameControl];
    }
    set firstNameControl(value) {
      super.firstNameControl = value;
    }
    get lastNameControl() {
      return this[lastNameControl];
    }
    set lastNameControl(value) {
      super.lastNameControl = value;
    }
    get descriptionControl() {
      return this[descriptionControl];
    }
    set descriptionControl(value) {
      super.descriptionControl = value;
    }
    get formGroup() {
      let t0;
      t0 = this[__FormComponent_formGroup];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("formGroup")) : t0;
    }
    set formGroup(t0) {
      this[__FormComponent_formGroup] = t0;
    }
    ngOnInit() {
      this.formGroup = form_builder.FormBuilder.controlGroup(new (T.IdentityMapOfString$dynamic()).from(["firstName", this.firstNameControl, "lastName", this.lastNameControl, "description", this.descriptionControl]));
    }
    clearFrom() {
      this.formGroup.reset();
    }
  };
  (form_component.FormComponent.new = function() {
    this[title] = "my form";
    this[birthday] = new core.DateTime.new(1988, 4, 15);
    this[model$] = new student_model.Student.new(1, "firstName", "lastName", "description");
    this[firstNameControl] = new model.Control.new("", C[0] || CT.C0);
    this[lastNameControl] = new model.Control.new("", C[0] || CT.C0);
    this[descriptionControl] = new model.Control.new("", C[0] || CT.C0);
    this[__FormComponent_formGroup] = null;
    ;
  }).prototype = form_component.FormComponent.prototype;
  dart.addTypeTests(form_component.FormComponent);
  dart.addTypeCaches(form_component.FormComponent);
  form_component.FormComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(form_component.FormComponent, () => ({
    __proto__: dart.getMethods(form_component.FormComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    clearFrom: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(form_component.FormComponent, () => ({
    __proto__: dart.getGetters(form_component.FormComponent.__proto__),
    formGroup: model.ControlGroup
  }));
  dart.setSetterSignature(form_component.FormComponent, () => ({
    __proto__: dart.getSetters(form_component.FormComponent.__proto__),
    formGroup: model.ControlGroup
  }));
  dart.setLibraryUri(form_component.FormComponent, I[0]);
  dart.setFieldSignature(form_component.FormComponent, () => ({
    __proto__: dart.getFields(form_component.FormComponent.__proto__),
    title: dart.finalFieldType(core.String),
    birthday: dart.fieldType(core.DateTime),
    model: dart.fieldType(student_model.Student),
    firstNameControl: dart.finalFieldType(model.Control),
    lastNameControl: dart.finalFieldType(model.Control),
    descriptionControl: dart.finalFieldType(model.Control),
    [__FormComponent_formGroup]: dart.fieldType(dart.nullable(model.ControlGroup))
  }));
  dart.trackLibraries("packages/examples.hello_world/form/form_component", {
    "package:examples.hello_world/form/form_component.dart": form_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["form_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYQ;;;;;;IACG;;;;;;IACD;;;;;;IAEF;;;;;;IACA;;;;;;IACA;;;;;;;;AACY;;IAAS;;AAAT;IAAS;;AAUxB,MAND,iBAAwB,sCACtB,4CACE,aAAa,uBACb,YAAY,sBACZ,eAAe;IAGrB;;AAGmB,MAAjB,AAAU;IACZ;;;IAtBM,cAAQ;IACL,iBAAW,sBAAS,MAAM,GAAG;IAC9B,eAAQ,8BAAQ,GAAG,aAAa,YAAY;IAE9C,yBAAmB,sBAAQ;IAC3B,wBAAkB,sBAAQ;IAC1B,2BAAqB,sBAAQ;sCACjB;;EAgBpB","file":"form_component.sound.ddc.js"}');
  // Exports:
  return {
    form__form_component: form_component
  };
}));

//# sourceMappingURL=form_component.sound.ddc.js.map
