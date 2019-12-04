import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCommunityGaurd } from './login/gaurds/authcommunity.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    data: { Title: 'Login' }
  },
  {
    path: 'Main',
    component: MainComponent,
    canActivate: [AuthCommunityGaurd],
    children: [
      { path: 'Profile', component: ProfileComponent, pathMatch: 'full' },
      { path: 'Search', component: SearchComponent, canActivate: [AuthCommunityGaurd] }
    ]
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
