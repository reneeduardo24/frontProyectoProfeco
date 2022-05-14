import { Component, HostBinding, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report'
import { ActivatedRoute, Router } from '@angular/router'


import { ReportsService } from '../../services/reports.service'

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {


  @HostBinding('class') classes = 'row'

  report: Report = {
    id: 0,
    tienda: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private reportService: ReportsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.reportService.getReport(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.report = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }


  saveNewReport(){
    delete this.report.created_at;
    delete this.report.id;
    this.reportService.saveReport(this.report)
      .subscribe(
        res => {
          this.report = res;
          this.router.navigate(['/reports']);
        },
        err => console.error(err)
      );
  }



  updateReport(){
    delete this.report.created_at;
    this.reportService.updateReport(this.report.id, this.report)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/reports']);
        },
        err => console.error(err)
      )
    }
  }


