import { Injectable } from '@angular/core';
import { Cursus } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CursusService {

  private cursus: Array<Cursus> = new Array<Cursus>();

  constructor() {
    this.load();
   }

  findAll(): Array<Cursus> {
    return this.cursus;
  }
  find(id: number): Cursus {
    return this.cursus.find(m => m.Id == id);
  }

  create(cursus: Cursus) : void {
    let max: number = 0;

    for(let mat of this.cursus) {
      if(max < mat.Id) {
        max = mat.Id;
      }
    }

    cursus.Id = ++max;

    this.cursus.push(cursus);
  }

  update(stagiaire: Cursus) : void {
    const position: number = this.cursus.findIndex(m => m.Id == stagiaire.Id);

    this.cursus[position] = stagiaire;
  }

  delete(id: number): void {
    const position: number = this.cursus.findIndex(m => m.Id == id);

    this.cursus.splice(position, 1);
  }

  private load(): void {
    this.cursus.push(new Cursus(1,"cursus1"));
   
  }
}
