define(['dart_sdk', 'packages/angular_forms/src/directives'], (function load__packages__angular_forms__angular_forms(dart_sdk, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const radio_control_value_accessor = packages__angular_forms__src__directives.src__directives__radio_control_value_accessor;
  var angular_forms = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([dart.wrapType(radio_control_value_accessor.RadioControlRegistry)], core.Type);
    }
  }, false);
  var C = [void 0];
  dart.defineLazy(angular_forms, {
    /*angular_forms.FORM_PROVIDERS*/get FORM_PROVIDERS() {
      return C[0] || CT.C0;
    },
    /*angular_forms.FORM_BINDINGS*/get FORM_BINDINGS() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/angular_forms/angular_forms", {
    "package:angular_forms/angular_forms.dart": angular_forms
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_forms.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiEiB,4BAAc;;;MAGzB,2BAAa","file":"angular_forms.sound.ddc.js"}');
  // Exports:
  return {
    angular_forms: angular_forms
  };
}));

//# sourceMappingURL=angular_forms.sound.ddc.js.map
