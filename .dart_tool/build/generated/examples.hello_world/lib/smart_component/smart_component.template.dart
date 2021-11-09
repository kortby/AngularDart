// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'smart_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:examples.hello_world/smart_component/smart_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'smart_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime/interpolate.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import12;

final List<Object> styles$SmartComponent = [import0.styles];

class ViewSmartComponent0 extends import1.ComponentView<import2.SmartComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  static import4.ComponentStyles? _componentStyles;
  ViewSmartComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.unsafeCast(import8.document.createElement('smart-co'));
  }
  static String? get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:examples.hello_world/lib/smart_component/smart_component.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import9.appendElement<import8.HtmlElement>(doc, parentRenderNode, 'h1');
    this.addShimC(_el_0);
    final _text_1 = import9.appendText(_el_0, import10.interpolateString0(_ctx.title));
    final _el_2 = import9.appendElement<import8.HtmlElement>(doc, parentRenderNode, 'p');
    this.addShimC(_el_2);
    final _text_3 = import9.appendText(_el_2, 'Parent to child ');
    _el_2.append(this._textBinding_4.element);
    final _el_5 = import9.appendElement<import8.ButtonElement>(doc, parentRenderNode, 'button');
    this.addShimC(_el_5);
    final _text_6 = import9.appendText(_el_5, 'get name');
    _el_5.addEventListener('click', this.eventHandler0(_ctx.getName));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_4.updateText(import10.interpolateString0(_ctx.name)) /* REF:package:examples.hello_world/smart_component/smart_component.html:38:48 */;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$SmartComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _SmartComponentNgFactory = ComponentFactory<import2.SmartComponent>('smart-co', viewFactory_SmartComponentHost0);
ComponentFactory<import2.SmartComponent> get SmartComponentNgFactory {
  return _SmartComponentNgFactory;
}

ComponentFactory<import2.SmartComponent> createSmartComponentFactory() {
  return ComponentFactory('smart-co', viewFactory_SmartComponentHost0);
}

final List<Object> styles$SmartComponentHost = const [];

class _ViewSmartComponentHost0 extends import12.HostView<import2.SmartComponent> {
  @override
  void build() {
    this.componentView = ViewSmartComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.SmartComponent();
    this.initRootNode(_el_0);
  }
}

import12.HostView<import2.SmartComponent> viewFactory_SmartComponentHost0() {
  return _ViewSmartComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SmartComponent, createSmartComponentFactory());
  _ref0.initReflector();
}
