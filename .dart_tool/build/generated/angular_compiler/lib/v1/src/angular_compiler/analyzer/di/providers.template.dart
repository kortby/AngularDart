// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'providers.dart';
import '../common.template.dart' as _ref0;
import '../link.template.dart' as _ref1;
import '../types.template.dart' as _ref2;
import 'dependencies.template.dart' as _ref3;
import 'package:angular_compiler/v2/context.template.dart' as _ref4;
import 'tokens.template.dart' as _ref5;

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
