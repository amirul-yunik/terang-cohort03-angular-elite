import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'trg-studentSession-list',
  templateUrl: './studentSession-list.page.html'
})

export class StudentSessionListPage implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
    console.log('This is inside StudentSessionListPage');
  }
}
