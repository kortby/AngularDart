// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'style_encapsulation.dart';
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref0;
import 'package:angular/src/runtime/dom_helpers.template.dart' as _ref1;
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
