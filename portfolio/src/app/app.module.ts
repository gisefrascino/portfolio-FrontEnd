import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonasComponent } from './components/personas/personas.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModalEducacionEditComponent } from './modals/modal-educacion-edit/modal-educacion-edit.component';
import { ModalEducacionRemComponent } from './modals/modal-educacion-rem/modal-educacion-rem.component';
import { ModalExperienciaEditComponent } from './modals/modal-experiencia-edit/modal-experiencia-edit.component';
import { ModalExperienciaRemComponent } from './modals/modal-experiencia-rem/modal-experiencia-rem.component';
import { ModalPrincipalCarreraComponent } from './modals/modal-principal-carrera/modal-principal-carrera.component';
import { ModalPrincipalProfComponent } from './modals/modal-principal-prof/modal-principal-prof.component';
import { ModalPrincipalRemComponent } from './modals/modal-principal-rem/modal-principal-rem.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { EducacionService } from './services/educacion.service';
import { ExperienciaService } from './services/experiencia.service';
import { HabilidadService } from './services/habilidad.service';
import { ProyectoService } from './services/proyecto.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { ModalPrincipalFondoComponent } from './modals/modal-principal-fondo/modal-principal-fondo.component';
import { ModalPrincipalPerfilComponent } from './modals/modal-principal-perfil/modal-principal-perfil.component';
import { interceptorProvider } from './services/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    AddEducacionComponent,
    EducacionComponent,
    EducacionesComponent,
    ExperienciaComponent,
    ExperienciasComponent,
    FooterComponent,
    HabilidadComponent,
    HabilidadesComponent,
    HeaderComponent,
    NavbarComponent,
    PersonaComponent,
    PersonasComponent,
    ProyectoComponent,
    ProyectosComponent,
    ModalEducacionEditComponent,
    ModalEducacionRemComponent,
    ModalExperienciaEditComponent,
    ModalExperienciaRemComponent,
    ModalPrincipalCarreraComponent,
    ModalPrincipalProfComponent,
    ModalPrincipalRemComponent,
    HomeComponent,
    LoginComponent,
    AddExperienciaComponent,
    ModalPrincipalFondoComponent,
    ModalPrincipalPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ],

  schemas: [
    NO_ERRORS_SCHEMA
  ],

  providers: [PortfolioService, EducacionService, ExperienciaService, HabilidadService, ProyectoService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
