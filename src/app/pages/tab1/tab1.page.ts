import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HorarioDeAulasPage } from '../horario-de-aulas/horario-de-aulas.page';
import { AcessoRapidoComponent } from 'src/app/components/acesso-rapido/acesso-rapido.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HorarioDeAulasPage, HeaderComponent, AcessoRapidoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  currentSegment = 'inicio';

  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
  }
  constructor() { }
}
