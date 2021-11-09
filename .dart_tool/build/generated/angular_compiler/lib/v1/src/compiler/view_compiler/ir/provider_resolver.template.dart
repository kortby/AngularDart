// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'provider_resolver.dart';
import '../../compile_metadata.template.dart' as _ref0;
import '../../i18n/message.template.dart' as _ref1;
import '../../output/output_ast.template.dart' as _ref2;
import '../../template_ast.template.dart' as _ref3;
import '../../view_compiler/compile_element.template.dart' as _ref4;
import '../../view_compiler/view_compiler_utils.template.dart' as _ref5;
import 'provider_source.template.dart' as _ref6;

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
