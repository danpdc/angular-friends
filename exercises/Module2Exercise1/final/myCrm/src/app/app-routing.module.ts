import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { AppComponent } from './app.component';

const app_routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule'},
  { path: '**', pathMatch: 'full', redirectTo: '/about' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

