import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userTypes = ["Admin", "Member"];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(form) {
    console.log(form.value);
    let newMember: Member = {
      name: form.value['name'],
      email: form.value['email'],
      password: form.value['password'],
      pending: true,
      usertype: form.value['usertype']
    }
    console.log(newMember);

    this.dataService.register(newMember).then(() => {
      console.log("Member Registered");
    }).catch(() => {
      console.error("Registration Failed");
    }).finally(() => {
      console.log("Registration Finalized");
    });
  }
}
