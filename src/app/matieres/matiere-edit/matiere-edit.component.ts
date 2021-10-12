import { Component, Input, OnInit } from '@angular/core';
import { Matiere } from 'src/app/model';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-matiere-edit,[app-matiere-edit]',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.scss']
})
export class MatiereEditComponent implements OnInit {

// @Input('MatiereForm') matiereForm: Matiere;
@Input() matiere: Matiere;

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }

  save(): void {
    if(this.matiere.Id) {
      this.matiereService.update(this.matiere);
    } else {
      this.matiereService.create(this.matiere);
    } 
  }

  cancel(): void {
    this.matiere = null;
  }

}
