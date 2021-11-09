// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'template_optimize.dart';
import 'analyzed_class.template.dart' as _ref0;
import 'compile_metadata.template.dart' as _ref1;
import 'identifiers.template.dart' as _ref2;
import 'template_ast.template.dart' as _ref3;
import 'template_parser/recursive_template_visitor.template.dart' as _ref4;

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
