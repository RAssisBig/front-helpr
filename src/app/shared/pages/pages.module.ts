import { NgModule } from '@angular/core';
import { ChamadosModule } from 'src/app/components/chamados/chamados.module';
import { ClientesModule } from 'src/app/components/clientes/clientes.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { TecnicosModule } from 'src/app/components/tecnicos/tecnicos.module';


@NgModule({
  exports: [
    HomeModule,
    LoginModule,
    TecnicosModule,
    ClientesModule,
    ChamadosModule
  ]
})
export class PagesModule { }
