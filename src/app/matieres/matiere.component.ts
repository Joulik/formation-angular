import { Component, OnInit } from '@angular/core';
import { Matiere } from '../model';
import { MatiereService } from './matiere.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {

  matiereForm: Matiere = null;

  constructor(private matiereService: MatiereService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }

  add(): void {
    this.matiereForm = new Matiere();
  }

  edit(id: number): void {
    this.matiereForm = {... this.matiereService.find(id)};
  }

  save(): void {
    if(this.matiereForm.Id) {
      this.matiereService.update(this.matiereForm);
    } else {
      this.matiereService.create(this.matiereForm);
    } 
  }

  cancel(): void {
    this.matiereForm = null;
  }

  remove(id: number): void {
    this.matiereService.delete(id);
  }

}
