import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/models/fixtures';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})
export class MemberManagementComponent implements OnInit {

  members: Member[];
  memberId: number;
  member: Member;

  constructor(private dataService: DataService) {
    this.getMembers();
   }

  ngOnInit(): void {
  }

  getMembers() {
    this.dataService.getPendingMembers().then((res: Member[]) => {
      this.members = res;
      console.log("Pending Members Received");
    }).catch(() => {
      console.error("Received Failed");
    }).finally(() => {
      console.log("Received Finalized");
    });
  }

  activateMember(){
    console.log(this.memberId);

    this.member = this.members.find(m => m.memberId == this.memberId);

    let updateMember: Member = {
      memberId: this.memberId,
      name: this.member.name,
      email: this.member.email,
      password: this.member.password,
      pending: false,
      userType: this.member.userType
    }

    console.log(updateMember);
    
    this.dataService.activateMember(updateMember).then(() => {
      console.log("Member Activated");
      alert("Member Activated Successfully");
      this.getMembers();
    }).catch(() => {
      console.error("Activation Failed");
    }).finally(() => {
      console.log("Activation Finalized");
    });
  }

}
