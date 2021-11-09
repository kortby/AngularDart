// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:examples.hello_world/hero/horo_list/hero_list_component.template.dart' as _ref1;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'hero_component.dart' as import1;
import 'horo_list/hero_list_component.template.dart' as import2;
import 'horo_list/hero_list_component.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import11;

final List<Object> styles$HeroesComponent = const [];

class ViewHeroesComponent0 extends import0.ComponentView<import1.HeroesComponent> {
  late final import2.ViewHeroListComponent0 _compView_2;
  late final import3.HeroListComponent _HeroListComponent_2_5;
  static import4.ComponentStyles? _componentStyles;
  ViewHeroesComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.unsafeCast(import8.document.createElement('my-heroes'));
  }
  static String? get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:examples.hello_world/lib/hero/hero_component.dart' : null);
  }

  @override
  void build() {
    final parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import9.appendElement<import8.HtmlElement>(doc, parentRenderNode, 'h2');
    final _text_1 = import9.appendText(_el_0, 'Heroes');
    this._compView_2 = import2.ViewHeroListComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    parentRenderNode.append(_el_2);
    this._HeroListComponent_2_5 = import3.HeroListComponent();
    this._compView_2.create(this._HeroListComponent_2_5);
  }

  @override
  void detectChangesInternal() {
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import4.ComponentStyles.unscoped(styles$HeroesComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _HeroesComponentNgFactory = ComponentFactory<import1.HeroesComponent>('my-heroes', viewFactory_HeroesComponentHost0);
ComponentFactory<import1.HeroesComponent> get HeroesComponentNgFactory {
  return _HeroesComponentNgFactory;
}

ComponentFactory<import1.HeroesComponent> createHeroesComponentFactory() {
  return ComponentFactory('my-heroes', viewFactory_HeroesComponentHost0);
}

final List<Object> styles$HeroesComponentHost = const [];

class _ViewHeroesComponentHost0 extends import11.HostView<import1.HeroesComponent> {
  @override
  void build() {
    this.componentView = ViewHeroesComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import1.HeroesComponent();
    this.initRootNode(_el_0);
  }
}

import11.HostView<import1.HeroesComponent> viewFactory_HeroesComponentHost0() {
  return _ViewHeroesComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroesComponent, createHeroesComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
}
