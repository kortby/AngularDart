// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dependencies.dart';
import '../common.template.dart' as _ref0;
import '../types.template.dart' as _ref1;
import 'package:angular_compiler/v1/cli.template.dart' as _ref2;
import 'package:angular_compiler/v2/analyzer.template.dart' as _ref3;
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
