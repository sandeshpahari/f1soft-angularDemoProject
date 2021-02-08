import { Student } from './../models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  private listStudents: Student[] =[
    {
      id: 1,
      name: 'sandesh',
      grade: 'bachelor',
      major: 'java'
    },
    {
      id: 2,
      name: 'sandy',
      grade: 'inter',
      major: 'php'
    },
    {
      id: 3,
      name: 'pradesh',
      grade: 'highschool',
      major: 'c#'
    }
  ];
  baseUrl = 'http://localhost:8080/Students';
  
  getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  
  saveStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, student,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
}
  updateStudent(student: Student): Observable<void>{
    return this.httpClient.put<void>(`${this.baseUrl}`, student,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteStudent(id: number){
    const i = this.listStudents.findIndex(s => s.id === id);
    if(i !== -1){
      this.listStudents.splice(i,1);
    }
  }

}
