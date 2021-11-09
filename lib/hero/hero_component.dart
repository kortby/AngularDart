import 'package:angular/angular.dart';
import 'package:examples.hello_world/hero/horo_list/hero_list_component.dart';

@Component(
  selector: 'my-heroes',
  template: '''
    <h2>Heroes</h2>
    <hero-list></hero-list>
  ''',
  directives: [HeroListComponent],
)
class HeroesComponent {}