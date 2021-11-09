// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'code_builder.dart';
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref0;
import 'package:angular_compiler/v1/cli.template.dart' as _ref1;
import 'package:angular_compiler/v2/context.template.dart' as _ref2;
import 'template_compiler_outputs.template.dart' as _ref3;

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
