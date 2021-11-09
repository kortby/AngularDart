// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'learn_direct_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:examples.hello_world/learn_direct/text_zoom_directive.template.dart' as _ref1;
import 'package:examples.hello_world/learn_direct/learn_direct_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'learn_direct_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'text_zoom_directive.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/devtools.dart' as import13;
import 'package:angular/src/runtime/check_binding.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import16;
import 'package:angular/src/runtime/text_binding.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import 'package:angular/src/runtime/interpolate.dart' as import19;
import 'package:angular/src/core/linker/views/host_view.dart' as import20;

final List<Object> styles$LearnDirectComponent = [import0.styles];

class ViewLearnDirectComponent0 extends import1.ComponentView<import2.LearnDirectComponent> {
  late final ViewContainer _appEl_6;
  late final import4.NgFor _NgFor_6_9;
  late final import5.TextZoomDirective _TextZoomDirective_7_5;
  Object? _expr_0;
  Object? _expr_1;
  late final import6.HtmlElement _el_0;
  static import7.ComponentStyles? _componentStyles;
  ViewLearnDirectComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import10.unsafeCast(import6.document.createElement('learn-direct'));
  }
  static String? get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:examples.hello_world/lib/learn_direct/learn_direct_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    this._el_0 = import11.appendElement<import6.HtmlElement>(doc, parentRenderNode, 'h1');
    this.addShimC(this._el_0);
    final _text_1 = import11.appendText(this._el_0, 'learn direct');
    final _el_2 = import11.appendElement<import6.ButtonElement>(doc, parentRenderNode, 'button');
    this.addShimC(_el_2);
    final _text_3 = import11.appendText(_el_2, 'toggle show');
    final _el_4 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_4, 'di');
    this.addShimC(_el_4);
    final _el_5 = import11.appendElement<import6.UListElement>(doc, _el_4, 'ul');
    this.addShimC(_el_5);
    final _anchor_6 = import11.appendAnchor(_el_5);
    this._appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    var _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_LearnDirectComponent1);
    this._NgFor_6_9 = import4.NgFor(this._appEl_6, _TemplateRef_6_8);
    if (import13.isDevToolsEnabled) {
      import13.Inspector.instance.registerDirective(_anchor_6, this._NgFor_6_9);
    }
    final _el_7 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_7, 'test');
    import11.setAttribute(_el_7, 'myTextZoom', '');
    this.addShimC(_el_7);
    this._TextZoomDirective_7_5 = import5.TextZoomDirective(_el_7);
    if (import13.isDevToolsEnabled) {
      import13.Inspector.instance.registerDirective(_el_7, this._TextZoomDirective_7_5);
    }
    final _text_8 = import11.appendText(_el_7, 'Test');
    _el_2.addEventListener('click', this.eventHandler0(_ctx.toggleVisible));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if ((_ctx.trackByStudentId != null)) {
        if (import13.isDevToolsEnabled) {
          import13.Inspector.instance.recordInput(this._NgFor_6_9, 'ngForTrackBy', _ctx.trackByStudentId);
        }
        this._NgFor_6_9.ngForTrackBy = _ctx.trackByStudentId /* REF:package:examples.hello_world/learn_direct/learn_direct_component.html:134:192 */;
      }
    }
    final currVal_1 = _ctx.students;
    if (import14.checkBinding(this._expr_1, currVal_1, 'students', 'package:examples.hello_world/learn_direct/learn_direct_component.html')) {
      if (import13.isDevToolsEnabled) {
        import13.Inspector.instance.recordInput(this._NgFor_6_9, 'ngForOf', currVal_1);
      }
      this._NgFor_6_9.ngForOf = currVal_1 /* REF:package:examples.hello_world/learn_direct/learn_direct_component.html:134:192 */;
      this._expr_1 = currVal_1;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_6_9.ngDoCheck();
    }
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.isVisible;
    if (import14.checkBinding(this._expr_0, currVal_0, 'isVisible', 'package:examples.hello_world/learn_direct/learn_direct_component.html')) {
      import11.setProperty(this._el_0, 'hidden', currVal_0) /* REF:package:examples.hello_world/learn_direct/learn_direct_component.html:4:24 */;
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_6.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$LearnDirectComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _LearnDirectComponentNgFactory = ComponentFactory<import2.LearnDirectComponent>('learn-direct', viewFactory_LearnDirectComponentHost0);
ComponentFactory<import2.LearnDirectComponent> get LearnDirectComponentNgFactory {
  return _LearnDirectComponentNgFactory;
}

ComponentFactory<import2.LearnDirectComponent> createLearnDirectComponentFactory() {
  return ComponentFactory('learn-direct', viewFactory_LearnDirectComponentHost0);
}

class _ViewLearnDirectComponent1 extends import16.EmbeddedView<import2.LearnDirectComponent> {
  final import17.TextBinding _textBinding_1 = import17.TextBinding();
  final import17.TextBinding _textBinding_3 = import17.TextBinding();
  _ViewLearnDirectComponent1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = import10.unsafeCast(doc.createElement('li'));
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    final _text_2 = import11.appendText(_el_0, '- ');
    _el_0.append(this._textBinding_3.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_student = import10.unsafeCast<import2.Student>(this.locals['\$implicit']);
    this._textBinding_1.updateTextWithPrimitive(local_student.id) /* REF:package:examples.hello_world/learn_direct/learn_direct_component.html:193:207 */;
    this._textBinding_3.updateText(import19.interpolateString0(local_student.name)) /* REF:package:examples.hello_world/learn_direct/learn_direct_component.html:209:225 */;
  }
}

import16.EmbeddedView<void> viewFactory_LearnDirectComponent1(import18.RenderView parentView, int parentIndex) {
  return _ViewLearnDirectComponent1(parentView, parentIndex);
}

final List<Object> styles$LearnDirectComponentHost = const [];

class _ViewLearnDirectComponentHost0 extends import20.HostView<import2.LearnDirectComponent> {
  @override
  void build() {
    this.componentView = ViewLearnDirectComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.LearnDirectComponent();
    this.initRootNode(_el_0);
  }
}

import20.HostView<import2.LearnDirectComponent> viewFactory_LearnDirectComponentHost0() {
  return _ViewLearnDirectComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(LearnDirectComponent, createLearnDirectComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
