// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'change_detection.dart';
import 'change_detection/change_detection.template.dart' as _ref0;
import 'change_detection/differs/default_iterable_differ.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
