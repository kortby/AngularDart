import 'package:angular/angular.dart';
import 'package:examples.hello_world/app_component.dart';

import 'main.template.dart' as ng;

void main() => runApp(ng.HelloWorldComponentNgFactory);

@Component(
  selector: 'my-app',
  template: '<my-co></my-co>',
  directives: [coreDirectives, AppComponent],
)
class HelloWorldComponent {

}
