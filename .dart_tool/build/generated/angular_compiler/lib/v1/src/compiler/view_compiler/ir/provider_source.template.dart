// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'provider_source.dart';
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
