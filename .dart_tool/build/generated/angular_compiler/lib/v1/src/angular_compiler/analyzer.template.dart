// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'analyzer.dart';
import 'analyzer/common.template.dart' as _ref0;
import 'analyzer/di/dependencies.template.dart' as _ref1;
import 'analyzer/di/global_singleton_services.template.dart' as _ref2;
import 'analyzer/di/injector.template.dart' as _ref3;
import 'analyzer/di/modules.template.dart' as _ref4;
import 'analyzer/di/providers.template.dart' as _ref5;
import 'analyzer/di/tokens.template.dart' as _ref6;
import 'analyzer/link.template.dart' as _ref7;
import 'analyzer/reflector.template.dart' as _ref8;
import 'analyzer/types.template.dart' as _ref9;
import 'analyzer/view/directive.template.dart' as _ref10;
import 'analyzer/view/typed_reader.template.dart' as _ref11;

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
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
}
