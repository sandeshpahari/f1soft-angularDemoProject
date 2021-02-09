import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  studentList: Student[];


  constructor(private formBuilder: FormBuilder,
    private studentService: StudentService) {

    this.checkoutForm = formBuilder.group({
      emailAddress: ['', [Validators.minLength(5), Validators.maxLength(10), Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],

      mobiles: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ])
    });
  }

  formSubmit() {
    console.log(this.checkoutForm.get(['mobiles', '0']).value);


  }

  get mobiles() {
    return this.checkoutForm.get('mobiles') as FormArray;
  }

  addNewMobile() {
    this.mobiles.push(this.formBuilder.control(''));
  }



  // public trackedEmailData: string;

  ngOnInit(): void {
    //setValue and PatchValue
    this.checkoutForm.patchValue({
      emailAddress: 'asd@email.com',
      quantity: 10
    });
    this.studentService.getStudent().subscribe(data => {
      this.studentList = data;
    })

  }

  //resetting form
  resetForm() {
    this.checkoutForm.reset();
  }





}
