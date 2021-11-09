define(['dart_sdk', 'packages/examples.hello_world/hero/hero.template'], (function load__packages__examples_hello_world__hero__horo_list__mock_heros_template(dart_sdk, packages__examples$46hello_world__hero__hero$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hero$46template = packages__examples$46hello_world__hero__hero$46template.hero__hero$46template;
  var mock_heros$46template = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  mock_heros$46template.initReflector = function initReflector() {
    if (mock_heros$46template._visited) {
      return;
    }
    mock_heros$46template._visited = true;
    hero$46template.initReflector();
  };
  dart.defineLazy(mock_heros$46template, {
    /*mock_heros$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/hero/horo_list/mock_heros.template", {
    "package:examples.hello_world/hero/horo_list/mock_heros.template.dart": mock_heros$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mock_heros.template.dart"],"names":[],"mappings":";;;;;;;;;;;;AASE,QAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;EACF;;MARI,8BAAQ;YAAG","file":"mock_heros.template.sound.ddc.js"}');
  // Exports:
  return {
    hero__horo_list__mock_heros$46template: mock_heros$46template
  };
}));

//# sourceMappingURL=mock_heros.template.sound.ddc.js.map
