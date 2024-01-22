import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'boletins',
        loadComponent: () =>
          import('../boletins/boletins.page').then((m) => m.BoletinsPage),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: 'meus-dados',
        loadComponent: () =>
          import('../meus-dados/meus-dados.page').then((m) => m.MeusDadosPage),
      },
      {
        path: 'eventos',
        loadComponent: () =>
          import('../eventos/eventos.page').then((m) => m.EventosPage),
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('../eventos/evento-detalhes/evento-detalhes.page').then((m) => m.EventoDetalhesPage),
          }
        ]
      },
      {
        path: 'frequencia',
        loadComponent: () =>
          import('../frequencia/frequencia.page').then((m) => m.FrequenciaPage),
      },
      {
        path: 'horario-de-aulas',
        loadComponent: () =>
          import('../horario-de-aulas/horario-de-aulas.page').then((m) => m.HorarioDeAulasPage),
      },
      {
        path: 'merenda',
        loadComponent: () =>
          import('../merenda/merenda.page').then((m) => m.MerendaPage),
      },
      {
        path: 'comunicados',
        loadComponent: () =>
          import('../comunicados/comunicados.page').then((m) => m.ComunicadosPage),
      },
      {
        path: 'carteirinha',
        loadComponent: () =>
          import('../carteirinha/carteirinha.page').then((m) => m.CarteirinhaPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
