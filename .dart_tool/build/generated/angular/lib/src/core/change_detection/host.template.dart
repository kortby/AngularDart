// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'host.dart';
import 'change_detector_ref.template.dart' as _ref0;
import 'package:angular/src/core/linker/views/view.template.dart' as _ref1;
import 'package:angular/src/runtime/check_binding.template.dart' as _ref2;
import 'package:angular/src/utilities.template.dart' as _ref3;

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
}
