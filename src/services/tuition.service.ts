import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../app/tuition/subject.model';

@Injectable()
export class AcademyService {

  constructor(private http: HttpClient) {
  }

  findSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>('data/subjects');
  }

  findSubject(): Observable<Subject> {
    return this.http.get<Subject>('data/subject.json');
  }


}
