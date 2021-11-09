// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'find_components.dart';
import 'annotation_information.template.dart' as _ref0;
import 'compile_metadata.template.dart' as _ref1;
import 'component_visitor_exceptions.template.dart' as _ref2;
import 'dart_object_utils.template.dart' as _ref3;
import 'lifecycle_hooks.template.dart' as _ref4;
import 'package:angular/src/meta.template.dart' as _ref5;
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/analyzed_class.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref8;
import 'package:angular_compiler/v1/src/compiler/expression_parser/ast.template.dart' as _ref9;
import 'package:angular_compiler/v1/src/compiler/output/convert.template.dart' as _ref10;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref11;
import 'package:angular_compiler/v1/src/compiler/template_compiler.template.dart' as _ref12;
import 'package:angular_compiler/v1/src/compiler/view_compiler/property_binder.template.dart' as _ref13;
import 'package:angular_compiler/v1/src/source_gen/common/annotation_matcher.template.dart' as _ref14;
import 'package:angular_compiler/v1/src/source_gen/common/url_resolver.template.dart' as _ref15;
import 'package:angular_compiler/v2/analyzer.template.dart' as _ref16;
import 'package:angular_compiler/v2/context.template.dart' as _ref17;
import 'pipe_visitor.template.dart' as _ref18;

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
}
