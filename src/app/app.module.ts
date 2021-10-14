import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereService } from './matieres/matiere.service';
import { FormsModule } from '@angular/forms';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { CursusComponent } from './cursus/cursus.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    MatiereEditComponent,
    StagiairesComponent,
    FormateursComponent,
    CursusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MatiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
