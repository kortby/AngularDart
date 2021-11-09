// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'model.dart';
import '../expression_parser/ast.template.dart' as _ref0;
import '../output/output_ast.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/analyzed_class.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/i18n/message.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/security.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/template_ast.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/view_compiler/compile_element.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/view_compiler/compile_view.template.dart' as _ref8;
import 'package:angular_compiler/v1/src/compiler/view_compiler/ir/provider_source.template.dart' as _ref9;
import 'package:angular_compiler/v1/src/compiler/view_compiler/view_compiler_utils.template.dart' as _ref10;

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
}
