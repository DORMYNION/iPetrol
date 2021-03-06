import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'station',
    children: [
      {
        path: '',
        loadChildren: './station/show/show.module#ShowPageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './station/edit/edit.module#EditPageModule'
      },
      {
        path: 'add',
        loadChildren: './station/add/add.module#AddPageModule'
      },
    ]
  },

  {
    path: 'tank',
    children: [
      {
        path: '',
        loadChildren: './tank/show/show.module#ShowPageModule'
      },
      {
        path: 'add',
        loadChildren: './tank/add/add.module#AddPageModule'
      },
      {
        path: 'edit/:id',

        loadChildren: './tank/edit/edit.module#EditPageModule'
      },

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
