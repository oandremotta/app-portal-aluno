import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventosService } from 'src/app/pages/eventos/eventos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-evento-detalhes',
  templateUrl: 'evento-detalhes.page.html',
  styleUrls: ['evento-detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class EventoDetalhesPage {
  eventos: any;
  pageSize = 10;
  page = 1;

  constructor(
    private eventosService: EventosService,
  ) { }

  ngOnInit() {
    console.log("Hi");
    this.getEventos();
  }

  getEventos() {
    this.eventosService.getEventos().subscribe(
      (res) => {
        this.eventos = res.data;
        console.log(this.eventos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get eventosPaginado() {
    if (!this.eventos) {
      return [];
    }
    return this.eventos.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
