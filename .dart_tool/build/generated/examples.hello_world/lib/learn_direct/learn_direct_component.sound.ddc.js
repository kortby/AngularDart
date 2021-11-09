define(['dart_sdk'], (function load__packages__examples_hello_world__learn_direct__learn_direct_component(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var learn_direct_component = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfStudent: () => (T.JSArrayOfStudent = dart.constFn(_interceptors.JSArray$(learn_direct_component.Student)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/learn_direct/learn_direct_component.dart"];
  var isVisible = dart.privateName(learn_direct_component, "LearnDirectComponent.isVisible");
  var students = dart.privateName(learn_direct_component, "LearnDirectComponent.students");
  learn_direct_component.LearnDirectComponent = class LearnDirectComponent extends core.Object {
    get isVisible() {
      return this[isVisible];
    }
    set isVisible(value) {
      this[isVisible] = value;
    }
    get students() {
      return this[students];
    }
    set students(value) {
      this[students] = value;
    }
    toggleVisible() {
      this.isVisible = !this.isVisible;
      this.getStudents();
    }
    trackByStudentId(_, o) {
      return learn_direct_component.Student.is(o) ? o.id : o;
    }
    getStudents() {
      this.students = T.JSArrayOfStudent().of([new learn_direct_component.Student.new(1, "Paulo James"), new learn_direct_component.Student.new(2, "Carlos Santana"), new learn_direct_component.Student.new(3, "Carlos Deigo")]);
    }
  };
  (learn_direct_component.LearnDirectComponent.new = function() {
    this[isVisible] = false;
    this[students] = T.JSArrayOfStudent().of([]);
    ;
  }).prototype = learn_direct_component.LearnDirectComponent.prototype;
  dart.addTypeTests(learn_direct_component.LearnDirectComponent);
  dart.addTypeCaches(learn_direct_component.LearnDirectComponent);
  dart.setMethodSignature(learn_direct_component.LearnDirectComponent, () => ({
    __proto__: dart.getMethods(learn_direct_component.LearnDirectComponent.__proto__),
    toggleVisible: dart.fnType(dart.void, []),
    trackByStudentId: dart.fnType(dart.nullable(core.Object), [dart.dynamic, dart.dynamic]),
    getStudents: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(learn_direct_component.LearnDirectComponent, I[0]);
  dart.setFieldSignature(learn_direct_component.LearnDirectComponent, () => ({
    __proto__: dart.getFields(learn_direct_component.LearnDirectComponent.__proto__),
    isVisible: dart.fieldType(core.bool),
    students: dart.fieldType(core.List$(learn_direct_component.Student))
  }));
  var id$ = dart.privateName(learn_direct_component, "Student.id");
  var name$ = dart.privateName(learn_direct_component, "Student.name");
  learn_direct_component.Student = class Student extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (learn_direct_component.Student.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
    ;
  }).prototype = learn_direct_component.Student.prototype;
  dart.addTypeTests(learn_direct_component.Student);
  dart.addTypeCaches(learn_direct_component.Student);
  dart.setLibraryUri(learn_direct_component.Student, I[0]);
  dart.setFieldSignature(learn_direct_component.Student, () => ({
    __proto__: dart.getFields(learn_direct_component.Student.__proto__),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/examples.hello_world/learn_direct/learn_direct_component", {
    "package:examples.hello_world/learn_direct/learn_direct_component.dart": learn_direct_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["learn_direct_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAUO;;;;;;IAES;;;;;;;AAGU,MAAtB,kBAAa;AACA,MAAb;IACF;qBAIyB,GAAW;AAAM,YAAE,mCAAF,CAAC,IAAc,AAAE,CAAD,MAAM,CAAC;;;AAM9D,MAJD,gBAAW,yBACT,uCAAQ,GAAG,gBACX,uCAAQ,GAAG,mBACX,uCAAQ,GAAG;IAEf;;;IAlBK,kBAAY;IAEH,iBAAW;;EAiB3B;;;;;;;;;;;;;;;;;;IAGM;;;;;;IACG;;;;;;;iDAEM,IAAS;IAAT;IAAS;;EAAK","file":"learn_direct_component.sound.ddc.js"}');
  // Exports:
  return {
    learn_direct__learn_direct_component: learn_direct_component
  };
}));

//# sourceMappingURL=learn_direct_component.sound.ddc.js.map
