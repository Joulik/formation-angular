import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Stagiaire } from '../model';
import { StagiairesService } from './stagiaires.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.scss']
})

export class StagiairesComponent implements OnInit {

  stagiaireForm: Stagiaire = null;

  @Output() deleteRequest = new EventEmitter<number>();

  constructor(private stagiaireService: StagiairesService) { }

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  add(): void {
    this.stagiaireForm = new Stagiaire();

  }
  edit(id: number): void {
    this.stagiaireForm = {... this.stagiaireService.find(id)};
  }
  save(): void {
    if(this.stagiaireForm.Id) {
      this.stagiaireService.update(this.stagiaireForm);
      
    } else {
      this.stagiaireService.create(this.stagiaireForm);
    } 
    this.cancel();
  }

  cancel(): void {
    this.stagiaireForm = null;
  }

  /*remove(): void {
    this.deleteRequest.emit(this.stagiaireForm.Id);
    this.cancel();
  }*/

  remove(id: number): void {
    this.stagiaireService.delete(id);
    this.cancel();
  }

  
}