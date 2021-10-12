import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatiereService } from '../matieres/matiere.service';
import { Matiere } from '../model';

@Component({
  selector: 'matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.scss']
})
export class MatiereEditComponent implements OnInit {

  @Input()
  matiere : Matiere = null;

  @Output() deleteRequest = new EventEmitter<number>();

  @Output() cancelRequest = new EventEmitter<void>();

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.matiere.Id) {
      this.matiereService.update(this.matiere);
    } else {
      this.matiereService.create(this.matiere);
    }
    this.cancel();
  }

  remove(): void {
    this.deleteRequest.emit(this.matiere.Id);
    this.cancel();
  }

  cancel(): void {
    this.cancelRequest.emit();
    this.matiere = null;
  }

}
