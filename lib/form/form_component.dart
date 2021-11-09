import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:examples.hello_world/form/student_model.dart';

@Component(
  selector: 'my-form',
  templateUrl: 'form_component.html',
  styleUrls: ['form_component.css'],
  directives: [coreDirectives, formDirectives],
  pipes: [commonPipes],
)
class FormComponent implements OnInit {
  final title = 'my form';
  DateTime birthday = DateTime(1988, 4, 15);
  Student model = Student(1, 'firstName', 'lastName', 'description');

  final firstNameControl = Control('', Validators.required);
  final lastNameControl = Control('', Validators.required);
  final descriptionControl = Control('', Validators.required);
  late ControlGroup formGroup;

  @override
  void ngOnInit() {
    formGroup = FormBuilder.controlGroup(
      {
        'firstName': firstNameControl,
        'lastName': lastNameControl,
        'description': descriptionControl,
      },
    );
  }

  void clearFrom() {
    formGroup.reset();
  }
}