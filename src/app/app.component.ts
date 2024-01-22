import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { register } from 'swiper/element/bundle';
import * as fromRoot from './app.reducer';
import { Observable } from 'rxjs';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.isLoading$.subscribe(isLoading => {
      console.log(isLoading);
    });
  }
}
