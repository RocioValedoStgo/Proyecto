import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { AuthService} from './service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { EstudianteServiceService} from './service/estudiante-service.service';


import { CaseroService } from './service/casero.service';
import { PeticionService } from './service/peticion.service';
import { CuartoService } from './service/cuarto.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { VistacaseroComponent } from './vistacasero/vistacasero.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { GestionarcuartosComponent } from './gestionarcuartos/gestionarcuartos.component';
import { BuscarDepaComponent } from './buscar-depa/buscar-depa.component';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroCaseroComponent } from './registro-casero/registro-casero.component';
import { PeticionesCaseroComponent } from './peticiones-casero/peticiones-casero.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { AltadepartamentoComponent } from './altadepartamento/altadepartamento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';


//importar o declarar componentes de AngularMaterial, 

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatButtonModule, MatCheckboxModule, MatSortModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { LogincaseroComponent } from './logincasero/logincasero.component';
import { ControldecuartosComponent } from './controldecuartos/controldecuartos.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    NosotrosComponent,
    ObjetivosComponent,
    PreguntasfrecuentesComponent,
    VistacaseroComponent,
    AcercadeComponent,
    GestionarcuartosComponent,
    BuscarDepaComponent,
    RegistroAlumnoComponent,
    RegistroCaseroComponent,
    PeticionesCaseroComponent,
    IniciosesionComponent,
    AltadepartamentoComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    PartnersComponent,
    LogincaseroComponent,
    ControldecuartosComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.upRoomsFirebaseConfig, 'UPRooms'),
    AngularFirestoreModule,
    MatRadioModule,
    AngularFireDatabaseModule,
  ],
  providers: [EstudianteServiceService,CaseroService,PeticionService,CuartoService,AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
