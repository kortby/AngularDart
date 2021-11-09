// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'property_binder.dart';
import 'bound_value_converter.template.dart' as _ref0;
import 'compile_element.template.dart' as _ref1;
import 'compile_method.template.dart' as _ref2;
import 'compile_view.template.dart' as _ref3;
import 'constants.template.dart' as _ref4;
import 'interpolation_utils.template.dart' as _ref5;
import 'ir/view_storage.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/expression_parser/ast.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/identifiers.template.dart' as _ref8;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref9;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref10;
import 'package:angular_compiler/v1/src/compiler/view_compiler/view_compiler_utils.template.dart' as _ref11;
import 'update_statement_visitor.template.dart' as _ref12;
import 'view_name_resolver.template.dart' as _ref13;

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
  _ref12.initReflector();
  _ref13.initReflector();
}
