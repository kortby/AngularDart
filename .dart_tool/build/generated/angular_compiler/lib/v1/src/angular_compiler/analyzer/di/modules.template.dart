// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modules.dart';
import '../common.template.dart' as _ref0;
import '../types.template.dart' as _ref1;
import 'providers.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
