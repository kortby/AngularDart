// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'utilities.dart';
import 'utilities/is_dev_mode.template.dart' as _ref0;
import 'utilities/is_primitive.template.dart' as _ref1;
import 'utilities/unsafe_cast.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
