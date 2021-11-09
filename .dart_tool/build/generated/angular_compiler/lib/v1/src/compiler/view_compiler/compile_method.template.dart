// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'compile_method.dart';
import '../output/output_ast.template.dart' as _ref0;
import 'constants.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
