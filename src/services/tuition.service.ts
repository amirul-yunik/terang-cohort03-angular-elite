import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../app/tuition/subject.model';

@Injectable()
export class TuitionService {

  constructor(private http: HttpClient) {
  }

  findSubjects(): Observable<Subject[]> {
    console.log('This is inside findSubjects');
    return this.http.get<Subject[]>('data/subjects.json');
  }

  findSubject(id: number): Observable<Subject> {
    console.log('This is inside findSubject');
    return this.http.get<Subject>('data/subject.json');
  }

  findInstructors(): Observable<Subject[]> {
    console.log('This is inside findInstructors');
    return this.http.get<Subject[]>('data/instructors.json');
  }

  findInstructorsbyId(id: number): Observable<Subject> {
    console.log('This is inside findInstructor');
    return this.http.get<Subject>('data/instructor.json');
  }
}
