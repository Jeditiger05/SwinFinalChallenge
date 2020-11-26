import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/models/fixtures';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixtures;
  fixtureNumber: number;

  constructor(private dataService: DataService) {
    this.getFixtures();
  }

  ngOnInit(): void {
  }

  getFixtures() {
    this.dataService.getFixtures().then((res: Fixtures) => {
      this.fixtures = res;
      console.log("Bookings Received");
    }).catch(() => {
      console.error("List Bookings Failed");
    }).finally(() => {
      console.log("List Bookings Finalized");
    });
  }

  deleteGame() {
        console.log(this.fixtureNumber);
        this.dataService.deleteFixture(this.fixtureNumber).then(() => {
          console.log("Booking Deleted");
          alert("Booking Deleted Successfully")
          this.getFixtures();
        }).catch(() => {
          console.error("Delete Failed");
        }).finally(() => {
          console.log("Delete Finalized");
        });
  }
}
