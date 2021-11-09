// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_parser.dart';
import 'compile_metadata.template.dart' as _ref0;
import 'expression_parser/parser.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/js_split_facade.template.dart' as _ref2;
import 'package:angular_compiler/v2/context.template.dart' as _ref3;
import 'schema/element_schema_registry.template.dart' as _ref4;
import 'security.template.dart' as _ref5;
import 'selector.template.dart' as _ref6;
import 'template_ast.template.dart' as _ref7;

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
}
