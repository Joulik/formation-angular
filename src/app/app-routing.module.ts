import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';

const routes: Routes = [
  {path: "matieres", component: MatieresComponent},
  {path: "stagiaires", component: StagiairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
