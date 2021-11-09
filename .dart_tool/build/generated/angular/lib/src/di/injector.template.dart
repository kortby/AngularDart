// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'injector.dart';
import 'errors.template.dart' as _ref0;
import 'package:angular/src/meta.template.dart' as _ref1;
import 'package:angular/src/utilities.template.dart' as _ref2;

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
