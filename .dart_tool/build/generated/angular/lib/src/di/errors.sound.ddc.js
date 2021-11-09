define(['dart_sdk'], (function load__packages__angular__src__di__errors(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var di_tokens = Object.create(dart.library);
  var utilities = Object.create(dart.library);
  var unsafe_cast = Object.create(dart.library);
  var is_primitive = Object.create(dart.library);
  var is_dev_mode = Object.create(dart.library);
  var di_modules = Object.create(dart.library);
  var meta = Object.create(dart.library);
  var visibility = Object.create(dart.library);
  var view = Object.create(dart.library);
  var typed = Object.create(dart.library);
  var lifecycle_hooks = Object.create(dart.library);
  var directives$ = Object.create(dart.library);
  var change_detection_constants = Object.create(dart.library);
  var di_providers = Object.create(dart.library);
  var di_generate_injector = Object.create(dart.library);
  var di_arguments = Object.create(dart.library);
  var change_detection_link = Object.create(dart.library);
  var injector = Object.create(dart.library);
  var errors = Object.create(dart.library);
  var reflector = Object.create(dart.library);
  var runtime = Object.create(dart.library);
  var $toString = dartx.toString;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $isEmpty = dartx.isEmpty;
  var $join = dartx.join;
  var $_set = dartx._set;
  var $values = dartx.values;
  var $length = dartx.length;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ProviderOfObject: () => (T.ProviderOfObject = dart.constFn(di_providers.Provider$(core.Object)))(),
    JSArrayOfProviderOfObject: () => (T.JSArrayOfProviderOfObject = dart.constFn(_interceptors.JSArray$(T.ProviderOfObject())))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    TypedOfObject: () => (T.TypedOfObject = dart.constFn(typed.Typed$(core.Object)))(),
    IdentityMapOfObject$Object: () => (T.IdentityMapOfObject$Object = dart.constFn(_js_helper.IdentityMap$(core.Object, core.Object)))(),
    JSArrayOfObject: () => (T.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    ListOfObject: () => (T.ListOfObject = dart.constFn(core.List$(core.Object)))(),
    LinkedMapOfObject$Object: () => (T.LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))(),
    LinkedMapOfObject$Function: () => (T.LinkedMapOfObject$Function = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Function)))(),
    ListOfListOfObject: () => (T.ListOfListOfObject = dart.constFn(core.List$(T.ListOfObject())))(),
    LinkedMapOfObject$ListOfListOfObject: () => (T.LinkedMapOfObject$ListOfListOfObject = dart.constFn(_js_helper.LinkedMap$(core.Object, T.ListOfListOfObject())))(),
    ProviderOfvoid: () => (T.ProviderOfvoid = dart.constFn(di_providers.Provider$(dart.void)))(),
    JSArrayOfProviderOfvoid: () => (T.JSArrayOfProviderOfvoid = dart.constFn(_interceptors.JSArray$(T.ProviderOfvoid())))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    MultiTokenOfObject: () => (T.MultiTokenOfObject = dart.constFn(di_tokens.MultiToken$(core.Object)))(),
    VoidToObject: () => (T.VoidToObject = dart.constFn(dart.fnType(core.Object, [])))(),
    ObjectTodynamic: () => (T.ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfObject$ProviderOfObject: () => (T.IdentityMapOfObject$ProviderOfObject = dart.constFn(_js_helper.IdentityMap$(core.Object, T.ProviderOfObject())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], di_modules.Module);
    },
    get C1() {
      return C[1] = dart.constList([], T.ProviderOfObject());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: meta._VisibleForTemplate.prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$]: "Visibility.local",
        index: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$]: "Visibility.all",
        index: 1
      });
    },
    get C5() {
      return C[5] = dart.constList([C[3] || CT.C3, C[4] || CT.C4], visibility.Visibility);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$0]: "ViewEncapsulation.Emulated",
        index: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$0]: "ViewEncapsulation.None",
        index: 1
      });
    },
    get C8() {
      return C[8] = dart.constList([C[6] || CT.C6, C[7] || CT.C7], view.ViewEncapsulation);
    },
    get C9() {
      return C[9] = dart.constList([], core.Object);
    },
    get C10() {
      return C[10] = dart.constList([], T.ObjectN());
    },
    get C11() {
      return C[11] = dart.constList([], core.String);
    },
    get C12() {
      return C[12] = dart.constList([], T.TypedOfObject());
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: change_detection_link._ChangeDetectionLink.prototype
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: injector._EmptyInjector.prototype
      });
    },
    get C16() {
      return C[16] = dart.constList([], T.ListOfObject());
    },
    get C17() {
      return C[17] = dart.constList(["ApplicationRef", "NgZone"], core.String);
    }
  }, false);
  var C = Array(18).fill(void 0);
  var I = [
    "package:angular/src/meta/di_tokens.dart",
    "org-dartlang-app:///packages/angular/src/utilities/is_dev_mode.dart",
    "package:angular/src/meta/di_modules.dart",
    "package:angular/src/meta.dart",
    "package:angular/src/meta/visibility.dart",
    "package:angular/src/meta/view.dart",
    "package:angular/src/meta/typed.dart",
    "package:angular/src/meta/lifecycle_hooks.dart",
    "package:angular/src/meta/directives.dart",
    "package:angular/src/meta/change_detection_constants.dart",
    "package:angular/src/meta/di_providers.dart",
    "package:angular/src/meta/di_generate_injector.dart",
    "package:angular/src/meta/di_arguments.dart",
    "package:angular/src/meta/change_detection_link.dart",
    "org-dartlang-app:///packages/angular/src/di/injector.dart",
    "package:angular/src/di/injector.dart",
    "package:angular/src/di/errors.dart",
    "org-dartlang-app:///packages/angular/src/di/errors.dart",
    "package:angular/src/di/injector/runtime.dart",
    "org-dartlang-app:///packages/angular/src/di/injector/runtime.dart"
  ];
  var _uniqueName$ = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var _uniqueName = dart.privateName(di_tokens, "_uniqueName");
  const _is_OpaqueToken_default = Symbol('_is_OpaqueToken_default');
  di_tokens.OpaqueToken$ = dart.generic(T => {
    class OpaqueToken extends core.Object {
      get [_uniqueName]() {
        return this[_uniqueName$];
      }
      set [_uniqueName](value) {
        super[_uniqueName] = value;
      }
      toString() {
        if (is_dev_mode.isDevMode) {
          return "OpaqueToken<" + dart.str(dart.wrapType(T)) + ">('" + this[_uniqueName] + "')";
        }
        return super[$toString]();
      }
    }
    (OpaqueToken.new = function(_uniqueName = "") {
      this[_uniqueName$] = _uniqueName;
      ;
    }).prototype = OpaqueToken.prototype;
    dart.addTypeTests(OpaqueToken);
    OpaqueToken.prototype[_is_OpaqueToken_default] = true;
    dart.addTypeCaches(OpaqueToken);
    dart.setLibraryUri(OpaqueToken, I[0]);
    dart.setFieldSignature(OpaqueToken, () => ({
      __proto__: dart.getFields(OpaqueToken.__proto__),
      [_uniqueName]: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(OpaqueToken, ['toString']);
    return OpaqueToken;
  });
  di_tokens.OpaqueToken = di_tokens.OpaqueToken$();
  dart.addTypeTests(di_tokens.OpaqueToken, _is_OpaqueToken_default);
  var _listOf = dart.privateName(di_tokens, "_listOf");
  const _is_MultiToken_default = Symbol('_is_MultiToken_default');
  di_tokens.MultiToken$ = dart.generic(T => {
    var __t$JSArrayOfT = () => (__t$JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class MultiToken extends di_tokens.OpaqueToken$(core.List$(T)) {
      [_listOf]() {
        return __t$JSArrayOfT().of([]);
      }
      toString() {
        if (is_dev_mode.isDevMode) {
          return "MultiToken (" + super.toString() + ") <" + dart.str(dart.wrapType(T)) + ">('" + this[_uniqueName] + "')";
        }
        return super.toString();
      }
    }
    (MultiToken.new = function(uniqueName = "") {
      MultiToken.__proto__.new.call(this, uniqueName);
      ;
    }).prototype = MultiToken.prototype;
    dart.addTypeTests(MultiToken);
    MultiToken.prototype[_is_MultiToken_default] = true;
    dart.addTypeCaches(MultiToken);
    dart.setMethodSignature(MultiToken, () => ({
      __proto__: dart.getMethods(MultiToken.__proto__),
      [_listOf]: dart.fnType(core.List$(T), [])
    }));
    dart.setLibraryUri(MultiToken, I[0]);
    dart.defineExtensionMethods(MultiToken, ['toString']);
    return MultiToken;
  });
  di_tokens.MultiToken = di_tokens.MultiToken$();
  dart.addTypeTests(di_tokens.MultiToken, _is_MultiToken_default);
  di_tokens.listOfMultiToken = function listOfMultiToken(token) {
    return token[_listOf]();
  };
  unsafe_cast.unsafeCast = function unsafeCast(T, any) {
    return T.as(any);
  };
  is_primitive['IsPrimitive|get#isPrimitive'] = function IsPrimitive$124get$35isPrimitive($this) {
    return typeof $this == 'number' || typeof $this == 'boolean' || $this == null || typeof $this == 'string';
  };
  dart.copyProperties(is_dev_mode, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!(enabled = true)) dart.assertFailed(null, I[1], 6, 10, "enabled = true");
      return enabled;
    },
    get isDevMode() {
      return is_dev_mode._assertionsEnabled;
    }
  });
  var include$ = dart.privateName(di_modules, "Module.include");
  var provide$ = dart.privateName(di_modules, "Module.provide");
  di_modules.Module = class Module extends core.Object {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    get provide() {
      return this[provide$];
    }
    set provide(value) {
      super.provide = value;
    }
  };
  (di_modules.Module.__ = function(opts) {
    let include = opts && 'include' in opts ? opts.include : C[0] || CT.C0;
    let provide = opts && 'provide' in opts ? opts.provide : C[1] || CT.C1;
    this[include$] = include;
    this[provide$] = provide;
    ;
  }).prototype = di_modules.Module.prototype;
  dart.addTypeTests(di_modules.Module);
  dart.addTypeCaches(di_modules.Module);
  dart.setLibraryUri(di_modules.Module, I[2]);
  dart.setFieldSignature(di_modules.Module, () => ({
    __proto__: dart.getFields(di_modules.Module.__proto__),
    include: dart.finalFieldType(core.List$(di_modules.Module)),
    provide: dart.finalFieldType(core.List$(di_providers.Provider$(core.Object)))
  }));
  di_modules.internalModuleToList = function internalModuleToList(module) {
    return (() => {
      let t1 = T.JSArrayOfProviderOfObject().of([]);
      for (let includedModule of module.include)
        t1[$addAll](di_modules.internalModuleToList(includedModule));
      t1[$addAll](module.provide);
      return t1;
    })();
  };
  meta._VisibleForTemplate = class _VisibleForTemplate extends core.Object {};
  (meta._VisibleForTemplate.new = function() {
    ;
  }).prototype = meta._VisibleForTemplate.prototype;
  dart.addTypeTests(meta._VisibleForTemplate);
  dart.addTypeCaches(meta._VisibleForTemplate);
  dart.setLibraryUri(meta._VisibleForTemplate, I[3]);
  dart.defineLazy(meta, {
    /*meta.visibleForTemplate*/get visibleForTemplate() {
      return C[2] || CT.C2;
    }
  }, false);
  var _name$ = dart.privateName(visibility, "_name");
  visibility.Visibility = class Visibility extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (visibility.Visibility.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = visibility.Visibility.prototype;
  dart.addTypeTests(visibility.Visibility);
  dart.addTypeCaches(visibility.Visibility);
  visibility.Visibility[dart.implements] = () => [core.Enum];
  dart.setLibraryUri(visibility.Visibility, I[4]);
  dart.setFieldSignature(visibility.Visibility, () => ({
    __proto__: dart.getFields(visibility.Visibility.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(visibility.Visibility, ['toString']);
  visibility.Visibility.local = C[3] || CT.C3;
  visibility.Visibility.all = C[4] || CT.C4;
  visibility.Visibility.values = C[5] || CT.C5;
  var _name$0 = dart.privateName(view, "_name");
  view.ViewEncapsulation = class ViewEncapsulation extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (view.ViewEncapsulation.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = view.ViewEncapsulation.prototype;
  dart.addTypeTests(view.ViewEncapsulation);
  dart.addTypeCaches(view.ViewEncapsulation);
  view.ViewEncapsulation[dart.implements] = () => [core.Enum];
  dart.setLibraryUri(view.ViewEncapsulation, I[5]);
  dart.setFieldSignature(view.ViewEncapsulation, () => ({
    __proto__: dart.getFields(view.ViewEncapsulation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(view.ViewEncapsulation, ['toString']);
  view.ViewEncapsulation.Emulated = C[6] || CT.C6;
  view.ViewEncapsulation.None = C[7] || CT.C7;
  view.ViewEncapsulation.values = C[8] || CT.C8;
  var on$ = dart.privateName(typed, "Typed.on");
  var typeArguments$ = dart.privateName(typed, "Typed.typeArguments");
  const _is_Typed_default = Symbol('_is_Typed_default');
  typed.Typed$ = dart.generic(T => {
    class Typed extends core.Object {
      get on() {
        return this[on$];
      }
      set on(value) {
        super.on = value;
      }
      get typeArguments() {
        return this[typeArguments$];
      }
      set typeArguments(value) {
        super.typeArguments = value;
      }
    }
    (Typed.new = function(opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[on$] = on;
      this[typeArguments$] = null;
      ;
    }).prototype = Typed.prototype;
    (Typed.of = function(typeArguments, opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[on$] = on;
      this[typeArguments$] = typeArguments;
      ;
    }).prototype = Typed.prototype;
    dart.addTypeTests(Typed);
    Typed.prototype[_is_Typed_default] = true;
    dart.addTypeCaches(Typed);
    dart.setLibraryUri(Typed, I[6]);
    dart.setFieldSignature(Typed, () => ({
      __proto__: dart.getFields(Typed.__proto__),
      on: dart.finalFieldType(dart.nullable(core.String)),
      typeArguments: dart.finalFieldType(dart.nullable(core.List$(core.Object)))
    }));
    return Typed;
  });
  typed.Typed = typed.Typed$();
  dart.addTypeTests(typed.Typed, _is_Typed_default);
  lifecycle_hooks.AfterChanges = class AfterChanges extends core.Object {};
  (lifecycle_hooks.AfterChanges.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterChanges.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterChanges);
  dart.addTypeCaches(lifecycle_hooks.AfterChanges);
  dart.setLibraryUri(lifecycle_hooks.AfterChanges, I[7]);
  lifecycle_hooks.OnInit = class OnInit extends core.Object {};
  (lifecycle_hooks.OnInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.OnInit.prototype;
  dart.addTypeTests(lifecycle_hooks.OnInit);
  dart.addTypeCaches(lifecycle_hooks.OnInit);
  dart.setLibraryUri(lifecycle_hooks.OnInit, I[7]);
  lifecycle_hooks.OnDestroy = class OnDestroy extends core.Object {};
  (lifecycle_hooks.OnDestroy.new = function() {
    ;
  }).prototype = lifecycle_hooks.OnDestroy.prototype;
  dart.addTypeTests(lifecycle_hooks.OnDestroy);
  dart.addTypeCaches(lifecycle_hooks.OnDestroy);
  dart.setLibraryUri(lifecycle_hooks.OnDestroy, I[7]);
  lifecycle_hooks.DoCheck = class DoCheck extends core.Object {};
  (lifecycle_hooks.DoCheck.new = function() {
    ;
  }).prototype = lifecycle_hooks.DoCheck.prototype;
  dart.addTypeTests(lifecycle_hooks.DoCheck);
  dart.addTypeCaches(lifecycle_hooks.DoCheck);
  dart.setLibraryUri(lifecycle_hooks.DoCheck, I[7]);
  lifecycle_hooks.AfterContentInit = class AfterContentInit extends core.Object {};
  (lifecycle_hooks.AfterContentInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterContentInit.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterContentInit);
  dart.addTypeCaches(lifecycle_hooks.AfterContentInit);
  dart.setLibraryUri(lifecycle_hooks.AfterContentInit, I[7]);
  lifecycle_hooks.AfterContentChecked = class AfterContentChecked extends core.Object {};
  (lifecycle_hooks.AfterContentChecked.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterContentChecked.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterContentChecked);
  dart.addTypeCaches(lifecycle_hooks.AfterContentChecked);
  dart.setLibraryUri(lifecycle_hooks.AfterContentChecked, I[7]);
  lifecycle_hooks.AfterViewInit = class AfterViewInit extends core.Object {};
  (lifecycle_hooks.AfterViewInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterViewInit.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterViewInit);
  dart.addTypeCaches(lifecycle_hooks.AfterViewInit);
  dart.setLibraryUri(lifecycle_hooks.AfterViewInit, I[7]);
  lifecycle_hooks.AfterViewChecked = class AfterViewChecked extends core.Object {};
  (lifecycle_hooks.AfterViewChecked.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterViewChecked.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterViewChecked);
  dart.addTypeCaches(lifecycle_hooks.AfterViewChecked);
  dart.setLibraryUri(lifecycle_hooks.AfterViewChecked, I[7]);
  var selector$ = dart.privateName(directives$, "Directive.selector");
  var providers$ = dart.privateName(directives$, "Directive.providers");
  var exportAs$ = dart.privateName(directives$, "Directive.exportAs");
  var visibility$ = dart.privateName(directives$, "Directive.visibility");
  directives$.Directive = class Directive extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      super.selector = value;
    }
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get exportAs() {
      return this[exportAs$];
    }
    set exportAs(value) {
      super.exportAs = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
  };
  (directives$.Directive.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let providers = opts && 'providers' in opts ? opts.providers : C[9] || CT.C9;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C[3] || CT.C3;
    this[selector$] = selector;
    this[providers$] = providers;
    this[exportAs$] = exportAs;
    this[visibility$] = visibility;
    ;
  }).prototype = directives$.Directive.prototype;
  dart.addTypeTests(directives$.Directive);
  dart.addTypeCaches(directives$.Directive);
  dart.setLibraryUri(directives$.Directive, I[8]);
  dart.setFieldSignature(directives$.Directive, () => ({
    __proto__: dart.getFields(directives$.Directive.__proto__),
    selector: dart.finalFieldType(core.String),
    providers: dart.finalFieldType(core.List$(core.Object)),
    exportAs: dart.finalFieldType(dart.nullable(core.String)),
    visibility: dart.finalFieldType(visibility.Visibility)
  }));
  var changeDetection$ = dart.privateName(directives$, "Component.changeDetection");
  var viewProviders$ = dart.privateName(directives$, "Component.viewProviders");
  var exports$ = dart.privateName(directives$, "Component.exports");
  var templateUrl$ = dart.privateName(directives$, "Component.templateUrl");
  var template$ = dart.privateName(directives$, "Component.template");
  var preserveWhitespace$ = dart.privateName(directives$, "Component.preserveWhitespace");
  var styleUrls$ = dart.privateName(directives$, "Component.styleUrls");
  var styles$ = dart.privateName(directives$, "Component.styles");
  var directives$0 = dart.privateName(directives$, "Component.directives");
  var directiveTypes$ = dart.privateName(directives$, "Component.directiveTypes");
  var pipes$ = dart.privateName(directives$, "Component.pipes");
  var encapsulation$ = dart.privateName(directives$, "Component.encapsulation");
  directives$.Component = class Component extends directives$.Directive {
    get changeDetection() {
      return this[changeDetection$];
    }
    set changeDetection(value) {
      super.changeDetection = value;
    }
    get viewProviders() {
      return this[viewProviders$];
    }
    set viewProviders(value) {
      super.viewProviders = value;
    }
    get exports() {
      return this[exports$];
    }
    set exports(value) {
      super.exports = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get styleUrls() {
      return this[styleUrls$];
    }
    set styleUrls(value) {
      super.styleUrls = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get directives() {
      return this[directives$0];
    }
    set directives(value) {
      super.directives = value;
    }
    get directiveTypes() {
      return this[directiveTypes$];
    }
    set directiveTypes(value) {
      super.directiveTypes = value;
    }
    get pipes() {
      return this[pipes$];
    }
    set pipes(value) {
      super.pipes = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
  };
  (directives$.Component.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let providers = opts && 'providers' in opts ? opts.providers : C[9] || CT.C9;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C[3] || CT.C3;
    let viewProviders = opts && 'viewProviders' in opts ? opts.viewProviders : C[9] || CT.C9;
    let exports = opts && 'exports' in opts ? opts.exports : C[10] || CT.C10;
    let changeDetection = opts && 'changeDetection' in opts ? opts.changeDetection : 0;
    let templateUrl = opts && 'templateUrl' in opts ? opts.templateUrl : null;
    let template = opts && 'template' in opts ? opts.template : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : false;
    let styleUrls = opts && 'styleUrls' in opts ? opts.styleUrls : C[11] || CT.C11;
    let styles = opts && 'styles' in opts ? opts.styles : C[11] || CT.C11;
    let directives = opts && 'directives' in opts ? opts.directives : C[9] || CT.C9;
    let directiveTypes = opts && 'directiveTypes' in opts ? opts.directiveTypes : C[12] || CT.C12;
    let pipes = opts && 'pipes' in opts ? opts.pipes : C[9] || CT.C9;
    let encapsulation = opts && 'encapsulation' in opts ? opts.encapsulation : C[6] || CT.C6;
    this[viewProviders$] = viewProviders;
    this[exports$] = exports;
    this[changeDetection$] = changeDetection;
    this[templateUrl$] = templateUrl;
    this[template$] = template;
    this[preserveWhitespace$] = preserveWhitespace;
    this[styleUrls$] = styleUrls;
    this[styles$] = styles;
    this[directives$0] = directives;
    this[directiveTypes$] = directiveTypes;
    this[pipes$] = pipes;
    this[encapsulation$] = encapsulation;
    directives$.Component.__proto__.new.call(this, {selector: selector, exportAs: exportAs, providers: providers, visibility: visibility});
    ;
  }).prototype = directives$.Component.prototype;
  dart.addTypeTests(directives$.Component);
  dart.addTypeCaches(directives$.Component);
  dart.setLibraryUri(directives$.Component, I[8]);
  dart.setFieldSignature(directives$.Component, () => ({
    __proto__: dart.getFields(directives$.Component.__proto__),
    changeDetection: dart.finalFieldType(core.int),
    viewProviders: dart.finalFieldType(core.List$(core.Object)),
    exports: dart.finalFieldType(core.List$(dart.nullable(core.Object))),
    templateUrl: dart.finalFieldType(dart.nullable(core.String)),
    template: dart.finalFieldType(dart.nullable(core.String)),
    preserveWhitespace: dart.finalFieldType(core.bool),
    styleUrls: dart.finalFieldType(core.List$(core.String)),
    styles: dart.finalFieldType(core.List$(core.String)),
    directives: dart.finalFieldType(core.List$(core.Object)),
    directiveTypes: dart.finalFieldType(core.List$(typed.Typed$(core.Object))),
    pipes: dart.finalFieldType(core.List$(core.Object)),
    encapsulation: dart.finalFieldType(view.ViewEncapsulation)
  }));
  var name$ = dart.privateName(directives$, "Pipe.name");
  var pure$ = dart.privateName(directives$, "Pipe.pure");
  directives$.Pipe = class Pipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get pure() {
      return this[pure$];
    }
    set pure(value) {
      super.pure = value;
    }
  };
  (directives$.Pipe.new = function(name, opts) {
    let pure = opts && 'pure' in opts ? opts.pure : true;
    this[name$] = name;
    this[pure$] = pure;
    ;
  }).prototype = directives$.Pipe.prototype;
  dart.addTypeTests(directives$.Pipe);
  dart.addTypeCaches(directives$.Pipe);
  dart.setLibraryUri(directives$.Pipe, I[8]);
  dart.setFieldSignature(directives$.Pipe, () => ({
    __proto__: dart.getFields(directives$.Pipe.__proto__),
    name: dart.finalFieldType(core.String),
    pure: dart.finalFieldType(core.bool)
  }));
  var attributeName$ = dart.privateName(directives$, "Attribute.attributeName");
  directives$.Attribute = class Attribute extends core.Object {
    get attributeName() {
      return this[attributeName$];
    }
    set attributeName(value) {
      super.attributeName = value;
    }
  };
  (directives$.Attribute.new = function(attributeName) {
    this[attributeName$] = attributeName;
    ;
  }).prototype = directives$.Attribute.prototype;
  dart.addTypeTests(directives$.Attribute);
  dart.addTypeCaches(directives$.Attribute);
  dart.setLibraryUri(directives$.Attribute, I[8]);
  dart.setFieldSignature(directives$.Attribute, () => ({
    __proto__: dart.getFields(directives$.Attribute.__proto__),
    attributeName: dart.finalFieldType(core.String)
  }));
  var selector$0 = dart.privateName(directives$, "_Query.selector");
  var descendants$ = dart.privateName(directives$, "_Query.descendants");
  var first$ = dart.privateName(directives$, "_Query.first");
  var read$ = dart.privateName(directives$, "_Query.read");
  directives$._Query = class _Query extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      super.selector = value;
    }
    get descendants() {
      return this[descendants$];
    }
    set descendants(value) {
      super.descendants = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get read() {
      return this[read$];
    }
    set read(value) {
      super.read = value;
    }
  };
  (directives$._Query.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    this[selector$0] = selector;
    this[descendants$] = descendants;
    this[first$] = first;
    this[read$] = read;
    ;
  }).prototype = directives$._Query.prototype;
  dart.addTypeTests(directives$._Query);
  dart.addTypeCaches(directives$._Query);
  dart.setLibraryUri(directives$._Query, I[8]);
  dart.setFieldSignature(directives$._Query, () => ({
    __proto__: dart.getFields(directives$._Query.__proto__),
    selector: dart.finalFieldType(core.Object),
    descendants: dart.finalFieldType(core.bool),
    first: dart.finalFieldType(core.bool),
    read: dart.finalFieldType(dart.nullable(core.Object))
  }));
  directives$.ContentChildren = class ContentChildren extends directives$._Query {};
  (directives$.ContentChildren.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : true;
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ContentChildren.__proto__.new.call(this, selector, {descendants: descendants, read: read});
    ;
  }).prototype = directives$.ContentChildren.prototype;
  dart.addTypeTests(directives$.ContentChildren);
  dart.addTypeCaches(directives$.ContentChildren);
  dart.setLibraryUri(directives$.ContentChildren, I[8]);
  directives$.ContentChild = class ContentChild extends directives$._Query {};
  (directives$.ContentChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ContentChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = directives$.ContentChild.prototype;
  dart.addTypeTests(directives$.ContentChild);
  dart.addTypeCaches(directives$.ContentChild);
  dart.setLibraryUri(directives$.ContentChild, I[8]);
  directives$._ViewQuery = class _ViewQuery extends directives$._Query {};
  (directives$._ViewQuery.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    directives$._ViewQuery.__proto__.new.call(this, selector, {descendants: descendants, first: first, read: read});
    ;
  }).prototype = directives$._ViewQuery.prototype;
  dart.addTypeTests(directives$._ViewQuery);
  dart.addTypeCaches(directives$._ViewQuery);
  dart.setLibraryUri(directives$._ViewQuery, I[8]);
  directives$.ViewChildren = class ViewChildren extends directives$._ViewQuery {};
  (directives$.ViewChildren.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ViewChildren.__proto__.new.call(this, selector, {descendants: true, read: read});
    ;
  }).prototype = directives$.ViewChildren.prototype;
  dart.addTypeTests(directives$.ViewChildren);
  dart.addTypeCaches(directives$.ViewChildren);
  dart.setLibraryUri(directives$.ViewChildren, I[8]);
  directives$.ViewChild = class ViewChild extends directives$._ViewQuery {};
  (directives$.ViewChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    directives$.ViewChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = directives$.ViewChild.prototype;
  dart.addTypeTests(directives$.ViewChild);
  dart.addTypeCaches(directives$.ViewChild);
  dart.setLibraryUri(directives$.ViewChild, I[8]);
  var bindingPropertyName$ = dart.privateName(directives$, "Input.bindingPropertyName");
  directives$.Input = class Input extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (directives$.Input.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$] = bindingPropertyName;
    ;
  }).prototype = directives$.Input.prototype;
  dart.addTypeTests(directives$.Input);
  dart.addTypeCaches(directives$.Input);
  dart.setLibraryUri(directives$.Input, I[8]);
  dart.setFieldSignature(directives$.Input, () => ({
    __proto__: dart.getFields(directives$.Input.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.nullable(core.String))
  }));
  var bindingPropertyName$0 = dart.privateName(directives$, "Output.bindingPropertyName");
  directives$.Output = class Output extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$0];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (directives$.Output.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$0] = bindingPropertyName;
    ;
  }).prototype = directives$.Output.prototype;
  dart.addTypeTests(directives$.Output);
  dart.addTypeCaches(directives$.Output);
  dart.setLibraryUri(directives$.Output, I[8]);
  dart.setFieldSignature(directives$.Output, () => ({
    __proto__: dart.getFields(directives$.Output.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.nullable(core.String))
  }));
  var hostPropertyName$ = dart.privateName(directives$, "HostBinding.hostPropertyName");
  directives$.HostBinding = class HostBinding extends core.Object {
    get hostPropertyName() {
      return this[hostPropertyName$];
    }
    set hostPropertyName(value) {
      super.hostPropertyName = value;
    }
  };
  (directives$.HostBinding.new = function(hostPropertyName = null) {
    this[hostPropertyName$] = hostPropertyName;
    ;
  }).prototype = directives$.HostBinding.prototype;
  dart.addTypeTests(directives$.HostBinding);
  dart.addTypeCaches(directives$.HostBinding);
  dart.setLibraryUri(directives$.HostBinding, I[8]);
  dart.setFieldSignature(directives$.HostBinding, () => ({
    __proto__: dart.getFields(directives$.HostBinding.__proto__),
    hostPropertyName: dart.finalFieldType(dart.nullable(core.String))
  }));
  var eventName$ = dart.privateName(directives$, "HostListener.eventName");
  var args$ = dart.privateName(directives$, "HostListener.args");
  directives$.HostListener = class HostListener extends core.Object {
    get eventName() {
      return this[eventName$];
    }
    set eventName(value) {
      super.eventName = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
  };
  (directives$.HostListener.new = function(eventName, args = null) {
    this[eventName$] = eventName;
    this[args$] = args;
    ;
  }).prototype = directives$.HostListener.prototype;
  dart.addTypeTests(directives$.HostListener);
  dart.addTypeCaches(directives$.HostListener);
  dart.setLibraryUri(directives$.HostListener, I[8]);
  dart.setFieldSignature(directives$.HostListener, () => ({
    __proto__: dart.getFields(directives$.HostListener.__proto__),
    eventName: dart.finalFieldType(core.String),
    args: dart.finalFieldType(dart.nullable(core.List$(core.String)))
  }));
  change_detection_constants.ChangeDetectorState = class ChangeDetectorState extends core.Object {};
  (change_detection_constants.ChangeDetectorState.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectorState.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectorState);
  dart.addTypeCaches(change_detection_constants.ChangeDetectorState);
  dart.setLibraryUri(change_detection_constants.ChangeDetectorState, I[9]);
  dart.defineLazy(change_detection_constants.ChangeDetectorState, {
    /*change_detection_constants.ChangeDetectorState.NeverChecked*/get NeverChecked() {
      return 0;
    },
    /*change_detection_constants.ChangeDetectorState.CheckedBefore*/get CheckedBefore() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectorState.Errored*/get Errored() {
      return 2;
    }
  }, false);
  change_detection_constants.ChangeDetectionStrategy = class ChangeDetectionStrategy extends core.Object {
    static toPrettyString(strategy) {
      switch (strategy) {
        case 0:
        {
          return "Default";
        }
        case 5:
        {
          return "OnPush";
        }
        default:
        {
          return "Internal";
        }
      }
    }
  };
  (change_detection_constants.ChangeDetectionStrategy.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectionStrategy.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectionStrategy);
  dart.addTypeCaches(change_detection_constants.ChangeDetectionStrategy);
  dart.setLibraryUri(change_detection_constants.ChangeDetectionStrategy, I[9]);
  dart.defineLazy(change_detection_constants.ChangeDetectionStrategy, {
    /*change_detection_constants.ChangeDetectionStrategy.Default*/get Default() {
      return 0;
    },
    /*change_detection_constants.ChangeDetectionStrategy.CheckOnce*/get CheckOnce() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectionStrategy.Checked*/get Checked() {
      return 2;
    },
    /*change_detection_constants.ChangeDetectionStrategy.CheckAlways*/get CheckAlways() {
      return 3;
    },
    /*change_detection_constants.ChangeDetectionStrategy.Detached*/get Detached() {
      return 4;
    },
    /*change_detection_constants.ChangeDetectionStrategy.OnPush*/get OnPush() {
      return 5;
    }
  }, false);
  change_detection_constants.ChangeDetectionCheckedState = class ChangeDetectionCheckedState extends core.Object {};
  (change_detection_constants.ChangeDetectionCheckedState.new = function() {
    ;
  }).prototype = change_detection_constants.ChangeDetectionCheckedState.prototype;
  dart.addTypeTests(change_detection_constants.ChangeDetectionCheckedState);
  dart.addTypeCaches(change_detection_constants.ChangeDetectionCheckedState);
  dart.setLibraryUri(change_detection_constants.ChangeDetectionCheckedState, I[9]);
  dart.defineLazy(change_detection_constants.ChangeDetectionCheckedState, {
    /*change_detection_constants.ChangeDetectionCheckedState.checkOnce*/get checkOnce() {
      return 1;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.waitingForMarkForCheck*/get waitingForMarkForCheck() {
      return 2;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.checkAlways*/get checkAlways() {
      return 3;
    },
    /*change_detection_constants.ChangeDetectionCheckedState.waitingToBeAttached*/get waitingToBeAttached() {
      return 4;
    }
  }, false);
  di_providers.RuntimeInjectorBuilder = class RuntimeInjectorBuilder extends core.Object {};
  (di_providers.RuntimeInjectorBuilder.new = function() {
    ;
  }).prototype = di_providers.RuntimeInjectorBuilder.prototype;
  dart.addTypeTests(di_providers.RuntimeInjectorBuilder);
  dart.addTypeCaches(di_providers.RuntimeInjectorBuilder);
  dart.setLibraryUri(di_providers.RuntimeInjectorBuilder, I[10]);
  var token$ = dart.privateName(di_providers, "Provider.token");
  var useClass$ = dart.privateName(di_providers, "Provider.useClass");
  var useValue$ = dart.privateName(di_providers, "Provider.useValue");
  var useExisting$ = dart.privateName(di_providers, "Provider.useExisting");
  var useFactory$ = dart.privateName(di_providers, "Provider.useFactory");
  var deps$ = dart.privateName(di_providers, "Provider.deps");
  var _buildAtRuntime = dart.privateName(di_providers, "_buildAtRuntime");
  const _is_Provider_default = Symbol('_is_Provider_default');
  di_providers.Provider$ = dart.generic(T => {
    class Provider extends core.Object {
      get token() {
        return this[token$];
      }
      set token(value) {
        super.token = value;
      }
      get useClass() {
        return this[useClass$];
      }
      set useClass(value) {
        super.useClass = value;
      }
      get useValue() {
        return this[useValue$];
      }
      set useValue(value) {
        super.useValue = value;
      }
      get useExisting() {
        return this[useExisting$];
      }
      set useExisting(value) {
        super.useExisting = value;
      }
      get useFactory() {
        return this[useFactory$];
      }
      set useFactory(value) {
        super.useFactory = value;
      }
      get deps() {
        return this[deps$];
      }
      set deps(value) {
        super.deps = value;
      }
      [_buildAtRuntime](builder) {
        let t2;
        if (this.useValue !== "__noValueProvided__") {
          return builder.useValue(this.useValue);
        }
        let useFactory = this.useFactory;
        if (useFactory != null) {
          return builder.useFactory(useFactory, {deps: this.deps});
        }
        let useExisting = this.useExisting;
        if (useExisting != null) {
          return builder.useExisting(useExisting);
        }
        return builder.useClass((t2 = this.useClass, t2 == null ? unsafe_cast.unsafeCast(core.Type, this.token) : t2), {deps: this.deps});
      }
    }
    (Provider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
      let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
      let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      this[token$] = token;
      this[useClass$] = useClass;
      this[useValue$] = useValue;
      this[useExisting$] = useExisting;
      this[useFactory$] = useFactory;
      this[deps$] = deps;
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_buildAtRuntime]: dart.fnType(core.Object, [di_providers.RuntimeInjectorBuilder])
    }));
    dart.setLibraryUri(Provider, I[10]);
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      token: dart.finalFieldType(core.Object),
      useClass: dart.finalFieldType(dart.nullable(core.Type)),
      useValue: dart.finalFieldType(core.Object),
      useExisting: dart.finalFieldType(dart.nullable(core.Object)),
      useFactory: dart.finalFieldType(dart.nullable(core.Function)),
      deps: dart.finalFieldType(dart.nullable(core.List$(core.Object)))
    }));
    return Provider;
  });
  di_providers.Provider = di_providers.Provider$();
  dart.addTypeTests(di_providers.Provider, _is_Provider_default);
  const _is_ClassProvider_default = Symbol('_is_ClassProvider_default');
  di_providers.ClassProvider$ = dart.generic(T => {
    class ClassProvider extends di_providers.Provider$(T) {}
    (ClassProvider.__ = function(token, opts) {
      let t2;
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      ClassProvider.__proto__.__.call(this, token, {useClass: (t2 = useClass, t2 == null ? core.Type.as(token) : t2)});
      ;
    }).prototype = ClassProvider.prototype;
    dart.addTypeTests(ClassProvider);
    ClassProvider.prototype[_is_ClassProvider_default] = true;
    dart.addTypeCaches(ClassProvider);
    dart.setLibraryUri(ClassProvider, I[10]);
    return ClassProvider;
  });
  di_providers.ClassProvider = di_providers.ClassProvider$();
  dart.addTypeTests(di_providers.ClassProvider, _is_ClassProvider_default);
  const _is_ExistingProvider_default = Symbol('_is_ExistingProvider_default');
  di_providers.ExistingProvider$ = dart.generic(T => {
    class ExistingProvider extends di_providers.Provider$(T) {}
    (ExistingProvider.__ = function(token, useExisting) {
      ExistingProvider.__proto__.__.call(this, token, {useExisting: useExisting});
      ;
    }).prototype = ExistingProvider.prototype;
    dart.addTypeTests(ExistingProvider);
    ExistingProvider.prototype[_is_ExistingProvider_default] = true;
    dart.addTypeCaches(ExistingProvider);
    dart.setLibraryUri(ExistingProvider, I[10]);
    return ExistingProvider;
  });
  di_providers.ExistingProvider = di_providers.ExistingProvider$();
  dart.addTypeTests(di_providers.ExistingProvider, _is_ExistingProvider_default);
  const _is_FactoryProvider_default = Symbol('_is_FactoryProvider_default');
  di_providers.FactoryProvider$ = dart.generic(T => {
    class FactoryProvider extends di_providers.Provider$(T) {}
    (FactoryProvider.__ = function(token, useFactory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      FactoryProvider.__proto__.__.call(this, token, {useFactory: useFactory, deps: deps});
      ;
    }).prototype = FactoryProvider.prototype;
    dart.addTypeTests(FactoryProvider);
    FactoryProvider.prototype[_is_FactoryProvider_default] = true;
    dart.addTypeCaches(FactoryProvider);
    dart.setLibraryUri(FactoryProvider, I[10]);
    return FactoryProvider;
  });
  di_providers.FactoryProvider = di_providers.FactoryProvider$();
  dart.addTypeTests(di_providers.FactoryProvider, _is_FactoryProvider_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  di_providers.ValueProvider$ = dart.generic(T => {
    class ValueProvider extends di_providers.Provider$(T) {}
    (ValueProvider.__ = function(token, useValue) {
      ValueProvider.__proto__.__.call(this, token, {useValue: useValue});
      ;
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    dart.addTypeCaches(ValueProvider);
    dart.setLibraryUri(ValueProvider, I[10]);
    return ValueProvider;
  });
  di_providers.ValueProvider = di_providers.ValueProvider$();
  dart.addTypeTests(di_providers.ValueProvider, _is_ValueProvider_default);
  di_providers.provide = function provide(T, token, opts) {
    let useClass = opts && 'useClass' in opts ? opts.useClass : null;
    let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
    let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
    let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
    let deps = opts && 'deps' in opts ? opts.deps : null;
    return new (di_providers.Provider$(T)).__(token, {useClass: useClass, useValue: useValue, useExisting: useExisting, useFactory: useFactory, deps: deps});
  };
  di_providers.buildAtRuntime = function buildAtRuntime(provider, builder) {
    return provider[_buildAtRuntime](builder);
  };
  dart.defineLazy(di_providers, {
    /*di_providers.noValueProvided*/get noValueProvided() {
      return "__noValueProvided__";
    }
  }, false);
  var _providersOrModules$ = dart.privateName(di_generate_injector, "GenerateInjector._providersOrModules");
  var _providersOrModules = dart.privateName(di_generate_injector, "_providersOrModules");
  di_generate_injector.GenerateInjector = class GenerateInjector extends core.Object {
    get [_providersOrModules]() {
      return this[_providersOrModules$];
    }
    set [_providersOrModules](value) {
      super[_providersOrModules] = value;
    }
  };
  (di_generate_injector.GenerateInjector.new = function(_providersOrModules) {
    this[_providersOrModules$] = _providersOrModules;
    ;
  }).prototype = di_generate_injector.GenerateInjector.prototype;
  dart.addTypeTests(di_generate_injector.GenerateInjector);
  dart.addTypeCaches(di_generate_injector.GenerateInjector);
  dart.setLibraryUri(di_generate_injector.GenerateInjector, I[11]);
  dart.setFieldSignature(di_generate_injector.GenerateInjector, () => ({
    __proto__: dart.getFields(di_generate_injector.GenerateInjector.__proto__),
    [_providersOrModules]: dart.finalFieldType(core.List$(core.Object))
  }));
  var token$0 = dart.privateName(di_arguments, "Inject.token");
  di_arguments.Inject = class Inject extends core.Object {
    get token() {
      return this[token$0];
    }
    set token(value) {
      super.token = value;
    }
    toString() {
      return "@Inject(" + dart.str(this.token) + ")";
    }
  };
  (di_arguments.Inject.new = function(token) {
    this[token$0] = token;
    ;
  }).prototype = di_arguments.Inject.prototype;
  dart.addTypeTests(di_arguments.Inject);
  dart.addTypeCaches(di_arguments.Inject);
  dart.setLibraryUri(di_arguments.Inject, I[12]);
  dart.setFieldSignature(di_arguments.Inject, () => ({
    __proto__: dart.getFields(di_arguments.Inject.__proto__),
    token: dart.finalFieldType(core.Object)
  }));
  dart.defineExtensionMethods(di_arguments.Inject, ['toString']);
  di_arguments.Injectable = class Injectable extends core.Object {};
  (di_arguments.Injectable.new = function() {
    ;
  }).prototype = di_arguments.Injectable.prototype;
  dart.addTypeTests(di_arguments.Injectable);
  dart.addTypeCaches(di_arguments.Injectable);
  dart.setLibraryUri(di_arguments.Injectable, I[12]);
  di_arguments.Optional = class Optional extends core.Object {};
  (di_arguments.Optional.new = function() {
    ;
  }).prototype = di_arguments.Optional.prototype;
  dart.addTypeTests(di_arguments.Optional);
  dart.addTypeCaches(di_arguments.Optional);
  dart.setLibraryUri(di_arguments.Optional, I[12]);
  di_arguments.Self = class Self extends core.Object {};
  (di_arguments.Self.new = function() {
    ;
  }).prototype = di_arguments.Self.prototype;
  dart.addTypeTests(di_arguments.Self);
  dart.addTypeCaches(di_arguments.Self);
  dart.setLibraryUri(di_arguments.Self, I[12]);
  di_arguments.SkipSelf = class SkipSelf extends core.Object {};
  (di_arguments.SkipSelf.new = function() {
    ;
  }).prototype = di_arguments.SkipSelf.prototype;
  dart.addTypeTests(di_arguments.SkipSelf);
  dart.addTypeCaches(di_arguments.SkipSelf);
  dart.setLibraryUri(di_arguments.SkipSelf, I[12]);
  di_arguments.Host = class Host extends core.Object {};
  (di_arguments.Host.new = function() {
    ;
  }).prototype = di_arguments.Host.prototype;
  dart.addTypeTests(di_arguments.Host);
  dart.addTypeCaches(di_arguments.Host);
  dart.setLibraryUri(di_arguments.Host, I[12]);
  change_detection_link._ChangeDetectionLink = class _ChangeDetectionLink extends core.Object {};
  (change_detection_link._ChangeDetectionLink.new = function() {
    ;
  }).prototype = change_detection_link._ChangeDetectionLink.prototype;
  dart.addTypeTests(change_detection_link._ChangeDetectionLink);
  dart.addTypeCaches(change_detection_link._ChangeDetectionLink);
  dart.setLibraryUri(change_detection_link._ChangeDetectionLink, I[13]);
  dart.defineLazy(change_detection_link, {
    /*change_detection_link.changeDetectionLink*/get changeDetectionLink() {
      return C[13] || CT.C13;
    }
  }, false);
  injector.Injector = class Injector extends core.Object {
    provideUntyped(T, token, orElse = C[14] || CT.C14) {
      errors.debugInjectorEnter(token);
      let result = this.injectFromSelfOptional(token, orElse);
      if (core.identical(result, orElse)) {
        result = this.injectFromAncestryOptional(token, orElse);
      }
      errors.debugInjectorLeave(token);
      return unsafe_cast.unsafeCast(T, result);
    }
    injectFromSelf(T, token) {
      let result = this.injectFromSelfOptional(token);
      if (result === injector.throwIfNotFound) {
        dart.throw(errors.noProviderError(token));
      }
      return unsafe_cast.unsafeCast(T, result);
    }
    injectFromParent(T, token) {
      let result = this.injectFromParentOptional(token);
      if (result === injector.throwIfNotFound) {
        dart.throw(errors.noProviderError(token));
      }
      return unsafe_cast.unsafeCast(T, result);
    }
    injectFromAncestry(T, token) {
      let result = this.injectFromAncestryOptional(token);
      if (result === injector.throwIfNotFound) {
        dart.throw(errors.noProviderError(token));
      }
      return unsafe_cast.unsafeCast(T, result);
    }
    get(token, notFoundValue = C[14] || CT.C14) {
      errors.debugInjectorEnter(token);
      let result = this.provideUntyped(dart.dynamic, token, notFoundValue);
      if (result === injector.throwIfNotFound) {
        dart.throw(errors.noProviderError(token));
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    provideType(T, token) {
      if (!!dart.wrapType(T)._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", I[14], 217, 12, "T != dynamic");
      return unsafe_cast.unsafeCast(T, this.get(token));
    }
    provideTypeOptional(T, token) {
      if (!!dart.wrapType(T)._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", I[14], 232, 12, "T != dynamic");
      return unsafe_cast.unsafeCast(dart.nullable(T), this.get(token, null));
    }
    provideToken(T, token) {
      return unsafe_cast.unsafeCast(T, this.get(token));
    }
    provideTokenOptional(T, token) {
      return unsafe_cast.unsafeCast(dart.nullable(T), this.get(token, null));
    }
  };
  (injector.Injector.new = function() {
    ;
  }).prototype = injector.Injector.prototype;
  dart.addTypeTests(injector.Injector);
  dart.addTypeCaches(injector.Injector);
  dart.setMethodSignature(injector.Injector, () => ({
    __proto__: dart.getMethods(injector.Injector.__proto__),
    provideUntyped: dart.gFnType(T => [T, [core.Object], [dart.nullable(core.Object)]], T => [dart.nullable(core.Object)]),
    injectFromSelf: dart.gFnType(T => [T, [core.Object]], T => [dart.nullable(core.Object)]),
    injectFromParent: dart.gFnType(T => [T, [core.Object]], T => [dart.nullable(core.Object)]),
    injectFromAncestry: dart.gFnType(T => [T, [core.Object]], T => [dart.nullable(core.Object)]),
    get: dart.fnType(dart.dynamic, [core.Object], [dart.nullable(core.Object)]),
    provideType: dart.gFnType(T => [T, [core.Type]], T => [core.Object]),
    provideTypeOptional: dart.gFnType(T => [dart.nullable(T), [core.Type]], T => [core.Object]),
    provideToken: dart.gFnType(T => [T, [di_tokens.OpaqueToken$(T)]], T => [core.Object]),
    provideTokenOptional: dart.gFnType(T => [dart.nullable(T), [di_tokens.OpaqueToken$(T)]], T => [core.Object])
  }));
  dart.setLibraryUri(injector.Injector, I[15]);
  var _parent = dart.privateName(injector, "HierarchicalInjector._parent");
  var _parent$ = dart.privateName(injector, "_parent");
  injector.HierarchicalInjector = class HierarchicalInjector extends injector.Injector {
    get [_parent$]() {
      return this[_parent];
    }
    set [_parent$](value) {
      super[_parent$] = value;
    }
    injectFromAncestryOptional(token, orElse = C[14] || CT.C14) {
      return this[_parent$].provideUntyped(T.ObjectN(), token, orElse);
    }
    injectFromParentOptional(token, orElse = C[14] || CT.C14) {
      return this[_parent$].injectFromSelfOptional(token, orElse);
    }
  };
  (injector.HierarchicalInjector.new = function(parent = null) {
    let t2;
    this[_parent] = (t2 = parent, t2 == null ? C[15] || CT.C15 : t2);
    injector.HierarchicalInjector.__proto__.new.call(this);
    ;
  }).prototype = injector.HierarchicalInjector.prototype;
  dart.addTypeTests(injector.HierarchicalInjector);
  dart.addTypeCaches(injector.HierarchicalInjector);
  dart.setMethodSignature(injector.HierarchicalInjector, () => ({
    __proto__: dart.getMethods(injector.HierarchicalInjector.__proto__),
    injectFromAncestryOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)]),
    injectFromParentOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(injector.HierarchicalInjector, I[15]);
  dart.setFieldSignature(injector.HierarchicalInjector, () => ({
    __proto__: dart.getFields(injector.HierarchicalInjector.__proto__),
    [_parent$]: dart.finalFieldType(injector.Injector)
  }));
  injector._EmptyInjector = class _EmptyInjector extends injector.Injector {
    injectFromSelfOptional(token, orElse = C[14] || CT.C14) {
      return token === dart.wrapType(injector.Injector) ? this : orElse;
    }
    injectFromParentOptional(token, orElse = C[14] || CT.C14) {
      return orElse;
    }
    injectFromAncestryOptional(token, orElse = C[14] || CT.C14) {
      return orElse;
    }
  };
  (injector._EmptyInjector.new = function() {
    injector._EmptyInjector.__proto__.new.call(this);
    ;
  }).prototype = injector._EmptyInjector.prototype;
  dart.addTypeTests(injector._EmptyInjector);
  dart.addTypeCaches(injector._EmptyInjector);
  dart.setMethodSignature(injector._EmptyInjector, () => ({
    __proto__: dart.getMethods(injector._EmptyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)]),
    injectFromParentOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)]),
    injectFromAncestryOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(injector._EmptyInjector, I[15]);
  var _providers = dart.privateName(injector, "_providers");
  injector._MapInjector = class _MapInjector extends injector.HierarchicalInjector {
    injectFromSelfOptional(token, orElse = C[14] || CT.C14) {
      let result = this[_providers][$_get](token);
      if (result == null) {
        if (!!this[_providers][$containsKey](token)) dart.assertFailed("Value for " + dart.str(token) + " should not be null for Injector.map", I[14], 365, 9, "!_providers.containsKey(token)");
        result = token === dart.wrapType(injector.Injector) ? this : orElse;
      }
      return result;
    }
  };
  (injector._MapInjector.new = function(providers, parent = null) {
    let t2;
    this[_providers] = (t2 = new (T.IdentityMapOfObject$Object()).new(), (() => {
      t2[$addAll](providers);
      return t2;
    })());
    injector._MapInjector.__proto__.new.call(this, parent);
    if (!!providers[$containsKey](dart.wrapType(injector.Injector))) dart.assertFailed(null, I[14], 354, 12, "!providers.containsKey(Injector)");
  }).prototype = injector._MapInjector.prototype;
  dart.addTypeTests(injector._MapInjector);
  dart.addTypeCaches(injector._MapInjector);
  injector._MapInjector[dart.implements] = () => [injector.Injector];
  dart.setMethodSignature(injector._MapInjector, () => ({
    __proto__: dart.getMethods(injector._MapInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(injector._MapInjector, I[15]);
  dart.setFieldSignature(injector._MapInjector, () => ({
    __proto__: dart.getFields(injector._MapInjector.__proto__),
    [_providers]: dart.finalFieldType(core.Map$(core.Object, core.Object))
  }));
  injector.throwsNotFound = function throwsNotFound(injector, token) {
    dart.throw(errors.noProviderError(token));
  };
  dart.defineLazy(injector, {
    /*injector.throwIfNotFound*/get throwIfNotFound() {
      return C[14] || CT.C14;
    }
  }, false);
  errors.InjectionError = class InjectionError extends core.AssertionError {};
  (errors.InjectionError.__ = function() {
    errors.InjectionError.__proto__.new.call(this);
    ;
  }).prototype = errors.InjectionError.prototype;
  dart.addTypeTests(errors.InjectionError);
  dart.addTypeCaches(errors.InjectionError);
  dart.setLibraryUri(errors.InjectionError, I[16]);
  var token$1 = dart.privateName(errors, "NoProviderError.token");
  var path = dart.privateName(errors, "NoProviderError.path");
  errors.NoProviderError = class NoProviderError extends errors.InjectionError {
    get token() {
      return this[token$1];
    }
    set token(value) {
      super.token = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    static _withAdjacentDeduped(input, token) {
      if (input == null) {
        return C[9] || CT.C9;
      }
      let output = T.JSArrayOfObject().of([]);
      let lastElement = new core.Object.new();
      for (let element of input) {
        if (lastElement !== element) {
          output[$add](lastElement = element);
        }
      }
      if (output[$isNotEmpty]) {
        output[$removeLast]();
      }
      return output;
    }
    toString() {
      return this.path[$isEmpty] ? errors._noProviderError(this.token) : errors._noProviderError(this.token) + (":\n  " + this.path[$join](" ->\n  ") + " ->\n  " + dart.str(this.token) + ".\n" + "**NOTE**: This path is not exhaustive, and nodes may be missing " + "in between the \"->\" delimiters. There is ongoing work to improve " + "this error message and include all the nodes where possible. ");
    }
  };
  (errors.NoProviderError.__ = function(token, stack) {
    this[token$1] = token;
    this[path] = errors.NoProviderError._withAdjacentDeduped(stack, token);
    errors.NoProviderError.__proto__.__.call(this);
    ;
  }).prototype = errors.NoProviderError.prototype;
  dart.addTypeTests(errors.NoProviderError);
  dart.addTypeCaches(errors.NoProviderError);
  dart.setLibraryUri(errors.NoProviderError, I[16]);
  dart.setFieldSignature(errors.NoProviderError, () => ({
    __proto__: dart.getFields(errors.NoProviderError.__proto__),
    token: dart.finalFieldType(core.Object),
    path: dart.finalFieldType(core.List$(core.Object))
  }));
  dart.defineExtensionMethods(errors.NoProviderError, ['toString']);
  errors.debugInjectorEnter = function debugInjectorEnter(token) {
    let t2;
    if (is_dev_mode.isDevMode) {
      (t2 = errors._tokenStack, t2 == null ? errors._tokenStack = T.JSArrayOfObject().of([]) : t2)[$add](token);
    }
  };
  errors.debugInjectorLeave = function debugInjectorLeave(token) {
    if (is_dev_mode.isDevMode) {
      let removed = dart.nullCheck(errors._tokenStack)[$removeLast]();
      if (!(removed === token)) dart.assertFailed(null, I[17], 32, 12, "identical(removed, token)");
    }
  };
  errors.debugInjectorWrap = function debugInjectorWrap(T, token, wrap) {
    errors.debugInjectorEnter(token);
    let result = wrap();
    errors.debugInjectorLeave(token);
    return result;
  };
  errors.noProviderError = function noProviderError(token) {
    if (is_dev_mode.isDevMode) {
      let error = new errors.NoProviderError.__(token, errors._tokenStack);
      errors._tokenStack = null;
      return error;
    }
    return new core.ArgumentError.new(errors._noProviderError(token));
  };
  errors._noProviderError = function _noProviderError(token) {
    return "No provider found for " + dart.str(token);
  };
  dart.defineLazy(errors, {
    /*errors._tokenStack*/get _tokenStack() {
      return null;
    },
    set _tokenStack(_) {}
  }, false);
  reflector.registerComponent = function registerComponent(type, component) {
    reflector._components[$_set](type, component);
  };
  reflector.getComponent = function getComponent(type) {
    let component = reflector._components[$_get](type);
    if (component == null) {
      dart.throw(new core.StateError.new("Could not find a component factory for " + dart.str(type) + "."));
    }
    return component;
  };
  reflector.registerFactory = function registerFactory(classtypeOrFunctionType, factory) {
    reflector._factories[$_set](classtypeOrFunctionType, factory);
  };
  reflector.getFactory = function getFactory(type) {
    let factory = reflector._factories[$_get](type);
    if (factory == null) {
      if (reflector._factories[$isEmpty]) {
        dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ", there were no factories of any " + "type found. The likely causes is that you are using the newer " + "runApp() semantics, which does not support runtime lookups of " + "factories (and does not support ReflectiveInjector) *or* " + "AngularDart code generation was never invoked (either due to a " + "misconfiguration of Blaze or a missing invocation of " + "`initReflector()` in your `main.dart`)."));
      } else {
        dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ". Either a provider was not set, " + "*or*  AngularDart code generation was never invoked on the dependant  " + "package containing " + dart.str(type) + "."));
      }
    }
    return factory;
  };
  reflector.registerDependencies = function registerDependencies(invokable, dependencies) {
    reflector._dependencies[$_set](invokable, dependencies);
  };
  reflector.getDependencies = function getDependencies(object) {
    let t2;
    t2 = reflector._dependencies[$_get](object);
    return t2 == null ? C[16] || CT.C16 : t2;
  };
  dart.defineLazy(reflector, {
    /*reflector._components*/get _components() {
      return new (T.LinkedMapOfObject$Object()).new();
    },
    /*reflector._factories*/get _factories() {
      return new (T.LinkedMapOfObject$Function()).new();
    },
    /*reflector._dependencies*/get _dependencies() {
      return new (T.LinkedMapOfObject$ListOfListOfObject()).new();
    }
  }, false);
  runtime.ReflectiveInjector = class ReflectiveInjector extends core.Object {
    static resolveAndCreate(providersOrLists, parent = null) {
      let flatProviders = runtime._flattenProviders(providersOrLists);
      if (is_dev_mode.isDevMode) {
        runtime._assertProviders(flatProviders.providers[$values]);
        runtime._assertProviders(flatProviders.multiProviders);
        runtime._assertGlobalSingletonService(flatProviders.providers[$values]);
        runtime._assertGlobalSingletonService(flatProviders.multiProviders);
      }
      return new runtime._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, parent, false);
    }
    static resolveStaticAndCreate(providersOrLists, parent = null) {
      let flatProviders = runtime._flattenProviders(providersOrLists);
      if (is_dev_mode.isDevMode) {
        runtime._assertStaticProviders(flatProviders.providers[$values]);
        runtime._assertStaticProviders(flatProviders.multiProviders);
        runtime._assertGlobalSingletonService(flatProviders.providers[$values]);
        runtime._assertGlobalSingletonService(flatProviders.multiProviders);
      }
      return new runtime._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, parent, true);
    }
  };
  (runtime.ReflectiveInjector.new = function() {
    ;
  }).prototype = runtime.ReflectiveInjector.prototype;
  dart.addTypeTests(runtime.ReflectiveInjector);
  dart.addTypeCaches(runtime.ReflectiveInjector);
  runtime.ReflectiveInjector[dart.implements] = () => [injector.Injector];
  dart.setLibraryUri(runtime.ReflectiveInjector, I[18]);
  var _instances = dart.privateName(runtime, "_instances");
  var _providers$ = dart.privateName(runtime, "_providers");
  var _multiProviders$ = dart.privateName(runtime, "_multiProviders");
  var _staticOnlyResolveAndCreate$ = dart.privateName(runtime, "_staticOnlyResolveAndCreate");
  var _resolveMulti = dart.privateName(runtime, "_resolveMulti");
  var _resolveArg = dart.privateName(runtime, "_resolveArg");
  var _resolveArgs = dart.privateName(runtime, "_resolveArgs");
  var _resolveMeta = dart.privateName(runtime, "_resolveMeta");
  runtime._RuntimeInjector = class _RuntimeInjector extends injector.HierarchicalInjector {
    static _canonicalizeInjectorTypeToFixMixedModeVmTests(token) {
      return false && dart.wrapType(injector.Injector)._equals(token) ? dart.wrapType(injector.Injector) : token;
    }
    injectFromSelfOptional(token, orElse = C[14] || CT.C14) {
      let t4, t3, t2;
      token = runtime._RuntimeInjector._canonicalizeInjectorTypeToFixMixedModeVmTests(token);
      let instance = this[_instances][$_get](token);
      if (instance == null && !this[_instances][$containsKey](token)) {
        let provider = this[_providers$][$_get](token);
        if (provider == null) {
          return orElse;
        }
        if (runtime._isMultiProvider(provider)) {
          t2 = this[_instances];
          t3 = provider.token;
          t4 = this[_resolveMulti](provider);
          t2[$_set](t3, t4);
          return t4;
        }
        this[_instances][$_set](token, instance = di_providers.buildAtRuntime(provider, this));
      }
      return instance;
    }
    resolveAndCreateChild(providersOrLists) {
      if (this[_staticOnlyResolveAndCreate$]) {
        return runtime.ReflectiveInjector.resolveStaticAndCreate(providersOrLists, this);
      }
      return runtime.ReflectiveInjector.resolveAndCreate(providersOrLists, this);
    }
    resolveAndInstantiate(providerOrType) {
      let provider = T.ProviderOfObject().is(providerOrType) ? providerOrType : new (T.ProviderOfObject()).__(providerOrType, {useClass: unsafe_cast.unsafeCast(core.Type, providerOrType)});
      if (this[_staticOnlyResolveAndCreate$]) {
        runtime._assertStaticProviders(T.JSArrayOfProviderOfvoid().of([provider]));
      }
      return di_providers.buildAtRuntime(provider, this);
    }
    [_resolveArgs](token, deps = null) {
      deps == null ? deps = reflector.getDependencies(token) : null;
      return (() => {
        let t2 = T.JSArrayOfObjectN().of([]);
        for (let i = 0, l = deps[$length]; i < l; i = i + 1)
          t2[$add](this[_resolveArg](deps[$_get](i)));
        return t2;
      })();
    }
    [_resolveArg](dependency) {
      if (T.ListOfObject().is(dependency)) {
        return this[_resolveMeta](dependency);
      }
      let result = this.get(dependency);
      if (result === injector.throwIfNotFound) {
        return injector.throwsNotFound(this, dependency);
      }
      return unsafe_cast.unsafeCast(T.ObjectN(), result);
    }
    [_resolveMulti](provider) {
      let results = di_tokens.listOfMultiToken(unsafe_cast.unsafeCast(T.MultiTokenOfObject(), provider.token));
      for (let other of this[_multiProviders$]) {
        if (other.token === provider.token) {
          results[$add](di_providers.buildAtRuntime(other, this));
        }
      }
      return results;
    }
    [_resolveMeta](metadata) {
      let token = null;
      function token$35get() {
        let t4;
        t4 = token;
        return t4 == null ? dart.throw(new _internal.LateError.localNI("token")) : t4;
      }
      dart.fn(token$35get, T.VoidToObject());
      function token$35set(t5) {
        if (token == null)
          return token = t5;
        else
          dart.throw(new _internal.LateError.localAI("token"));
      }
      dart.fn(token$35set, T.ObjectTodynamic());
      let isOptional = false;
      let isSkipSelf = false;
      let isSelf = false;
      let isHost = false;
      for (let n = 0, l = metadata[$length]; n < l; n = n + 1) {
        let annotation = metadata[$_get](n);
        if (di_arguments.Inject.is(annotation)) {
          token$35set(annotation.token);
        } else if (di_arguments.Optional.is(annotation)) {
          isOptional = true;
        } else if (di_arguments.SkipSelf.is(annotation)) {
          isSkipSelf = true;
        } else if (di_arguments.Self.is(annotation)) {
          isSelf = true;
        } else if (di_arguments.Host.is(annotation)) {
          isHost = true;
        } else {
          token$35set(annotation);
        }
      }
      let result = null;
      errors.debugInjectorEnter(token$35get());
      let orElse = isOptional ? null : injector.throwIfNotFound;
      if (isSkipSelf) {
        result = this.injectFromAncestryOptional(token$35get(), orElse);
      } else if (isSelf) {
        result = this.injectFromSelfOptional(token$35get(), orElse);
      } else if (isHost) {
        result = this.injectFromParentOptional(token$35get(), orElse);
      } else {
        result = this.provideUntyped(T.ObjectN(), token$35get(), orElse);
      }
      if (result === injector.throwIfNotFound) {
        injector.throwsNotFound(this, token$35get());
      }
      errors.debugInjectorLeave(token$35get());
      return result;
    }
    useClass(clazz, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let factory = reflector.getFactory(clazz);
      return unsafe_cast.unsafeCast(core.Object, core.Function.apply(factory, this[_resolveArgs](clazz, deps)));
    }
    useExisting(token) {
      return core.Object.as(this.provideUntyped(dart.dynamic, token));
    }
    useFactory(factory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let resolvedArgs = this[_resolveArgs](factory, deps);
      if (!(runtime._RuntimeInjector._functionHasNoRequiredArguments(factory) || resolvedArgs[$isNotEmpty])) dart.assertFailed("Could not resolve dependencies for factory function " + dart.str(factory) + ". This " + "is is usually a sign of an omitted @Injectable. Consider migrating " + "to @GeneratedInjector (and \"runApp\") or add the missing annotation " + "for the time being.", I[19], 272, 7, "_functionHasNoRequiredArguments(factory) || resolvedArgs.isNotEmpty");
      return unsafe_cast.unsafeCast(core.Object, core.Function.apply(factory, resolvedArgs));
    }
    static _functionHasNoRequiredArguments($function) {
      return T.VoidTovoid().is($function);
    }
    useValue(value) {
      return value;
    }
  };
  (runtime._RuntimeInjector.new = function(_providers, _multiProviders, parent, _staticOnlyResolveAndCreate) {
    this[_instances] = new _js_helper.IdentityMap.new();
    this[_providers$] = _providers;
    this[_multiProviders$] = _multiProviders;
    this[_staticOnlyResolveAndCreate$] = _staticOnlyResolveAndCreate;
    runtime._RuntimeInjector.__proto__.new.call(this, parent);
    this[_instances][$_set](dart.wrapType(injector.Injector), this);
  }).prototype = runtime._RuntimeInjector.prototype;
  dart.addTypeTests(runtime._RuntimeInjector);
  dart.addTypeCaches(runtime._RuntimeInjector);
  runtime._RuntimeInjector[dart.implements] = () => [runtime.ReflectiveInjector, di_providers.RuntimeInjectorBuilder];
  dart.setMethodSignature(runtime._RuntimeInjector, () => ({
    __proto__: dart.getMethods(runtime._RuntimeInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.nullable(core.Object), [core.Object], [dart.nullable(core.Object)]),
    resolveAndCreateChild: dart.fnType(runtime.ReflectiveInjector, [core.List$(core.Object)]),
    resolveAndInstantiate: dart.fnType(dart.dynamic, [core.Object]),
    [_resolveArgs]: dart.fnType(core.List$(dart.nullable(core.Object)), [core.Object], [dart.nullable(core.List$(core.Object))]),
    [_resolveArg]: dart.fnType(dart.nullable(core.Object), [core.Object]),
    [_resolveMulti]: dart.fnType(core.List$(core.Object), [di_providers.Provider$(core.Object)]),
    [_resolveMeta]: dart.fnType(dart.nullable(core.Object), [core.List$(core.Object)]),
    useClass: dart.fnType(core.Object, [core.Type], {deps: dart.nullable(core.List$(core.Object))}, {}),
    useExisting: dart.fnType(core.Object, [core.Object]),
    useFactory: dart.fnType(core.Object, [core.Function], {deps: dart.nullable(core.List$(core.Object))}, {}),
    useValue: dart.fnType(core.Object, [core.Object])
  }));
  dart.setLibraryUri(runtime._RuntimeInjector, I[18]);
  dart.setFieldSignature(runtime._RuntimeInjector, () => ({
    __proto__: dart.getFields(runtime._RuntimeInjector.__proto__),
    [_instances]: dart.finalFieldType(core.Map),
    [_providers$]: dart.finalFieldType(core.Map$(core.Object, di_providers.Provider$(core.Object))),
    [_multiProviders$]: dart.finalFieldType(core.List$(di_providers.Provider$(core.Object))),
    [_staticOnlyResolveAndCreate$]: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(runtime._RuntimeInjector, {
    /*runtime._RuntimeInjector._inDartVM*/get _inDartVM() {
      return false;
    }
  }, false);
  var providers$0 = dart.privateName(runtime, "_FlatProviders.providers");
  var multiProviders$ = dart.privateName(runtime, "_FlatProviders.multiProviders");
  runtime._FlatProviders = class _FlatProviders extends core.Object {
    get providers() {
      return this[providers$0];
    }
    set providers(value) {
      super.providers = value;
    }
    get multiProviders() {
      return this[multiProviders$];
    }
    set multiProviders(value) {
      super.multiProviders = value;
    }
  };
  (runtime._FlatProviders.new = function(providers, multiProviders) {
    this[providers$0] = providers;
    this[multiProviders$] = multiProviders;
    ;
  }).prototype = runtime._FlatProviders.prototype;
  dart.addTypeTests(runtime._FlatProviders);
  dart.addTypeCaches(runtime._FlatProviders);
  dart.setLibraryUri(runtime._FlatProviders, I[18]);
  dart.setFieldSignature(runtime._FlatProviders, () => ({
    __proto__: dart.getFields(runtime._FlatProviders.__proto__),
    providers: dart.finalFieldType(core.Map$(core.Object, di_providers.Provider$(core.Object))),
    multiProviders: dart.finalFieldType(core.List$(di_providers.Provider$(core.Object)))
  }));
  runtime._isMultiProvider = function _isMultiProvider(p) {
    return T.MultiTokenOfObject().is(p.token);
  };
  runtime._assertProviders = function _assertProviders(providers) {
    for (let provider of providers) {
      let useClass = provider.useClass;
      if (useClass != null) {
        reflector.getFactory(useClass);
      } else {
        let useFactory = provider.useFactory;
        if (useFactory != null && provider.deps == null) {
          reflector.getDependencies(useFactory);
        } else if (provider.useFactory === "__noValueProvided__" && provider.useExisting == null && core.Type.is(provider.token)) {
          reflector.getFactory(unsafe_cast.unsafeCast(core.Type, provider.token));
        }
      }
    }
  };
  runtime._throwUnsupportedProvider = function _throwUnsupportedProvider(provider) {
    dart.throw(new core.UnsupportedError.new("Could not create a provider for token \"" + dart.str(provider.token) + "\"!\n\n" + "ReflectiveInjector.resolveStaticAndCreate only supports some providers.\n" + "\n" + "* FactoryProvider (or Provider(useFactory: ...)) with deps: [ ... ] set\n" + "* ValueProvider (or Provider(useValue: ...))\n" + "* ExistingProvider (or Provider(useExisting: ...))\n" + "\n" + "Specifically, any providers that require looking up factory functions or " + "argument information for factory functions at runtime are not supported " + "since they would defeat the tree-shaking improvements of \"runApp\".\n\n" + "See https://github.com/angulardart/angular/issues/1426 for details"));
  };
  runtime._assertStaticProviders = function _assertStaticProviders(providers) {
    for (let provider of providers) {
      if (provider.useValue !== "__noValueProvided__") {
        continue;
      }
      if (provider.useExisting != null) {
        continue;
      }
      if (provider.useFactory !== "__noValueProvided__") {
        if (provider.deps != null) {
          continue;
        }
      }
      runtime._throwUnsupportedProvider(provider);
    }
  };
  runtime._assertGlobalSingletonService = function _assertGlobalSingletonService(providers) {
    for (let provider of providers) {
      let tokenName = dart.str(provider.token);
      if (runtime._globalSingletonServices[$contains](tokenName)) {
        dart.throw(new core.UnsupportedError.new("\"" + tokenName + "\" is an app-wide, singleton service provided by the " + "framework that cannot be overridden or manually provided.\n" + "\n" + "If you are providing this service to fix a missing provider error, " + "you likely have created an injector that is disconnected from the " + "app's injector hierarchy. This can occur when instantiating an " + "injector and you omit the parent injector argument, or explicitly " + "configure an empty parent injector. Please check your injector " + "constructors to make sure the current context's injector is passed " + "as the parent.\n" + "\n" + "If you are instead providing this service in order to unit test an " + "injector, please see http://go/angulardart/style/testing."));
      }
    }
  };
  runtime._flattenProviders = function _flattenProviders(providersOrLists, allProviders = null, multiProviders = null) {
    allProviders == null ? allProviders = new (T.IdentityMapOfObject$ProviderOfObject()).new() : null;
    multiProviders == null ? multiProviders = T.JSArrayOfProviderOfObject().of([]) : null;
    for (let i = 0, len = providersOrLists[$length]; i < len; i = i + 1) {
      let item = providersOrLists[$_get](i);
      if (T.ListOfObject().is(item)) {
        runtime._flattenProviders(item, allProviders, multiProviders);
      } else if (T.ProviderOfObject().is(item)) {
        if (runtime._isMultiProvider(item)) {
          multiProviders[$add](item);
        }
        allProviders[$_set](item.token, item);
      } else if (core.Type.is(item)) {
        allProviders[$_set](item, new (T.ProviderOfObject()).__(item, {useClass: item}));
      } else if (di_modules.Module.is(item)) {
        let providers = di_modules.internalModuleToList(item);
        runtime._flattenProviders(providers, allProviders, multiProviders);
      } else {
        if (!false) dart.assertFailed("Unsupported: " + dart.str(item), I[19], 409, 14, "false");
      }
    }
    return new runtime._FlatProviders.new(allProviders, multiProviders);
  };
  dart.defineLazy(runtime, {
    /*runtime._globalSingletonServices*/get _globalSingletonServices() {
      return C[17] || CT.C17;
    }
  }, false);
  dart.trackLibraries("packages/angular/src/di/errors", {
    "package:angular/src/meta/di_tokens.dart": di_tokens,
    "package:angular/src/utilities.dart": utilities,
    "package:angular/src/utilities/unsafe_cast.dart": unsafe_cast,
    "package:angular/src/utilities/is_primitive.dart": is_primitive,
    "package:angular/src/utilities/is_dev_mode.dart": is_dev_mode,
    "package:angular/src/meta/di_modules.dart": di_modules,
    "package:angular/src/meta.dart": meta,
    "package:angular/src/meta/visibility.dart": visibility,
    "package:angular/src/meta/view.dart": view,
    "package:angular/src/meta/typed.dart": typed,
    "package:angular/src/meta/lifecycle_hooks.dart": lifecycle_hooks,
    "package:angular/src/meta/directives.dart": directives$,
    "package:angular/src/meta/change_detection_constants.dart": change_detection_constants,
    "package:angular/src/meta/di_providers.dart": di_providers,
    "package:angular/src/meta/di_generate_injector.dart": di_generate_injector,
    "package:angular/src/meta/di_arguments.dart": di_arguments,
    "package:angular/src/meta/change_detection_link.dart": change_detection_link,
    "package:angular/src/di/injector.dart": injector,
    "package:angular/src/di/errors.dart": errors,
    "package:angular/src/reflector.dart": reflector,
    "package:angular/src/di/injector/runtime.dart": runtime
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../meta/di_tokens.dart","../utilities/unsafe_cast.dart","../utilities/is_primitive.dart","../utilities/is_dev_mode.dart","../meta/di_modules.dart","../meta.dart","../meta/visibility.dart","../meta/view.dart","../meta/typed.dart","../meta/lifecycle_hooks.dart","../meta/directives.dart","../meta/change_detection_constants.dart","../meta/di_providers.dart","../meta/di_generate_injector.dart","../meta/di_arguments.dart","../meta/change_detection_link.dart","injector.dart","errors.dart","../reflector.dart","injector/runtime.dart"],"names":[],"mappings":"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","file":"errors.sound.ddc.js"}');
  // Exports:
  return {
    src__meta__di_tokens: di_tokens,
    src__utilities: utilities,
    src__utilities__unsafe_cast: unsafe_cast,
    src__utilities__is_primitive: is_primitive,
    src__utilities__is_dev_mode: is_dev_mode,
    src__meta__di_modules: di_modules,
    src__meta: meta,
    src__meta__visibility: visibility,
    src__meta__view: view,
    src__meta__typed: typed,
    src__meta__lifecycle_hooks: lifecycle_hooks,
    src__meta__directives: directives$,
    src__meta__change_detection_constants: change_detection_constants,
    src__meta__di_providers: di_providers,
    src__meta__di_generate_injector: di_generate_injector,
    src__meta__di_arguments: di_arguments,
    src__meta__change_detection_link: change_detection_link,
    src__di__injector: injector,
    src__di__errors: errors,
    src__reflector: reflector,
    src__di__injector__runtime: runtime
  };
}));

//# sourceMappingURL=errors.sound.ddc.js.map
