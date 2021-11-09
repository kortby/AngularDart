// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_view_utils.dart';
import 'package:angular/src/core/application_tokens.template.dart' as _ref0;
import 'package:angular/src/runtime/dom_events.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
