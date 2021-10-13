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
    return cur.Stagiaires;
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

  update(cursus: Cursus) : void {
    const position: number = this.cursus.findIndex(m => m.Id == cursus.Id);

    this.cursus[position] = cursus;
  }

  delete(id: number): void {
    const position: number = this.cursus.findIndex(m => m.Id == id);

    this.cursus.splice(position, 1);
  }

  private load(): void {
    //this.cursus.push(new Cursus(1,"cursus1",new Date(),new Date()));
    this.cursus.push(new Cursus(1,"cursus1", new Date(), new Date(), [new Stagiaire(12), new Stagiaire(13)]));
   
  }
}
