define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_forms/src/directives', 'packages/angular/src/di/errors.template', 'packages/angular/src/di/errors'], (function load__packages__angular_forms__angular_forms_template(dart_sdk, packages__angular__angular$46template, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_forms__src__directives, packages__angular__src__di__errors$46template, packages__angular__src__di__errors) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const check_binding = packages__angular__src__bootstrap__modules.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const validators = packages__angular_forms__src__directives.src__directives__validators;
  const radio_control_value_accessor = packages__angular_forms__src__directives.src__directives__radio_control_value_accessor;
  const ng_control_status = packages__angular_forms__src__directives.src__directives__ng_control_status;
  const utilities$46template = packages__angular__src__di__errors$46template.src__utilities$46template;
  const reflector = packages__angular__src__di__errors.src__reflector;
  var abstract_form$46template = Object.create(dart.library);
  var ng_control_group$46template = Object.create(dart.library);
  var validators$46template = Object.create(dart.library);
  var validators$46template$ = Object.create(dart.library);
  var model$46template = Object.create(dart.library);
  var shared$46template = Object.create(dart.library);
  var select_control_value_accessor$46template = Object.create(dart.library);
  var control_value_accessor$46template = Object.create(dart.library);
  var radio_control_value_accessor$46template = Object.create(dart.library);
  var ng_control$46template = Object.create(dart.library);
  var abstract_control_directive$46template = Object.create(dart.library);
  var number_value_accessor$46template = Object.create(dart.library);
  var normalize_validator$46template = Object.create(dart.library);
  var default_value_accessor$46template = Object.create(dart.library);
  var control_container$46template = Object.create(dart.library);
  var form_interface$46template = Object.create(dart.library);
  var checkbox_value_accessor$46template = Object.create(dart.library);
  var ng_control_status$46template = Object.create(dart.library);
  var angular_forms$46template = Object.create(dart.library);
  var form_builder$46template = Object.create(dart.library);
  var directives$46template = Object.create(dart.library);
  var ng_model$46template = Object.create(dart.library);
  var ng_form_model$46template = Object.create(dart.library);
  var ng_form_control$46template = Object.create(dart.library);
  var ng_form$46template = Object.create(dart.library);
  var ng_control_name$46template = Object.create(dart.library);
  var memorized_form$46template = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidToRadioControlRegistry: () => (T.VoidToRadioControlRegistry = dart.constFn(dart.fnType(radio_control_value_accessor.RadioControlRegistry, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:angular_forms/src/directives/validators.template.dart",
    "package:angular_forms/src/directives/ng_control_status.template.dart"
  ];
  abstract_form$46template.initReflector = function initReflector() {
    if (abstract_form$46template._visited) {
      return;
    }
    abstract_form$46template._visited = true;
    model$46template.initReflector();
    control_container$46template.initReflector();
    form_interface$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(abstract_form$46template, {
    /*abstract_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_control_group$46template.initReflector = function initReflector$() {
    if (ng_control_group$46template._visited) {
      return;
    }
    ng_control_group$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    form_interface$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_control_group$46template, {
    /*ng_control_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  var instance$ = dart.privateName(validators$46template, "MinLengthValidatorNgCd.instance");
  var _expr_0 = dart.privateName(validators$46template, "_expr_0");
  validators$46template.MinLengthValidatorNgCd = class MinLengthValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.minLengthAttr;
      if (check_binding.checkBinding(this[_expr_0], currVal_0, null, null)) {
        dom_helpers.updateAttribute(el, "minlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.MinLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = validators$46template.MinLengthValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.MinLengthValidatorNgCd);
  dart.addTypeCaches(validators$46template.MinLengthValidatorNgCd);
  dart.setMethodSignature(validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.MinLengthValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [render_view.RenderView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.MinLengthValidatorNgCd, I[0]);
  dart.setFieldSignature(validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.MinLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.MinLengthValidator),
    [_expr_0]: dart.fieldType(dart.nullable(core.Object))
  }));
  var instance$0 = dart.privateName(validators$46template, "MaxLengthValidatorNgCd.instance");
  validators$46template.MaxLengthValidatorNgCd = class MaxLengthValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$0];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.maxLengthAttr;
      if (check_binding.checkBinding(this[_expr_0], currVal_0, null, null)) {
        dom_helpers.updateAttribute(el, "maxlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.MaxLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$0] = instance;
    ;
  }).prototype = validators$46template.MaxLengthValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.MaxLengthValidatorNgCd);
  dart.addTypeCaches(validators$46template.MaxLengthValidatorNgCd);
  dart.setMethodSignature(validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.MaxLengthValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [render_view.RenderView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.MaxLengthValidatorNgCd, I[0]);
  dart.setFieldSignature(validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.MaxLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.MaxLengthValidator),
    [_expr_0]: dart.fieldType(dart.nullable(core.Object))
  }));
  var instance$1 = dart.privateName(validators$46template, "PatternValidatorNgCd.instance");
  validators$46template.PatternValidatorNgCd = class PatternValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$1];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.pattern;
      if (check_binding.checkBinding(this[_expr_0], currVal_0, null, null)) {
        dom_helpers.updateAttribute(el, "pattern", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.PatternValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$1] = instance;
    ;
  }).prototype = validators$46template.PatternValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.PatternValidatorNgCd);
  dart.addTypeCaches(validators$46template.PatternValidatorNgCd);
  dart.setMethodSignature(validators$46template.PatternValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.PatternValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [render_view.RenderView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.PatternValidatorNgCd, I[0]);
  dart.setFieldSignature(validators$46template.PatternValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.PatternValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.PatternValidator),
    [_expr_0]: dart.fieldType(dart.nullable(core.Object))
  }));
  validators$46template.initReflector = function initReflector$0() {
    if (validators$46template._visited) {
      return;
    }
    validators$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(validators$46template, {
    /*validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  validators$46template$.initReflector = function initReflector$1() {
    if (validators$46template$._visited) {
      return;
    }
    validators$46template$._visited = true;
    validators$46template.initReflector();
    model$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(validators$46template$, {
    /*validators$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  model$46template.initReflector = function initReflector$2() {
    if (model$46template._visited) {
      return;
    }
    model$46template._visited = true;
    validators$46template.initReflector();
  };
  dart.defineLazy(model$46template, {
    /*model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  shared$46template.initReflector = function initReflector$3() {
    if (shared$46template._visited) {
      return;
    }
    shared$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_control_directive$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    normalize_validator$46template.initReflector();
    number_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(shared$46template, {
    /*shared$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  select_control_value_accessor$46template.initReflector = function initReflector$4() {
    if (select_control_value_accessor$46template._visited) {
      return;
    }
    select_control_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(select_control_value_accessor$46template, {
    /*select_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  control_value_accessor$46template.initReflector = function initReflector$5() {
    if (control_value_accessor$46template._visited) {
      return;
    }
    control_value_accessor$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(control_value_accessor$46template, {
    /*control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  radio_control_value_accessor$46template.initReflector = function initReflector$6() {
    if (radio_control_value_accessor$46template._visited) {
      return;
    }
    radio_control_value_accessor$46template._visited = true;
    reflector.registerFactory(dart.wrapType(radio_control_value_accessor.RadioControlRegistry), dart.fn(() => new radio_control_value_accessor.RadioControlRegistry.new(), T.VoidToRadioControlRegistry()));
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(radio_control_value_accessor$46template, {
    /*radio_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_control$46template.initReflector = function initReflector$7() {
    if (ng_control$46template._visited) {
      return;
    }
    ng_control$46template._visited = true;
    model$46template.initReflector();
    abstract_control_directive$46template.initReflector();
    control_value_accessor$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_control$46template, {
    /*ng_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  abstract_control_directive$46template.initReflector = function initReflector$8() {
    if (abstract_control_directive$46template._visited) {
      return;
    }
    abstract_control_directive$46template._visited = true;
    model$46template.initReflector();
  };
  dart.defineLazy(abstract_control_directive$46template, {
    /*abstract_control_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  number_value_accessor$46template.initReflector = function initReflector$9() {
    if (number_value_accessor$46template._visited) {
      return;
    }
    number_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(number_value_accessor$46template, {
    /*number_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  normalize_validator$46template.initReflector = function initReflector$10() {
    if (normalize_validator$46template._visited) {
      return;
    }
    normalize_validator$46template._visited = true;
    validators$46template.initReflector();
  };
  dart.defineLazy(normalize_validator$46template, {
    /*normalize_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  default_value_accessor$46template.initReflector = function initReflector$11() {
    if (default_value_accessor$46template._visited) {
      return;
    }
    default_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(default_value_accessor$46template, {
    /*default_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  control_container$46template.initReflector = function initReflector$12() {
    if (control_container$46template._visited) {
      return;
    }
    control_container$46template._visited = true;
    model$46template.initReflector();
    abstract_control_directive$46template.initReflector();
    form_interface$46template.initReflector();
  };
  dart.defineLazy(control_container$46template, {
    /*control_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  form_interface$46template.initReflector = function initReflector$13() {
    if (form_interface$46template._visited) {
      return;
    }
    form_interface$46template._visited = true;
    model$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
  };
  dart.defineLazy(form_interface$46template, {
    /*form_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  checkbox_value_accessor$46template.initReflector = function initReflector$14() {
    if (checkbox_value_accessor$46template._visited) {
      return;
    }
    checkbox_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(checkbox_value_accessor$46template, {
    /*checkbox_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  var instance$2 = dart.privateName(ng_control_status$46template, "NgControlStatusNgCd.instance");
  var _expr_0$ = dart.privateName(ng_control_status$46template, "_expr_0");
  var _expr_1 = dart.privateName(ng_control_status$46template, "_expr_1");
  var _expr_2 = dart.privateName(ng_control_status$46template, "_expr_2");
  var _expr_3 = dart.privateName(ng_control_status$46template, "_expr_3");
  var _expr_4 = dart.privateName(ng_control_status$46template, "_expr_4");
  var _expr_5 = dart.privateName(ng_control_status$46template, "_expr_5");
  ng_control_status$46template.NgControlStatusNgCd = class NgControlStatusNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$2];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.ngClassUntouched;
      if (check_binding.checkBinding(this[_expr_0$], currVal_0, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-untouched", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = this.instance.ngClassTouched;
      if (check_binding.checkBinding(this[_expr_1], currVal_1, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-touched", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.ngClassPristine;
      if (check_binding.checkBinding(this[_expr_2], currVal_2, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-pristine", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.ngClassDirty;
      if (check_binding.checkBinding(this[_expr_3], currVal_3, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-dirty", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.instance.ngClassValid;
      if (check_binding.checkBinding(this[_expr_4], currVal_4, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-valid", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.instance.ngClassInvalid;
      if (check_binding.checkBinding(this[_expr_5], currVal_5, null, null)) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
  };
  (ng_control_status$46template.NgControlStatusNgCd.new = function(instance) {
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[instance$2] = instance;
    ;
  }).prototype = ng_control_status$46template.NgControlStatusNgCd.prototype;
  dart.addTypeTests(ng_control_status$46template.NgControlStatusNgCd);
  dart.addTypeCaches(ng_control_status$46template.NgControlStatusNgCd);
  dart.setMethodSignature(ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getMethods(ng_control_status$46template.NgControlStatusNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [render_view.RenderView, html.Element])
  }));
  dart.setLibraryUri(ng_control_status$46template.NgControlStatusNgCd, I[1]);
  dart.setFieldSignature(ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getFields(ng_control_status$46template.NgControlStatusNgCd.__proto__),
    instance: dart.finalFieldType(ng_control_status.NgControlStatus),
    [_expr_0$]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_1]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_2]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_3]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_4]: dart.fieldType(dart.nullable(core.Object)),
    [_expr_5]: dart.fieldType(dart.nullable(core.Object))
  }));
  ng_control_status$46template.initReflector = function initReflector$15() {
    if (ng_control_status$46template._visited) {
      return;
    }
    ng_control_status$46template._visited = true;
    ng_control$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(ng_control_status$46template, {
    /*ng_control_status$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  angular_forms$46template.initReflector = function initReflector$16() {
    if (angular_forms$46template._visited) {
      return;
    }
    angular_forms$46template._visited = true;
    directives$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    form_builder$46template.initReflector();
    model$46template.initReflector();
    validators$46template$.initReflector();
  };
  dart.defineLazy(angular_forms$46template, {
    /*angular_forms$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  form_builder$46template.initReflector = function initReflector$17() {
    if (form_builder$46template._visited) {
      return;
    }
    form_builder$46template._visited = true;
    validators$46template.initReflector();
    model$46template.initReflector();
  };
  dart.defineLazy(form_builder$46template, {
    /*form_builder$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  directives$46template.initReflector = function initReflector$18() {
    if (directives$46template._visited) {
      return;
    }
    directives$46template._visited = true;
    abstract_control_directive$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    form_interface$46template.initReflector();
    memorized_form$46template.initReflector();
    memorized_form$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_control_name$46template.initReflector();
    ng_control_name$46template.initReflector();
    ng_control_status$46template.initReflector();
    ng_form$46template.initReflector();
    ng_form$46template.initReflector();
    ng_form_control$46template.initReflector();
    ng_form_control$46template.initReflector();
    ng_form_model$46template.initReflector();
    ng_form_model$46template.initReflector();
    ng_model$46template.initReflector();
    ng_model$46template.initReflector();
    number_value_accessor$46template.initReflector();
    number_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(directives$46template, {
    /*directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_model$46template.initReflector = function initReflector$19() {
    if (ng_model$46template._visited) {
      return;
    }
    ng_model$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_model$46template, {
    /*ng_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_form_model$46template.initReflector = function initReflector$20() {
    if (ng_form_model$46template._visited) {
      return;
    }
    ng_form_model$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_form$46template.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_form_model$46template, {
    /*ng_form_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_form_control$46template.initReflector = function initReflector$21() {
    if (ng_form_control$46template._visited) {
      return;
    }
    ng_form_control$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_form_control$46template, {
    /*ng_form_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_form$46template.initReflector = function initReflector$22() {
    if (ng_form$46template._visited) {
      return;
    }
    ng_form$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_form$46template.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_form$46template, {
    /*ng_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_control_name$46template.initReflector = function initReflector$23() {
    if (ng_control_name$46template._visited) {
      return;
    }
    ng_control_name$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    form_interface$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_control_name$46template, {
    /*ng_control_name$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  memorized_form$46template.initReflector = function initReflector$24() {
    if (memorized_form$46template._visited) {
      return;
    }
    memorized_form$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_form$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(memorized_form$46template, {
    /*memorized_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/angular_forms/angular_forms.template", {
    "package:angular_forms/src/directives/abstract_form.template.dart": abstract_form$46template,
    "package:angular_forms/src/directives/ng_control_group.template.dart": ng_control_group$46template,
    "package:angular_forms/src/directives/validators.template.dart": validators$46template,
    "package:angular_forms/src/validators.template.dart": validators$46template$,
    "package:angular_forms/src/model.template.dart": model$46template,
    "package:angular_forms/src/directives/shared.template.dart": shared$46template,
    "package:angular_forms/src/directives/select_control_value_accessor.template.dart": select_control_value_accessor$46template,
    "package:angular_forms/src/directives/control_value_accessor.template.dart": control_value_accessor$46template,
    "package:angular_forms/src/directives/radio_control_value_accessor.template.dart": radio_control_value_accessor$46template,
    "package:angular_forms/src/directives/ng_control.template.dart": ng_control$46template,
    "package:angular_forms/src/directives/abstract_control_directive.template.dart": abstract_control_directive$46template,
    "package:angular_forms/src/directives/number_value_accessor.template.dart": number_value_accessor$46template,
    "package:angular_forms/src/directives/normalize_validator.template.dart": normalize_validator$46template,
    "package:angular_forms/src/directives/default_value_accessor.template.dart": default_value_accessor$46template,
    "package:angular_forms/src/directives/control_container.template.dart": control_container$46template,
    "package:angular_forms/src/directives/form_interface.template.dart": form_interface$46template,
    "package:angular_forms/src/directives/checkbox_value_accessor.template.dart": checkbox_value_accessor$46template,
    "package:angular_forms/src/directives/ng_control_status.template.dart": ng_control_status$46template,
    "package:angular_forms/angular_forms.template.dart": angular_forms$46template,
    "package:angular_forms/src/form_builder.template.dart": form_builder$46template,
    "package:angular_forms/src/directives.template.dart": directives$46template,
    "package:angular_forms/src/directives/ng_model.template.dart": ng_model$46template,
    "package:angular_forms/src/directives/ng_form_model.template.dart": ng_form_model$46template,
    "package:angular_forms/src/directives/ng_form_control.template.dart": ng_form_control$46template,
    "package:angular_forms/src/directives/ng_form.template.dart": ng_form$46template,
    "package:angular_forms/src/directives/ng_control_name.template.dart": ng_control_name$46template,
    "package:angular_forms/src/directives/memorized_form.template.dart": memorized_form$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/directives/abstract_form.template.dart","src/directives/ng_control_group.template.dart","src/directives/validators.template.dart","src/validators.template.dart","src/model.template.dart","src/directives/shared.template.dart","src/directives/select_control_value_accessor.template.dart","src/directives/control_value_accessor.template.dart","src/directives/radio_control_value_accessor.template.dart","src/directives/ng_control.template.dart","src/directives/abstract_control_directive.template.dart","src/directives/number_value_accessor.template.dart","src/directives/normalize_validator.template.dart","src/directives/default_value_accessor.template.dart","src/directives/control_container.template.dart","src/directives/form_interface.template.dart","src/directives/checkbox_value_accessor.template.dart","src/directives/ng_control_status.template.dart","angular_forms.template.dart","src/form_builder.template.dart","src/directives.template.dart","src/directives/ng_model.template.dart","src/directives/ng_form_model.template.dart","src/directives/ng_form_control.template.dart","src/directives/ng_form.template.dart","src/directives/ng_control_name.template.dart","src/directives/memorized_form.template.dart"],"names":[],"mappings":"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,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MAxCI,8BAAQ;YAAG;;;;;ACzBb,QAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,4BAAQ;YAAG;;;;;ACKb,QAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,iCAAQ;YAAG;;;;;ACDb,QAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,mCAAQ;YAAG;;;;;ACIb,QAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,2BAAQ;YAAG;;;;;ACEb,QAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,mCAAQ;YAAG;;;;;ACEb,QAAI;AACF;;AAEa,IAAf,qCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,kCAAQ;YAAG","file":"angular_forms.template.sound.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_form$46template: abstract_form$46template,
    src__directives__ng_control_group$46template: ng_control_group$46template,
    src__directives__validators$46template: validators$46template,
    src__validators$46template: validators$46template$,
    src__model$46template: model$46template,
    src__directives__shared$46template: shared$46template,
    src__directives__select_control_value_accessor$46template: select_control_value_accessor$46template,
    src__directives__control_value_accessor$46template: control_value_accessor$46template,
    src__directives__radio_control_value_accessor$46template: radio_control_value_accessor$46template,
    src__directives__ng_control$46template: ng_control$46template,
    src__directives__abstract_control_directive$46template: abstract_control_directive$46template,
    src__directives__number_value_accessor$46template: number_value_accessor$46template,
    src__directives__normalize_validator$46template: normalize_validator$46template,
    src__directives__default_value_accessor$46template: default_value_accessor$46template,
    src__directives__control_container$46template: control_container$46template,
    src__directives__form_interface$46template: form_interface$46template,
    src__directives__checkbox_value_accessor$46template: checkbox_value_accessor$46template,
    src__directives__ng_control_status$46template: ng_control_status$46template,
    angular_forms$46template: angular_forms$46template,
    src__form_builder$46template: form_builder$46template,
    src__directives$46template: directives$46template,
    src__directives__ng_model$46template: ng_model$46template,
    src__directives__ng_form_model$46template: ng_form_model$46template,
    src__directives__ng_form_control$46template: ng_form_control$46template,
    src__directives__ng_form$46template: ng_form$46template,
    src__directives__ng_control_name$46template: ng_control_name$46template,
    src__directives__memorized_form$46template: memorized_form$46template
  };
}));

//# sourceMappingURL=angular_forms.template.sound.ddc.js.map
