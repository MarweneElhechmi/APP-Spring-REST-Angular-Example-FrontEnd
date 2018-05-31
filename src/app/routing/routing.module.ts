import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostListComponent } from '../components/post-list/post-list.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';
import { PostDetailsGuard } from '../guards/post-details.guard';



const routes: Routes = [
  { path: 'posts', component: PostListComponent  },
  { path: 'details/:id', component: PostDetailsComponent,canActivate:[PostDetailsGuard]  },
  { path: 'notFound', component: NotfoundComponent  },
  { path: 'welcome', component: WelcomeComponent  },
  { path: '', redirectTo: 'welcome' ,pathMatch:'full'},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
