// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'missing_directives_validator.dart';
import 'package:angular_compiler/v1/src/compiler/aria_attributes.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/html_events.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/schema/element_schema_registry.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/schema/skip_selectors_validator.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/selector.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/template_ast.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/template_parser/recursive_template_visitor.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/view_compiler/view_compiler_utils.template.dart' as _ref7;
import 'package:angular_compiler/v2/context.template.dart' as _ref8;

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
