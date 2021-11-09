// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'angular_compiler.dart';
import 'src/angular_compiler/analyzer.template.dart' as _ref0;
import 'src/angular_compiler/asset.template.dart' as _ref1;
import 'src/angular_compiler/emitter/injector.template.dart' as _ref2;
import 'src/angular_compiler/emitter/reflector.template.dart' as _ref3;
import 'src/angular_compiler/outliner.template.dart' as _ref4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
