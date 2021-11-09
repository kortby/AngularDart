// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'main.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:examples.hello_world/app_component.template.dart' as _ref2;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'main.dart' as import1;
import 'package:examples.hello_world/app_component.template.dart' as import2;
import 'package:examples.hello_world/app_component.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<Object> styles$HelloWorldComponent = const [];

class ViewHelloWorldComponent0 extends import0.ComponentView<import1.HelloWorldComponent> {
  late final import2.ViewAppComponent0 _compView_0;
  late final import3.AppComponent _AppComponent_0_5;
  static import4.ComponentStyles? _componentStyles;
  ViewHelloWorldComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.unsafeCast(import8.document.createElement('my-app'));
  }
  static String? get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:examples.hello_world/web/main.dart' : null);
  }

  @override
  void build() {
    final parentRenderNode = this.initViewRoot();
    this._compView_0 = import2.ViewAppComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this._AppComponent_0_5 = import3.AppComponent();
    this._compView_0.create(this._AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import4.ComponentStyles.unscoped(styles$HelloWorldComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _HelloWorldComponentNgFactory = ComponentFactory<import1.HelloWorldComponent>('my-app', viewFactory_HelloWorldComponentHost0);
ComponentFactory<import1.HelloWorldComponent> get HelloWorldComponentNgFactory {
  return _HelloWorldComponentNgFactory;
}

ComponentFactory<import1.HelloWorldComponent> createHelloWorldComponentFactory() {
  return ComponentFactory('my-app', viewFactory_HelloWorldComponentHost0);
}

final List<Object> styles$HelloWorldComponentHost = const [];

class _ViewHelloWorldComponentHost0 extends import10.HostView<import1.HelloWorldComponent> {
  @override
  void build() {
    this.componentView = ViewHelloWorldComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import1.HelloWorldComponent();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import1.HelloWorldComponent> viewFactory_HelloWorldComponentHost0() {
  return _ViewHelloWorldComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HelloWorldComponent, createHelloWorldComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
