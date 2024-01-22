import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/autenticacao/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import { UIService } from 'src/app/shared/store/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  isLoading$?: Observable<boolean>;

  environment = environment;
  tenant = environment.tenant;
  msgOrientacaoLogin = environment.mensagemOrientacaoLogin;

  constructor(private authService: AuthService,
    private uiService: UIService,
    private navCtrl: NavController,
    private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      senha: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      username: this.loginForm?.value.username,
      senha: this.loginForm?.value.senha
    })
  }
}
