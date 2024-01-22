import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage {
  constructor(private navCtrl: NavController) { }

  email: string = "";
  password: string = "";
  environment = environment;
  tenant = environment.tenant;
  msgOrientacaoLogin = environment.mensagemOrientacaoLogin;
  login() {
    this.navCtrl.navigateForward('/tabs/tab1');
    // Lógica de autenticação (simulação básica)
    if (this.email === 'admin' && this.password === 'admin') {
      // Navegar para a página principal após o login bem-sucedido
      this.navCtrl.navigateForward('/home');
    } else {
      // Exibir mensagem de erro
      console.log('Credenciais inválidas. Tente novamente.');
    }
  }
}
