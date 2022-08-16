import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModalEducacionEditComponent } from './modals/modal-educacion-edit/modal-educacion-edit.component';
import { ModalEducacionRemComponent } from './modals/modal-educacion-rem/modal-educacion-rem.component';
import { ModalExperienciaEditComponent } from './modals/modal-experiencia-edit/modal-experiencia-edit.component';
import { ModalExperienciaRemComponent } from './modals/modal-experiencia-rem/modal-experiencia-rem.component';
import { ModalPrincipalCarreraComponent } from './modals/modal-principal-carrera/modal-principal-carrera.component';
import { ModalPrincipalProfComponent } from './modals/modal-principal-prof/modal-principal-prof.component';
import { ModalPrincipalRemComponent } from './modals/modal-principal-rem/modal-principal-rem.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:AddExperienciaComponent},
  {path:'editexperiencia/:id', component:ModalExperienciaEditComponent},
  {path:'remexperiencia/:id', component:ModalExperienciaRemComponent},
  {path:'nuevaedu',component:AddEducacionComponent},
  {path:'editeducacion/:id',component:ModalEducacionEditComponent},
  {path:'remeducacion/:id', component:ModalEducacionRemComponent},
  {path:'editcarrera/:id', component:ModalPrincipalCarreraComponent},
  {path:'editinfo_prof/:id', component:ModalPrincipalProfComponent},
  {path:'reminfo_prof/:id', component:ModalPrincipalRemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
