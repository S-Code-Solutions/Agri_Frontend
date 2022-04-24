import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  { path: 'authentication', loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)  },
  { path: 'homePage', loadChildren: () => import('./component/home-page/home-page.module').then(m => m.HomePageModule), data: { animation: 0 } },
  { path: 'aboutUs', loadChildren: () => import('./component/about-us/about-us.module').then(m => m.AboutUsModule), data: { animation: 1 }  },
  { path: 'fProblems', loadChildren: () => import('./component/f-problems/f-problems.module').then(m => m.FProblemsModule), data: { animation: 2 }  },
  { path: 'products', loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule), data: { animation: 3 }  },
  { path: 'experts', loadChildren: () => import('./component/experts/experts.module').then(m => m.ExpertsModule), data: { animation: 4 }  },
  { path: 'statics', loadChildren: () => import('./component/statics/statics.module').then(m => m.StaticsModule), data: { animation: 5 }  },
  { path: 'newsEvents', loadChildren: () => import('./component/news-events/news-events.module').then(m => m.NewsEventsModule), data: { animation: 6 }  },
  { path: 'chatUs', loadChildren: () => import('./component/chat-us/chat-us.module').then(m => m.ChatUsModule), data: { animation: 7 }  },
  { path: 'contactUs', loadChildren: () => import('./component/contact-us/contact-us.module').then(m => m.ContactUsModule), data: { animation: 8 }  },
  { path: 'userProfile', loadChildren: () => import('./component/user-profile/user-profile.module').then(m => m.UserProfileModule)},
  {path: '**', component: NotFoundComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
