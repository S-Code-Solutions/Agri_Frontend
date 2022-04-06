import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  { path: 'authentication', loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'homePage', loadChildren: () => import('./component/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'aboutUs', loadChildren: () => import('./component/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'products', loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule) },
  { path: 'statics', loadChildren: () => import('./component/statics/statics.module').then(m => m.StaticsModule) },
  { path: 'fProblems', loadChildren: () => import('./component/f-problems/f-problems.module').then(m => m.FProblemsModule) },
  { path: 'experts', loadChildren: () => import('./component/experts/experts.module').then(m => m.ExpertsModule) },
  { path: 'contactUs', loadChildren: () => import('./component/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
