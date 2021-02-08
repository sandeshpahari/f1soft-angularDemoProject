import { StudentService } from 'src/app/Shared/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  private selectedStudentId: number;
  @Input() student: Student;
  @Input() searchTerm: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _studentService: StudentService) { }

  ngOnInit(): void {
    this.selectedStudentId = +this._route.snapshot.paramMap.get('id');
    
  }
  editStudent(){
    this._router.navigate(['/edit',this.student.id]);
  }
  deleteStudent(){
     this._studentService.deleteStudent(this.student.id)
  }


}
