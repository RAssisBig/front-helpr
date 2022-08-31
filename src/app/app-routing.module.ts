import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ExitComponent } from './utils/exit/exit.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "home",
    loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./components/clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tecnicos',
    loadChildren: () => import('./components/tecnicos/tecnicos.module').then(m => m.TecnicosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chamados',
    loadChildren: () => import('./components/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [AuthGuard]
  },
  {
    path: "logout",
    component: ExitComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
