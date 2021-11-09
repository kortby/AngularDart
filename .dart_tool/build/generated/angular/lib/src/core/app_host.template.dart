// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_host.dart';
import 'package:angular/src/di/injector.template.dart' as _ref0;
import 'package:angular/src/testability.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
