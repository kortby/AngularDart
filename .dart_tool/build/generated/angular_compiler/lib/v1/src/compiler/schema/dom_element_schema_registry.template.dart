// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_element_schema_registry.dart';
import 'element_schema_registry.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/security.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
