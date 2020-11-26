import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/models/fixtures';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-playedfixtures',
  templateUrl: './playedfixtures.component.html',
  styleUrls: ['./playedfixtures.component.css']
})
export class PlayedfixturesComponent implements OnInit {

  fixtures: Fixtures[];
  fixtureNumber: number;
  fixture: Fixtures;
  members: string[];

  constructor(private dataService: DataService) { 
    this.getPastFixtures();
    dataService.getMembersList().then((res: string[]) => {
      this.members = res;
    })
  }

  ngOnInit(): void {
  }

  getPastFixtures() {
    this.dataService.getPastFixtures().then((res: Fixtures[]) => {
      this.fixtures = res;
      console.log("Bookings Received");
    }).catch(() => {
      console.error("List Bookings Failed");
    }).finally(() => {
      console.log("List Bookings Finalized");
    });
  }

  updateFixture(form){
    console.log(form.value);
    this.fixture = this.fixtures.find(b => b.fixtureNumber == form.value['fixtureNumber']);
    console.log(this.fixture.venue);

    let updateFixture: Fixtures = {
      fixtureNumber: form.value['fixtureNumber'],
      fixtureDate: this.fixture.fixtureDate,
      payee: form.value['payee'],
      courtCost: form.value['courtCost'],
      venue: this.fixture.venue,
      memberId: this.dataService.member.value.memberId
    }

    console.log(updateFixture);
    
    this.dataService.updateFixture(updateFixture).then(() => {
      console.log("Game Updated");
      alert("Game Updated Successfully");
      this.getPastFixtures();
    }).catch(() => {
      console.error("Update Failed");
    }).finally(() => {
      console.log("Update Finalized");
    });
  }

}
