// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_style_linker.dart';
import 'compile_view.template.dart' as _ref0;
import 'package:angular/src/meta.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/identifiers.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/view_type.template.dart' as _ref4;

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
