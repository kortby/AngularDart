// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'compile_query.dart';
import '../compile_metadata.template.dart' as _ref0;
import '../identifiers.template.dart' as _ref1;
import '../output/output_ast.template.dart' as _ref2;
import 'compile_element.template.dart' as _ref3;
import 'compile_view.template.dart' as _ref4;
import 'ir/provider_source.template.dart' as _ref5;
import 'ir/view_storage.template.dart' as _ref6;
import 'view_compiler_utils.template.dart' as _ref7;

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
