import 'package:angular/angular.dart';
import 'package:examples.hello_world/learn_direct/text_zoom_directive.dart';

@Component(
  selector: 'learn-direct',
  templateUrl: 'learn_direct_component.html',
  styleUrls: ['learn_direct_component.css'],
  directives: [coreDirectives, TextZoomDirective],
)
class LearnDirectComponent {
  bool isVisible = false;

  List<Student> students = [];

  void toggleVisible() {
    isVisible = !isVisible;
    getStudents();
  }
  // Object trackByStudentId(int index, dynamic o) {
  //   return o is Student ? o.id : o;
  // }
  Object? trackByStudentId(_, dynamic o) => o is Student ? o.id : o;
  void getStudents() {
    students = [
      Student(1, 'Paulo James'),
      Student(2, 'Carlos Santana'),
      Student(3, 'Carlos Deigo')
    ];
  }
}

class Student {
  int id;
  String name;

  Student(this.id, this.name);
}