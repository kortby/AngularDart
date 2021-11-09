// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'provider_parser.dart';
import 'compile_metadata.template.dart' as _ref0;
import 'identifiers.template.dart' as _ref1;
import 'package:angular/src/meta.template.dart' as _ref2;
import 'package:angular_compiler/v2/context.template.dart' as _ref3;
import 'template_ast.template.dart' as _ref4;

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
