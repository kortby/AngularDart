define(['dart_sdk'], (function load__packages__examples_hello_world__learn_direct__text_zoom_directive(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var text_zoom_directive = Object.create(dart.library);
  var $fontSize = dartx.fontSize;
  var $style = dartx.style;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/learn_direct/text_zoom_directive.dart"];
  text_zoom_directive.TextZoomDirective = class TextZoomDirective extends core.Object {};
  (text_zoom_directive.TextZoomDirective.new = function(element) {
    element[$style][$fontSize] = "64px";
  }).prototype = text_zoom_directive.TextZoomDirective.prototype;
  dart.addTypeTests(text_zoom_directive.TextZoomDirective);
  dart.addTypeCaches(text_zoom_directive.TextZoomDirective);
  dart.setLibraryUri(text_zoom_directive.TextZoomDirective, I[0]);
  dart.trackLibraries("packages/examples.hello_world/learn_direct/text_zoom_directive", {
    "package:examples.hello_world/learn_direct/text_zoom_directive.dart": text_zoom_directive
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_zoom_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;wDAM4B;AACO,IAA/B,AAAQ,AAAM,OAAP,sBAAkB;EAC3B","file":"text_zoom_directive.sound.ddc.js"}');
  // Exports:
  return {
    learn_direct__text_zoom_directive: text_zoom_directive
  };
}));

//# sourceMappingURL=text_zoom_directive.sound.ddc.js.map
