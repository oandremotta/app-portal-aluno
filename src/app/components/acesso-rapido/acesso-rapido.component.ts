import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-acesso-rapido',
  templateUrl: 'acesso-rapido.component.html',
  styleUrls: ['acesso-rapido.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcessoRapidoComponent {
  @Input() title!: string;
  @Input() translucent?: boolean = false;

  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Atalhos',
      buttons: [
        {
          text: 'Boletim',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Comunicados',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Merenda',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Carteirinha',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
