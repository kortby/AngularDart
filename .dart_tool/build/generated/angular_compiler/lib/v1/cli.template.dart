// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'cli.dart';
import 'src/angular_compiler/cli/builder.template.dart' as _ref0;
import 'src/angular_compiler/cli/flags.template.dart' as _ref1;
import 'src/angular_compiler/cli/logging.template.dart' as _ref2;
import 'src/angular_compiler/cli/messages.template.dart' as _ref3;

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
