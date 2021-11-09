// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'convert.dart';
import '../compile_metadata.template.dart' as _ref0;
import 'output_ast.template.dart' as _ref1;
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/source_gen/common/url_resolver.template.dart' as _ref3;

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
