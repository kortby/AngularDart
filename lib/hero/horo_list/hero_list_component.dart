import 'package:angular/angular.dart';

import '../hero.dart';
import 'mock_heros.dart';

@Component(
  selector: 'hero-list',
  template: '''
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>''',
  directives: [coreDirectives],
)
class HeroListComponent {
  final List<Hero> heroes = mockHeroes;
}