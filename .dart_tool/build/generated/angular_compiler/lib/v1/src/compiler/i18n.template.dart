// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'i18n.dart';
import 'i18n/builder.template.dart' as _ref0;
import 'i18n/message.template.dart' as _ref1;
import 'i18n/message.template.dart' as _ref2;
import 'i18n/metadata.template.dart' as _ref3;
import 'i18n/metadata.template.dart' as _ref4;
import 'package:angular_compiler/v2/context.template.dart' as _ref5;
import 'template_ast.template.dart' as _ref6;

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
}
