// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'injector.dart';
import '../link.template.dart' as _ref0;
import '../types.template.dart' as _ref1;
import 'dependencies.template.dart' as _ref2;
import 'global_singleton_services.template.dart' as _ref3;
import 'modules.template.dart' as _ref4;
import 'package:angular_compiler/v1/cli.template.dart' as _ref5;
import 'package:angular_compiler/v2/context.template.dart' as _ref6;
import 'providers.template.dart' as _ref7;
import 'tokens.template.dart' as _ref8;

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
  _ref8.initReflector();
}
