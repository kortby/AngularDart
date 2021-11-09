// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_ast.dart';
import 'compile_metadata.template.dart' as _ref0;
import 'expression_parser/ast.template.dart' as _ref1;
import 'i18n/message.template.dart' as _ref2;
import 'output/output_ast.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/output/convert.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/selector.template.dart' as _ref5;
import 'security.template.dart' as _ref6;

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
