// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ast_directive_normalizer.dart';
import 'compile_metadata.template.dart' as _ref0;
import 'package:angular/src/meta.template.dart' as _ref1;
import 'package:angular_compiler/v1/angular_compiler.template.dart' as _ref2;
import 'package:angular_compiler/v1/cli.template.dart' as _ref3;
import 'package:angular_compiler/v2/context.template.dart' as _ref4;
import 'parse_util.template.dart' as _ref5;
import 'style_url_resolver.template.dart' as _ref6;

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
}
