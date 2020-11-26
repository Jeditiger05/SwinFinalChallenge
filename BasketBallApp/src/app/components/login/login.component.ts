import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form) {
    console.log(form.value);
    this.dataService.login(form.value).then((data: Member) => {
      this.dataService.userType = data.userType;
      console.log("Logged In");
      this.dataService.member.next(data);
      this.router.navigate(['']);
    }).catch((err) => {
      console.error(err['error']);
      if(err['error'] == "Account Pending"){
        this.errorMsg = "Account Pending";
      }else{
        this.errorMsg = "Login Failed, check Email and/or password!"
      }
    }).finally(() => {
      console.log("Login Finalized");
    });
  }
}
