import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utiliza } from '../interface/utiliza';
import { UtilizaId } from '../interface/utiliza-id';
import { UtilizaService } from '../services/utiliza.service';

@Component({
  selector: 'modalidad-result-component',
  templateUrl: './modalidad-result-component.component.html',
  styleUrls: ['./modalidad-result-component.component.css']
})
export class ModalidadResultComponentComponent implements OnInit {

  utilizaId !: UtilizaId;
  utiliza !: Utiliza;

  constructor(private utilizaService : UtilizaService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.utilizaId = JSON.parse(localStorage.getItem('uId') || '{}');
    console.log("A VER QUE ESTAMOS GUARDANDO" + this.utilizaId)

    this.utilizaService.getUtilizaById(this.utilizaId).subscribe(
      (resp) => {this.utiliza = resp},
    )
  }

}
