// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'interpolation_utils.dart';
import 'package:angular_compiler/v1/src/compiler/expression_parser/ast.template.dart' as _ref0;
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
