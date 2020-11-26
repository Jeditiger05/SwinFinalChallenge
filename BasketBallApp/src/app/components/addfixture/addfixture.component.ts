import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addfixture',
  templateUrl: './addfixture.component.html',
  styleUrls: ['./addfixture.component.css']
})
export class AddfixtureComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addFixture(form){
    let newFixture = {
      fixtureDate: form.value['fixtureDate'],
      venue: form.value['venue'],
      memberId: this.dataService.member.value.memberId
    }

    console.log(newFixture);

    this.dataService.addFixture(newFixture).then(() => {
      console.log("Game Date Added");
      alert("Game Date Booked");
      this.router.navigate(['']);
    }).catch(() => {
      console.error("Add Failed");
    }).finally(() => {
      console.log("Add Finalized");
    });
  }

}
