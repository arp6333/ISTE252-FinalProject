import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'movies/:id', loadChildren: './tab1/tabOpen.module#TabOpenPageModule' }, // The route for displaying tabOpen details.
  { path: 'youtube/:id', loadChildren: './tab3/tab3.module#Tab3PageModule' } // The route for getting Youtube videos.
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
