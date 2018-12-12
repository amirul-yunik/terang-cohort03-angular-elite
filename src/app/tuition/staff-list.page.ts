import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StaffDataSource} from './staff.data-source';
import {TuitionService} from '../../services/tuition.service';
import {Staff} from './staff.model';

@Component({
  selector: 'trg-staff-list',
  templateUrl: './staff-list.page.html',
  styleUrls: ['./staff-list.page.scss']
})
export class StaffListPage implements OnInit {

  public columns = ['id', 'name', 'nric'];
  public dataSource: StaffDataSource;


  constructor(private staffService: TuitionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new StaffDataSource(this.staffService);
  }

  view(staff: Staff): void {
    console.log("Data achieve");
    console.log(JSON.stringify(staff));
    this.router.navigate(['/tuition/staff/', staff.nric]);
  }

}
