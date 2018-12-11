import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../app/tuition/subject.model';
import {Staff} from '../app/tuition/staff.model';

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

  findStaffs(): Observable<Staff[]> {
    console.log('This is inside findStaffs');
    return this.http.get<Staff[]>('data/staffs.json');
  }

  findStaff(id:number): Observable<Staff> {
    console.log('This is inside findStaff');
    return this.http.get<Staff>('data/staff.json');
  }


}
