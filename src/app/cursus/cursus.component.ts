import { Component, OnInit } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiairesService } from '../stagiaires/stagiaires.service';
import { CursusService } from './cursus.service';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.scss']
})
export class CursusComponent implements OnInit {

  cursusForm: Cursus = null;
  public stagiaireService: StagiairesService = new StagiairesService();
  stagiairesForm : Array<Stagiaire> = this.stagiaireService.stagiaires;


  // @Output() deleteRequest = new EventEmitter<number>();

  constructor(private cursusService: CursusService) { }

  ngOnInit(): void {
  }

  list(): Array<Cursus> {
    return this.cursusService.findAll();
  }

  listStagiaires(cursus : Cursus): Array<Stagiaire> {
    return this.cursusService.findAllStagiaires(cursus);
  }

  add(): void {
    this.cursusForm = new Cursus();

  }
  edit(id: number): void {
    this.cursusForm = { ... this.cursusService.find(id) };
  }
  save(): void {
    if (this.cursusForm.Id) {
      this.cursusService.update(this.cursusForm);

    } else {
      this.cursusService.create(this.cursusForm);
    }
    this.cancel();
  }

  cancel(): void {
    this.cursusForm = null;
  }

  /*remove(): void {
    this.deleteRequest.emit(this.stagiaireForm.Id);
    this.cancel();
  }*/

  remove(id: number): void {
    this.cursusService.delete(id);
    this.cancel();
  }

}
