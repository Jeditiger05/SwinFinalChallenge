import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from '../models/fixtures';
import { Login } from '../models/login';
import { Member, MemberCost } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  //apiURL = "https://localhost:5001/api";
  apiURL = "http://johnchallenge-env.eba-gqgji5pw.us-east-1.elasticbeanstalk.com/api";
  member: BehaviorSubject<Member>;
  userType: string;

  constructor(private _http: HttpClient) { 
    this.member = new BehaviorSubject(null);

  }

  login(login: Login) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/basketball/memberlogin", login).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  register(member: Member) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/basketball/registermember", member).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  addFixture(fixture) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/basketball/addfixture", fixture).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getFixtures() {
    return new Promise((resolve, reject) => {
      this._http.get<Fixtures>(this.apiURL + "/basketball/getfixtures").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getPastFixtures() {
    return new Promise((resolve, reject) => {
      this._http.get<Fixtures>(this.apiURL + "/basketball/getpastfixtures").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  deleteFixture(fixtureNumber) {
    return new Promise((resolve, reject) => {
      this._http.delete(this.apiURL + "/basketball/deletefixture?fixtureNumber=" + fixtureNumber).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getMembersList() {
    return new Promise((resolve, reject) => {
      this._http.get<string[]>(this.apiURL + "/basketball/getmemberslist").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  updateFixture(fixture) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/basketball/updatefixture", fixture).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getPendingMembers() {
    return new Promise((resolve, reject) => {
      this._http.get<Member>(this.apiURL + "/basketball/getpendingmembers").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  activateMember(member) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "/basketball/activatemember", member).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getTotals() {
    return new Promise((resolve, reject) => {
      this._http.get<MemberCost>(this.apiURL + "/basketball/gettotalcost").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }
}
