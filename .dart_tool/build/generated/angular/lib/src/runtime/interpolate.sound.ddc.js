define(['dart_sdk'], (function load__packages__angular__src__runtime__interpolate(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var interpolate = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  interpolate.interpolateN = function interpolateN(any) {
    let output = "";
    for (let i = 0; i < any[$length]; i = i + 1) {
      let arg = any[$_get](i);
      if (arg != null) {
        output = output + dart.str(arg);
      }
    }
    return output;
  };
  interpolate.interpolate0 = function interpolate0(any) {
    return typeof any == 'string' ? any : any == null ? "" : dart.str(any);
  };
  interpolate.interpolate1 = function interpolate1(v0, v1, v2) {
    return v0 + interpolate.interpolate0(v1) + v2;
  };
  interpolate.interpolate2 = function interpolate2(v0, v1, v2, v3, v4) {
    return interpolate.interpolate1(interpolate.interpolate1(v0, v1, v2), v3, v4);
  };
  interpolate.interpolateString0 = function interpolateString0(v0) {
    let t0;
    t0 = v0;
    return t0 == null ? "" : t0;
  };
  interpolate.interpolateString1 = function interpolateString1(v0, v1, v2) {
    return v0 + interpolate.interpolateString0(v1) + v2;
  };
  interpolate.interpolateString2 = function interpolateString2(v0, v1, v2, v3, v4) {
    return interpolate.interpolateString1(interpolate.interpolateString1(v0, v1, v2), v3, v4);
  };
  dart.trackLibraries("packages/angular/src/runtime/interpolate", {
    "package:angular/src/runtime/interpolate.dart": interpolate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interpolate.dart"],"names":[],"mappings":";;;;;;;;;;;;mDAiBkC;AAC5B,iBAAS;AACb,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAI,GAAD,WAAS,IAAA,AAAC,CAAA;AACzB,gBAAM,AAAG,GAAA,QAAC,CAAC;AACjB,UAAI,GAAG;AACW,QAAhB,SAAA,AAAO,MAAD,GAAU,SAAJ,GAAG;;;AAGnB,UAAO,OAAM;EACf;mDAK4B;AAAQ,UAAI,QAAJ,GAAG,eACjC,GAAG,GACH,AAAI,GAAD,WACC,KACM,SAAJ,GAAG;EAAC;mDAIP,IACC,IACD;AAEL,UAAE,AAAyB,GAAvB,GAAE,yBAAa,EAAE,IAAG,EAAE;EAAC;mDAItB,IACC,IACD,IACC,IACD;AAEL,oCAAa,yBAAa,EAAE,EAAE,EAAE,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE;EAAC;+DAKhB;;AAAO,WAAE;UAAF,cAAM;EAAE;+DAIxC,IACC,IACD;AAEL,UAAE,AAA+B,GAA7B,GAAE,+BAAmB,EAAE,IAAG,EAAE;EAAC;+DAI5B,IACC,IACD,IACC,IACD;AAEL,0CAAmB,+BAAmB,EAAE,EAAE,EAAE,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE;EAAC","file":"interpolate.sound.ddc.js"}');
  // Exports:
  return {
    src__runtime__interpolate: interpolate
  };
}));

//# sourceMappingURL=interpolate.sound.ddc.js.map
