// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'validators.dart';
import '../model.template.dart' as _ref0;
import '../validators.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'validators.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime/check_binding.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class MinLengthValidatorNgCd extends import0.DirectiveChangeDetector {
  final import1.MinLengthValidator instance;
  Object? _expr_0;
  MinLengthValidatorNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.minLengthAttr;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateAttribute(el, 'minlength', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

class MaxLengthValidatorNgCd extends import0.DirectiveChangeDetector {
  final import1.MaxLengthValidator instance;
  Object? _expr_0;
  MaxLengthValidatorNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.maxLengthAttr;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateAttribute(el, 'maxlength', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

class PatternValidatorNgCd extends import0.DirectiveChangeDetector {
  final import1.PatternValidator instance;
  Object? _expr_0;
  PatternValidatorNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.pattern;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateAttribute(el, 'pattern', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

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
