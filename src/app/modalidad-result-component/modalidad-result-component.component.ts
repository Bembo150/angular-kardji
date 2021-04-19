import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Utiliza } from '../interface/utiliza';
import { UtilizaId } from '../interface/utiliza-id';
import { UtilizaService } from '../services/utiliza.service';

@Component({
  selector: 'modalidad-result-component',
  templateUrl: './modalidad-result-component.component.html',
  styleUrls: ['./modalidad-result-component.component.css'],
})
export class ModalidadResultComponentComponent implements OnInit {
  dateFormat = 'YYYY-MM-DDTHH:mm:ss';
  now = moment(new Date(), this.dateFormat);

  fallos !: string;

  constructor(
    private utilizaService: UtilizaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fallos = localStorage.getItem('fallos')!;
    this.now.toString();
  }

}
