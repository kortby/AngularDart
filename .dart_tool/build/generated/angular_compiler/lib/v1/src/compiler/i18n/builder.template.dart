// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'builder.dart';
import 'message.template.dart' as _ref0;
import 'metadata.template.dart' as _ref1;
import 'package:angular_compiler/v2/context.template.dart' as _ref2;

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
