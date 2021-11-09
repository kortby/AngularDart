// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'devtools.dart';
import 'package:angular_compiler/v1/src/compiler/identifiers.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
