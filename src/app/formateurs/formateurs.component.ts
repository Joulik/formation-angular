import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Formateur } from '../model';
import { FormateursService } from './formateurs.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})

export class FormateursComponent implements OnInit {

  formateurForm: Formateur = null;

  @Output() deleteRequest = new EventEmitter<number>();

  constructor(private formateurService: FormateursService) { }

  ngOnInit(): void {
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add(): void {
    this.formateurForm = new Formateur();

  }
  edit(id: number): void {
    this.formateurForm = {... this.formateurService.find(id)};
  }
  save(): void {
    if(this.formateurForm.id) {
      this.formateurService.update(this.formateurForm);
      
    } else {
      this.formateurService.create(this.formateurForm);
    } 
    this.cancel();
  }

  cancel(): void {
    this.formateurForm = null;
  }

  /*remove(): void {
    this.deleteRequest.emit(this.stagiaireForm.Id);
    this.cancel();
  }*/

  remove(id: number): void {
    this.formateurService.delete(id);
    this.cancel();
  }

  
}