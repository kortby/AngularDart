// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_name_resolver.dart';
import '../output/output_ast.template.dart' as _ref0;
import 'compile_pipe.template.dart' as _ref1;
import 'compile_view.template.dart' as _ref2;
import 'constants.template.dart' as _ref3;
import 'expression_converter.template.dart' as _ref4;
import 'view_compiler_utils.template.dart' as _ref5;

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
}
