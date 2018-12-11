import {Component, OnInit} from '@angular/core';
import {Subject} from './subject.model';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';

@Component({
  templateUrl: './subject-list.page.html',
})
export class SubjectListPage implements OnInit {

  constructor(private router: Router) {
    console.log('Inside subject List');
    console.log('//console.log(JSON.stringify(apprentice));');

  }

  ngOnInit(): void {
  }
}
