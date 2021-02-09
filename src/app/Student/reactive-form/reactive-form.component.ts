import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studentReactiveForm: FormGroup;

  // validationMessages = {
  //   'name':{
  //     'required': 'Full Name is Required.',
  //     'minlength': 'Full Name is Required.',
  //     'maxlength': 'Full Name is Required.'
  //   },
  //   'major':{
  //     'required':'Email is Required.'
  //   },
  //   'Grade':{
  //     'Required':'Grade is Required'
  //   },
  // };




  student: Student = {
    id: null,
    name: null,
    major: null,
    grade: null

  }
  constructor(private formBuilder: FormBuilder,
    private _studentService: StudentService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // FormBuilder Example....................

    this.studentReactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      major: ['', Validators.required],
      grade: ['', Validators.required]
    });

    //............................ FormControl example.............................
    // this.studentReactiveForm = new FormGroup({
    //   name: new FormControl(),
    //   major: new FormControl(),
    //   grade: new FormControl()
    // });



    // ........................ Form Array...........

    // this.studentReactiveForm = this.formBuilder.array([
    //   new FormControl('', Validators.required),
    //   new FormControl('', Validators.required),
    //   new FormControl('', Validators.required),
    //   // major: ['', Validators.required],
    //   // grade: ['', Validators.required]
    // ]);
  }

  onSubmit(): void {
    this._studentService.saveStudent(this.studentReactiveForm.value).subscribe(
      (data: Student) => {
        console.log(data);
        this._router.navigate(['list'])
      },
      (error: any) => console.log(error)
    );
  }

  onLoadClick(): void {
    // this.studentReactiveForm.setValue({
    //   name: 'Just',
    //   major: 'An',
    //   grade: 'Example'

    // });
    const formarray = this.formBuilder.array([
      new FormControl('name'),
      new FormControl('major'),
      new FormControl('grade')

    ]);

  }
}