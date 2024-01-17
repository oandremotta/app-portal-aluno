import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../componentes/header/header.component';

@Component({
  selector: 'app-frequencia',
  templateUrl: 'frequencia.page.html',
  styleUrls: ['frequencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent]
})
export class FrequenciaPage {
  constructor() { }
}
