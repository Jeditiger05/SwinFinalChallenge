import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfixtureComponent } from './components/addfixture/addfixture.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LoginComponent } from './components/login/login.component';
import { PlayedfixturesComponent } from './components/playedfixtures/playedfixtures.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "add-fixture", component: AddfixtureComponent, canActivate: [AdminGuard] },
  { path: "fixtures", component: FixturesComponent, canActivate: [AuthGuard] },
  { path: "played-fixtures", component: PlayedfixturesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
