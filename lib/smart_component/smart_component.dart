import 'dart:async';

import 'package:angular/angular.dart';

@Component(
  selector: 'smart-co',
  templateUrl: 'smart_component.html',
  styleUrls: ['smart_component.css'],
  directives: [coreDirectives],
)
class SmartComponent {
  final title = 'Smart Component';

  @Input()
  late String name;

  final _changeRequest = StreamController<String>();
  
  @Output()
  Stream<String> get change => _changeRequest.stream;
  
  void ngOnInit() {
    print(name);
  }

  void getName() {
    _changeRequest.add(title);
  }
}
