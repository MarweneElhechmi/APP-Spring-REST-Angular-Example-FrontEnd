import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
    { path: 'posts', component: PostListComponent  },
    { path: 'notFound', component: NotfoundComponent  },
     // otherwise redirect to profile
    { path: '', redirectTo: '' ,pathMatch:'full'},
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
