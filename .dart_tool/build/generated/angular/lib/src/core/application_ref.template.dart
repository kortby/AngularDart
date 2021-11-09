// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'application_ref.dart';
import 'change_detection/host.template.dart' as _ref0;
import 'linker/component_factory.template.dart' as _ref1;
import 'package:angular/src/core/exception_handler.template.dart' as _ref2;
import 'package:angular/src/devtools.template.dart' as _ref3;
import 'package:angular/src/di/injector.template.dart' as _ref4;
import 'package:angular/src/testability.template.dart' as _ref5;
import 'package:angular/src/utilities.template.dart' as _ref6;
import 'zone/ng_zone.template.dart' as _ref7;

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
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
