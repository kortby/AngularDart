// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'bound_value_converter.dart';
import 'expression_converter.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/i18n/message.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/view_compiler/compile_view.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/view_compiler/constants.template.dart' as _ref6;
import 'package:angular_compiler/v2/context.template.dart' as _ref7;

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
