// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'replace_pipe.dart';
import 'invalid_pipe_argument_exception.template.dart' as _ref0;
import 'package:angular/src/meta.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
