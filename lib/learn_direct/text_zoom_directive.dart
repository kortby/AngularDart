import 'dart:html';

import 'package:angular/angular.dart';

@Directive(selector: '[myTextZoom]')
class TextZoomDirective {
  TextZoomDirective(Element element){
    element.style.fontSize = '64px';
  }
}