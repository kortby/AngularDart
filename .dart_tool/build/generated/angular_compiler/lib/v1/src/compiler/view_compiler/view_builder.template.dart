// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_builder.dart';
import 'compile_element.template.dart' as _ref0;
import 'compile_view.template.dart' as _ref1;
import 'constants.template.dart' as _ref2;
import 'package:angular/src/meta.template.dart' as _ref3;
import 'package:angular_compiler/v1/cli.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/analyzed_class.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/expression_parser/ast.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/expression_parser/parser.template.dart' as _ref8;
import 'package:angular_compiler/v1/src/compiler/identifiers.template.dart' as _ref9;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref10;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref11;
import 'package:angular_compiler/v1/src/compiler/selector.template.dart' as _ref12;
import 'package:angular_compiler/v1/src/compiler/semantic_analysis/binding_converter.template.dart' as _ref13;
import 'package:angular_compiler/v1/src/compiler/template_ast.template.dart' as _ref14;
import 'package:angular_compiler/v1/src/compiler/view_compiler/bound_value_converter.template.dart' as _ref15;
import 'package:angular_compiler/v1/src/compiler/view_compiler/update_statement_visitor.template.dart' as _ref16;
import 'package:angular_compiler/v1/src/compiler/view_type.template.dart' as _ref17;
import 'package:angular_compiler/v2/context.template.dart' as _ref18;
import 'provider_forest.template.dart' as _ref19;
import 'view_compiler_utils.template.dart' as _ref20;
import 'view_style_linker.template.dart' as _ref21;

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
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
}
