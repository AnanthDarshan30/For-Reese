import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main').then((m) => m.MainPageComponent),
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () =>
      import('./pages/intro/intro').then((m) => m.IntroPageComponent),
  },
];
