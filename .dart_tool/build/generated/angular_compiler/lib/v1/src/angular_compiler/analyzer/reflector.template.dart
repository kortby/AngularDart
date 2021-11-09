// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reflector.dart';
import 'di/dependencies.template.dart' as _ref0;
import 'package:angular_compiler/v2/context.template.dart' as _ref1;
import 'types.template.dart' as _ref2;

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
