// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'context.dart';
import 'package:angular/src/utilities.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/angular_compiler/cli/messages.template.dart' as _ref1;
import 'package:angular_compiler/v2/asset.template.dart' as _ref2;
import 'src/context/build_error.template.dart' as _ref3;
import 'src/context/build_error.template.dart' as _ref4;

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
  _ref4.initReflector();
}
