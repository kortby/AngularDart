// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'provider_forest.dart';
import 'constants.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref2;
import 'view_compiler_utils.template.dart' as _ref3;

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
