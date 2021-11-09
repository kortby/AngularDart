// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'compile_element.dart';
import '../compile_metadata.template.dart' as _ref0;
import '../i18n/message.template.dart' as _ref1;
import '../identifiers.template.dart' as _ref2;
import '../output/output_ast.template.dart' as _ref3;
import '../template_ast.template.dart' as _ref4;
import 'compile_query.template.dart' as _ref5;
import 'compile_view.template.dart' as _ref6;
import 'ir/provider_resolver.template.dart' as _ref7;
import 'ir/provider_source.template.dart' as _ref8;
import 'package:angular/src/meta.template.dart' as _ref9;
import 'provider_forest.template.dart' as _ref10;

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
