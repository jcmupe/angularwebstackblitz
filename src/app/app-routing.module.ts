import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'nuevopaciente', component: FormPacienteComponent },
  { path: 'pagina', component: PaginaNoEncontradaComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
