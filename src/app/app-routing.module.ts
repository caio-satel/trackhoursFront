import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './modules/login-home/login-home.component';

// Para utilizar o guards implemente isso -> canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', component: LoginHomeComponent},
  { path: 'home', component: LoginHomeComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) } // Carregar módulo de forma dinâmica (lazy loading)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
