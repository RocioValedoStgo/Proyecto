import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { VistacaseroComponent } from './vistacasero/vistacasero.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { GestionarcuartosComponent } from './gestionarcuartos/gestionarcuartos.component';
import { PeticionesCaseroComponent } from './peticiones-casero/peticiones-casero.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { AltadepartamentoComponent } from './altadepartamento/altadepartamento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscarDepaComponent } from './buscar-depa/buscar-depa.component';
import { PartnersComponent } from './partners/partners.component';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroCaseroComponent} from './registro-casero/registro-casero.component';
import { LogincaseroComponent } from './logincasero/logincasero.component';
import { ControldecuartosComponent } from './controldecuartos/controldecuartos.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path: 'registro-alumno',
    component:RegistroAlumnoComponent

  },
  {
    path: 'registro-casero',
    component:RegistroCaseroComponent

  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'objetivo',
    component:ObjetivosComponent
  },
  {
    path:'preguntasfrecuentes',
    component:PreguntasfrecuentesComponent
  },
  {
    path: 'vistaCasero',
    component: VistacaseroComponent
  },
  {
    path: 'acercaDe',
    component: AcercadeComponent
  },
  {
    path: 'gestionarCuartos',
    component: GestionarcuartosComponent
  },
  {
    path:'peticionesCasero',
    component:PeticionesCaseroComponent
  },
  {
    path:'inicioSesion',
    component:IniciosesionComponent
  },
  {
    path:'altaDepartamento',
    component:AltadepartamentoComponent
  },
  {
    path:'buscar-depa',
    component: BuscarDepaComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'partners',
    component:PartnersComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'caserologin',
    component:LogincaseroComponent
  },
  {
    path:'controlCuartos',
    component:ControldecuartosComponent
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
