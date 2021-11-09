// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'update_statement_visitor.dart';
import 'devtools.template.dart' as _ref0;
import 'interpolation_utils.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/identifiers.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/security.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/view_compiler/compile_view.template.dart' as _ref8;
import 'package:angular_compiler/v2/context.template.dart' as _ref9;

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
}
