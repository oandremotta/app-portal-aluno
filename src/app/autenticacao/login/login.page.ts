import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

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

  login() {
    // Lógica de autenticação (simulação básica)
    if (this.email === 'user@example.com' && this.password === 'password') {
      // Navegar para a página principal após o login bem-sucedido
      this.navCtrl.navigateForward('/home');
    } else {
      // Exibir mensagem de erro
      console.log('Credenciais inválidas. Tente novamente.');
    }
  }
}
