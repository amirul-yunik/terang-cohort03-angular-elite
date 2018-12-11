import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../app/tuition/subject.model';
import {Student} from '../app/tuition/student.model';

@Injectable()
export class TuitionService {

  constructor(private http: HttpClient) {
  }

  findSubjects(): Observable<Subject[]> {
    console.log('This is inside findSubjects');
    return this.http.get<Subject[]>('data/subjects');
  }

  findSubject(): Observable<Subject> {
    console.log('This is inside findSubject');
    return this.http.get<Subject>('data/subject.json');
  }

  findStudents(): Observable<Student[]> {
    console.log('This is inside findStudents');
    return this.http.get<Student[]>('data/students.json');
  }

  findStudent(): Observable<Student> {
    console.log('This is inside findStudent');
    return this.http.get<Student>('data/student.json');
  }

}
