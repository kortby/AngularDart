// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'safe_html_adapter.dart';
import 'html_sanitizer.template.dart' as _ref0;
import 'style_sanitizer.template.dart' as _ref1;
import 'url_sanitizer.template.dart' as _ref2;

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
