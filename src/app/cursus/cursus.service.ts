import { Injectable } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiairesService } from '../stagiaires/stagiaires.service';

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

  findAllStagiaires(cur : Cursus): Array<Stagiaire> {
    return cur.stagiaires;
  }

  find(id: number): Cursus {
    return this.cursus.find(m => m.id == id);
  }

  create(cursus: Cursus) : void {
    let max: number = 0;

    for(let mat of this.cursus) {
      if(max < mat.id) {
        max = mat.id;
      }
    }

    cursus.id = ++max;

    this.cursus.push(cursus);
  }

  update(cursus: Cursus) : void {
    const position: number = this.cursus.findIndex(m => m.id == cursus.id);

    this.cursus[position] = cursus;
  }

  delete(id: number): void {
    const position: number = this.cursus.findIndex(m => m.id == id);

    this.cursus.splice(position, 1);
  }

  private load(): void {
    //this.cursus.push(new Cursus(1,"cursus1",new Date(),new Date()));
    this.cursus.push(new Cursus(1,"cursus1", new Date(), new Date(), [new Stagiaire(12), new Stagiaire(13)]));
   
  }
}
