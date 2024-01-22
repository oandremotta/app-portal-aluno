import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-horario-de-aulas',
  templateUrl: 'horario-de-aulas.page.html',
  styleUrls: ['horario-de-aulas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent]
})
export class HorarioDeAulasPage {
  @Input() showHeader?: boolean = true;
  constructor() { }
}
