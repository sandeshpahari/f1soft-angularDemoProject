import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  private _id: number;
  student: Student;

  constructor(private _route: ActivatedRoute,
                private _studentService: StudentService,
                private _router: Router) { }

  ngOnInit(){
    console.log("hello");
    // console.log (+this._route.snapshot.paramMap.get('id'));
  this._route.paramMap.subscribe(params => {
      this._id = +params.get('id')
  });
  this._studentService.getStudentById(this._id).subscribe(
    (student)=> {
      console.log(`student: `,student);
      this.student =student;
    
    },
  (error: any) => {
    console.log(`student:error `);
    console.log(error)}
  );
}


  viewNext(){
    if(this._id < 3){
      this._id = this._id+1;
    }else{
      this._id = 1
    }

    this._router.navigate(['/students',this._id]);
  }
}
