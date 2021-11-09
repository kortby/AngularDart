// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'todo_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:examples.hello_world/Todos/todo_service.template.dart' as _ref1;
import 'package:examples.hello_world/Todos/todo_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'todo_component.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<Object> styles$TodoComponent = [import0.styles];

class ViewTodoComponent0 extends import1.ComponentView<import2.TodoComponent> {
  static import3.ComponentStyles? _componentStyles;
  ViewTodoComponent0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.unsafeCast(import7.document.createElement('my-todo'));
  }
  static String? get _debugComponentUrl {
    return (import6.isDevMode ? 'asset:examples.hello_world/lib/Todos/todo_component.dart' : null);
  }

  @override
  void build() {
    final parentRenderNode = this.initViewRoot();
    final doc = import7.document;
    final _el_0 = import8.appendElement<import7.HtmlElement>(doc, parentRenderNode, 'h3');
    this.addShimC(_el_0);
    final _text_1 = import8.appendText(_el_0, 'todo');
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$TodoComponent, _debugComponentUrl));
      if (import6.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _TodoComponentNgFactory = ComponentFactory<import2.TodoComponent>('my-todo', viewFactory_TodoComponentHost0);
ComponentFactory<import2.TodoComponent> get TodoComponentNgFactory {
  return _TodoComponentNgFactory;
}

ComponentFactory<import2.TodoComponent> createTodoComponentFactory() {
  return ComponentFactory('my-todo', viewFactory_TodoComponentHost0);
}

final List<Object> styles$TodoComponentHost = const [];

class _ViewTodoComponentHost0 extends import10.HostView<import2.TodoComponent> {
  @override
  void build() {
    this.componentView = ViewTodoComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.TodoComponent();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.TodoComponent> viewFactory_TodoComponentHost0() {
  return _ViewTodoComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TodoComponent, createTodoComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
