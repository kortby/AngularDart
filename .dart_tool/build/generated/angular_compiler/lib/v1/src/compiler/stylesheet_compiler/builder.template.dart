// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'builder.dart';
import 'package:angular_compiler/v1/cli.template.dart' as _ref0;
import 'processor.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
