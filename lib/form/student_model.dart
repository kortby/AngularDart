class Student {
  int id;
  String firstName;
  String lastName;
  String description;
  Student(this.id, this.firstName, this.lastName, this.description);

  @override
  String toString() {
    return '$id, $firstName, $lastName, $description';
  }
}