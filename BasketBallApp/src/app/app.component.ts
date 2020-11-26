import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasketBallApp';

  userType: string;

  constructor(private dataService: DataService) {
    this.userType = dataService.userType;
   }
}
