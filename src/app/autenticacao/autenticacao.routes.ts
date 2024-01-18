import { Routes } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao.component';

export const routes: Routes = [
  {
    path: '',
    component: AutenticacaoComponent,
    children: [
      {
        path: 'entrar',
        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'ajuda',
        loadComponent: () =>
          import('./ajuda/ajuda.page').then((m) => m.AjudaPage),
      },
      {
        path: '',
        redirectTo: 'entrar', // Redireciona para a página de login quando a rota está vazia
        pathMatch: 'full',
      },
    ],
  },
];
