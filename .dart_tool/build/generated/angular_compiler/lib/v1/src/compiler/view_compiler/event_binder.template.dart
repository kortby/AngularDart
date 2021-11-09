// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'event_binder.dart';
import 'compile_element.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/view_compiler/bound_value_converter.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/view_compiler/ir/provider_source.template.dart' as _ref3;

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
