define(['dart_sdk'], (function load__packages__examples_hello_world__hero__hero(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hero = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/hero/hero.dart"];
  var id$ = dart.privateName(hero, "Hero.id");
  var name$ = dart.privateName(hero, "Hero.name");
  var isSecret$ = dart.privateName(hero, "Hero.isSecret");
  hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isSecret() {
      return this[isSecret$];
    }
    set isSecret(value) {
      super.isSecret = value;
    }
  };
  (hero.Hero.new = function(id, name, isSecret = false) {
    this[id$] = id;
    this[name$] = name;
    this[isSecret$] = isSecret;
    ;
  }).prototype = hero.Hero.prototype;
  dart.addTypeTests(hero.Hero);
  dart.addTypeCaches(hero.Hero);
  dart.setLibraryUri(hero.Hero, I[0]);
  dart.setFieldSignature(hero.Hero, () => ({
    __proto__: dart.getFields(hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String),
    isSecret: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/examples.hello_world/hero/hero", {
    "package:examples.hello_world/hero/hero.dart": hero
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IACY;;;;;;IACG;;;;;;IACF;;;;;;;4BACD,IAAS,MAAY;IAArB;IAAS;IAAY;;EAAkB","file":"hero.sound.ddc.js"}');
  // Exports:
  return {
    hero__hero: hero
  };
}));

//# sourceMappingURL=hero.sound.ddc.js.map
