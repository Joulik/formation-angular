import { Injectable } from '@angular/core';
import { Matiere, Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {

  private stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor() {
    this.load();
   }

   
  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }
  find(id: number): Stagiaire {
    return this.stagiaires.find(m => m.Id == id);
  }

  create(stagiaire: Stagiaire) : void {
    let max: number = 0;

    for(let mat of this.stagiaires) {
      if(max < mat.Id) {
        max = mat.Id;
      }
    }

    stagiaire.Id = ++max;

    this.stagiaires.push(stagiaire);
  }

  update(stagiaire: Stagiaire) : void {
    const position: number = this.stagiaires.findIndex(m => m.Id == stagiaire.Id);

    this.stagiaires[position] = stagiaire;
  }

  delete(id: number): void {
    const position: number = this.stagiaires.findIndex(m => m.Id == id);

    this.stagiaires.splice(position, 1);
  }

  private load(): void {
    this.stagiaires.push(new Stagiaire(1,"type", "Name", "firstname", new Date(),1));
  }
}
