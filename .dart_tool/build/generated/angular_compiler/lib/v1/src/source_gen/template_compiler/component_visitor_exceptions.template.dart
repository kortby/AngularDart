// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'component_visitor_exceptions.dart';
import 'package:angular_compiler/v1/cli.template.dart' as _ref0;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref1;
import 'package:angular_compiler/v1/src/source_gen/common/annotation_matcher.template.dart' as _ref2;
import 'package:angular_compiler/v2/context.template.dart' as _ref3;

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
}
