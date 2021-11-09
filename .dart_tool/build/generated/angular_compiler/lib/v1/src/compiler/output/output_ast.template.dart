// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'output_ast.dart';
import '../compile_metadata.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
