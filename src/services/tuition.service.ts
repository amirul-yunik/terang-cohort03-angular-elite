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
    return this.http.get<Subject[]>('data/subjects');
  }

  findSubject(): Observable<Subject> {
    console.log('This is inside findSubject');
    return this.http.get<Subject>('data/subject.json');
  }
}
