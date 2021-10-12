import { Injectable } from '@angular/core';
import { Matiere, Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {

  private stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor() { }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

}
