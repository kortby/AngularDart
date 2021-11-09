// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'outliner.dart';
import 'analyzer.template.dart' as _ref0;
import 'outliner/collect_type_parameters.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
