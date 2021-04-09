import { Component, OnInit } from '@angular/core';
import { Kard } from '../interface/kard';
import { KardsService } from '../services/kards.service';

@Component({
  selector: 'kard-component',
  templateUrl: './kard-component.component.html',
  styleUrls: ['./kard-component.component.css']
})
export class KardComponentComponent implements OnInit {

  cartas : Kard[] = [];

  constructor(private kardService: KardsService) { }

  ngOnInit(): void {

    this.kardService.getKards().subscribe(
      kards => this.cartas = kards,
      error => console.log(error),
      ()=> console.log("Petición Completada")
    )

  }

}
