// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_compiler.dart';
import 'compile_metadata.template.dart' as _ref0;
import 'compiler_utils.template.dart' as _ref1;
import 'ir/model.template.dart' as _ref2;
import 'output/abstract_emitter.template.dart' as _ref3;
import 'output/output_ast.template.dart' as _ref4;
import 'source_module.template.dart' as _ref5;
import 'stylesheet_compiler/style_compiler.template.dart' as _ref6;
import 'view_compiler/directive_compiler.template.dart' as _ref7;
import 'view_compiler/view_compiler.template.dart' as _ref8;

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
  _ref7.initReflector();
  _ref8.initReflector();
}
