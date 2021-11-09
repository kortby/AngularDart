// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'kythe_utils.dart';
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/template_compiler.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/template_compiler.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/template_parser/ast_template_parser.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/source_gen/template_compiler/component_visitor_exceptions.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/source_gen/template_compiler/find_components.template.dart' as _ref5;
import 'package:angular_compiler/v2/context.template.dart' as _ref6;

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
