import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'lugares',
        loadChildren: '../lugares/lugares.module#LugaresPageModule'
      },
      {
        path: 'scaner',
        loadChildren: '../scaner/scaner.module#ScanerPageModule'
      },
      {
        path: 'trofeos',
        loadChildren: '../trofeos/trofeos.module#TrofeosPageModule'
      },
      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      },
      {
        path: '',
        loadChildren: '../inicio/inicio.module#InicioPageModule'

      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
