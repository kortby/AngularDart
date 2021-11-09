import 'package:angular/angular.dart';
import 'package:examples.hello_world/form/form_component.dart';
import 'package:examples.hello_world/hero/hero_component.dart';
import 'package:examples.hello_world/learn_direct/learn_direct_component.dart';
import 'package:examples.hello_world/smart_component/smart_component.dart';

@Component(
  selector: 'my-co',
  templateUrl: 'app_component.html',
  styleUrls: ['app_component.css'],
  directives: [NgIf,NgClass, LearnDirectComponent, SmartComponent,FormComponent, HeroesComponent],
)
class AppComponent {
  late String title = 'Rich!';
  int counter = 0;

  void makeMoney() {
    counter += 100;
  }

  void onIsSmartChanged(String isSmart) {
    title = isSmart;
    print('Smart value sent to parent $isSmart');
  }
}
