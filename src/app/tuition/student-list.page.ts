import {Component, OnInit} from '@angular/core';
import {Student} from './student.model';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';

@Component({
  selector: 'trg-student-detail',
  templateUrl: './student-list.page.html',
})
export class StudentListPage implements OnInit {

  constructor(private router: Router) {
    console.log('Inside Student  List');
    console.log('//console.log(JSON.stringify(apprentice));');

  }

  ngOnInit(): void {
  }
}
