// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'style_compiler.dart';
import 'package:angular_compiler/v1/cli.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/compiler_utils.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/style_url_resolver.template.dart' as _ref5;
import 'shadow_css.template.dart' as _ref6;

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
  _ref5.initReflector();
  _ref6.initReflector();
}
