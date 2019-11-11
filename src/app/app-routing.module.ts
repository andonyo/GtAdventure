import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'lugares', loadChildren: './lugares/lugares.module#LugaresPageModule' },
  { path: 'scaner', loadChildren: './scaner/scaner.module#ScanerPageModule' },
  { path: 'trofeos', loadChildren: './trofeos/trofeos.module#TrofeosPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'recorrido', loadChildren: './recorrido/recorrido.module#RecorridoPageModule' },
  { path: 'felicidades', loadChildren: './felicidades/felicidades.module#FelicidadesPageModule' },
  { path: 'lugar', loadChildren: './lugar/lugar.module#LugarPageModule' },
  { path: 'editar', loadChildren: './editar/editar.module#EditarPageModule' },
  { path: 'triste', loadChildren: './triste/triste.module#TristePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
