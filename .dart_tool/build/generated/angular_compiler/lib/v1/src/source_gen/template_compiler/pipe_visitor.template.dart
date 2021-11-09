// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'pipe_visitor.dart';
import 'annotation_information.template.dart' as _ref0;
import 'compile_metadata.template.dart' as _ref1;
import 'component_visitor_exceptions.template.dart' as _ref2;
import 'dart_object_utils.template.dart' as _ref3;
import 'lifecycle_hooks.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/output/convert.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/source_gen/common/annotation_matcher.template.dart' as _ref7;
import 'package:angular_compiler/v2/context.template.dart' as _ref8;

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
}
