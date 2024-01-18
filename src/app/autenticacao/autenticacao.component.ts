import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-autenticacao',
    templateUrl: 'autenticacao.component.html',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AutenticacaoComponent {
    constructor() { }
}
