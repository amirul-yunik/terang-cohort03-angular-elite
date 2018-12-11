import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {SubjectListPage} from './tuition/subject-list.page';
import {InstructorListPage} from './tuition/instructor-list.page';
import {StaffListPage} from './tuition/staff-list.page';
import {StaffDetailPage} from './tuition/staff-detail.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'tuition/subjects/list', component: SubjectListPage},
    {path: 'tuition/instructors/list', component: InstructorListPage},
    {path: 'tuition/staff/:id', component: StaffDetailPage},
    {path: 'tuition/staffs/list', component: StaffListPage},
  ]
}];
