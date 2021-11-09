// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'parse_utils.dart';
import '../expression_parser/ast.template.dart' as _ref0;
import 'constants.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
