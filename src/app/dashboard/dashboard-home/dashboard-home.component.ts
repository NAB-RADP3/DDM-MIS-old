import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';


export interface PeriodicElement {
  return: string;
  position: number;
  dueDate: number;
  dateOfSubmission: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, return: 'MIS-1',      dueDate: 3,  dateOfSubmission: 'H'},
  {position: 2, return: 'MIS-2(CTP)', dueDate: 3,  dateOfSubmission: 'He'},
  {position: 3, return: 'MIS-2A',     dueDate: 31, dateOfSubmission: 'Li'},
  {position: 4, return: 'MIS-2B',     dueDate: 3,  dateOfSubmission: 'Be'},
];



@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  displayedColumns: string[] = ['position', 'return', 'dueDate', 'dateOfSubmission' ,'submissionStatus' , 'links'];
  dataSource = ELEMENT_DATA;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('angular-material-template - Dashboard');
    this.logger.log('Dashboard loaded');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
}
