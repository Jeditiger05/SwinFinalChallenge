import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private dataService: DataService) { }

  canActivate(): boolean {
    console.log(this.dataService.userType);
    if (this.dataService.userType == "Admin") {
      return true;
    } else {
      alert("Only Admins can enter Game Fixtures!")
      return false;
    }
  }
}
