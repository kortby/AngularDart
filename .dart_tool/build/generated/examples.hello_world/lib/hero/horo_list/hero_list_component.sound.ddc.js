define(['dart_sdk', 'packages/examples.hello_world/hero/horo_list/mock_heros', 'packages/examples.hello_world/hero/hero'], (function load__packages__examples_hello_world__hero__horo_list__hero_list_component(dart_sdk, packages__examples$46hello_world__hero__horo_list__mock_heros, packages__examples$46hello_world__hero__hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mock_heros = packages__examples$46hello_world__hero__horo_list__mock_heros.hero__horo_list__mock_heros;
  const hero = packages__examples$46hello_world__hero__hero.hero__hero;
  var hero_list_component = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/hero/horo_list/hero_list_component.dart"];
  var heroes = dart.privateName(hero_list_component, "HeroListComponent.heroes");
  hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      super.heroes = value;
    }
  };
  (hero_list_component.HeroListComponent.new = function() {
    this[heroes] = mock_heros.mockHeroes;
    ;
  }).prototype = hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(hero_list_component.HeroListComponent);
  dart.addTypeCaches(hero_list_component.HeroListComponent);
  dart.setLibraryUri(hero_list_component.HeroListComponent, I[0]);
  dart.setFieldSignature(hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(hero_list_component.HeroListComponent.__proto__),
    heroes: dart.finalFieldType(core.List$(hero.Hero))
  }));
  dart.trackLibraries("packages/examples.hello_world/hero/horo_list/hero_list_component", {
    "package:examples.hello_world/hero/horo_list/hero_list_component.dart": hero_list_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAcmB;;;;;;;;mBAAS;;EAC5B","file":"hero_list_component.sound.ddc.js"}');
  // Exports:
  return {
    hero__horo_list__hero_list_component: hero_list_component
  };
}));

//# sourceMappingURL=hero_list_component.sound.ddc.js.map
