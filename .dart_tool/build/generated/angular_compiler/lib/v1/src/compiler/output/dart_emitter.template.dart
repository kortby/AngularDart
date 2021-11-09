// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dart_emitter.dart';
import '../compile_metadata.template.dart' as _ref0;
import 'abstract_emitter.template.dart' as _ref1;
import 'output_ast.template.dart' as _ref2;
import 'path_util.template.dart' as _ref3;

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
}
