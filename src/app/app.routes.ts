import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./layouts/public/public.routes').then(m => m.routes)
  },
  { path: '**',
    loadComponent: () => import('./views/public/notfound/notfound.component').then( m => m.NotfoundComponent),
  }
];
