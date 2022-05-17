import { Component, OnInit, HostBinding } from '@angular/core';

import { ReportsService } from '../../services/reports.service'

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  reports: any = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getReports();
  }

  getReports(){
    this.reportsService.getReports().subscribe(
      res => 
      {
        this.reports = res;
      },
      err => console.error(err)
    )
  }

  deleteReport(id: String){
    this.reportsService.deleteReport(id).subscribe(
      res => {
        console.log(res)
        this.getReports();
      },
      err => console.error(err)
    )
  }

  editReport(id: String){
    console.log(id)
  }

}
