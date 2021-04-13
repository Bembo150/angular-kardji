import { Component, OnInit } from '@angular/core';
import { Kard } from '../interface/kard';
import { KardsService } from '../services/kards.service';

@Component({
  selector: 'kard-component',
  templateUrl: './kard-component.component.html',
  styleUrls: ['./kard-component.component.css']
})
export class KardComponentComponent implements OnInit {

  constructor(private kardService: KardsService) {
  }

  kards : Kard[] = [];
  index : number = 0;

  ngOnInit() {

    this.kardService.getKardsByLesson(1).subscribe(
      kards => this.kards = kards,
      error => console.log(error),
      () => console.log("Operacion completada con exito.")
    );
  }

  nextKard() {
    if(this.index === this.kards.length){
      this.index = 0;
    }else{
      this.index++;
    }
  }

  previousKard() {
    if(this.index === 0){
      this.index = this.kards.length;
    }else{
      this.index--;
    }
  }

  kardIndexPag(kardIndex : number) {
    this.index = kardIndex;

  }
}
