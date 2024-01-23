import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HorarioDeAulasPage } from '../horario-de-aulas/horario-de-aulas.page';
import { AcessoRapidoComponent } from 'src/app/components/acesso-rapido/acesso-rapido.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import * as fromRoot from '../../app.reducer';
import { Store } from "@ngrx/store";
import { Observable, Subscription } from 'rxjs';
import { AlunoService } from 'src/app/shared/services/aluno.service';

@Component({
  selector: 'app-hom',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HorarioDeAulasPage, HeaderComponent, AcessoRapidoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  currentSegment = 'inicio';
  aluno$!: Observable<any>;
  aluno: any;
  private alunoSubscription!: Subscription;

  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
  }
  constructor(private alunoService: AlunoService) {
  }

  ngOnInit() {
    this.alunoService.getAluno().subscribe(
      aluno => {
        this.aluno = aluno;
      },
      error => {
        console.error('Erro ao obter dados do aluno:', error);
      }
    );
  }
}
