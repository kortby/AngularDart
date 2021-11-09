// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_processor.dart';
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref0;
import 'package:angular_compiler/v1/cli.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/module/ng_compiler_module.template.dart' as _ref2;
import 'resolve_reflectables.template.dart' as _ref3;
import 'template_compiler_outputs.template.dart' as _ref4;

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
