import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventosService } from 'src/services/eventos.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../componentes/header/header.component';

@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos.page.html',
  styleUrls: ['eventos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventosPage {
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
