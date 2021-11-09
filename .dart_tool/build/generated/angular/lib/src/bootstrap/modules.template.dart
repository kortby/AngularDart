// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modules.dart';
import 'package:angular/src/core/application_tokens.template.dart' as _ref0;
import 'package:angular/src/core/exception_handler.template.dart' as _ref1;
import 'package:angular/src/core/linker/component_loader.template.dart' as _ref2;
import 'package:angular/src/di/injector.template.dart' as _ref3;

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
