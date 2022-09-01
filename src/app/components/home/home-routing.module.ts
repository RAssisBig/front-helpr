import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TecnicoGuard } from 'src/app/guards/tecnico.guard';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard..component';
import { ClienteDashboardComponent } from './cliente/dashboard/cliente-dashboard.component';
import { HomeComponent } from './home.component';
import { TecnicoDashboardComponent } from './tecnico/dashboard/tecnico-dashboard.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "admin/dashboard",
        component:AdminDashboardComponent,
        canActivate:[AuthGuard, AdminGuard]
    },
    {
        path: "tecnico/dashboard",
        component: TecnicoDashboardComponent,
        canActivate:[AuthGuard, TecnicoGuard]
    },
    {
        path:"cliente/dashboard",
        component: ClienteDashboardComponent,
        canActivate: [AuthGuard]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
