define(['dart_sdk'], (function load__packages__angular__src__di__errors_template(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var di_generate_injector$46template = Object.create(dart.library);
  var di_modules$46template = Object.create(dart.library);
  var meta$46template = Object.create(dart.library);
  var visibility$46template = Object.create(dart.library);
  var view$46template = Object.create(dart.library);
  var typed$46template = Object.create(dart.library);
  var lifecycle_hooks$46template = Object.create(dart.library);
  var directives$46template = Object.create(dart.library);
  var change_detection_constants$46template = Object.create(dart.library);
  var di_tokens$46template = Object.create(dart.library);
  var utilities$46template = Object.create(dart.library);
  var unsafe_cast$46template = Object.create(dart.library);
  var is_primitive$46template = Object.create(dart.library);
  var is_dev_mode$46template = Object.create(dart.library);
  var di_providers$46template = Object.create(dart.library);
  var di_arguments$46template = Object.create(dart.library);
  var change_detection_link$46template = Object.create(dart.library);
  var injector$46template = Object.create(dart.library);
  var errors$46template = Object.create(dart.library);
  var reflector$46template = Object.create(dart.library);
  var runtime$46template = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  di_generate_injector$46template.initReflector = function initReflector() {
    if (di_generate_injector$46template._visited) {
      return;
    }
    di_generate_injector$46template._visited = true;
    di_modules$46template.initReflector();
  };
  dart.defineLazy(di_generate_injector$46template, {
    /*di_generate_injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  di_modules$46template.initReflector = function initReflector$() {
    if (di_modules$46template._visited) {
      return;
    }
    di_modules$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(di_modules$46template, {
    /*di_modules$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  meta$46template.initReflector = function initReflector$0() {
    if (meta$46template._visited) {
      return;
    }
    meta$46template._visited = true;
    change_detection_constants$46template.initReflector();
    change_detection_link$46template.initReflector();
    di_arguments$46template.initReflector();
    di_generate_injector$46template.initReflector();
    di_modules$46template.initReflector();
    di_providers$46template.initReflector();
    di_tokens$46template.initReflector();
    directives$46template.initReflector();
    lifecycle_hooks$46template.initReflector();
    typed$46template.initReflector();
    view$46template.initReflector();
    visibility$46template.initReflector();
  };
  dart.defineLazy(meta$46template, {
    /*meta$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  visibility$46template.initReflector = function initReflector$1() {
  };
  view$46template.initReflector = function initReflector$2() {
  };
  typed$46template.initReflector = function initReflector$3() {
  };
  lifecycle_hooks$46template.initReflector = function initReflector$4() {
  };
  directives$46template.initReflector = function initReflector$5() {
    if (directives$46template._visited) {
      return;
    }
    directives$46template._visited = true;
    change_detection_constants$46template.initReflector();
    typed$46template.initReflector();
    view$46template.initReflector();
    visibility$46template.initReflector();
  };
  dart.defineLazy(directives$46template, {
    /*directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  change_detection_constants$46template.initReflector = function initReflector$6() {
  };
  di_tokens$46template.initReflector = function initReflector$7() {
    if (di_tokens$46template._visited) {
      return;
    }
    di_tokens$46template._visited = true;
    utilities$46template.initReflector();
  };
  dart.defineLazy(di_tokens$46template, {
    /*di_tokens$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  utilities$46template.initReflector = function initReflector$8() {
    if (utilities$46template._visited) {
      return;
    }
    utilities$46template._visited = true;
    is_dev_mode$46template.initReflector();
    is_primitive$46template.initReflector();
    unsafe_cast$46template.initReflector();
  };
  dart.defineLazy(utilities$46template, {
    /*utilities$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  unsafe_cast$46template.initReflector = function initReflector$9() {
  };
  is_primitive$46template.initReflector = function initReflector$10() {
  };
  is_dev_mode$46template.initReflector = function initReflector$11() {
  };
  di_providers$46template.initReflector = function initReflector$12() {
    if (di_providers$46template._visited) {
      return;
    }
    di_providers$46template._visited = true;
    di_tokens$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(di_providers$46template, {
    /*di_providers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  di_arguments$46template.initReflector = function initReflector$13() {
  };
  change_detection_link$46template.initReflector = function initReflector$14() {
  };
  injector$46template.initReflector = function initReflector$15() {
    if (injector$46template._visited) {
      return;
    }
    injector$46template._visited = true;
    errors$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(injector$46template, {
    /*injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  errors$46template.initReflector = function initReflector$16() {
    if (errors$46template._visited) {
      return;
    }
    errors$46template._visited = true;
    utilities$46template.initReflector();
  };
  dart.defineLazy(errors$46template, {
    /*errors$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  reflector$46template.initReflector = function initReflector$17() {
    if (reflector$46template._visited) {
      return;
    }
    reflector$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(reflector$46template, {
    /*reflector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  runtime$46template.initReflector = function initReflector$18() {
    if (runtime$46template._visited) {
      return;
    }
    runtime$46template._visited = true;
    errors$46template.initReflector();
    injector$46template.initReflector();
    meta$46template.initReflector();
    reflector$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(runtime$46template, {
    /*runtime$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/angular/src/di/errors.template", {
    "package:angular/src/meta/di_generate_injector.template.dart": di_generate_injector$46template,
    "package:angular/src/meta/di_modules.template.dart": di_modules$46template,
    "package:angular/src/meta.template.dart": meta$46template,
    "package:angular/src/meta/visibility.template.dart": visibility$46template,
    "package:angular/src/meta/view.template.dart": view$46template,
    "package:angular/src/meta/typed.template.dart": typed$46template,
    "package:angular/src/meta/lifecycle_hooks.template.dart": lifecycle_hooks$46template,
    "package:angular/src/meta/directives.template.dart": directives$46template,
    "package:angular/src/meta/change_detection_constants.template.dart": change_detection_constants$46template,
    "package:angular/src/meta/di_tokens.template.dart": di_tokens$46template,
    "package:angular/src/utilities.template.dart": utilities$46template,
    "package:angular/src/utilities/unsafe_cast.template.dart": unsafe_cast$46template,
    "package:angular/src/utilities/is_primitive.template.dart": is_primitive$46template,
    "package:angular/src/utilities/is_dev_mode.template.dart": is_dev_mode$46template,
    "package:angular/src/meta/di_providers.template.dart": di_providers$46template,
    "package:angular/src/meta/di_arguments.template.dart": di_arguments$46template,
    "package:angular/src/meta/change_detection_link.template.dart": change_detection_link$46template,
    "package:angular/src/di/injector.template.dart": injector$46template,
    "package:angular/src/di/errors.template.dart": errors$46template,
    "package:angular/src/reflector.template.dart": reflector$46template,
    "package:angular/src/di/injector/runtime.template.dart": runtime$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../meta/di_generate_injector.template.dart","../meta/di_modules.template.dart","../meta.template.dart","../meta/visibility.template.dart","../meta/view.template.dart","../meta/typed.template.dart","../meta/lifecycle_hooks.template.dart","../meta/directives.template.dart","../meta/change_detection_constants.template.dart","../meta/di_tokens.template.dart","../utilities.template.dart","../utilities/unsafe_cast.template.dart","../utilities/is_primitive.template.dart","../utilities/is_dev_mode.template.dart","../meta/di_providers.template.dart","../meta/di_arguments.template.dart","../meta/change_detection_link.template.dart","injector.template.dart","errors.template.dart","../reflector.template.dart","injector/runtime.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASE,QAAI;AACF;;AAEa,IAAf,2CAAW;AAEU,IAArB;EACF;;MARI,wCAAQ;YAAG;;;;;ACEb,QAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;EACF;;MARI,8BAAQ;YAAG;;;;;ACab,QAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MAnBI,wBAAQ;YAAG;;;;;ECXO;;ECAA;;ECAA;;ECAA;;ACKpB,QAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,8BAAQ;YAAG;;;;;ECHO;;ACEpB,QAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;EACF;;MARI,6BAAQ;YAAG;;;;;ACIb,QAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,6BAAQ;YAAG;;;;;ECFO;;ECAA;;ECAA;;ACGpB,QAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,gCAAQ;YAAG;;;;;ECDO;;ECAA;;ACIpB,QAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,4BAAQ;YAAG;;;;;ACAb,QAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;EACF;;MARI,0BAAQ;YAAG;;;;;ACEb,QAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;EACF;;MARI,6BAAQ;YAAG;;;;;ACMb,QAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,2BAAQ;YAAG","file":"errors.template.sound.ddc.js"}');
  // Exports:
  return {
    src__meta__di_generate_injector$46template: di_generate_injector$46template,
    src__meta__di_modules$46template: di_modules$46template,
    src__meta$46template: meta$46template,
    src__meta__visibility$46template: visibility$46template,
    src__meta__view$46template: view$46template,
    src__meta__typed$46template: typed$46template,
    src__meta__lifecycle_hooks$46template: lifecycle_hooks$46template,
    src__meta__directives$46template: directives$46template,
    src__meta__change_detection_constants$46template: change_detection_constants$46template,
    src__meta__di_tokens$46template: di_tokens$46template,
    src__utilities$46template: utilities$46template,
    src__utilities__unsafe_cast$46template: unsafe_cast$46template,
    src__utilities__is_primitive$46template: is_primitive$46template,
    src__utilities__is_dev_mode$46template: is_dev_mode$46template,
    src__meta__di_providers$46template: di_providers$46template,
    src__meta__di_arguments$46template: di_arguments$46template,
    src__meta__change_detection_link$46template: change_detection_link$46template,
    src__di__injector$46template: injector$46template,
    src__di__errors$46template: errors$46template,
    src__reflector$46template: reflector$46template,
    src__di__injector__runtime$46template: runtime$46template
  };
}));

//# sourceMappingURL=errors.template.sound.ddc.js.map
