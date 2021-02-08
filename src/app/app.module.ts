import { StudentService } from './Shared/student.service';
import { SelectRequiredValidatorDirective } from './Shared/select-required-validator.directive';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './Student/list-students/list-students.component';
import { CreateStudentComponent } from './Student/create-student/create-student.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayStudentComponent } from './Student/display-student/display-student.component';
// import { CreateStudentCanDeactivateGuardService } from './Shared/create-student-can-deacvtivate-guard.service';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { ReactiveFormComponent } from './Student/reactive-form/reactive-form.component';


const appRoutes: Routes = [
  {
    path: 'list',
    component: ListStudentsComponent
  },
  {
    path: 'edit/:id',
    component: CreateStudentComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailsComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: '',
    redirectTo: '/list', pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentComponent,
    SelectRequiredValidatorDirective,
    DisplayStudentComponent,
    StudentDetailsComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
