define(['dart_sdk'], (function load__packages__meta__dart2js(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dart2js = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: dart2js._NoInline.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: dart2js._TryInline.prototype
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["package:meta/dart2js.dart"];
  dart2js._NoInline = class _NoInline extends core.Object {};
  (dart2js._NoInline.new = function() {
    ;
  }).prototype = dart2js._NoInline.prototype;
  dart.addTypeTests(dart2js._NoInline);
  dart.addTypeCaches(dart2js._NoInline);
  dart.setLibraryUri(dart2js._NoInline, I[0]);
  dart2js._TryInline = class _TryInline extends core.Object {};
  (dart2js._TryInline.new = function() {
    ;
  }).prototype = dart2js._TryInline.prototype;
  dart.addTypeTests(dart2js._TryInline);
  dart.addTypeCaches(dart2js._TryInline);
  dart.setLibraryUri(dart2js._TryInline, I[0]);
  dart.defineLazy(dart2js, {
    /*dart2js.noInline*/get noInline() {
      return C[0] || CT.C0;
    },
    /*dart2js.tryInline*/get tryInline() {
      return C[1] || CT.C1;
    }
  }, false);
  dart.trackLibraries("packages/meta/dart2js", {
    "package:meta/dart2js.dart": dart2js
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dart2js.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;EAuCmB;;;;;;;EAIC;;;;;MAxBJ,gBAAQ;;;MAiBP,iBAAS","file":"dart2js.sound.ddc.js"}');
  // Exports:
  return {
    dart2js: dart2js
  };
}));

//# sourceMappingURL=dart2js.sound.ddc.js.map
