define(['dart_sdk', 'packages/examples.hello_world/hero/hero'], (function load__packages__examples_hello_world__hero__horo_list__mock_heros(dart_sdk, packages__examples$46hello_world__hero__hero) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hero = packages__examples$46hello_world__hero__hero.hero__hero;
  var mock_heros = Object.create(dart.library);
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfMap: () => (T.JSArrayOfMap = dart.constFn(_interceptors.JSArray$(core.Map)))(),
    MapToHero: () => (T.MapToHero = dart.constFn(dart.fnType(hero.Hero, [core.Map])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(mock_heros._initHero, T.MapToHero());
    }
  }, false);
  var C = [void 0];
  mock_heros._initHero = function _initHero(heroProperties) {
    return new hero.Hero.new(core.int.as(heroProperties[$_get]("id")), core.String.as(heroProperties[$_get]("name")), core.bool.as(heroProperties[$_get]("isSecret")));
  };
  dart.defineLazy(mock_heros, {
    /*mock_heros.mockHeroes*/get mockHeroes() {
      return T.JSArrayOfMap().of([new _js_helper.LinkedMap.from(["id", 11, "isSecret", false, "name", "Mr. Nice"]), new _js_helper.LinkedMap.from(["id", 12, "isSecret", false, "name", "Narco"]), new _js_helper.LinkedMap.from(["id", 13, "isSecret", false, "name", "Bombasto"]), new _js_helper.LinkedMap.from(["id", 14, "isSecret", false, "name", "Celeritas"]), new _js_helper.LinkedMap.from(["id", 15, "isSecret", false, "name", "Magneta"]), new _js_helper.LinkedMap.from(["id", 16, "isSecret", false, "name", "RubberMan"]), new _js_helper.LinkedMap.from(["id", 17, "isSecret", false, "name", "Dynama"]), new _js_helper.LinkedMap.from(["id", 18, "isSecret", true, "name", "Dr IQ"]), new _js_helper.LinkedMap.from(["id", 19, "isSecret", true, "name", "Magma"]), new _js_helper.LinkedMap.from(["id", 20, "isSecret", true, "name", "Tornado"])])[$map](hero.Hero, C[0] || CT.C0)[$toList]();
    },
    set mockHeroes(_) {}
  }, false);
  dart.trackLibraries("packages/examples.hello_world/hero/horo_list/mock_heros", {
    "package:examples.hello_world/hero/horo_list/mock_heros.dart": mock_heros
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mock_heros.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;4CAamB;AAAmB,yCAClC,AAAc,cAAA,QAAC,uBAAO,AAAc,cAAA,QAAC,uBAAS,AAAc,cAAA,QAAC;EAAY;;MAblE,qBAAU;YAAQ,AAW3B,AAAe,sBAVf,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,cACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,WACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,cACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,eACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,aACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,eACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,YACtC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ,WACrC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ,WACrC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ","file":"mock_heros.sound.ddc.js"}');
  // Exports:
  return {
    hero__horo_list__mock_heros: mock_heros
  };
}));

//# sourceMappingURL=mock_heros.sound.ddc.js.map
