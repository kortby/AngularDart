// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'angular_compiler.dart';
import 'package:angular/src/meta.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/ast_directive_normalizer.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/compiler_utils.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/semantic_analysis/directive_converter.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/source_module.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/template_compiler.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/template_parser/ast_template_parser.template.dart' as _ref8;
import 'package:angular_compiler/v1/src/source_gen/template_compiler/component_visitor_exceptions.template.dart' as _ref9;
import 'package:angular_compiler/v1/src/source_gen/template_compiler/find_components.template.dart' as _ref10;

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
