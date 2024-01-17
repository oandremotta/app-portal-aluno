import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HorarioDeAulasPage } from '../horario-de-aulas/horario-de-aulas.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HorarioDeAulasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  currentSegment = 'inicio';

  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
  }
  constructor() { }
}
