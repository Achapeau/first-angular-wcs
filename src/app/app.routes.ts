import { Routes } from '@angular/router';
import { SignupComponent } from './menu/signup/signup.component';
import { UserComponent } from './menu/user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'user', component: UserComponent},
    {path: '', component: UserProfileComponent},
];
