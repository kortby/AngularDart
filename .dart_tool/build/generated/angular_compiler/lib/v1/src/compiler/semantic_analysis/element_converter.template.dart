// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'element_converter.dart';
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/ir/model.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/compiler/optimize_ir/merge_events.template.dart' as _ref2;
import 'package:angular_compiler/v1/src/compiler/optimize_ir/optimize_lifecycles.template.dart' as _ref3;
import 'package:angular_compiler/v1/src/compiler/semantic_analysis/binding_converter.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/semantic_analysis/matched_directive_converter.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/template_ast.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/view_compiler/compile_element.template.dart' as _ref7;

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
