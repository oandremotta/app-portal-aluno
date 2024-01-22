import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { register } from 'swiper/element/bundle';
import * as fromRoot from './app.reducer';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/autenticacao/auth.service';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  isLoading$?: Observable<boolean>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.initAuthListener();
  }
}
