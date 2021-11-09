// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'di_providers.dart';
import 'di_tokens.template.dart' as _ref0;
import 'package:angular/src/utilities.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
