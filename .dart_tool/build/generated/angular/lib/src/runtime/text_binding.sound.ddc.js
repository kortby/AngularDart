define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate'], (function load__packages__angular__src__runtime__text_binding(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__bootstrap__modules.src__runtime__check_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  var text_binding = Object.create(dart.library);
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:angular/src/runtime/text_binding.dart"];
  var element = dart.privateName(text_binding, "TextBinding.element");
  var _currentValue = dart.privateName(text_binding, "_currentValue");
  text_binding.TextBinding = class TextBinding extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      super.element = value;
    }
    updateText(newValue) {
      if (check_binding.checkBinding(this[_currentValue], newValue)) {
        this.element[$text] = newValue;
        this[_currentValue] = newValue;
      }
    }
    updateTextWithPrimitive(newValue) {
      if (check_binding.checkBinding(this[_currentValue], newValue)) {
        this.element[$text] = interpolate.interpolate0(newValue);
        this[_currentValue] = newValue;
      }
    }
  };
  (text_binding.TextBinding.new = function() {
    this[_currentValue] = "";
    this[element] = html.Text.new("");
    ;
  }).prototype = text_binding.TextBinding.prototype;
  dart.addTypeTests(text_binding.TextBinding);
  dart.addTypeCaches(text_binding.TextBinding);
  dart.setMethodSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getMethods(text_binding.TextBinding.__proto__),
    updateText: dart.fnType(dart.void, [core.String]),
    updateTextWithPrimitive: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(text_binding.TextBinding, I[0]);
  dart.setFieldSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getFields(text_binding.TextBinding.__proto__),
    [_currentValue]: dart.fieldType(dart.nullable(core.Object)),
    element: dart.finalFieldType(html.Text)
  }));
  dart.trackLibraries("packages/angular/src/runtime/text_binding", {
    "package:angular/src/runtime/text_binding.dart": text_binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAeQ;;;;;;eAUiB;AACrB,UAAI,2BAAa,qBAAe,QAAQ;AACf,QAAvB,AAAQ,sBAAO,QAAQ;AACC,QAAxB,sBAAgB,QAAQ;;IAE5B;4BAIqC;AACnC,UAAI,2BAAa,qBAAe,QAAQ;AACD,QAArC,AAAQ,sBAAO,yBAAa,QAAQ;AACZ,QAAxB,sBAAgB,QAAQ;;IAE5B;;;IAzBQ,sBAAgB;IAClB,gBAAU,cAAK;;EAOR","file":"text_binding.sound.ddc.js"}');
  // Exports:
  return {
    src__runtime__text_binding: text_binding
  };
}));

//# sourceMappingURL=text_binding.sound.ddc.js.map
