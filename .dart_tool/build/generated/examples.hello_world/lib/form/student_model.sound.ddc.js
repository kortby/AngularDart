define(['dart_sdk'], (function load__packages__examples_hello_world__form__student_model(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var student_model = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:examples.hello_world/form/student_model.dart"];
  var id$ = dart.privateName(student_model, "Student.id");
  var firstName$ = dart.privateName(student_model, "Student.firstName");
  var lastName$ = dart.privateName(student_model, "Student.lastName");
  var description$ = dart.privateName(student_model, "Student.description");
  student_model.Student = class Student extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get firstName() {
      return this[firstName$];
    }
    set firstName(value) {
      this[firstName$] = value;
    }
    get lastName() {
      return this[lastName$];
    }
    set lastName(value) {
      this[lastName$] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    toString() {
      return dart.str(this.id) + ", " + this.firstName + ", " + this.lastName + ", " + this.description;
    }
  };
  (student_model.Student.new = function(id, firstName, lastName, description) {
    this[id$] = id;
    this[firstName$] = firstName;
    this[lastName$] = lastName;
    this[description$] = description;
    ;
  }).prototype = student_model.Student.prototype;
  dart.addTypeTests(student_model.Student);
  dart.addTypeCaches(student_model.Student);
  dart.setLibraryUri(student_model.Student, I[0]);
  dart.setFieldSignature(student_model.Student, () => ({
    __proto__: dart.getFields(student_model.Student.__proto__),
    id: dart.fieldType(core.int),
    firstName: dart.fieldType(core.String),
    lastName: dart.fieldType(core.String),
    description: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(student_model.Student, ['toString']);
  dart.trackLibraries("packages/examples.hello_world/form/student_model", {
    "package:examples.hello_world/form/student_model.dart": student_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["student_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IACM;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;;AAKL,YAAiD,UAAxC,WAAE,OAAG,iBAAS,OAAG,gBAAQ,OAAG;IACvC;;wCALa,IAAS,WAAgB,UAAe;IAAxC;IAAS;IAAgB;IAAe;;EAAY","file":"student_model.sound.ddc.js"}');
  // Exports:
  return {
    form__student_model: student_model
  };
}));

//# sourceMappingURL=student_model.sound.ddc.js.map
