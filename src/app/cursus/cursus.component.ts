import { Component, OnInit } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiairesService } from '../stagiaires/stagiaires.service';
import { CursusHttpService } from './cursus-http.service';
import { CursusService } from './cursus.service';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.scss']
})
export class CursusComponent implements OnInit {

  cursusForm: Cursus = null;
  // public stagiaireService: StagiairesService = new StagiairesService();
  // stagiairesForm: Array<Stagiaire> = this.stagiaireService.stagiaires;

  // @Output() deleteRequest = new EventEmitter<number>();

  //constructor(private cursusService: CursusService) { }
  constructor(private cursusService: CursusHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Cursus> {
    return this.cursusService.findAll();
  }

  listStagiaires(): Array<Stagiaire> {
    return this.cursusService.findAllStagiaires();
  }

  add(): void {
    this.cursusForm = new Cursus();
  }

  edit(id: number): void {
    this.cursusService.find(id).subscribe(response => {
      this.cursusForm = response;
    }, error => console.log(error));
  }

  remove(id: number): void {
    this.cursusService.delete(id);
    this.cancel();
  }

  save(): void {
    if(this.cursusForm.id) {
      this.cursusService.update(this.cursusForm);
    } else {
      this.cursusService.create(this.cursusForm);
    }
    
    this.cancel();
  }

  cancel(): void {
    this.cursusForm = null;
  }
}
