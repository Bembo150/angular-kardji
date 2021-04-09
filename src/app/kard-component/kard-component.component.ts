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
  cartas2 : Kard[] = [{id : 1, id_leccion : 1, as_component : "jajaj", key_word : "dos gatos", short_story : "el rocomoco",kanji_char : "roberto"},{id : 2, id_leccion : 1, as_component : "jajaj", key_word : "dos gatos", short_story : "el rocomoco",kanji_char : "roberto"},{id : 3, id_leccion : 1, as_component : "jajaj", key_word : "dos gatos", short_story : "el rocomoco",kanji_char : "roberto"},{id : 4, id_leccion : 1, as_component : "jajaj", key_word : "dos gatos", short_story : "el rocomoco",kanji_char : "roberto"}];

  constructor(private kardService: KardsService) { }

  ngOnInit() {

    this.kardService.getKards()
    .subscribe(
      kards => this.cartas = kards,
      error => console.log(error),
      () => console.log(this.cartas)
    );
  }

}
