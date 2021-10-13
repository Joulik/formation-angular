import { Injectable } from '@angular/core';
import { Matiere, Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  private formateurs: Array<Formateur> = new Array<Formateur>();

  constructor() {
    this.load();
   }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }
  find(id: number): Formateur {
    return this.formateurs.find(m => m.Id == id);
  }

  create(Formateur: Formateur) : void {
    let max: number = 0;

    for(let mat of this.formateurs) {
      if(max < mat.Id) {
        max = mat.Id;
      }
    }

    Formateur.Id = ++max;

    this.formateurs.push(Formateur);
  }

  update(Formateur: Formateur) : void {
    const position: number = this.formateurs.findIndex(m => m.Id == Formateur.Id);

    this.formateurs[position] = Formateur;
  }

  delete(id: number): void {
    const position: number = this.formateurs.findIndex(m => m.Id == id);

    this.formateurs.splice(position, 1);
  }

  private load(): void {
    this.formateurs.push(new Formateur(1,"f", "O'Connor", "James", true));
    this.formateurs.push(new Formateur(2,"f", "Maxwell", "Hubbert", true));
    this.formateurs.push(new Formateur(3,"f", "Gallagher", "Rowenda", false));
   
  }
}
