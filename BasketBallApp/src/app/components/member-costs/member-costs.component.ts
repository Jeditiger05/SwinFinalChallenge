import { Component, OnInit } from '@angular/core';
import { MemberCost } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-member-costs',
  templateUrl: './member-costs.component.html',
  styleUrls: ['./member-costs.component.css']
})
export class MemberCostsComponent implements OnInit {

  membersPaid: MemberCost[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getTotals(){
    this.dataService.getTotals().then((res: MemberCost[]) => {
      this.membersPaid = res;
      console.log("Totals Received");
    }).catch(() => {
      console.error("Recieve Totals Failed");
    }).finally(() => {
      console.log("Receive Totals Finalized");
    });
  }
}
