import 'dart:html' hide Client;

import 'package:angular/angular.dart';
import 'package:examples.hello_world/Todos/todo_service.dart';

@Component(
  selector: 'my-todo',
  templateUrl: 'todo_component.html',
  styleUrls: ['todo_component.css'],
  directives: [coreDirectives],
)
class TodoComponent{
  // static final _url = Uri.parse("https://jsonplaceholder.typicode.com/todos");


  // void getTodo() async {
  //   try {
  //     final response = await http.get(_url);
  //   }
  // }
}