import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { PlayedfixturesComponent } from './components/playedfixtures/playedfixtures.component';
import { AddfixtureComponent } from './components/addfixture/addfixture.component';
import { MemberManagementComponent } from './components/member-management/member-management.component';
import { MemberCostsComponent } from './components/member-costs/member-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FixturesComponent,
    PlayedfixturesComponent,
    AddfixtureComponent,
    MemberManagementComponent,
    MemberCostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
