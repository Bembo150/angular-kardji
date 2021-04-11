import { Component, OnInit } from '@angular/core';
import { Kard } from '../interface/kard';
import { KardsService } from '../services/kards.service';

@Component({
  selector: 'kard-component',
  templateUrl: './kard-component.component.html',
  styleUrls: ['./kard-component.component.css']
})
export class KardComponentComponent implements OnInit {

  constructor(private kardService: KardsService) { }
  kards : Kard[] = [];
  index : number = 0;
  ngOnInit() {

    this.kardService.getKards().subscribe(
      kards => this.kards = kards,
      error => console.log(error),
      () => console.log("Operacion completada con exito.")
    );
  }


}
