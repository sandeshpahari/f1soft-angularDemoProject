import { StudentService } from './../../Shared/student.service';
import { Student } from './../../models/student.model';
import { Grade } from './../../models/grade.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  @ViewChild('studentForm') public CreateStudentForm: NgForm;
  panelTitle: string;
  student: Student = {
    id: null,
    name: null,
    major: null,
    grade: null

  }


  // grades: Grade[] = [
  //   { id: 1, level: 'SLC' },
  //   { id: 1, level: 'Inter' },
  //   { id: 1, level: 'Bachelor' },
  //   { id: 1, level: 'Masters' }
  // ]

  constructor(private _studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getStudent(id);
    })
  }
  private getStudent(id: number) {
    if (id == 0) {
      this.student = {
        id: null,
        name: null,
        major: null,
        grade: null
      };
      this.panelTitle = "Create Student";
    } else {
      this.panelTitle = "Edit Student";
      this._studentService.getStudentById(id).subscribe(
        (student) => this.student = student,
        (error: any) => console.log(error)
      );
    }
  }
  saveStudent(): void {
    if (this.student.id === null) {
      this._studentService.saveStudent(this.student).subscribe(
        (data: Student) => {
          console.log(data);
          this._router.navigate(['list'])
        },
        (error: any) => console.log(error)
      );
    } else {
      this._studentService.updateStudent(this.student).subscribe(
        () => {
          this._router.navigate(['list'])
        },
        (error: any) => console.log(error)
      );
    }
  }
}
