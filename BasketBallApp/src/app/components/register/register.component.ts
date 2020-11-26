import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userTypes = ["Admin", "Member"];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form) {
    console.log(form.value);
    let newMember: Member = {
      name: form.value['name'],
      email: form.value['email'],
      password: form.value['password'],
      pending: true,
      userType: form.value['usertype']
    }
    console.log(newMember);

    this.dataService.register(newMember).then(() => {
      console.log("Member Registered");
      alert("New Member Registered Successfully");
      this.router.navigate(['']);
    }).catch(() => {
      console.error("Registration Failed");
    }).finally(() => {
      console.log("Registration Finalized");
    });
  }
}
