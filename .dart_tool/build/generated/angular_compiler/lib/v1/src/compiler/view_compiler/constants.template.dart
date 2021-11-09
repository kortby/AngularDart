// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'constants.dart';
import '../compile_metadata.template.dart' as _ref0;
import '../identifiers.template.dart' as _ref1;
import '../output/output_ast.template.dart' as _ref2;

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
