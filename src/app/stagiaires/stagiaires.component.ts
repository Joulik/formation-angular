import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../model';
import { StagiairesService } from './stagiaires.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.scss']
})
export class StagiairesComponent implements OnInit {

  constructor(private stagiaireService: StagiairesService) { }

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
} 

}