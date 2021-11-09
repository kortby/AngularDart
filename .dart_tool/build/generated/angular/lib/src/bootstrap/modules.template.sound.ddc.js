define(['dart_sdk', 'packages/angular/src/di/errors.template'], (function load__packages__angular__src__bootstrap__modules_template(dart_sdk, packages__angular__src__di__errors$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utilities$46template = packages__angular__src__di__errors$46template.src__utilities$46template;
  const errors$46template = packages__angular__src__di__errors$46template.src__di__errors$46template;
  const injector$46template = packages__angular__src__di__errors$46template.src__di__injector$46template;
  const meta$46template = packages__angular__src__di__errors$46template.src__meta$46template;
  const runtime$46template = packages__angular__src__di__errors$46template.src__di__injector__runtime$46template;
  const reflector$46template = packages__angular__src__di__errors$46template.src__reflector$46template;
  var devtools$46template = Object.create(dart.library);
  var model$46template = Object.create(dart.library);
  var inspector$46template = Object.create(dart.library);
  var reference_counter$46template = Object.create(dart.library);
  var error$46template = Object.create(dart.library);
  var view$46template = Object.create(dart.library);
  var host$46template = Object.create(dart.library);
  var check_binding$46template = Object.create(dart.library);
  var change_detector_ref$46template = Object.create(dart.library);
  var component_view$46template = Object.create(dart.library);
  var render_view$46template = Object.create(dart.library);
  var dom_helpers$46template = Object.create(dart.library);
  var view_fragment$46template = Object.create(dart.library);
  var view_container$46template = Object.create(dart.library);
  var dynamic_view$46template = Object.create(dart.library);
  var view_ref$46template = Object.create(dart.library);
  var view_container_ref$46template = Object.create(dart.library);
  var template_ref$46template = Object.create(dart.library);
  var embedded_view$46template = Object.create(dart.library);
  var style_encapsulation$46template = Object.create(dart.library);
  var app_view_utils$46template = Object.create(dart.library);
  var dom_events$46template = Object.create(dart.library);
  var ng_zone$46template = Object.create(dart.library);
  var application_tokens$46template = Object.create(dart.library);
  var element_ref$46template = Object.create(dart.library);
  var component_loader$46template = Object.create(dart.library);
  var component_factory$46template = Object.create(dart.library);
  var host_view$46template = Object.create(dart.library);
  var application_ref$46template = Object.create(dart.library);
  var testability$46template = Object.create(dart.library);
  var testability$46template$ = Object.create(dart.library);
  var js_api$46template = Object.create(dart.library);
  var exception_handler$46template = Object.create(dart.library);
  var ng_for$46template = Object.create(dart.library);
  var linker$46template = Object.create(dart.library);
  var ng_content_ref$46template = Object.create(dart.library);
  var default_iterable_differ$46template = Object.create(dart.library);
  var number_pipe$46template = Object.create(dart.library);
  var run$46template = Object.create(dart.library);
  var modules$46template = Object.create(dart.library);
  var component_resolver$46template = Object.create(dart.library);
  var app_host$46template = Object.create(dart.library);
  var pipes$46template = Object.create(dart.library);
  var uppercase_pipe$46template = Object.create(dart.library);
  var slice_pipe$46template = Object.create(dart.library);
  var invalid_pipe_argument_exception$46template = Object.create(dart.library);
  var replace_pipe$46template = Object.create(dart.library);
  var lowercase_pipe$46template = Object.create(dart.library);
  var date_pipe$46template = Object.create(dart.library);
  var common_pipes$46template = Object.create(dart.library);
  var async_pipe$46template = Object.create(dart.library);
  var ng_class$46template = Object.create(dart.library);
  var default_keyvalue_differ$46template = Object.create(dart.library);
  var change_detection$46template = Object.create(dart.library);
  var ng_switch$46template = Object.create(dart.library);
  var ng_template_outlet$46template = Object.create(dart.library);
  var change_detection$46template$ = Object.create(dart.library);
  var ng_if$46template = Object.create(dart.library);
  var directives$46template = Object.create(dart.library);
  var ng_style$46template = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  devtools$46template.initReflector = function initReflector() {
    if (devtools$46template._visited) {
      return;
    }
    devtools$46template._visited = true;
    inspector$46template.initReflector();
    inspector$46template.initReflector();
    model$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(devtools$46template, {
    /*devtools$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  model$46template.initReflector = function initReflector$() {
  };
  inspector$46template.initReflector = function initReflector$0() {
    if (inspector$46template._visited) {
      return;
    }
    inspector$46template._visited = true;
    application_ref$46template.initReflector();
    component_view$46template.initReflector();
    view$46template.initReflector();
    model$46template.initReflector();
    reference_counter$46template.initReflector();
  };
  dart.defineLazy(inspector$46template, {
    /*inspector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  reference_counter$46template.initReflector = function initReflector$1() {
    if (reference_counter$46template._visited) {
      return;
    }
    reference_counter$46template._visited = true;
    error$46template.initReflector();
  };
  dart.defineLazy(reference_counter$46template, {
    /*reference_counter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  error$46template.initReflector = function initReflector$2() {
  };
  view$46template.initReflector = function initReflector$3() {
    if (view$46template._visited) {
      return;
    }
    view$46template._visited = true;
    change_detector_ref$46template.initReflector();
    host$46template.initReflector();
    errors$46template.initReflector();
    injector$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(view$46template, {
    /*view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  host$46template.initReflector = function initReflector$4() {
    if (host$46template._visited) {
      return;
    }
    host$46template._visited = true;
    change_detector_ref$46template.initReflector();
    view$46template.initReflector();
    check_binding$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(host$46template, {
    /*host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  check_binding$46template.initReflector = function initReflector$5() {
    if (check_binding$46template._visited) {
      return;
    }
    check_binding$46template._visited = true;
    utilities$46template.initReflector();
  };
  dart.defineLazy(check_binding$46template, {
    /*check_binding$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  change_detector_ref$46template.initReflector = function initReflector$6() {
  };
  component_view$46template.initReflector = function initReflector$7() {
    if (component_view$46template._visited) {
      return;
    }
    component_view$46template._visited = true;
    host$46template.initReflector();
    style_encapsulation$46template.initReflector();
    devtools$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
    render_view$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(component_view$46template, {
    /*component_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  render_view$46template.initReflector = function initReflector$8() {
    if (render_view$46template._visited) {
      return;
    }
    render_view$46template._visited = true;
    app_view_utils$46template.initReflector();
    style_encapsulation$46template.initReflector();
    view_container$46template.initReflector();
    view_fragment$46template.initReflector();
    dom_helpers$46template.initReflector();
    utilities$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(render_view$46template, {
    /*render_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dom_helpers$46template.initReflector = function initReflector$9() {
    if (dom_helpers$46template._visited) {
      return;
    }
    dom_helpers$46template._visited = true;
    utilities$46template.initReflector();
  };
  dart.defineLazy(dom_helpers$46template, {
    /*dom_helpers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  view_fragment$46template.initReflector = function initReflector$10() {
    if (view_fragment$46template._visited) {
      return;
    }
    view_fragment$46template._visited = true;
    utilities$46template.initReflector();
    view_container$46template.initReflector();
  };
  dart.defineLazy(view_fragment$46template, {
    /*view_fragment$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  view_container$46template.initReflector = function initReflector$11() {
    if (view_container$46template._visited) {
      return;
    }
    view_container$46template._visited = true;
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    injector$46template.initReflector();
    utilities$46template.initReflector();
    template_ref$46template.initReflector();
    view_container_ref$46template.initReflector();
    view_ref$46template.initReflector();
    dynamic_view$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(view_container$46template, {
    /*view_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dynamic_view$46template.initReflector = function initReflector$12() {
    if (dynamic_view$46template._visited) {
      return;
    }
    dynamic_view$46template._visited = true;
    view_container$46template.initReflector();
    view_fragment$46template.initReflector();
    view_ref$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(dynamic_view$46template, {
    /*dynamic_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  view_ref$46template.initReflector = function initReflector$13() {
  };
  view_container_ref$46template.initReflector = function initReflector$14() {
    if (view_container_ref$46template._visited) {
      return;
    }
    view_container_ref$46template._visited = true;
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    injector$46template.initReflector();
    template_ref$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(view_container_ref$46template, {
    /*view_container_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  template_ref$46template.initReflector = function initReflector$15() {
    if (template_ref$46template._visited) {
      return;
    }
    template_ref$46template._visited = true;
    utilities$46template.initReflector();
    view_container$46template.initReflector();
    view_ref$46template.initReflector();
    embedded_view$46template.initReflector();
    render_view$46template.initReflector();
  };
  dart.defineLazy(template_ref$46template, {
    /*template_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  embedded_view$46template.initReflector = function initReflector$16() {
    if (embedded_view$46template._visited) {
      return;
    }
    embedded_view$46template._visited = true;
    dynamic_view$46template.initReflector();
    host$46template.initReflector();
    style_encapsulation$46template.initReflector();
    view_container$46template.initReflector();
    view_fragment$46template.initReflector();
    view_ref$46template.initReflector();
    meta$46template.initReflector();
    dom_helpers$46template.initReflector();
    utilities$46template.initReflector();
    render_view$46template.initReflector();
  };
  dart.defineLazy(embedded_view$46template, {
    /*embedded_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  style_encapsulation$46template.initReflector = function initReflector$17() {
    if (style_encapsulation$46template._visited) {
      return;
    }
    style_encapsulation$46template._visited = true;
    app_view_utils$46template.initReflector();
    dom_helpers$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(style_encapsulation$46template, {
    /*style_encapsulation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  app_view_utils$46template.initReflector = function initReflector$18() {
    if (app_view_utils$46template._visited) {
      return;
    }
    app_view_utils$46template._visited = true;
    application_tokens$46template.initReflector();
    dom_events$46template.initReflector();
  };
  dart.defineLazy(app_view_utils$46template, {
    /*app_view_utils$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dom_events$46template.initReflector = function initReflector$19() {
    if (dom_events$46template._visited) {
      return;
    }
    dom_events$46template._visited = true;
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(dom_events$46template, {
    /*dom_events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_zone$46template.initReflector = function initReflector$20() {
  };
  application_tokens$46template.initReflector = function initReflector$21() {
    if (application_tokens$46template._visited) {
      return;
    }
    application_tokens$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(application_tokens$46template, {
    /*application_tokens$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  element_ref$46template.initReflector = function initReflector$22() {
  };
  component_loader$46template.initReflector = function initReflector$23() {
    if (component_loader$46template._visited) {
      return;
    }
    component_loader$46template._visited = true;
    injector$46template.initReflector();
    component_factory$46template.initReflector();
    view_container_ref$46template.initReflector();
  };
  dart.defineLazy(component_loader$46template, {
    /*component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  component_factory$46template.initReflector = function initReflector$24() {
    if (component_factory$46template._visited) {
      return;
    }
    component_factory$46template._visited = true;
    change_detector_ref$46template.initReflector();
    ng_zone$46template.initReflector();
    injector$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
    view_ref$46template.initReflector();
    host_view$46template.initReflector();
  };
  dart.defineLazy(component_factory$46template, {
    /*component_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  host_view$46template.initReflector = function initReflector$25() {
    if (host_view$46template._visited) {
      return;
    }
    host_view$46template._visited = true;
    component_view$46template.initReflector();
    dynamic_view$46template.initReflector();
    host$46template.initReflector();
    component_factory$46template.initReflector();
    view_container$46template.initReflector();
    view_fragment$46template.initReflector();
    injector$46template.initReflector();
    meta$46template.initReflector();
    dom_helpers$46template.initReflector();
    utilities$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(host_view$46template, {
    /*host_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  application_ref$46template.initReflector = function initReflector$26() {
    if (application_ref$46template._visited) {
      return;
    }
    application_ref$46template._visited = true;
    host$46template.initReflector();
    component_factory$46template.initReflector();
    exception_handler$46template.initReflector();
    devtools$46template.initReflector();
    injector$46template.initReflector();
    testability$46template.initReflector();
    utilities$46template.initReflector();
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(application_ref$46template, {
    /*application_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  testability$46template.initReflector = function initReflector$27() {
    if (testability$46template._visited) {
      return;
    }
    testability$46template._visited = true;
    testability$46template$.initReflector();
  };
  dart.defineLazy(testability$46template, {
    /*testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  testability$46template$.initReflector = function initReflector$28() {
    if (testability$46template$._visited) {
      return;
    }
    testability$46template$._visited = true;
    js_api$46template.initReflector();
    ng_zone$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(testability$46template$, {
    /*testability$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  js_api$46template.initReflector = function initReflector$29() {
  };
  exception_handler$46template.initReflector = function initReflector$30() {
  };
  ng_for$46template.initReflector = function initReflector$31() {
    if (ng_for$46template._visited) {
      return;
    }
    ng_for$46template._visited = true;
    default_iterable_differ$46template.initReflector();
    linker$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(ng_for$46template, {
    /*ng_for$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  linker$46template.initReflector = function initReflector$32() {
    if (linker$46template._visited) {
      return;
    }
    linker$46template._visited = true;
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    ng_content_ref$46template.initReflector();
    style_encapsulation$46template.initReflector();
    template_ref$46template.initReflector();
    view_container_ref$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(linker$46template, {
    /*linker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_content_ref$46template.initReflector = function initReflector$33() {
    if (ng_content_ref$46template._visited) {
      return;
    }
    ng_content_ref$46template._visited = true;
    view_container$46template.initReflector();
    render_view$46template.initReflector();
  };
  dart.defineLazy(ng_content_ref$46template, {
    /*ng_content_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  default_iterable_differ$46template.initReflector = function initReflector$34() {
    if (default_iterable_differ$46template._visited) {
      return;
    }
    default_iterable_differ$46template._visited = true;
    utilities$46template.initReflector();
  };
  dart.defineLazy(default_iterable_differ$46template, {
    /*default_iterable_differ$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  number_pipe$46template.initReflector = function initReflector$35() {
    if (number_pipe$46template._visited) {
      return;
    }
    number_pipe$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(number_pipe$46template, {
    /*number_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  run$46template.initReflector = function initReflector$36() {
    if (run$46template._visited) {
      return;
    }
    run$46template._visited = true;
    app_host$46template.initReflector();
    application_ref$46template.initReflector();
    application_tokens$46template.initReflector();
    linker$46template.initReflector();
    app_view_utils$46template.initReflector();
    component_resolver$46template.initReflector();
    ng_zone$46template.initReflector();
    devtools$46template.initReflector();
    injector$46template.initReflector();
    dom_events$46template.initReflector();
    utilities$46template.initReflector();
    modules$46template.initReflector();
    runtime$46template.initReflector();
    meta$46template.initReflector();
    testability$46template.initReflector();
  };
  dart.defineLazy(run$46template, {
    /*run$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  modules$46template.initReflector = function initReflector$37() {
    if (modules$46template._visited) {
      return;
    }
    modules$46template._visited = true;
    application_tokens$46template.initReflector();
    exception_handler$46template.initReflector();
    component_loader$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(modules$46template, {
    /*modules$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  component_resolver$46template.initReflector = function initReflector$38() {
    if (component_resolver$46template._visited) {
      return;
    }
    component_resolver$46template._visited = true;
    component_factory$46template.initReflector();
    reflector$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(component_resolver$46template, {
    /*component_resolver$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  app_host$46template.initReflector = function initReflector$39() {
    if (app_host$46template._visited) {
      return;
    }
    app_host$46template._visited = true;
    injector$46template.initReflector();
    testability$46template.initReflector();
  };
  dart.defineLazy(app_host$46template, {
    /*app_host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  pipes$46template.initReflector = function initReflector$40() {
    if (pipes$46template._visited) {
      return;
    }
    pipes$46template._visited = true;
    async_pipe$46template.initReflector();
    common_pipes$46template.initReflector();
    date_pipe$46template.initReflector();
    lowercase_pipe$46template.initReflector();
    number_pipe$46template.initReflector();
    replace_pipe$46template.initReflector();
    slice_pipe$46template.initReflector();
    uppercase_pipe$46template.initReflector();
  };
  dart.defineLazy(pipes$46template, {
    /*pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  uppercase_pipe$46template.initReflector = function initReflector$41() {
    if (uppercase_pipe$46template._visited) {
      return;
    }
    uppercase_pipe$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(uppercase_pipe$46template, {
    /*uppercase_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  slice_pipe$46template.initReflector = function initReflector$42() {
    if (slice_pipe$46template._visited) {
      return;
    }
    slice_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(slice_pipe$46template, {
    /*slice_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  invalid_pipe_argument_exception$46template.initReflector = function initReflector$43() {
  };
  replace_pipe$46template.initReflector = function initReflector$44() {
    if (replace_pipe$46template._visited) {
      return;
    }
    replace_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(replace_pipe$46template, {
    /*replace_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  lowercase_pipe$46template.initReflector = function initReflector$45() {
    if (lowercase_pipe$46template._visited) {
      return;
    }
    lowercase_pipe$46template._visited = true;
    meta$46template.initReflector();
  };
  dart.defineLazy(lowercase_pipe$46template, {
    /*lowercase_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  date_pipe$46template.initReflector = function initReflector$46() {
    if (date_pipe$46template._visited) {
      return;
    }
    date_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(date_pipe$46template, {
    /*date_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  common_pipes$46template.initReflector = function initReflector$47() {
    if (common_pipes$46template._visited) {
      return;
    }
    common_pipes$46template._visited = true;
    async_pipe$46template.initReflector();
    date_pipe$46template.initReflector();
    lowercase_pipe$46template.initReflector();
    number_pipe$46template.initReflector();
    replace_pipe$46template.initReflector();
    slice_pipe$46template.initReflector();
    uppercase_pipe$46template.initReflector();
  };
  dart.defineLazy(common_pipes$46template, {
    /*common_pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  async_pipe$46template.initReflector = function initReflector$48() {
    if (async_pipe$46template._visited) {
      return;
    }
    async_pipe$46template._visited = true;
    invalid_pipe_argument_exception$46template.initReflector();
    change_detector_ref$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(async_pipe$46template, {
    /*async_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_class$46template.initReflector = function initReflector$49() {
    if (ng_class$46template._visited) {
      return;
    }
    ng_class$46template._visited = true;
    default_iterable_differ$46template.initReflector();
    default_keyvalue_differ$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(ng_class$46template, {
    /*ng_class$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  default_keyvalue_differ$46template.initReflector = function initReflector$50() {
  };
  change_detection$46template.initReflector = function initReflector$51() {
    if (change_detection$46template._visited) {
      return;
    }
    change_detection$46template._visited = true;
    change_detector_ref$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template, {
    /*change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_switch$46template.initReflector = function initReflector$52() {
    if (ng_switch$46template._visited) {
      return;
    }
    ng_switch$46template._visited = true;
    linker$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(ng_switch$46template, {
    /*ng_switch$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_template_outlet$46template.initReflector = function initReflector$53() {
    if (ng_template_outlet$46template._visited) {
      return;
    }
    ng_template_outlet$46template._visited = true;
    linker$46template.initReflector();
    meta$46template.initReflector();
  };
  dart.defineLazy(ng_template_outlet$46template, {
    /*ng_template_outlet$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  change_detection$46template$.initReflector = function initReflector$54() {
    if (change_detection$46template$._visited) {
      return;
    }
    change_detection$46template$._visited = true;
    change_detection$46template.initReflector();
    default_iterable_differ$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template$, {
    /*change_detection$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_if$46template.initReflector = function initReflector$55() {
    if (ng_if$46template._visited) {
      return;
    }
    ng_if$46template._visited = true;
    linker$46template.initReflector();
    meta$46template.initReflector();
    check_binding$46template.initReflector();
  };
  dart.defineLazy(ng_if$46template, {
    /*ng_if$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  directives$46template.initReflector = function initReflector$56() {
    if (directives$46template._visited) {
      return;
    }
    directives$46template._visited = true;
    ng_class$46template.initReflector();
    ng_class$46template.initReflector();
    ng_for$46template.initReflector();
    ng_for$46template.initReflector();
    ng_if$46template.initReflector();
    ng_if$46template.initReflector();
    ng_style$46template.initReflector();
    ng_style$46template.initReflector();
    ng_switch$46template.initReflector();
    ng_switch$46template.initReflector();
    ng_template_outlet$46template.initReflector();
    ng_template_outlet$46template.initReflector();
  };
  dart.defineLazy(directives$46template, {
    /*directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  ng_style$46template.initReflector = function initReflector$57() {
    if (ng_style$46template._visited) {
      return;
    }
    ng_style$46template._visited = true;
    default_keyvalue_differ$46template.initReflector();
    meta$46template.initReflector();
    utilities$46template.initReflector();
  };
  dart.defineLazy(ng_style$46template, {
    /*ng_style$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, false);
  dart.trackLibraries("packages/angular/src/bootstrap/modules.template", {
    "package:angular/src/devtools.template.dart": devtools$46template,
    "package:angular/src/devtools/model.template.dart": model$46template,
    "package:angular/src/devtools/inspector.template.dart": inspector$46template,
    "package:angular/src/devtools/reference_counter.template.dart": reference_counter$46template,
    "package:angular/src/devtools/error.template.dart": error$46template,
    "package:angular/src/core/linker/views/view.template.dart": view$46template,
    "package:angular/src/core/change_detection/host.template.dart": host$46template,
    "package:angular/src/runtime/check_binding.template.dart": check_binding$46template,
    "package:angular/src/core/change_detection/change_detector_ref.template.dart": change_detector_ref$46template,
    "package:angular/src/core/linker/views/component_view.template.dart": component_view$46template,
    "package:angular/src/core/linker/views/render_view.template.dart": render_view$46template,
    "package:angular/src/runtime/dom_helpers.template.dart": dom_helpers$46template,
    "package:angular/src/core/linker/view_fragment.template.dart": view_fragment$46template,
    "package:angular/src/core/linker/view_container.template.dart": view_container$46template,
    "package:angular/src/core/linker/views/dynamic_view.template.dart": dynamic_view$46template,
    "package:angular/src/core/linker/view_ref.template.dart": view_ref$46template,
    "package:angular/src/core/linker/view_container_ref.template.dart": view_container_ref$46template,
    "package:angular/src/core/linker/template_ref.template.dart": template_ref$46template,
    "package:angular/src/core/linker/views/embedded_view.template.dart": embedded_view$46template,
    "package:angular/src/core/linker/style_encapsulation.template.dart": style_encapsulation$46template,
    "package:angular/src/core/linker/app_view_utils.template.dart": app_view_utils$46template,
    "package:angular/src/runtime/dom_events.template.dart": dom_events$46template,
    "package:angular/src/core/zone/ng_zone.template.dart": ng_zone$46template,
    "package:angular/src/core/application_tokens.template.dart": application_tokens$46template,
    "package:angular/src/core/linker/element_ref.template.dart": element_ref$46template,
    "package:angular/src/core/linker/component_loader.template.dart": component_loader$46template,
    "package:angular/src/core/linker/component_factory.template.dart": component_factory$46template,
    "package:angular/src/core/linker/views/host_view.template.dart": host_view$46template,
    "package:angular/src/core/application_ref.template.dart": application_ref$46template,
    "package:angular/src/testability.template.dart": testability$46template,
    "package:angular/src/testability/testability.template.dart": testability$46template$,
    "package:angular/src/testability/js_api.template.dart": js_api$46template,
    "package:angular/src/core/exception_handler.template.dart": exception_handler$46template,
    "package:angular/src/common/directives/ng_for.template.dart": ng_for$46template,
    "package:angular/src/core/linker.template.dart": linker$46template,
    "package:angular/src/core/linker/ng_content_ref.template.dart": ng_content_ref$46template,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.template.dart": default_iterable_differ$46template,
    "package:angular/src/common/pipes/number_pipe.template.dart": number_pipe$46template,
    "package:angular/src/bootstrap/run.template.dart": run$46template,
    "package:angular/src/bootstrap/modules.template.dart": modules$46template,
    "package:angular/src/core/linker/component_resolver.template.dart": component_resolver$46template,
    "package:angular/src/core/app_host.template.dart": app_host$46template,
    "package:angular/src/common/pipes.template.dart": pipes$46template,
    "package:angular/src/common/pipes/uppercase_pipe.template.dart": uppercase_pipe$46template,
    "package:angular/src/common/pipes/slice_pipe.template.dart": slice_pipe$46template,
    "package:angular/src/common/pipes/invalid_pipe_argument_exception.template.dart": invalid_pipe_argument_exception$46template,
    "package:angular/src/common/pipes/replace_pipe.template.dart": replace_pipe$46template,
    "package:angular/src/common/pipes/lowercase_pipe.template.dart": lowercase_pipe$46template,
    "package:angular/src/common/pipes/date_pipe.template.dart": date_pipe$46template,
    "package:angular/src/common/pipes/common_pipes.template.dart": common_pipes$46template,
    "package:angular/src/common/pipes/async_pipe.template.dart": async_pipe$46template,
    "package:angular/src/common/directives/ng_class.template.dart": ng_class$46template,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.template.dart": default_keyvalue_differ$46template,
    "package:angular/src/core/change_detection/change_detection.template.dart": change_detection$46template,
    "package:angular/src/common/directives/ng_switch.template.dart": ng_switch$46template,
    "package:angular/src/common/directives/ng_template_outlet.template.dart": ng_template_outlet$46template,
    "package:angular/src/core/change_detection.template.dart": change_detection$46template$,
    "package:angular/src/common/directives/ng_if.template.dart": ng_if$46template,
    "package:angular/src/common/directives.template.dart": directives$46template,
    "package:angular/src/common/directives/ng_style.template.dart": ng_style$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../devtools.template.dart","../devtools/model.template.dart","../devtools/inspector.template.dart","../devtools/reference_counter.template.dart","../devtools/error.template.dart","../core/linker/views/view.template.dart","../core/change_detection/host.template.dart","../runtime/check_binding.template.dart","../core/change_detection/change_detector_ref.template.dart","../core/linker/views/component_view.template.dart","../core/linker/views/render_view.template.dart","../runtime/dom_helpers.template.dart","../core/linker/view_fragment.template.dart","../core/linker/view_container.template.dart","../core/linker/views/dynamic_view.template.dart","../core/linker/view_ref.template.dart","../core/linker/view_container_ref.template.dart","../core/linker/template_ref.template.dart","../core/linker/views/embedded_view.template.dart","../core/linker/style_encapsulation.template.dart","../core/linker/app_view_utils.template.dart","../runtime/dom_events.template.dart","../core/zone/ng_zone.template.dart","../core/application_tokens.template.dart","../core/linker/element_ref.template.dart","../core/linker/component_loader.template.dart","../core/linker/component_factory.template.dart","../core/linker/views/host_view.template.dart","../core/application_ref.template.dart","../testability.template.dart","../testability/testability.template.dart","../testability/js_api.template.dart","../core/exception_handler.template.dart","../common/directives/ng_for.template.dart","../core/linker.template.dart","../core/linker/ng_content_ref.template.dart","../core/change_detection/differs/default_iterable_differ.template.dart","../common/pipes/number_pipe.template.dart","run.template.dart","modules.template.dart","../core/linker/component_resolver.template.dart","../core/app_host.template.dart","../common/pipes.template.dart","../common/pipes/uppercase_pipe.template.dart","../common/pipes/slice_pipe.template.dart","../common/pipes/invalid_pipe_argument_exception.template.dart","../common/pipes/replace_pipe.template.dart","../common/pipes/lowercase_pipe.template.dart","../common/pipes/date_pipe.template.dart","../common/pipes/common_pipes.template.dart","../common/pipes/async_pipe.template.dart","../common/directives/ng_class.template.dart","../core/change_detection/differs/default_keyvalue_differ.template.dart","../core/change_detection/change_detection.template.dart","../common/directives/ng_switch.template.dart","../common/directives/ng_template_outlet.template.dart","../core/change_detection.template.dart","../common/directives/ng_if.template.dart","../common/directives.template.dart","../common/directives/ng_style.template.dart"],"names":[],"mappings":"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","file":"modules.template.sound.ddc.js"}');
  // Exports:
  return {
    src__devtools$46template: devtools$46template,
    src__devtools__model$46template: model$46template,
    src__devtools__inspector$46template: inspector$46template,
    src__devtools__reference_counter$46template: reference_counter$46template,
    src__devtools__error$46template: error$46template,
    src__core__linker__views__view$46template: view$46template,
    src__core__change_detection__host$46template: host$46template,
    src__runtime__check_binding$46template: check_binding$46template,
    src__core__change_detection__change_detector_ref$46template: change_detector_ref$46template,
    src__core__linker__views__component_view$46template: component_view$46template,
    src__core__linker__views__render_view$46template: render_view$46template,
    src__runtime__dom_helpers$46template: dom_helpers$46template,
    src__core__linker__view_fragment$46template: view_fragment$46template,
    src__core__linker__view_container$46template: view_container$46template,
    src__core__linker__views__dynamic_view$46template: dynamic_view$46template,
    src__core__linker__view_ref$46template: view_ref$46template,
    src__core__linker__view_container_ref$46template: view_container_ref$46template,
    src__core__linker__template_ref$46template: template_ref$46template,
    src__core__linker__views__embedded_view$46template: embedded_view$46template,
    src__core__linker__style_encapsulation$46template: style_encapsulation$46template,
    src__core__linker__app_view_utils$46template: app_view_utils$46template,
    src__runtime__dom_events$46template: dom_events$46template,
    src__core__zone__ng_zone$46template: ng_zone$46template,
    src__core__application_tokens$46template: application_tokens$46template,
    src__core__linker__element_ref$46template: element_ref$46template,
    src__core__linker__component_loader$46template: component_loader$46template,
    src__core__linker__component_factory$46template: component_factory$46template,
    src__core__linker__views__host_view$46template: host_view$46template,
    src__core__application_ref$46template: application_ref$46template,
    src__testability$46template: testability$46template,
    src__testability__testability$46template: testability$46template$,
    src__testability__js_api$46template: js_api$46template,
    src__core__exception_handler$46template: exception_handler$46template,
    src__common__directives__ng_for$46template: ng_for$46template,
    src__core__linker$46template: linker$46template,
    src__core__linker__ng_content_ref$46template: ng_content_ref$46template,
    src__core__change_detection__differs__default_iterable_differ$46template: default_iterable_differ$46template,
    src__common__pipes__number_pipe$46template: number_pipe$46template,
    src__bootstrap__run$46template: run$46template,
    src__bootstrap__modules$46template: modules$46template,
    src__core__linker__component_resolver$46template: component_resolver$46template,
    src__core__app_host$46template: app_host$46template,
    src__common__pipes$46template: pipes$46template,
    src__common__pipes__uppercase_pipe$46template: uppercase_pipe$46template,
    src__common__pipes__slice_pipe$46template: slice_pipe$46template,
    src__common__pipes__invalid_pipe_argument_exception$46template: invalid_pipe_argument_exception$46template,
    src__common__pipes__replace_pipe$46template: replace_pipe$46template,
    src__common__pipes__lowercase_pipe$46template: lowercase_pipe$46template,
    src__common__pipes__date_pipe$46template: date_pipe$46template,
    src__common__pipes__common_pipes$46template: common_pipes$46template,
    src__common__pipes__async_pipe$46template: async_pipe$46template,
    src__common__directives__ng_class$46template: ng_class$46template,
    src__core__change_detection__differs__default_keyvalue_differ$46template: default_keyvalue_differ$46template,
    src__core__change_detection__change_detection$46template: change_detection$46template,
    src__common__directives__ng_switch$46template: ng_switch$46template,
    src__common__directives__ng_template_outlet$46template: ng_template_outlet$46template,
    src__core__change_detection$46template: change_detection$46template$,
    src__common__directives__ng_if$46template: ng_if$46template,
    src__common__directives$46template: directives$46template,
    src__common__directives__ng_style$46template: ng_style$46template
  };
}));

//# sourceMappingURL=modules.template.sound.ddc.js.map
