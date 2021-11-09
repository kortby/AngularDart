// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'compile_metadata.dart';
import 'component_visitor_exceptions.template.dart' as _ref0;
import 'dart_object_utils.template.dart' as _ref1;
import 'package:angular/src/meta.template.dart' as _ref2;
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref3;
import 'package:angular_compiler/v1/cli.template.dart' as _ref4;
import 'package:angular_compiler/v1/src/compiler/compile_metadata.template.dart' as _ref5;
import 'package:angular_compiler/v1/src/compiler/output/convert.template.dart' as _ref6;
import 'package:angular_compiler/v1/src/compiler/output/output_ast.template.dart' as _ref7;
import 'package:angular_compiler/v1/src/source_gen/common/url_resolver.template.dart' as _ref8;
import 'package:angular_compiler/v2/analyzer.template.dart' as _ref9;
import 'package:angular_compiler/v2/context.template.dart' as _ref10;
import 'provider_inference.template.dart' as _ref11;

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
}
