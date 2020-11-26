import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService) { }

  canActivate(): boolean {
    console.log(this.dataService.member.value);
    if (this.dataService.member.value == null) {
      return false;
    } else {
      return true;
    }
  }

}
