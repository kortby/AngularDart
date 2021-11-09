// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reflector.dart';
import '../analyzer/di/dependencies.template.dart' as _ref0;
import '../analyzer/di/tokens.template.dart' as _ref1;
import '../analyzer/link.template.dart' as _ref2;
import '../analyzer/reflector.template.dart' as _ref3;
import 'package:angular_compiler/v2/context.template.dart' as _ref4;

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
