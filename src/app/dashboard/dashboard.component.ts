import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashBoardVector: any [] = []
  constructor(protected dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard()
    .subscribe(
      (data)=>{
        this.dashBoardVector = data['results']
      },
      (error) =>{
        console.error(error)
      }
    )
    
  }

}
