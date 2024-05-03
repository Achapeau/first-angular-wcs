import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { isAdminGuard } from './guard/is-admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isConnectedGuard } from './guard/is-connected.guard';

export const routes: Routes = [
    {path: 'homepage', component: HomepageComponent},
    {path: 'adminpage', component: AdminpageComponent, canActivate: [isAdminGuard, isConnectedGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [isConnectedGuard]},
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
];
