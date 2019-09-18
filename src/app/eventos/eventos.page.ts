import { Component, OnInit } from '@angular/core';

import { EventoService } from '../services/evento/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dados = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.eventos().subscribe((dados: any) => {
      console.log(dados);
      this.dados = dados;
    });
  }

}
