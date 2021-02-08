import { StudentService } from './../../Shared/student.service';
import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];
  studentToDisplay: Student = new Student;
  private arrayIndex = 1;

  constructor(private _studentService: StudentService,
              private _router: Router) { }

  ngOnInit(): void {
    this.students = this._studentService.getStudent().subscribe(studentLists => this.students = studentLists),
    // (error: any) => console.log(error);
    this.studentToDisplay = this.students[0];
  }

  nextStudent(): void{
    if(this.arrayIndex <=2){
      this.studentToDisplay = this.students[this.arrayIndex];
      this.arrayIndex++;
    }else{
      this.studentToDisplay = this.students[0];
      this.arrayIndex = 1;
    }
  }


  onClick(studentId: number){
    this._router.navigate(['/students',studentId]);
  }

}
