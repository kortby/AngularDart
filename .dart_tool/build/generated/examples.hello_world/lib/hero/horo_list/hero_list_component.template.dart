// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_list_component.dart';
import 'package:angular/src/reflector.dart' as _ngRef;
import '../hero.template.dart' as _ref0;
import 'mock_heros.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'hero_list_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/utilities.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/devtools.dart' as import11;
import 'package:angular/src/runtime/check_binding.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import '../hero.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;

final List<Object> styles$HeroListComponent = const [];

class ViewHeroListComponent0 extends import0.ComponentView<import1.HeroListComponent> {
  late final ViewContainer _appEl_0;
  late final import3.NgFor _NgFor_0_9;
  static import4.ComponentStyles? _componentStyles;
  ViewHeroListComponent0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.unsafeCast(import8.document.createElement('hero-list'));
  }
  static String? get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:examples.hello_world/lib/hero/horo_list/hero_list_component.dart' : null);
  }

  @override
  void build() {
    final parentRenderNode = this.initViewRoot();
    final _anchor_0 = import9.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    var _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_HeroListComponent1);
    this._NgFor_0_9 = import3.NgFor(this._appEl_0, _TemplateRef_0_8);
    if (import11.isDevToolsEnabled) {
      import11.Inspector.instance.registerDirective(_anchor_0, this._NgFor_0_9);
    }
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      if ((_ctx.heroes != null)) {
        if (import11.isDevToolsEnabled) {
          import11.Inspector.instance.recordInput(this._NgFor_0_9, 'ngForOf', _ctx.heroes);
        }
        this._NgFor_0_9.ngForOf = _ctx.heroes /* REF:asset:examples.hello_world/lib/hero/horo_list/hero_list_component.dart:152:179 */;
      }
    }
    if ((!import12.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if ((styles == null)) {
      _componentStyles = (styles = import4.ComponentStyles.unscoped(styles$HeroListComponent, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _HeroListComponentNgFactory = ComponentFactory<import1.HeroListComponent>('hero-list', viewFactory_HeroListComponentHost0);
ComponentFactory<import1.HeroListComponent> get HeroListComponentNgFactory {
  return _HeroListComponentNgFactory;
}

ComponentFactory<import1.HeroListComponent> createHeroListComponentFactory() {
  return ComponentFactory('hero-list', viewFactory_HeroListComponentHost0);
}

class _ViewHeroListComponent1 extends import14.EmbeddedView<import1.HeroListComponent> {
  final import15.TextBinding _textBinding_1 = import15.TextBinding();
  final import15.TextBinding _textBinding_3 = import15.TextBinding();
  _ViewHeroListComponent1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = import7.unsafeCast(doc.createElement('div'));
    _el_0.append(this._textBinding_1.element);
    final _text_2 = import9.appendText(_el_0, ' - ');
    _el_0.append(this._textBinding_3.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_hero = import7.unsafeCast<import17.Hero>(this.locals['\$implicit']);
    this._textBinding_1.updateTextWithPrimitive(local_hero.id) /* REF:asset:examples.hello_world/lib/hero/horo_list/hero_list_component.dart:187:198 */;
    this._textBinding_3.updateText(import18.interpolateString0(local_hero.name)) /* REF:asset:examples.hello_world/lib/hero/horo_list/hero_list_component.dart:201:214 */;
  }
}

import14.EmbeddedView<void> viewFactory_HeroListComponent1(import16.RenderView parentView, int parentIndex) {
  return _ViewHeroListComponent1(parentView, parentIndex);
}

final List<Object> styles$HeroListComponentHost = const [];

class _ViewHeroListComponentHost0 extends import19.HostView<import1.HeroListComponent> {
  @override
  void build() {
    this.componentView = ViewHeroListComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import1.HeroListComponent();
    this.initRootNode(_el_0);
  }
}

import19.HostView<import1.HeroListComponent> viewFactory_HeroListComponentHost0() {
  return _ViewHeroListComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroListComponent, createHeroListComponentFactory());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
